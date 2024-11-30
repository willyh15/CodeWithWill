import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = (req.query.query as string) || "abstract"; // Default to "abstract" if no query is provided
  const API_URL = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;
  const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

  try {
    if (!PEXELS_API_KEY) {
      console.error("PEXELS_API_KEY is missing");
      res.status(500).json({ error: "PEXELS_API_KEY is not set" });
      return;
    }

    console.log(`Fetching from Pexels API: ${API_URL}`);
    const response = await fetch(API_URL, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Pexels API Error: ${response.status} - ${errorText}`);
      res
        .status(response.status)
        .json({ error: `Pexels API Error: ${response.statusText}` });
      return;
    }

    const data = await response.json();
    console.log("Pexels API Response:", data);
    res.status(200).json({ background: data.photos[0]?.src?.original || "" });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: (error as Error).message });
  }
}
