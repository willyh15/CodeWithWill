import { FaCalendarAlt } from "react-icons/fa";
import StarfieldCanvas from "@/components/Starfield/Starfield";

const BookingCTA = () => {
  return (
    <section className="relative py-16 px-8 bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-md rounded-3xl text-center shadow-xl max-w-5xl mx-auto overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0 -z-10">
        <StarfieldCanvas color="#FF69B4" particleCount={250} speed={0.0006} />
      </div>

      <div className="flex justify-center mb-8">
        <FaCalendarAlt className="text-white text-7xl bg-pink-600/30 p-5 rounded-full shadow-lg" />
      </div>
      <h2 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
        Let&apos;s Work Together
      </h2>
      <p className="text-gray-200 text-lg leading-relaxed mb-8">
        Book a meeting or reach out directly to discuss your project and start
        building something great together.
      </p>
      <a
        href="https://calendly.com/your-link"
        target="_blank"
        rel="noopener noreferrer"
        className="px-12 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-neon transition-transform"
      >
        Book a Consultation
      </a>
    </section>
  );
};

export default BookingCTA;
