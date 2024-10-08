import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
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
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
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

// ProjectCard Component
// const ProjectCard = ({
//   title,
//   description,
//   tags,
//   image,
//   demoLink,
//   repoLink,
// }) => (
//   <motion.div
//     className="p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition-shadow"
//     whileHover={{ scale: 1.05 }}
//     transition={{ duration: 0.3 }}
//   >
//     <img
//       src={image}
//       alt={title}
//       className="rounded-t-lg w-full h-48 object-cover mb-4"
//     />
//     <h3 className="text-xl font-semibold mb-2">{title}</h3>
//     <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
//     <div className="flex flex-wrap mb-4">
//       {tags.map((tag, index) => (
//         <span
//           key={index}
//           className="bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200 px-2 py-1 rounded-full text-xs mr-2 mb-2"
//         >
//           {tag}
//         </span>
//       ))}
//     </div>
//     <div className="flex justify-between items-center">
//       <a
//         href={demoLink}
//         className="text-blue-500 hover:text-blue-600"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaExternalLinkAlt size={20} />
//       </a>
//       <a
//         href={repoLink}
//         className="text-gray-700 dark:text-gray-300 hover:text-gray-500"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaGithub size={20} />
//       </a>
//     </div>
//   </motion.div>
// );

export default Projects;
