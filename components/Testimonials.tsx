import { useState, useEffect } from 'react';

export function Testimonials() {
  const testimonials = [
    { text: "Will is fantastic to work with. His coding skills are top-notch!", author: "Client A" },
    { text: "Delivered beyond expectations. Highly recommend!", author: "Client B" },
    { text: "A truly skilled developer with a great sense of design!", author: "Client C" },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div id="testimonials" className="testimonials-section py-16 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-neon mb-8">Testimonials</h2>
      <div className="text-gray-300 italic text-lg max-w-2xl mx-auto">
        <p className="animate-fadeIn">{testimonials[current].text}</p>
        <p className="text-gray-500 mt-4">- {testimonials[current].author}</p>
      </div>
    </div>
  );
}
