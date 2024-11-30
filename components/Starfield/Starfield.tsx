import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Starfield = () => {
  const pointsRef = useRef(null);

  const particles = new Float32Array(
    Array.from({ length: 1000 }, () => Math.random() * 500 - 250)
  );

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0005;
      pointsRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles}
          count={particles.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={1.5} color="#6E44FF" />
    </points>
  );
};

const StarfieldCanvas = () => {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-full">
      <ambientLight intensity={0.5} />
      <Starfield />
    </Canvas>
  );
};

export default StarfieldCanvas;
