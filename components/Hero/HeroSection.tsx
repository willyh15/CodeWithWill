import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchBackground } from "@/utils/fetchBackground";
import { FaArrowRight } from "react-icons/fa";
import dynamic from "next/dynamic";

const HeroSection = () => {
  const [background, setBackground] = useState<string | null>(null);
  const [keywords] = useState([
    "Web Development",
    "Mobile Apps",
    "Backend Systems",
    "Full-Stack Projects",
  ]);
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

  useEffect(() => {
    async function loadBackground() {
      const image = await fetchBackground("technology");
      setBackground(image);
    }
    loadBackground();

    const keywordInterval = setInterval(() => {
      setCurrentKeywordIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 3000);

    return () => clearInterval(keywordInterval);
  }, [keywords]);

  return (
    <section
      className="hero-section bg-gradient-to-br from-gray-800 to-gray-900 relative text-center py-40 px-6 overflow-hidden"
      style={{
        backgroundImage: background ? `url(${background})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto text-white"
      >
        {/* Dynamic Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Let&apos;s Build Amazing{" "}
          <span className="text-purple-400">
            {keywords[currentKeywordIndex]}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          I specialize in delivering high-quality digital solutions. Explore my
          portfolio and see what we can create together.
        </p>

        {/* Call to Action */}
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
};

export default HeroSection;