import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import AnimatedShapes from "../components/AnimatedShapes";
import GalaxyBackground from "../components/GalaxyBackground";
import { TypeAnimation } from "react-type-animation";
import Skills from "../components/Skills";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Awards from "../components/Awards";
import EducationBackground from "../components/EducationBackground";
import Resume from "../components/Resume";

const Home = () => {
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/assets/alvee_kabir_resume.pdf"; // Update path to start from public folder
    link.download = "alvee_kabir_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="">
      <section className="relative min-h-[calc(100vh-70px)] flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6">
        {/* Shooting Stars Galaxy Background */}
        <GalaxyBackground />

        {/* Animated Background Shapes */}
        <AnimatedShapes circle wave />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center  ">
          <div className="order-1 md:order-2 z-10 mt-8 md:mt-0">
            <img
              src="/assets/images/cv.png"
              alt=""
              className="w-full max-w-72 m-auto rounded-full border-gray-900 border "
            />
          </div>
          <div className="order-2 md:order-1">
            <div className="text-center max-w-2xl z-10">
              {/* Typing and Scrambling Text */}
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4  mt-20 md:mt-40"
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
                  href="https://github.com/AlveeGit"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-500"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/alvee-kabir/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-500"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/AlveeKabir1"
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
              className="mt-10 text-center flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href="/projects"
                className="bg-sky-500 text-white px-8 py-3 rounded-full hover:bg-sky-600 flex items-center justify-center"
              >
                View My Projects
              </a>
              <button
                onClick={handleDownloadResume}
                className="border border-sky-500 text-white px-8 py-3 rounded-full hover:bg-sky-500 hover:text-white flex items-center justify-center space-x-2"
              >
                <FaDownload className="mr-2" />
                <span>Download Resume</span>
              </button>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-20">
          <ExperienceTimeline />
          <Skills />
        </div>

        {/* <EducationBackground />
        <Resume /> */}
      </section>
    </div>
  );
};

export default Home;
