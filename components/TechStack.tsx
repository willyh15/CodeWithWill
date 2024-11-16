import Image from "next/image";
import { motion } from "framer-motion";

export default function TechStack() {
  const techs = ["React", "Next.js", "Node.js", "TailwindCSS", "TypeScript"];

  return (
    <motion.section
      id="tech-stack"
      className="tech-stack-section py-16 bg-gray-900 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="tech-stack-glow"></div>
      </div>

      <h2 className="text-4xl font-extrabold text-center text-neon drop-shadow-md mb-12 relative z-10">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
        {techs.map((tech, idx) => (
          <motion.div
            key={idx}
            className="tech-card bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-lg p-6 shadow-lg flex flex-col items-center group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={`/icons/${tech.toLowerCase()}.png`}
              alt={`${tech} logo`}
              width={64}
              height={64}
              className="mb-4"
            />
            <p className="text-gray-300 font-semibold text-lg group-hover:text-neon transition">
              {tech}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
