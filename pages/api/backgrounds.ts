import type { NextApiRequest, NextApiResponse } from "next";
import { fetchBackground } from "@/utils/fetchBackground";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;

  try {
    const background = await fetchBackground(query as string || "abstract");
    res.status(200).json({ background });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch background image" });
  }
}