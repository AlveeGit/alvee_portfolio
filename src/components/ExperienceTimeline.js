import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experience = [
  {
    title: "Frontend Developer",
    description: "Worked on developing modern UIs and enhancing UX.",
    icon: FaBriefcase,
  },
  {
    title: "Software Engineer Intern",
    description:
      "Collaborated on a range of projects to improve web performance.",
    icon: FaBriefcase,
  },
  {
    title: "Bachelor's in Computer Science",
    description: "Graduated with honors in CS.",
    icon: FaGraduationCap,
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="relative">
      {experience.map((item, index) => (
        <motion.div
          key={index}
          className="relative mb-8 flex items-center w-full"
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${
              index % 2 === 0
                ? "from-green-500 to-blue-500"
                : "from-purple-500 to-pink-500"
            }`}
          >
            <item.icon className="text-white text-lg" />
          </div>
          <div className="ml-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg w-full">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
