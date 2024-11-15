import { useEffect, useState } from 'react';

export function Skills() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 75 },
    { name: 'TypeScript', level: 70 },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div id="skills" className="skills-section py-16 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-neon mb-8">My Skills</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-item text-left">
            <p className="text-lg text-gray-300 mb-2">{skill.name}</p>
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-neon h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: loaded ? `${skill.level}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
