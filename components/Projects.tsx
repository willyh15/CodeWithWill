import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "Project A",
      category: "Web",
      description: "A responsive web development project showcasing modern UI/UX.",
    },
    {
      title: "Project B",
      category: "Mobile",
      description: "A sleek mobile app with intuitive design and smooth performance.",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="projects-section py-16 px-6 relative text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="projects-glow"></div>
      </div>

      <motion.h2
        className="text-4xl font-extrabold text-neon drop-shadow-md mb-12 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="project-card relative bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-70 backdrop-blur-lg rounded-lg p-8 shadow-lg overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-neon opacity-0 group-hover:opacity-10 transition duration-300"></div>
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
