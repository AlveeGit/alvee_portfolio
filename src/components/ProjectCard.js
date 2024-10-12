import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  demoLink,
  repoLink,
}) => (
  <motion.div
    className="p-4 rounded-lg shadow-lg bg-sky-200 dark:bg-gray-800 flex flex-col"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img
      src={image}
      alt={title}
      className="rounded-t-lg w-full h-60 object-cover mb-4"
    />
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mb-2 flex-grow ">{description}</p>
    <div className="flex flex-wrap mb-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200 px-2 py-1 rounded-full text-xs mr-2"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="flex justify-between items-center">
      <a
        href={demoLink}
        className="text-sky-500 hover:text-blue-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaExternalLinkAlt size={20} />
      </a>
      <a
        href={repoLink}
        className="text-gray-700 dark:text-gray-300 hover:text-gray-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={20} />
      </a>
    </div>
  </motion.div>
);

export default ProjectCard;
