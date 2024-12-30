import { NextApiRequest, NextApiResponse } from "next";
import { setCredentials, insertEvent } from "@/lib/googleCalendar";
import { logger } from "@/utils/logger";
import { supabase } from "@/lib/supabaseClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const event = req.body;

  // Validate the event object
  if (!event || !event.start || !event.end || !event.summary) {
    return res.status(400).json({ error: "Invalid event object. Missing required fields." });
  }

  try {
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

    // Insert the event into Google Calendar
    const response = await insertEvent(event);

    logger.info("Event created successfully", { eventId: response.id });

    res.status(200).json(response);
  } catch (error) {
    logger.error("Failed to create Google Calendar event", { error });
    res.status(500).json({ error: "Failed to create event" });
  }
}