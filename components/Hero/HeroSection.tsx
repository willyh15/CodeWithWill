import StarfieldCanvas from "@/components/Starfield/Starfield";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0 -z-10">
        <StarfieldCanvas color="#6E44FF" particleCount={1000} speed={0.0005} />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Crafting Cutting-Edge Digital Experiences
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          I specialize in creating innovative solutions for web, mobile, and
          desktop applications. Let’s build something extraordinary together.
        </p>
        <a
          href="#booking"
          className="px-8 py-4 bg-gradient-to-r from-neon-light to-yellow-500 text-gray-900 font-bold rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
