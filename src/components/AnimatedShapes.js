import React from "react";
import { motion } from "framer-motion";

const AnimatedShapes = ({ circle, wave }) => {
  return (
    <>
      {/* Circle Shape */}
      {circle && (
        <motion.div
          className="absolute w-24 h-24 bg-indigo-500 rounded-full"
          initial={{ opacity: 0, scale: 0.5, x: -100, y: -100 }}
          animate={{ opacity: 0.3, scale: 1, x: 50, y: 50 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      )}

      {/* Wave Shape */}
      {wave && (
        <motion.div
          className="absolute w-32 h-32 bg-indigo-300 rounded-full"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          initial={{ opacity: 0, scale: 0.3, x: 100, y: -50 }}
          animate={{ opacity: 0.4, scale: 1, x: -100, y: 100 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
    </>
  );
};

export default AnimatedShapes;
