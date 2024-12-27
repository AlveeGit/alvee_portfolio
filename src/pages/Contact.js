import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Skills from "../components/Skills";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:alveekabir1@gmail.com?subject=Portfolio Contact from ${name}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-gradient-to-br from-sky-200 to-sky-900 dark:from-sky-900 dark:to-gray-950 min-h-screen py-16 px-6 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center">
      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      {/* Contact Info Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4"
          whileHover={{ scale: 1.02 }}
        >
          <FaPhone className="text-2xl text-sky-500" />
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Phone
            </h3>
            <p className="text-gray-600 dark:text-gray-300">+880 1970727885</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4"
          whileHover={{ scale: 1.02 }}
        >
          <FaEnvelope className="text-2xl text-sky-500" />
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Email
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              alveekabir1@gmail.com
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4"
          whileHover={{ scale: 1.02 }}
        >
          <FaMapMarkerAlt className="text-2xl text-sky-500" />
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Address
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Kallayanpur, Dhaka 1207
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        className="text-lg mb-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Whether you have a question, want to work together, or just want to say
        hello, I'd love to hear from you! Fill out the form below or connect
        with me on social media.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-lg w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Name
          </label>
          <motion.input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Your Name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Email
          </label>
          <motion.input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Your Email"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Message
          </label>
          <motion.textarea
            id="message"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Your Message"
            rows="4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          ></motion.textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="mt-10 flex space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <a
          href="https://github.com/AlveeGit"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-110"
        >
          <FaGithub
            size={30}
            className="text-gray-700 dark:text-gray-300 hover:text-sky-500"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/alvee-kabir/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-110"
        >
          <FaLinkedin
            size={30}
            className="text-gray-700 dark:text-gray-300 hover:text-sky-500"
          />
        </a>
        <a
          href="https://x.com/AlveeKabir1"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-110"
        >
          <FaTwitter
            size={30}
            className="text-gray-700 dark:text-gray-300 hover:text-sky-500"
          />
        </a>
        <a
          href="mailto:alveekabir1@gmail.com"
          className="transform transition-transform hover:scale-110"
        >
          <FaEnvelope
            size={30}
            className="text-gray-700 dark:text-gray-300 hover:text-sky-500"
          />
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
