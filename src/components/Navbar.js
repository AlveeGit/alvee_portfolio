import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white h-[70px] dark:bg-gray-900 shadow-md sticky top-0 dark:text-gray-100 ">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#bio" className="hover:text-indigo-500">
            Bio
          </a>
          <a href="#projects" className="hover:text-indigo-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-indigo-500">
            Contact
          </a>
          <button onClick={toggleDarkMode} className="p-2">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <button onClick={toggleMenu} className="md:hidden p-2">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-gray-100 dark:bg-gray-800 flex flex-col space-y-4 p-4"
        >
          <a href="#bio" className="hover:text-indigo-500">
            Bio
          </a>
          <a href="#projects" className="hover:text-indigo-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-indigo-500">
            Contact
          </a>
          <button onClick={toggleDarkMode} className="p-2">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
