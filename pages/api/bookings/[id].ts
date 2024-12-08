import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabaseClient";
import { logger } from "@/utils/logger";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Booking ID is required." });
  }

  if (req.method === "DELETE") {
    try {
      const { error } = await supabase.from("bookings").delete().eq("id", id);

      if (error) throw error;

      logger.info(`Booking with ID ${id} deleted successfully.`);
      res.status(200).json({ message: "Booking deleted successfully." });
    } catch (err) {
      logger.error("Error deleting booking", { err });
      res.status(500).json({ error: "Failed to delete booking." });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed.`);
  }
}
