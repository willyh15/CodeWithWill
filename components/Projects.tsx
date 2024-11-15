import { motion } from 'framer-motion';

export function Projects() {
  const projects = [
    { title: 'Project A', category: 'Web', description: 'Web Development Project' },
    { title: 'Project B', category: 'Mobile', description: 'Mobile App Project' },
  ];

  return (
    <motion.div
      id="projects"
      className="projects-section py-16 bg-gray-900 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-neon mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="project-card bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-gray-300">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
