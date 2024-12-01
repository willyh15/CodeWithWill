import { motion } from "framer-motion";

export default function TechStack() {
  const techs = [
    { name: "React", icon: "react.svg" },
    { name: "Next.js", icon: "nextjs.svg" },
    { name: "Node.js", icon: "nodejs.svg" },
    { name: "TailwindCSS", icon: "tailwindcss.svg" },
    { name: "TypeScript", icon: "typescript.svg" },
    { name: "Django", icon: "django-original.svg" },
    { name: "C++", icon: "c.svg" },
    { name: "Go", icon: "go.svg" },
    { name: "Docker", icon: "docker-original-wordmark.svg" },
    { name: "Kubernetes", icon: "kubernetes.svg" },
    { name: "AWS", icon: "aws.svg" },
    { name: "Swift", icon: "swift-original-wordmark.svg" },
  ];

  return (
    <motion.section
      id="tech-stack"
      className="tech-stack-section py-16 bg-gray-900 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <StarfieldCanvas color="#6E44FF" particleCount={400} speed={0.0007} />
      <h2 className="text-4xl font-extrabold text-center text-neon drop-shadow-md mb-12 relative z-10">
        Tech Stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 relative z-10">
        {techs.map((tech, idx) => (
          <motion.div
            key={idx}
            className="tech-card bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-lg p-6 shadow-lg flex flex-col items-center group"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={`/icons/${tech.icon}`}
              alt={`${tech.name} logo`}
              width={64}
              height={64}
              className="mb-4 group-hover:scale-110 transition-transform"
            />
            <p className="text-gray-300 font-semibold text-lg group-hover:text-neon transition">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}