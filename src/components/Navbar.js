import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const isActiveLink = (path) => location.pathname === path;

  return (
    <nav className="bg-sky-100 min-h-[70px] dark:bg-gray-900 shadow-md sticky top-0 dark:text-gray-100 ">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`hover:text-sky-500 font-semibold   ${
              isActiveLink("/") ? "text-sky-500 border-b-2 border-sky-500" : ""
            }`}
          >
            Intro
          </Link>
          <Link
            to="/bio"
            className={`hover:text-sky-500 font-semibold ${
              isActiveLink("/bio")
                ? "text-sky-500 border-b-2 border-sky-500"
                : ""
            }`}
          >
            Bio
          </Link>
          <Link
            to="/works"
            className={`hover:text-sky-500 font-semibold  ${
              isActiveLink("/works")
                ? "text-sky-500 border-b-2 border-sky-500"
                : ""
            }`}
          >
            Works
          </Link>
          <Link
            to="/contact"
            className={`hover:text-sky-500 font-semibold ${
              isActiveLink("/contact")
                ? "text-sky-500 border-b-2 border-sky-500"
                : ""
            }`}
          >
            Contact Me
          </Link>

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
          className="md:hidden  bg-gray-100 dark:bg-gray-800 flex flex-col items-center space-y-4 p-4 z-50 "
        >
          <a
            href="/"
            className={`${
              isActiveLink("/") ? "text-sky-500 border-b-2 border-sky-500" : ""
            }`}
          >
            Intro
          </a>
          <a
            href="/bio"
            className={`${
              isActiveLink("/bio")
                ? "text-sky-500 border-b-2 border-sky-500"
                : ""
            }`}
          >
            Bio
          </a>
          <a
            href="/works"
            className={`${
              isActiveLink("/works")
                ? "text-sky-500 border-b-2 border-sky-500"
                : ""
            }`}
          >
            Works
          </a>
          <a
            href="/contact"
            className={`${
              isActiveLink("/contact")
                ? "text-sky-500 border-b-2 border-sky-500"
                : ""
            }`}
          >
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
