import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaBrain,
  FaLaptopCode,
  FaCoffee,
  FaGraduationCap,
  FaBriefcase,
  FaDownload,
} from "react-icons/fa";

const Bio = () => {
  const bioData = {
    name: "Alvee Kabir",
    title: "Full Stack Developer",
    summary:
      "Passionate developer with expertise in modern web technologies and a drive for creating exceptional user experiences.",
    expertise: [
      {
        icon: FaCode,
        title: "Technical Skills",
        description:
          "Proficient in React, Next.js, JavaScript, TypeScript, and modern web development practices.",
      },
      {
        icon: FaBrain,
        title: "Problem Solving",
        description:
          "Strong analytical mindset with a track record of delivering efficient solutions to complex challenges.",
      },
      {
        icon: FaLaptopCode,
        title: "Development Approach",
        description:
          "Advocate for clean code, best practices, and staying current with industry trends.",
      },
      {
        icon: FaCoffee,
        title: "Work Style",
        description:
          "Self-motivated team player with excellent communication skills and attention to detail.",
      },
    ],
    experience: "5+ years of professional experience in web development",
    interests: ["Open Source", "AI/ML", "UI/UX Design", "Tech Innovation"],
    education: [
      {
        degree: "Bachelor of Science in Computer Science and Engineering",
        institution: "Eastern University",
        year: "2017 - 2020",
        description: "Focus on Software Engineering and Web Technologies",
        achievements: [
          "CGPA: 3.68",
          "Champion of Intra University Programming Contest 2019",
          "Executive Member of Computing Club",
          "Participated in Dhaka Expo 2019",
        ],
      },
      {
        degree: "Higher Secondary School Certificate",
        institution: "Govt. Science College",
        year: "2013 - 2015",
        achievements: ["GPA: 4.75"],
      },
      {
        degree: "Secondary School Certificate",
        institution: "Motijheel Model High School and College",
        year: "2011 - 2013",
        achievements: ["GPA: 5.00"],
      },
    ],
    workExperience: [
      {
        title: "Developer",
        company: "AiNixIt",
        period: "2023 Oct - Present",
        responsibilities: [
          "Lead the frontend team in building modern web applications",
          "Delivered 6+ mega projects on time using React.js and Next.js ",
          "Collaborated with backend team to increase product performance",
          "Mentored inter developers and conducted code reviews",
          "Worked on a range of projects, including eCommerce, dashboard, and admin portal",
          "Mobile development using React Native",
          "Developed 4+ mobile apps using React Native",
        ],
      },
      {
        title: "Software Engineer Intern",
        company: "Cloud Production Ltd",
        period: "2023 Mar - 2023 Sep",
        responsibilities: [
          "Developed features for the company's site",
          "Improved company project design and development process",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-sky-200 to-sky-900 dark:from-sky-900 dark:to-gray-950 py-16 px-6">
      {/* Header Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Biography
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          {bioData.summary}
        </p>
      </motion.div>

      {/* Add Work Experience Section */}
      <motion.div
        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center mb-8">
          <FaBriefcase className="text-3xl text-sky-500 mr-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Work Experience
          </h2>
        </div>

        <div className="space-y-8">
          {bioData.workExperience.map((job, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-sky-500"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute w-4 h-4 bg-sky-500 rounded-full -left-[9px] top-1" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {job.title}
              </h3>
              <p className="text-sky-600 dark:text-sky-400 mb-2">
                {job.company} | {job.period}
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Add Education Section */}
      <motion.div
        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center mb-8">
          <FaGraduationCap className="text-3xl text-sky-500 mr-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Education
          </h2>
        </div>

        <div className="space-y-8">
          {bioData.education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-sky-500"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute w-4 h-4 bg-sky-500 rounded-full -left-[9px] top-1" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {edu.degree}
              </h3>
              <p className="text-sky-600 dark:text-sky-400 mb-2">
                {edu.institution} | {edu.year}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {edu.description}
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Expertise Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {bioData.expertise.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-4">
              <item.icon className="text-3xl text-sky-500 mr-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Interests Section */}
      {/* <motion.div
        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Areas of Interest
        </h2>
        <div className="flex flex-wrap gap-4">
          {bioData.interests.map((interest, index) => (
            <motion.span
              key={index}
              className="bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-100 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              {interest}
            </motion.span>
          ))}
        </div>
      </motion.div> */}

      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="/assets/alvee_kabir_resume.pdf"
          download="alvee_kabir_resume.pdf"
          className="bg-sky-500 text-white px-8 py-3 rounded-full hover:bg-sky-600 flex items-center space-x-2"
        >
          <FaDownload />
          <span>Download Full Resume</span>
        </a>
      </motion.div>
    </div>
  );
};

export default Bio;
