import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="hero-section bg-gradient-to-br from-gray-800 to-gray-900 relative text-center py-40 px-6 overflow-hidden">
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
        <h1 className="text-6xl md:text-7xl font-extrabold text-neon drop-shadow-lg mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Showcasing my skills and projects. Let&apos;s work together to create
          amazing digital experiences.
        </p>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          className="cta-button bg-neon text-gray-900 font-bold py-3 px-8 rounded-full shadow-md hover:bg-neon-light transition duration-300"
        >
          Hire Me
        </motion.button>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-16 left-10 w-64 h-64 bg-neon rounded-full blur-xl opacity-10"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-16 right-16 w-72 h-72 bg-neon-light rounded-full blur-xl opacity-10"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
