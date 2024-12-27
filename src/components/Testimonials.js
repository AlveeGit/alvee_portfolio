// Testimonials.js
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Great experience working with you!",
    image: "path_to_image",
  },
  {
    name: "Jane Smith",
    feedback: "Very professional and skilled!",
    image: "path_to_image",
  },
  // Add more testimonials
];

const Testimonials = () => (
  <section className="testimonials-section">
    <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
    <div className="testimonials-carousel">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="testimonial-card p-4 bg-gray-900 rounded-lg shadow-lg"
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="rounded-full w-16 h-16"
          />
          <p>{testimonial.feedback}</p>
          <p className="font-bold">{testimonial.name}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Testimonials;
