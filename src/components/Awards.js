// Awards.js
import { motion } from "framer-motion";

const awards = [
  {
    title: "Certified React Developer",
    organization: "React Org",
    year: "2022",
  },
  { title: "JavaScript Master", organization: "JavaScript Org", year: "2023" },
  // Add more awards
];

const Awards = () => (
  <section className="awards-section">
    <h2 className="text-3xl font-bold mb-4">Awards & Certifications</h2>
    <div className="awards-list">
      {awards.map((award, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="award-card p-4 mb-4 bg-gray-900 rounded shadow"
        >
          <h3>{award.title}</h3>
          <p>{award.organization}</p>
          <p>{award.year}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Awards;
