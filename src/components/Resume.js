// Resume.jsx
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-12 px-6 z-50">
      <motion.h2
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Resume
      </motion.h2>
      <motion.p
        className="text-lg text-center mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Download my resume to learn more about my professional journey, skills,
        and experiences. Here’s an overview of what I can offer!
      </motion.p>

      <div className="flex justify-center">
        <motion.a
          href="/path-to-your-resume.pdf"
          className="bg-sky-600 text-white py-3 px-8 rounded-full flex items-center text-lg hover:bg-sky-700 transition duration-300"
          download
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <FaDownload className="mr-2" />
          Download Resume
        </motion.a>
      </div>

      <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Add sections for quick resume highlights here */}
        <ResumeHighlight
          title="Education"
          details="B.S. in Computer Science - XYZ University"
        />
        <ResumeHighlight
          title="Experience"
          details="3+ Years in Full Stack Development"
        />
        <ResumeHighlight
          title="Skills"
          details="JavaScript, React, Tailwind CSS, Framer Motion"
        />
        <ResumeHighlight
          title="Achievements"
          details="Developed multiple full-scale applications for companies."
        />
      </div>
    </section>
  );
};

// A simple component for resume highlights
const ResumeHighlight = ({ title, details }) => (
  <motion.div
    className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300">{details}</p>
  </motion.div>
);

export default Resume;
