import { useEffect, useRef } from 'react';

function useScrollAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideIn');
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function AboutMe() {
  const aboutRef = useScrollAnimation();

  return (
    <div ref={aboutRef} id="about-me" className="py-16 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-neon mb-8">About Me</h2>
      <p className="text-gray-300 mb-8 max-w-3xl mx-auto">I’m a developer...</p>
    </div>
  );
}
