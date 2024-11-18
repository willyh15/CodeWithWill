import { FaCalendarAlt } from "react-icons/fa";

const BookingCTA = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-pink-500/30 to-purple-500/30 backdrop-blur-lg rounded-xl text-center shadow-lg max-w-5xl mx-auto">
      <div className="flex justify-center mb-6">
        <FaCalendarAlt className="text-white text-6xl bg-pink-600/20 p-4 rounded-full shadow-md" />
      </div>
      <h2 className="text-4xl font-extrabold text-white mb-6">
        Let&apos;s Work Together
      </h2>
      <p className="text-gray-200 text-lg mb-8">
        Book a meeting or reach out directly to discuss your project and start building something great together.
      </p>
      <a
        href="https://calendly.com/your-link"
        target="_blank"
        rel="noopener noreferrer"
        className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-full shadow-md transform hover:scale-105 transition"
      >
        Book a Consultation
      </a>
    </section>
  );
};

export default BookingCTA;