import { FaCalendarAlt } from "react-icons/fa";

export default function BookingCTA() {
  return (
    <section className="relative py-16 px-6 sm:py-20 sm:px-10 lg:px-16 bg-gradient-to-r from-pink-500/30 to-purple-500/30 backdrop-blur-lg glass rounded-xl mx-auto max-w-5xl text-center shadow-lg">
      <div className="flex justify-center mb-6">
        <FaCalendarAlt className="text-white text-6xl bg-orange-600/20 rounded-full p-4 shadow-md" />
      </div>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-md mb-6">
        Let&apos;s Work Together
      </h2>
      <p className="text-gray-200 text-lg leading-relaxed sm:text-xl sm:leading-loose mb-8">
        Book a meeting or reach out directly to discuss your project and start building something great together.
      </p>
      <a
        href="https://calendly.com/your-link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-full shadow-md transform transition-transform hover:scale-105 hover:shadow-lg"
      >
        Book a Consultation
      </a>
    </section>
  );
}