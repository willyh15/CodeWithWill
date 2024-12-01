// pages/api/testSupabase.ts
import { supabase } from "@/lib/supabaseClient";

export default async function handler(req, res) {
  const { data, error } = await supabase.from("bookings").select("*");
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.status(200).json({ bookings: data });
  }
}
