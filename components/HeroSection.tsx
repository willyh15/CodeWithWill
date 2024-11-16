import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="hero-section bg-gray-900 text-center py-32">
      <h1 className="text-5xl font-bold text-neon mb-6">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-gray-400 mb-8">
        Showcasing my skills and projects. Let&apos;s work together!
      </p>
      <button className="cta-button bg-neon text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-neon-light transition duration-300">
        Hire Me
      </button>
    </section>
  );
}
