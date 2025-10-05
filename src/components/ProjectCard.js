import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      className="p-4 rounded-xl shadow-md bg-sky-100/80 dark:bg-gray-800 hover:shadow-xl cursor-pointer flex flex-col border border-gray-300/20 dark:border-gray-700/40"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.01 }}
      viewport={{ once: true, amount: 0.3 }}
      onClick={onClick}
    >
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg w-full h-52 object-cover mb-4"
        loading="lazy"
      />

      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        {/* {project.role && (
          <span className="text-xs bg-sky-600 text-white px-2 py-1 rounded-md">
            {project.role}
          </span>
        )} */}
      </div>

      <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 mb-3">
        {project.description}
      </p>

      {/* <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div> */}
      <div className="flex flex-wrap gap-1 mb-4 ">
        {project.tags.map((tech) => (
          <img
            key={tech}
            src={`https://cdn.simpleicons.org/${tech}`}
            alt={tech}
            className="w-7 h-7 p-1 bg-white border border-gray-400 dark:border-gray-700 rounded-full text-xs"
            title={tech}
          />
        ))}
      </div>

      <div className="flex justify-between mt-auto">
        {project.demoLink && (
          <a
            href={project.demoLink}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:text-sky-400"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        )}
        {project.repoLink && (
          <a
            href={project.repoLink}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-500"
          >
            <FaGithub size={18} />
          </a>
        )}
      </div>
      {/* {project.type && (
        <span className="absolute top-6 right-6 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
          {project.type}
        </span>
      )} */}
    </motion.div>
  );
};

export default ProjectCard;

// import { motion } from "framer-motion";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// const ProjectCard = ({
//   title,
//   description,
//   tags,
//   image,
//   demoLink,
//   repoLink,
// }) => (
//   <motion.div
//     className="p-4 rounded-lg shadow-lg bg-sky-200 dark:bg-gray-700 flex flex-col"
//     whileHover={{ scale: 1.05 }}
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{
//       duration: 0.5,
//     }}
//     viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the card is in view
//   >
//     <img
//       src={image}
//       alt={title}
//       className="rounded-t-lg w-full h-60 object-cover mb-4"
//     />
//     <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
//       {title}
//     </h3>
//     <p className="text-gray-600 dark:text-gray-300 mb-2 flex-grow mt-2 ">
//       {description}
//     </p>
//     <div className="flex flex-wrap mt-4 mb-4">
//       {tags.map((tag) => (
//         <span
//           key={tag}
//           className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 px-2 py-1 rounded-full text-xs mr-2 mb-2 "
//         >
//           {tag}
//         </span>
//       ))}
//     </div>
//     <div className="flex justify-between items-center">
//       {demoLink && (
//         <a
//           href={demoLink}
//           className="text-sky-500 hover:text-blue-600"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaExternalLinkAlt size={20} />
//         </a>
//       )}
//       {repoLink && (
//         <a
//           href={repoLink}
//           className="text-gray-700 dark:text-gray-300 hover:text-gray-500"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaGithub size={20} />
//         </a>
//       )}
//     </div>
//   </motion.div>
// );

// export default ProjectCard;
