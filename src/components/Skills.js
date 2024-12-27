// Skills.js
import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 80 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 70 },
  { name: "Redux", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Bootstrap", level: 90 },
  { name: "Git", level: 80 },
  { name: "CSS", level: 90 },
  { name: "HTML", level: 90 },
];

const Skills = () => {
  return (
    <section className="py-10 px-6 bg-white dark:bg-gray-800 rounded-lg shadow-md z-50">
      {/* <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Skills
      </h2> */}
      <div className="grid grid-cols-2 gap-6">
        {skillsData.map((skill) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state
            transition={{ duration: 0.5 }} // Duration of animation
          >
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {skill.level}%
              </span>
            </div>
            <div className="bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-sky-500 h-2 rounded-full"
                initial={{ width: 0 }} // Initial width of the progress bar
                animate={{ width: `${skill.level}%` }} // Animate to final width
                transition={{ duration: 0.5 }} // Duration of animation
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
