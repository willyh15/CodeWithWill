import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 80 },
];

export function Skills() {
  return (
    <div id="skills" className="skills-section py-16 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-neon mb-8">My Skills</h2>
      <div className="flex justify-center space-x-6">
        {skills.map((skill, idx) => (
          <div key={idx} className="w-24 h-24">
            <CircularProgressbar
              value={skill.level}
              text={`${skill.level}%`}
              styles={buildStyles({
                textColor: '#FFD700',
                pathColor: '#FFD700',
                trailColor: '#333333',
              })}
            />
            <p className="text-gray-300 mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
