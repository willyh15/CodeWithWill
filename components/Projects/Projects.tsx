
import { motion } from "framer-motion";
import StarfieldCanvas from "@/components/Starfield/Starfield";

export function Projects() {
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
    <motion.section
      id="projects"
      className="projects-section py-16 px-6 relative text-center overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <StarfieldCanvas color="#FF83FF" particleCount={500} speed={0.001} />
      <motion.h2
        className="text-4xl font-extrabold text-neon drop-shadow-md mb-12 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="project-card relative bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-70 backdrop-blur-lg rounded-lg p-8 shadow-lg overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-300 mb-4 group-hover:text-neon transition">
              {project.title}
            </h3>
            <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
              {project.category}
            </p>
            <p className="text-gray-400">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}