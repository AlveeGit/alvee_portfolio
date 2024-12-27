// Stats.js
import { motion } from "framer-motion";

const statsData = [
  { label: "Projects Completed", value: 50 },
  { label: "Happy Clients", value: 35 },
  { label: "Awards", value: 10 },
  // Add more stats
];

const Stats = () => (
  <section className="stats-section text-center">
    <h2 className="text-3xl font-bold mb-4">My Achievements</h2>
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="stat-item"
        >
          <h3>{stat.value}+</h3>
          <p>{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Stats;
