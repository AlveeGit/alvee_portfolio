import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-cube";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.1 } },
};

const ProjectModal = ({ project, onClose }) => {
  const [enlarged, setEnlarged] = useState(null); // image/video URL

  return (
    <>
      {/* MAIN PROJECT MODAL */}
      <motion.div
        className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-2xl w-full overflow-y-auto max-h-[90vh]"
          variants={modal}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>

          {project.duration && (
            <p className="text-xs text-gray-500 mb-4">{project.duration}</p>
          )}

          {/* Swiper Gallery */}
          <Swiper
            modules={[Pagination, Autoplay, EffectCube]}
            effect="cube"
            cubeEffect={{
              slideShadows: true,
              shadow: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
          >
            {project?.media?.map((m, i) => (
              <SwiperSlide key={i}>
                {m.endsWith(".mp4") ? (
                  <video
                    src={m}
                    controls
                    className="w-full rounded-lg cursor-zoom-in"
                    onClick={() => setEnlarged(m)}
                  />
                ) : (
                  <img
                    src={m}
                    alt={`${project.title} media`}
                    className="w-full rounded-lg cursor-zoom-in"
                    onClick={() => setEnlarged(m)}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <p className="text-gray-700 dark:text-gray-300 mt-6 mb-4">
            {project.longDescription || project.description}
          </p>

          {project.features && (
            <>
              <h4 className="font-semibold mt-8 mb-1">Key Features:</h4>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </>
          )}

          {project.impact && (
            <p className="italic text-gray-500 mb-6">💡 {project.impact}</p>
          )}

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

          <div className="flex gap-3">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg"
              >
                <FaGithub /> View Code
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* ENLARGED IMAGE/VIDEO VIEW */}
      <AnimatePresence>
        {enlarged && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-[60] p-4"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setEnlarged(null)}
          >
            <motion.div
              className="max-w-7xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {enlarged.endsWith(".mp4") ? (
                <video
                  src={enlarged}
                  controls
                  autoPlay
                  className="w-full h-full rounded-lg object-contain"
                />
              ) : (
                <img
                  src={enlarged}
                  alt="Enlarged media"
                  className="w-full h-full rounded-lg object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectModal;
