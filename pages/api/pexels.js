import type { NextApiRequest, NextApiResponse } from "next";
import { fetchBackground } from "@/utils/fetchBackground";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query = "abstract" } = req.query;

  try {
    const data = await fetchBackground(query as string);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data from Pexels API:", error.message);
    res.status(500).json({ error: error.message || "Failed to fetch data" });
  }
}
