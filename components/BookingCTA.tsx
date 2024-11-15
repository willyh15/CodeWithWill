export default function BookingCTA() {
  return (
    <div className="py-16 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-neon mb-4">Let&apos;s Work Together</h2>
      <p className="text-gray-400 mb-6">Book a meeting or reach out directly to discuss your project.</p>
      <a
        href="https://calendly.com/your-link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 bg-neon text-gray-900 font-bold rounded-full hover:bg-neon-light"
      >
        Book a Consultation
      </a>
    </div>
  );
}