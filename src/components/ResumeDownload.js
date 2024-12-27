import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const ResumeDownload = ({ className = "" }) => {
  return (
    <motion.a
      href="/assets/alvee_kabir_resume.pdf"
      download="alvee_kabir_resume.pdf"
      className={`bg-sky-500 text-white px-8 py-3 rounded-full hover:bg-sky-600 flex items-center justify-center space-x-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaDownload />
      <span>Download Resume</span>
    </motion.a>
  );
};

export default ResumeDownload;
