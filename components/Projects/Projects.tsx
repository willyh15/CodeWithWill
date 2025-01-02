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
    <section className="relative text-center py-16 px-6">
      <h2 className="text-4xl font-extrabold text-neon mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold text-gray-300">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}