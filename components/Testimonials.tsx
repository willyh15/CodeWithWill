import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  { text: "Will is fantastic to work with. His coding skills are top-notch!", author: "Client A" },
  { text: "Delivered beyond expectations. Highly recommend!", author: "Client B" },
  { text: "A truly skilled developer with a great sense of design!", author: "Client C" },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => setCurrent((current + 1) % testimonials.length);
  const prevTestimonial = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <div id="testimonials" className="testimonials-section py-16 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-neon mb-8">Testimonials</h2>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={current}
          className="testimonial"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-300 italic text-lg max-w-2xl mx-auto">{testimonials[current].text}</p>
          <p className="text-gray-500 mt-4">- {testimonials[current].author}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center space-x-4 mt-8">
        <button onClick={prevTestimonial}>Previous</button>
        <button onClick={nextTestimonial}>Next</button>
      </div>
    </div>
  );
}
