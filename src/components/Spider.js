import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Spider = () => {
  // Framer Motion's motion values for smooth movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring animations for smooth following
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Update motion values directly based on mouse position
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]); // Include x and y in the dependency array

  return (
    <motion.div
      style={{
        position: "absolute",
        x: springX,
        y: springY,
        width: "50px",
        height: "50px",
        zIndex: 10,
        pointerEvents: "none",
        translate: "-50% -50%", // Center the spider on the cursor
      }}
    >
      {/* Spider SVG */}
      <svg viewBox="0 0 100 100" width="50" height="50">
        <circle cx="50" cy="50" r="8" fill="black" />
        {/* Left Legs */}
        <line
          x1="50"
          y1="50"
          x2="35"
          y2="30"
          stroke="black"
          strokeWidth="2"
          className="leg left-leg-1"
        />
        <line
          x1="50"
          y1="50"
          x2="30"
          y2="50"
          stroke="black"
          strokeWidth="2"
          className="leg left-leg-2"
        />
        <line
          x1="50"
          y1="50"
          x2="35"
          y2="70"
          stroke="black"
          strokeWidth="2"
          className="leg left-leg-3"
        />
        {/* Right Legs */}
        <line
          x1="50"
          y1="50"
          x2="65"
          y2="30"
          stroke="black"
          strokeWidth="2"
          className="leg right-leg-1"
        />
        <line
          x1="50"
          y1="50"
          x2="70"
          y2="50"
          stroke="black"
          strokeWidth="2"
          className="leg right-leg-2"
        />
        <line
          x1="50"
          y1="50"
          x2="65"
          y2="70"
          stroke="black"
          strokeWidth="2"
          className="leg right-leg-3"
        />
      </svg>
      <style jsx>{`
        .leg {
          transform-origin: 50% 50%;
          animation: wiggle 0.5s infinite alternate;
        }
        @keyframes wiggle {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(10deg);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Spider;
