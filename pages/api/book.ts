import { supabase } from "@/lib/supabaseClient";
import { google } from "googleapis";
import { logger } from "@/utils/logger";

const credentials = {
  client_id: process.env.GOOGLE_CLIENT_ID,
  client_secret: process.env.GOOGLE_CLIENT_SECRET,
  redirect_uris: [process.env.GOOGLE_REDIRECT_URI],
};

const oAuth2Client = new google.auth.OAuth2(
  credentials.client_id,
  credentials.client_secret,
  credentials.redirect_uris[0]
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, email, date, time } = req.body;

  try {
    // Insert booking into Supabase
    const { data, error } = await supabase.from("bookings").insert([
      { name, email, date, time },
    ]);

    if (error) throw error;

    // Add booking to Google Calendar
    const { data: tokens } = await supabase.from("google_tokens").select("token").single();
    oAuth2Client.setCredentials(tokens?.token);

    const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
    const event = {
      summary: `Booking with ${name}`,
      start: { dateTime: `${date}T${time}:00`, timeZone: "UTC" },
      end: { dateTime: `${date}T${time}:30`, timeZone: "UTC" },
      attendees: [{ email }],
    };

    await calendar.events.insert({
      calendarId: "primary",
      requestBody: event,
    });

    res.status(200).json({ message: "Booking successful" });
  } catch (err) {
    logger.error("Booking failed", { err });
    res.status(500).json({ error: "Booking failed" });
  }
}
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: email,
  from: "your-email@example.com",
  subject: "Booking Confirmation",
  text: `Hello ${name}, your booking on ${date} at ${time} has been confirmed.`,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, email, date, time } = req.body;

  try {
    // Check for duplicate bookings
    const { data: existingBookings, error: fetchError } = await supabase
      .from("bookings")
      .select("*")
      .eq("date", date)
      .eq("time", time);

    if (fetchError) throw fetchError;

    if (existingBookings.length > 0) {
      return res
        .status(409)
        .json({ error: "The selected time slot is already booked." });
    }

    // Insert booking into Supabase
    const { data, error } = await supabase.from("bookings").insert([
      { name, email, date, time },
    ]);

    if (error) throw error;

    // Add to Google Calendar
    // (Code remains the same as in the previous step)

    res.status(200).json({ message: "Booking successful" });
  } catch (err) {
    logger.error("Booking failed", { err });
    res.status(500).json({ error: "Booking failed" });
  }
}