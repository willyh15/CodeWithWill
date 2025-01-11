import { motion } from "framer-motion";
import StarfieldCanvas from "@/components/Starfield/Starfield";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Django & React",
      description:
        "A robust e-commerce platform with real-time inventory tracking and secure payment integration.",
    },
    {
      title: "Portfolio Website",
      category: "Next.js & Tailwind",
      description:
        "A modern portfolio website with glassmorphism design, responsive layout, and advanced animations.",
    },
    {
      title: "Desktop Path Manager",
      category: "C++/Qt",
      description:
        "A desktop application to manage system environment variables and aliases effortlessly.",
    },
    {
      title: "Backend API Service",
      category: "Go",
      description:
        "A high-performance backend API service for processing large-scale data with low latency.",
    },
    {
      title: "Inventory Management System",
      category: "C#",
      description:
        "A full-featured inventory management system with analytics and reporting tools for enterprises.",
    },
  ];

  return (
    <section className="relative py-16 px-6 text-center">
      {/* Starfield Background */}
      <div className="absolute inset-0 -z-10">
        <StarfieldCanvas />
      </div>

      {/* Title */}
      <h2 className="text-5xl font-extrabold text-neon mb-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.div>
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.2,
              ease: "easeOut",
            }}
            className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-neon transition-transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <span className="block text-sm text-blue-400 mt-2 italic">
              {project.category}
            </span>
            <p className="text-gray-400 mt-4">{project.description}</p>
            {/* Add glowing border animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 hover:opacity-100 rounded-lg blur-md"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}