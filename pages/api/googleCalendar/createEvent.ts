import { NextApiRequest, NextApiResponse } from "next";
import { calendar } from "@/lib/googleCalendarClient";
import { logger } from "@/utils/logger";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const event = req.body;

  if (!event || !event.start || !event.end || !event.summary) {
    return res.status(400).json({ error: "Invalid event object. Missing required fields." });
  }

  try {
    const response = await calendar.events.insert({
      calendarId: "primary",
      requestBody: event,
    });
    logger.info("Event created successfully", { eventId: response.data.id });
    res.status(200).json(response.data);
  } catch (error) {
    logger.error("Failed to create Google Calendar event", { error });
    res.status(500).json({ error: "Failed to create event" });
  }
}
