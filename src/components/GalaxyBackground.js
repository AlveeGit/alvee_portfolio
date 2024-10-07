import React, { useEffect } from "react";

const GalaxyBackground = () => {
  useEffect(() => {
    const stars = [];
    const starContainer = document.getElementById("star-container");

    // Function to create a star
    const createStar = () => {
      const star = document.createElement("div");
      star.classList.add("star");

      // Random angle and speed for star movement
      const angle = Math.random() * 360;
      const speed = 8 + Math.random() * 10;

      star.style.setProperty("--angle", `${angle}deg`);
      star.style.setProperty("--speed", `${speed}s`);

      // Append to the container and keep track of the star
      starContainer.appendChild(star);
      stars.push(star);
    };

    // Generate multiple stars
    for (let i = 0; i < 100; i++) {
      createStar();
    }

    // Clean up stars on unmount
    return () => stars.forEach((star) => star.remove());
  }, []);

  return <div id="star-container" className="star-container"></div>;
};

export default GalaxyBackground;
