export function BookingSection() {
  return (
    <section
      id="booking"
      className="relative py-20 px-8 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl mx-auto max-w-6xl text-center shadow-2xl overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow bg-[radial-gradient(circle,rgba(75,0,130,0.2),transparent)]"></div>
      </div>

      <h2 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
        Book a Session
      </h2>
      <p className="text-gray-200 text-lg leading-relaxed mb-8">
        Schedule a session to discuss your project or consultation. Let’s make
        it happen!
      </p>
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <iframe
          src="https://calendly.com/yourusername/30min"
          width="100%"
          height="630"
          frameBorder="0"
          scrolling="no"
          className="rounded-lg border-none"
        ></iframe>
      </div>
    </section>
  );
}