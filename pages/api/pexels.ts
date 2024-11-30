import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = (req.query.query as string) || "abstract"; // Default to "abstract" if no query is provided
  const API_URL = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;
  const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: PEXELS_API_KEY || "", // Ensure the API key is provided
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json({ background: data.photos[0]?.src?.original || "" });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: (error as Error).message });
  }
}
