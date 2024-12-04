export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { bookingId } = req.body;

  try {
    // Fetch booking details
    const { data: booking, error: fetchError } = await supabase
      .from("bookings")
      .select("*")
      .eq("id", bookingId)
      .single();

    if (fetchError || !booking) {
      return res.status(404).json({ error: "Booking not found." });
    }

    // Remove from Google Calendar
    const { data: tokens } = await supabase.from("google_tokens").select("token").single();
    oAuth2Client.setCredentials(tokens?.token);

    const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
    await calendar.events.delete({
      calendarId: "primary",
      eventId: booking.googleEventId,
    });

    // Remove from Supabase
    const { error: deleteError } = await supabase
      .from("bookings")
      .delete()
      .eq("id", bookingId);

    if (deleteError) throw deleteError;

    res.status(200).json({ message: "Booking cancelled successfully" });
  } catch (err) {
    logger.error("Cancellation failed", { err });
    res.status(500).json({ error: "Cancellation failed" });
  }
}