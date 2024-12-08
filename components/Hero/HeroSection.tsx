import StarfieldCanvas from "@/components/Starfield/Starfield";

// components/Hero/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold text-white drop-shadow-lg">
        Build Amazing Digital Experiences
      </h1>
      <p className="text-gray-300 text-xl mt-4">
        Join me in creating innovative solutions with cutting-edge technology.
      </p>
      <a
        href="#booking"
        className="mt-8 px-8 py-4 bg-gradient-to-r from-neon-light to-yellow-500 text-gray-900 font-bold rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
      >
        Get Started
      </a>
    </section>
  );
}