export default function HeroSection() {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gray-900 bg-opacity-80 backdrop-blur-lg p-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-neon mb-4">Hi, I'm [Your Name]</h1>
        <p className="text-lg md:text-2xl text-gray-300">Specializing in innovative, high-performance applications</p>
        <a href="#portfolio" className="mt-6 inline-block px-8 py-4 bg-neon hover:bg-neon-light text-gray-900 rounded-full">View My Work</a>
      </div>
    );
  }
  