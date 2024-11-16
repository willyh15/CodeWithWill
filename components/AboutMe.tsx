import { useEffect, useRef } from "react";
import { FaUserAlt } from "react-icons/fa"; // Example icon

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
      className="relative py-20 px-6 sm:py-24 sm:px-10 lg:px-16 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-lg glass rounded-xl mx-auto max-w-5xl text-center shadow-lg"
    >
      <div className="flex justify-center mb-6">
        <FaUserAlt className="text-white text-6xl bg-purple-700/20 rounded-full p-4 shadow-md" />
      </div>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-md mb-6">
        About Me
      </h2>
      <p className="text-gray-200 text-lg leading-relaxed sm:text-xl sm:leading-loose">
        I’m a developer passionate about crafting seamless digital experiences.
        I love working on cutting-edge projects that combine creativity and
        technology to deliver impactful results.
      </p>
    </section>
  );
}