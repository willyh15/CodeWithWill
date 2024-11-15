export default function TechStack() {
    const techs = ['React', 'Next.js', 'Node.js', 'TailwindCSS', 'TypeScript'];
    return (
      <div className="py-16 bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-neon mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techs.map((tech, idx) => (
            <div key={idx} className="bg-gray-800 bg-opacity-60 rounded-lg p-4 shadow-lg text-center">
              <img src={`/icons/${tech.toLowerCase()}.png`} alt={`${tech} logo`} className="w-12 h-12 mx-auto mb-2" />
              <p className="text-gray-200 font-semibold">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  