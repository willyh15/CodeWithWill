import { useEffect, useRef } from "react";

function useScrollAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideIn");
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
    <section
      ref={aboutRef}
      id="about-me"
      className="relative py-20 px-6 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-lg glass rounded-xl mx-auto max-w-4xl text-center"
    >
      <h2 className="text-4xl font-extrabold text-white drop-shadow-md mb-6">
        About Me
      </h2>
      <p className="text-gray-200 text-lg leading-relaxed">
        I’m a developer passionate about crafting seamless digital experiences.
        I love working on cutting-edge projects that combine creativity and
        technology to deliver impactful results.
      </p>
    </section>
  );
}
