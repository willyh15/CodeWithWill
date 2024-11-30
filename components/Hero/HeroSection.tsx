import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const Stars = () => {
  const points = new Float32Array(
    Array.from({ length: 1000 }, () => Math.random() * 2 - 1)
  );

  return (
    <Points positions={points} stride={3} frustumCulled>
      <PointMaterial
        size={0.01}
        sizeAttenuation
        color="#6E44FF"
        depthWrite={false}
        transparent
        opacity={0.75}
      />
    </Points>
  );
};

export default function HeroSection() {
  return (
    <section className="hero-section relative w-full h-screen text-center text-white overflow-hidden">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <Stars />
      </Canvas>
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <h1 className="text-5xl font-extrabold drop-shadow-lg mb-4">
          Crafting Digital Excellence
        </h1>
        <p className="text-lg text-gray-300">
          Let’s create seamless digital experiences together.
        </p>
      </div>
    </section>
  );
}
