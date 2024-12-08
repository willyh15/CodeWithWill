import { google } from "googleapis";
import { logger } from "@/utils/logger";

const credentials = {
  client_id: process.env.GOOGLE_CLIENT_ID,
  client_secret: process.env.GOOGLE_CLIENT_SECRET,
  redirect_uris: [process.env.GOOGLE_REDIRECT_URI],
};

if (!credentials.client_id || !credentials.client_secret || !credentials.redirect_uris[0]) {
  throw new Error("Missing Google OAuth credentials. Please check your environment variables.");
}

const oAuth2Client = new google.auth.OAuth2(
  credentials.client_id,
  credentials.client_secret,
  credentials.redirect_uris[0]
);

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/calendar.events"],
      prompt: "consent", // Ensure refresh tokens are issued
    });

    logger.info("Generated Google OAuth URL", { authUrl });
    res.redirect(authUrl);
  } catch (err) {
    logger.error("Error generating Google OAuth URL", { err });
    res.status(500).json({ error: "Failed to generate Google OAuth URL" });
  }
}
