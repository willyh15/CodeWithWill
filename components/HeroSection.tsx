import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchBackground } from "@/utils/fetchBackground";
import { FaArrowRight } from "react-icons/fa";

export function HeroSection() {
  const [background, setBackground] = useState<string | null>(null);

  useEffect(() => {
    async function loadBackground() {
      const image = await fetchBackground("technology"); // Use your desired category
      setBackground(image);
    }
    loadBackground();
  }, []);

  return (
    <section
      className="hero-section bg-gradient-to-br from-gray-800 to-gray-900 relative text-center py-40 px-6 overflow-hidden"
      style={{
        backgroundImage: background ? `url(${background})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-glow"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Logo */}
        <img
          src="/logo.png" // Path to your logo in the public directory
          alt="Logo"
          className="w-32 md:w-40 mx-auto mb-6"
        />

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Showcasing my skills and projects. Let&apos;s work together to create
          amazing digital experiences.
        </p>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(128, 90, 213, 0.8)", // Purple glow
          }}
          whileTap={{ scale: 0.95 }}
          className="cta-button bg-purple-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-md hover:bg-purple-400 transition duration-300 flex items-center justify-center space-x-2"
        >
          <span>Hire Me</span>
          <FaArrowRight />
        </motion.button>
      </motion.div>
    </section>
  );
}