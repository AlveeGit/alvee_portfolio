import React from "react";

const ScrambleEffect = ({ text }) => {
  const scrambleChars = "!@#$%^&*()_+{}[]:;<>,.?/|";
  const [displayText, setDisplayText] = React.useState("");
  const [currentCharIndex, setCurrentCharIndex] = React.useState(0);

  React.useEffect(() => {
    let interval;
    if (currentCharIndex < text.length) {
      const scrambleInterval = setInterval(() => {
        // Scramble character until it matches the target character
        setDisplayText(
          (prev) =>
            prev.substring(0, currentCharIndex) +
            scrambleChars.charAt(
              Math.floor(Math.random() * scrambleChars.length)
            ) +
            prev.substring(currentCharIndex + 1)
        );
      }, 50);

      setTimeout(() => {
        clearInterval(scrambleInterval);
        setDisplayText(
          (prev) =>
            prev.substring(0, currentCharIndex) +
            text[currentCharIndex] +
            prev.substring(currentCharIndex + 1)
        );
        setCurrentCharIndex((prev) => prev + 1);
      }, 200);

      return () => clearInterval(scrambleInterval);
    }
  }, [currentCharIndex, text]);

  return <span>{displayText}</span>;
};

export default ScrambleEffect;
