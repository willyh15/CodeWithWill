export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { date } = req.query;

  try {
    // Fetch existing bookings for the date
    const { data: bookings, error } = await supabase
      .from("bookings")
      .select("time")
      .eq("date", date);

    if (error) throw error;

    const allSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"];
    const bookedSlots = bookings.map((booking) => booking.time);

    const availableSlots = allSlots.filter((slot) => !bookedSlots.includes(slot));

    res.status(200).json({ availableSlots });
  } catch (err) {
    logger.error("Error fetching available slots", { err });
    res.status(500).json({ error: "Failed to fetch available slots" });
  }
}