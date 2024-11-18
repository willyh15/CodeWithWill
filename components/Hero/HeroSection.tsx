import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchBackground } from "@/utils/fetchBackground";

export const HeroSection = () => {
  const [background, setBackground] = useState<string | null>(null);

  useEffect(() => {
    const loadBackground = async () => {
      const image = await fetchBackground("technology");
      setBackground(image);
    };
    loadBackground();
  }, []);

  return (
    <section
      className="py-40 px-6 bg-gray-900 relative text-center overflow-hidden"
      style={{
        backgroundImage: background ? `url(${background})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="relative z-10">
        <h1 className="text-6xl font-extrabold text-white mb-6">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Showcasing my skills and projects. Let&apos;s build amazing things together!
        </p>
        <motion.button
          className="cta bg-gradient-to-r from-purple-500 to-pink-500 py-3 px-8 rounded-full text-white font-bold shadow-lg hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;