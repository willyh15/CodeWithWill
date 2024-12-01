import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import StarfieldCanvas from "@/components/Starfield/Starfield";

export function Testimonials() {
  const testimonials = [
    // ... Testimonials data remains the same
  ];

  const [current, setCurrent] = useState(0);
  const nextTestimonial = () => setCurrent((current + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="testimonials-section py-16 bg-gray-900 text-center relative overflow-hidden"
    >
      <StarfieldCanvas color="#FF83FF" particleCount={200} speed={0.0003} />
      <h2 className="text-4xl font-extrabold text-neon drop-shadow-md mb-12 relative z-10">
        What Clients Say
      </h2>
      <div className="relative z-10 max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="testimonial-item bg-gray-800 bg-opacity-80 backdrop-blur-lg p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 italic text-lg mb-6">
              {testimonials[current].text}
            </p>
            <p className="text-neon font-bold text-sm">
              - {testimonials[current].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center space-x-4 mt-8 relative z-10">
        <button
          onClick={prevTestimonial}
          className="testimonial-button bg-neon text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-neon-light transition duration-300"
        >
          Previous
        </button>
        <button
          onClick={nextTestimonial}
          className="testimonial-button bg-neon text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-neon-light transition duration-300"
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default Testimonials;