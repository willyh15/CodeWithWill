import { google } from "googleapis";

const credentials = {
  client_id: process.env.GOOGLE_CLIENT_ID || "",
  client_secret: process.env.GOOGLE_CLIENT_SECRET || "",
  redirect_uris: [process.env.GOOGLE_REDIRECT_URI || ""],
};

if (!credentials.client_id || !credentials.client_secret || !credentials.redirect_uris[0]) {
  throw new Error("Missing Google API credentials in environment variables.");
}

const oAuth2Client = new google.auth.OAuth2(
  credentials.client_id,
  credentials.client_secret,
  credentials.redirect_uris[0]
);

// Get Access Token
export const setCredentials = (token: string) => {
  oAuth2Client.setCredentials({ access_token: token });
};

// Insert Event into Google Calendar
export const insertEvent = async (event: any) => {
  const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

  try {
    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });
    return response.data;
  } catch (error) {
    console.error("Error inserting event:", error);
    throw new Error("Unable to add event to Google Calendar.");
  }
};