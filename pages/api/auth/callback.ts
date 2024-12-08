import { google } from "googleapis";
import { supabase } from "@/lib/supabaseClient";
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
  const { code } = req.query;

  if (!code) {
    logger.error("Authorization code missing");
    return res.status(400).json({ error: "Authorization code is required" });
  }

  try {
    // Exchange code for tokens
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    if (!tokens || !tokens.access_token) {
      logger.error("Invalid tokens received");
      return res.status(400).json({ error: "Invalid tokens received from Google" });
    }

    // Store the token in Supabase
    const { error } = await supabase.from("google_tokens").upsert(
      { id: 1, token: tokens }, // Use a constant ID for single-user systems
      { onConflict: "id" } // Prevent duplicates
    );

    if (error) {
      logger.error("Error storing token in Supabase", { error });
      throw error;
    }

    logger.info("Token successfully stored in Supabase");
    res.status(200).json({ message: "Google OAuth successful", tokens });
  } catch (err) {
    logger.error("Error during Google OAuth callback", { err });
    res.status(500).json({ error: "OAuth callback failed" });
  }
}
