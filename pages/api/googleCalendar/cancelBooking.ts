import { supabase } from "@/lib/supabaseClient";
import { setCredentials, insertEvent } from "@/lib/googleCalendar";
import { logger } from "@/utils/logger";
import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { bookingId } = req.body;

  if (!bookingId) {
    return res.status(400).json({ error: "Missing booking ID." });
  }

  try {
    // Fetch the booking
    const { data: booking, error: fetchError } = await supabase
      .from("bookings")
      .select("*")
      .eq("id", bookingId)
      .single();

    if (fetchError || !booking) {
      return res.status(404).json({ error: "Booking not found." });
    }

    // Fetch Google OAuth tokens from Supabase
    const { data: tokens, error: tokenError } = await supabase
      .from("google_tokens")
      .select("token")
      .single();

    if (tokenError || !tokens?.token) {
      throw new Error("Google tokens are missing or invalid.");
    }

    // Set Google OAuth credentials
    setCredentials(tokens.token);

    // Initialize Google Calendar API client
    const calendar = google.calendar({ version: "v3", auth: tokens.token });

    // Delete the Google Calendar event if it exists
    if (booking.googleEventId) {
      try {
        await calendar.events.delete({
          calendarId: "primary",
          eventId: booking.googleEventId,
        });
        logger.info("Google Calendar event deleted successfully");
      } catch (err) {
        logger.error("Failed to delete Google Calendar event", { err });
        // Allow cancellation to proceed even if Google Calendar deletion fails
      }
    }

    // Delete the booking from Supabase
    const { error: deleteError } = await supabase
      .from("bookings")
      .delete()
      .eq("id", bookingId);

    if (deleteError) throw deleteError;

    res.status(200).json({ message: "Booking cancelled successfully" });
  } catch (err) {
    logger.error("Cancellation failed", { err });
    res.status(500).json({ error: "Cancellation failed" });
  }
}