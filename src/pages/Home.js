import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import AnimatedShapes from "../components/AnimatedShapes";
import GalaxyBackground from "../components/GalaxyBackground";
import { TypeAnimation } from "react-type-animation";
import Spider from "../components/Spider";
import AnimatedCreature from "../components/AnimatedCreature";

const Home = () => {
  return (
    <div className="relative">
      {/* Spider following the mouse */}
      {/* <Spider /> */}
      {/* <AnimatedCreature name="spider" /> */}
      <section className="relative min-h-[calc(100vh-70px)] flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6">
        {/* Shooting Stars Galaxy Background */}
        <GalaxyBackground />

        {/* Animated Background Shapes */}
        <AnimatedShapes circle wave />

        <div className="text-center max-w-2xl z-10">
          {/* Typing and Scrambling Text */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TypeAnimation
              sequence={[
                "",
                500,
                "Hi, I’m",
                500,
                "Hi, I’m \n Alvee Kabir",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                whiteSpace: "pre-line",
                height: "195px",
                display: "block",
              }}
              repeat={Infinity}
            />
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I’m a passionate developer creating modern and dynamic web
            experiences.
          </motion.p>

          {/* Animated Social Icons */}
          <motion.div
            className="flex justify-center space-x-6 text-3xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-500"
            >
              <FaTwitter />
            </a>
          </motion.div>
        </div>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="mt-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#projects"
            className="bg-indigo-500 text-white px-8 py-3 rounded-full hover:bg-indigo-600"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="border border-indigo-500 text-indigo-500 px-8 py-3 rounded-full hover:bg-indigo-500 hover:text-white"
          >
            Contact Me
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
