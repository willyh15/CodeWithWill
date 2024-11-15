import { useState } from 'react';

const projects = [
  { title: 'Project A', category: 'Web', description: 'Web Development Project' },
  { title: 'Project B', category: 'Mobile', description: 'Mobile App Project' },
  { title: 'Project C', category: 'Desktop', description: 'Desktop App Project' },
  { title: 'Project D', category: 'Web', description: 'Another Web Project' },
];

const categories = ['All', 'Web', 'Mobile', 'Desktop'];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div id="projects" className="projects-section py-16 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-neon mb-8">Projects</h2>
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full ${activeCategory === category ? 'bg-neon text-gray-900' : 'bg-gray-700 text-gray-300'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="project-card bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-300">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
