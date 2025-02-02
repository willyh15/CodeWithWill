import dynamic from "next/dynamic";

const StarfieldCanvas = dynamic(() => import("@/components/Starfield/Starfield"), { ssr: false });

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0 -z-10">
        <StarfieldCanvas color="#FFD700" />
      </div>

      <h1 className="text-6xl font-bold text-white drop-shadow-lg">
        Build Amazing Digital Experiences
      </h1>
      <p className="text-gray-300 text-xl mt-4">
        Join me in creating innovative solutions with cutting-edge technology.
      </p>
      <a
        href="#booking" // Smooth scroll to the booking section
        className="mt-8 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold text-lg rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
      >
        Get Started
      </a>
    </section>
  );
}