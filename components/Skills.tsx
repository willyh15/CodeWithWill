import CircularProgressbar from 'react-circular-progressbar';
import { buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'JavaScript', value: 85 },
  { name: 'React', value: 90 },
  { name: 'Node.js', value: 75 },
  { name: 'TypeScript', value: 80 },
];

export default function Skills() {
  return (
    <div className="skills-section py-16 bg-gray-900">
      <h2 className="text-3xl font-bold text-neon text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <div key={idx} className="text-center">
            <CircularProgressbar
              value={skill.value}
              text={`${skill.value}%`}
              styles={buildStyles({
                textColor: '#FFD700',
                pathColor: '#FFD700',
                trailColor: '#333',
              })}
            />
            <p className="text-gray-200 font-semibold mt-4">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}