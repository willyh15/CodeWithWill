import type { NextApiRequest, NextApiResponse } from "next";

const API_URL = "https://api.pexels.com/v1/search";
const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query = "abstract" } = req.query;

  try {
    // Construct the Pexels API URL with query params
    const url = new URL(API_URL);
    url.searchParams.append("query", query as string);
    url.searchParams.append("per_page", "1");

    // Fetch data from Pexels API
    const response = await fetch(url.toString(), {
      headers: {
        Authorization: PEXELS_API_KEY as string,
      },
    });

    if (!response.ok) {
      throw new Error(`Pexels API Error: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data from Pexels API:", error.message);
    res.status(500).json({ error: error.message || "Failed to fetch data" });
  }
}
