import "./App.css";
import "./styles/custom-styles.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Bio from "./pages/Bio";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Layout isDarkMode={theme} toggleDarkMode={toggleTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </Layout>
  );
}

export default App;
