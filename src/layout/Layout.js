import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children, toggleDarkMode, isDarkMode }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      {children}
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
