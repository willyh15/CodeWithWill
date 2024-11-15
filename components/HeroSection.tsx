import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="hero-section bg-gray-900 text-center py-16">
      <h1 className="text-5xl font-bold text-neon mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl text-gray-400 mb-8">Showcasing my skills and projects. Let's work together!</p>
      
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px #FFD700" }}
        whileTap={{ scale: 0.95 }}
        className="cta-button bg-neon text-gray-900 font-bold py-2 px-6 rounded-full"
      >
        Hire Me
      </motion.button>
    </section>
  );
}
