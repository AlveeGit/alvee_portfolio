import { useState } from "react";
import { motion } from "framer-motion";
import { projectsData, categories } from "../data/ProjectsData";
import ProjectCard from "../components/ProjectCard";


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProjects = () => {
    if (selectedCategory === "All") {
      return projectsData;
    }
    return projectsData.filter((project) =>
      project.tags.includes(selectedCategory)
    );
  };

  return (
    <div className="bg-gradient-to-bl from-sky-200 to-sky-900 dark:from-sky-900 dark:to-gray-950 min-h-screen text-gray-900 dark:text-gray-100 ">
      {/* Hero Section */}
      <section className="text-center py-10 px-6">
        <motion.h1
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          className="text-lg mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Discover our latest work and accomplishments.
        </motion.p>
        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 px-4 rounded-full text-sm ${
                selectedCategory === category
                  ? "bg-sky-500 text-white"
                  : "bg-gray-200 dark:bg-gray-500 text-gray-700 dark:text-gray-300"
              } focus:outline-none`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {filterProjects().map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
    </div>
  );
};



export default Projects;
