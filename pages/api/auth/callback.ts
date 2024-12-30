import { google } from "googleapis";
import { supabase } from "@/lib/supabaseClient";
import { logger } from "@/utils/logger";
import { NextApiRequest, NextApiResponse } from "next";

const credentials = {
  client_id: process.env.GOOGLE_CLIENT_ID || "",
  client_secret: process.env.GOOGLE_CLIENT_SECRET || "",
  redirect_uris: [process.env.GOOGLE_REDIRECT_URI || ""],
};

if (!credentials.client_id || !credentials.client_secret || !credentials.redirect_uris[0]) {
  throw new Error("Missing Google API credentials. Please check your environment variables.");
}

const oAuth2Client = new google.auth.OAuth2(
  credentials.client_id,
  credentials.client_secret,
  credentials.redirect_uris[0]
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { code } = req.query;

  if (!code || typeof code !== "string") {
    logger.error("Authorization code missing or invalid");
    return res.status(400).json({ error: "Authorization code is required and must be a string" });
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
      { onConflict: ["id"] } // Prevent duplicates
    );

    if (error) {
      logger.error("Error storing token in Supabase", { error });
      return res.status(500).json({ error: "Failed to store token in database" });
    }

    logger.info("Token successfully stored in Supabase");
    res.status(200).json({ message: "Google OAuth successful", tokens });
  } catch (err) {
    logger.error("Error during Google OAuth callback", { err });
    res.status(500).json({ error: "OAuth callback failed" });
  }
}