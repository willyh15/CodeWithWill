import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'JavaScript', value: 85 },
  { name: 'React', value: 90 },
  { name: 'Node.js', value: 75 },
  { name: 'TypeScript', value: 80 },
];

export default function Skills() {
  const skills = [
    { name: "JavaScript", value: 85 },
    { name: "React", value: 90 },
    { name: "Node.js", value: 75 },
    { name: "TypeScript", value: 80 },
  ];

  return (
    <section className="skills-section bg-gray-900 py-16">
      <h2 className="text-3xl font-bold text-neon text-center mb-12">
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, idx) => (
          <div key={idx} className="text-center">
            <div className="w-24 h-24 mx-auto">
              <CircularProgressbar
                value={skill.value}
                text={`${skill.value}%`}
                styles={buildStyles({
                  textColor: "#FFD700",
                  pathColor: "#FFD700",
                  trailColor: "#333",
                })}
              />
            </div>
            <p className="text-gray-300 font-semibold mt-4">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
