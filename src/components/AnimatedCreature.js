import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const AnimatedCreature = ({ name }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 25 });
  const springY = useSpring(y, { stiffness: 100, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    x.set(mousePosition.x);
    y.set(mousePosition.y);
  }, [mousePosition, x, y]);

  const renderCreature = () => {
    switch (name) {
      case "spider":
        return (
          <svg viewBox="0 0 100 100" width="60" height="60">
            <circle cx="50" cy="50" r="6" fill="var(--theme-dark)" />
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                <line
                  x1="50"
                  y1="50"
                  x2={35 - i * 5}
                  y2={25 + i * 10}
                  stroke="var(--theme-dark)"
                  strokeWidth="2"
                />
                <line
                  x1="50"
                  y1="50"
                  x2={65 + i * 5}
                  y2={25 + i * 10}
                  stroke="var(--theme-dark)"
                  strokeWidth="2"
                />
                <line
                  x1="50"
                  y1="50"
                  x2={35 - i * 5}
                  y2={75 - i * 10}
                  stroke="var(--theme-dark)"
                  strokeWidth="2"
                />
                <line
                  x1="50"
                  y1="50"
                  x2={65 + i * 5}
                  y2={75 - i * 10}
                  stroke="var(--theme-dark)"
                  strokeWidth="2"
                />
              </React.Fragment>
            ))}
            <style jsx>{`
              line {
                transform-origin: 50% 50%;
                animation: wiggle 0.6s ease-in-out infinite alternate;
              }
              @keyframes wiggle {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(15deg);
                }
              }
            `}</style>
          </svg>
        );
      case "butterfly":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="100"
            height="100"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
            className="flutter"
          >
            <g
              style={{
                stroke: "none",
                strokeWidth: 0,
                fill: "rgb(83,203,244)",
                opacity: 1,
              }}
              transform="translate() scale(0)"
            >
              <path d="M 81.97 57.327 l -4.324 -6.075 l -30.224 3.735 v 0.676 l 2.14 12.882 c 0.82 5.322 4.141 9.928 8.932 12.388 l 2.113 1.085 c 7.814 4.012 17.401 1.328 21.995 -6.159 C 86.127 70.114 85.878 62.818 81.97 57.327 z" />
              <path d="M 42.572 54.986 l -30.218 -3.735 L 8.03 57.327 c -3.909 5.491 -4.157 12.787 -0.632 18.532 c 4.595 7.487 14.181 10.171 21.995 6.159 l 2.113 -1.085 c 4.79 -2.46 8.111 -7.066 8.932 -12.388 l 2.134 -12.847 V 54.986 z" />
              <path d="M 82.232 6.474 C 70.629 3.35 59.025 21.578 47.422 46.971 c -1.054 2.792 -1.146 5.486 0 8.053 c 10.007 2.225 23.166 4.103 34.273 -5.934 C 90.016 42.241 94.992 11.04 82.232 6.474 z" />
              <path d="M 17.626 75.858 c -3.525 -5.745 -3.277 -13.04 0.632 -18.532 l 3.497 -4.914 l -9.4 -1.162 L 8.03 57.327 c -3.909 5.491 -4.157 12.787 -0.632 18.532 c 4.104 6.688 12.189 9.528 19.439 7.201 C 23.125 81.874 19.809 79.416 17.626 75.858 z" />
              <path d="M 72.374 75.858 c 3.525 -5.745 3.277 -13.04 -0.632 -18.532 l -3.497 -4.914 l 9.4 -1.162 l 4.324 6.075 c 3.909 5.491 4.157 12.787 0.632 18.532 c -4.104 6.688 -12.189 9.528 -19.439 7.201 C 66.875 81.874 70.191 79.416 72.374 75.858 z" />
              <path d="M 42.572 46.959 C 30.971 21.572 19.369 3.35 7.768 6.474 C -4.992 11.04 -0.016 42.241 8.305 49.091 c 11.105 10.035 24.261 8.159 34.267 5.935 C 43.702 52.456 43.609 49.758 42.572 46.959 z" />
              <path d="M 18.532 49.091 c -7.815 -6.433 -12.677 -34.344 -2.668 -41.497 c -2.699 -1.405 -5.398 -1.847 -8.097 -1.12 C -4.992 11.04 -0.016 42.241 8.305 49.091 c 8.277 7.479 17.692 8.341 26.094 7.374 C 29.012 55.732 23.562 53.635 18.532 49.091 z" />
              <path d="M 71.468 49.091 c 7.815 -6.433 12.677 -34.344 2.668 -41.497 c 2.699 -1.405 5.398 -1.847 8.097 -1.12 c 12.759 4.567 7.783 35.767 -0.537 42.617 c -8.277 7.479 -17.692 8.341 -26.094 7.374 C 60.988 55.732 66.438 53.635 71.468 49.091 z" />
              <path d="M 46.254 72.512 l -0.46 2.726 c -0.151 0.899 -1.443 0.899 -1.594 0 l -0.46 -2.726 c -0.777 -4.611 -1.168 -9.279 -1.168 -13.956 v -19.4 c 0 -1.339 1.086 -2.425 2.425 -2.425 h 0 c 1.339 0 2.425 1.086 2.425 2.425 v 19.4 C 47.422 63.232 47.031 67.9 46.254 72.512 z" />
              <path d="M 49.222 35.661 c 0 2.299 -1.864 4.164 -4.164 4.164 c -2.299 0 -4.164 -1.864 -4.164 -4.164 c 0 -2.299 1.864 -4.164 4.164 -4.164 C 47.358 31.496 49.222 33.361 49.222 35.661 z" />
            </g>
            <style jsx>{`
              .flutter {
                animation: flutter 0.5s ease-in-out infinite alternate;
              }
              @keyframes flutter {
                0% {
                  transform: translateY(0);
                }
                25% {
                  transform: translateY(-2px);
                }
                50% {
                  transform: translateY(0);
                }
                75% {
                  transform: translateY(2px);
                }
                100% {
                  transform: translateY(0);
                }
              }
            `}</style>
          </svg>
        );
      case "firefly":
        return (
          <svg
            height="50px"
            width="50px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            className="flutter"
          >
            <g>
              <path
                style={{ fill: "#FFC843" }}
                d="M256.002,411.637c-38.319,0-73.967-19.005-95.358-50.84c-4.672-6.953-3.608-16.269,2.513-21.988 c6.291-5.879,12.741-15.412,18.65-27.567c2.857-5.875,8.815-9.605,15.349-9.605h117.645c6.529,0,12.486,3.725,15.344,9.595 c5.911,12.139,12.376,21.673,18.694,27.572c6.127,5.718,7.194,15.038,2.52,21.994C329.969,392.632,294.321,411.637,256.002,411.637z"
              />
              <path
                style={{ fill: "#F3B73F" }}
                d="M348.84,338.802c-6.318-5.898-12.782-15.433-18.694-27.572c-2.859-5.87-8.815-9.595-15.344-9.595 h-58.804v110c0.001,0,0.002,0,0.003,0c38.319,0,73.967-19.005,95.358-50.84C356.034,353.842,354.967,344.521,348.84,338.802z"
              />
              <path
                style={{ fill: "#64503C" }}
                d="M314.802,335.77H197.157c-5.881,0-11.348-3.028-14.467-8.012c-3.12-4.985-3.453-11.225-0.883-16.515 c12.084-24.863,20.622-58.302,22.284-87.271c1.896-33.05-5.25-50.3-12.569-55.422c-9.799-6.86-9.671-21.437,0.236-28.126 c19.028-12.849,41.241-19.643,64.239-19.644c0.002,0,0.006,0,0.008,0c23,0,45.214,6.793,64.243,19.645 c9.888,6.68,10.048,21.256,0.234,28.125c-7.31,5.118-14.459,22.357-12.594,55.396c1.636,29.001,10.166,62.447,22.258,87.287 c2.576,5.289,2.245,11.532-0.875,16.52S320.686,335.77,314.802,335.77z"
              />
              <path
                style={{ fill: "#514335" }}
                d="M330.146,311.232c-12.093-24.84-20.623-58.286-22.258-87.287 c-1.865-33.039,5.285-50.278,12.594-55.396c9.813-6.869,9.654-21.445-0.234-28.125c-19.029-12.851-41.243-19.645-64.243-19.645 c-0.001,0-0.003,0-0.006,0v214.989h58.804c5.883,0,11.352-3.03,14.47-8.018C332.391,322.763,332.722,316.521,330.146,311.232z"
              />
              <path
                style={{ fill: "#7F5334" }}
                d="M187.363,164.41c-10.027-14.216-15.328-30.942-15.328-48.368c0-46.305,37.667-83.978,83.967-83.978 s83.967,37.673,83.967,83.978c0,17.428-5.301,34.154-15.329,48.369c-5.359,7.594-15.807,9.505-23.504,4.3 c-27.418-18.537-62.848-18.537-90.267,0C203.168,173.918,192.72,172.005,187.363,164.41z"
              />
              <path
                style={{ fill: "#64503C" }}
                d="M256.002,32.064c-0.001,0-0.002,0-0.003,0v122.745c15.714,0,31.426,4.634,45.137,13.902 c7.698,5.205,18.145,3.294,23.504-4.3c10.027-14.215,15.329-30.941,15.329-48.369C339.969,69.737,302.302,32.064,256.002,32.064z"
              />
              <path
                style={{ fill: "#975F39" }}
                d="M244.831,62.032l-37.023-32.063c-7.126-6.17-7.9-16.948-1.729-24.074 c6.169-7.125,16.947-7.9,24.073-1.728l25.851,22.387l25.849-22.387c7.126-6.172,17.902-5.398,24.074,1.728 c6.171,7.125,5.396,17.903-1.728,24.074l-37.022,32.063C260.765,67.585,251.245,67.586,244.831,62.032z"
              />
              <path
                style={{ fill: "#975F39" }}
                d="M73.314,370.957c-50.125-28.94-68.267-79.816-37.791-132.613 c29.627-51.306,123.642-133.76,175.51-97.797c53.12,37.187,20.805,180.829-24.57,223.201l0.002-0.001 C154.937,393.196,112.068,393.333,73.314,370.957z"
              />
              <path
                style={{ fill: "#FFC843" }}
                d="M256.002,512c-9.425,0-17.067-7.641-17.067-17.067V452.85c0-9.425,7.641-17.067,17.067-17.067 c9.425,0,17.067,7.641,17.067,17.067v42.084C273.069,504.359,265.428,512,256.002,512z"
              />
              <path
                style={{ fill: "#FFC843" }}
                d="M138.195,483.134c-8.358-4.358-11.601-14.666-7.243-23.023l19.456-37.317 c4.358-8.358,14.668-11.6,23.023-7.243c8.358,4.358,11.601,14.666,7.243,23.023l-19.456,37.317 C156.862,484.245,146.555,487.493,138.195,483.134z"
              />
              <path
                style={{ fill: "#7F5334" }}
                d="M305.926,5.895c-6.172-7.126-16.948-7.901-24.074-1.728l-25.849,22.387l-0.005-0.005v39.647 c3.984,0.001,7.97-1.387,11.178-4.165l37.022-32.063C311.323,23.798,312.098,13.02,305.926,5.895z"
              />
              <path
                style={{ fill: "#7F5334" }}
                d="M325.541,363.745c-45.715-42.69-77.31-186.279-24.631-223.154 c52.041-36.082,146.036,46.603,175.572,97.751c30.379,52.629,12.505,103.577-37.79,132.616l0,0 C399.859,393.378,357.013,393.144,325.541,363.745z"
              />
              <path
                style={{ fill: "#F3B73F" }}
                d="M256.002,435.783c-0.001,0-0.002,0-0.003,0V512c0.001,0,0.002,0,0.003,0 c9.425,0,17.067-7.641,17.067-17.067V452.85C273.069,443.424,265.428,435.783,256.002,435.783z"
              />
              <path
                style={{ fill: "#F3B73F" }}
                d="M350.787,475.891l-19.456-37.317c-4.358-8.358-1.114-18.666,7.243-23.023 c8.359-4.359,18.666-1.114,23.023,7.243l19.456,37.317c4.358,8.358,1.114,18.666-7.243,23.023 C365.454,487.491,355.144,484.25,350.787,475.891z"
              />
            </g>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        x: springX,
        y: springY,
        pointerEvents: "none",
        translate: "-50% -50%",
      }}
      className="z-30"
    >
      {renderCreature()}
    </motion.div>
  );
};

export default AnimatedCreature;
