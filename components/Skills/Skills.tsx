import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import StarfieldCanvas from "@/components/Starfield/Starfield";

const skills = [
  { name: "JavaScript", value: 85 },
  { name: "React", value: 90 },
  { name: "Node.js", value: 75 },
  { name: "TypeScript", value: 80 },
  { name: "Django", value: 88 },
  { name: "C++", value: 70 },
  { name: "Go", value: 65 },
  { name: "SQL", value: 85 },
  { name: "Docker", value: 80 },
  { name: "Kubernetes", value: 75 },
  { name: "Cloud Computing", value: 90 },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills-section bg-gray-900 py-16 text-center relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <StarfieldCanvas color="#FFD700" particleCount={300} speed={0.0005} />
      <h2 className="text-4xl font-extrabold text-neon drop-shadow-md mb-12 relative z-10">
        My Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 relative z-10">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="skill-card relative group"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-28 h-28 mx-auto">
              <CircularProgressbar
                value={skill.value}
                text={`${skill.value}%`}
                styles={buildStyles({
                  textColor: "#FFD700",
                  pathColor: "#FFD700",
                  trailColor: "#222",
                })}
              />
            </div>
            <p className="text-gray-300 font-semibold mt-4 group-hover:text-neon transition">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
