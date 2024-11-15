import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [text, setText] = useState('');
  const title = 'Welcome to My Portfolio';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + title[index]);
      index++;
      if (index === title.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section text-center bg-gradient-to-br from-gray-800 to-gray-900 py-32">
      <h1 className="text-5xl font-bold text-neon mb-4 animate-fadeIn">{text}</h1>
      <p className="text-xl text-gray-400 mb-6">Your gateway to impressive, modern web solutions.</p>
    </div>
  );
}
