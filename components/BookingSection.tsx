export function BookingSection() {
  return (
    <div id="booking" className="booking-section py-16 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-neon mb-8">Book a Session</h2>
      <iframe
        src="https://calendly.com/yourusername/30min"
        width="100%"
        height="630"
        frameBorder="0"
        scrolling="no"
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
}