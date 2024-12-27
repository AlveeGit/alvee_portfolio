import React from "react";
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "XYZ University",
    year: "2020",
    icon: FaUniversity,
  },
  {
    degree: "High School Diploma",
    institution: "ABC High School",
    year: "2016",
    icon: FaUniversity,
  },
];

const EducationBackground = () => {
  return (
    <section className="py-10 px-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md z-50">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Education Background
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {education.map((degree, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-6 rounded-lg shadow-lg max-w-sm w-full transform transition-transform duration-300 hover:shadow-2xl hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center mb-4">
              <degree.icon className="text-purple-600 text-4xl mr-4" />
              <div>
                <h3 className="text-2xl font-semibold">{degree.degree}</h3>
                <p className="text-lg">{degree.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {degree.year}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationBackground;
