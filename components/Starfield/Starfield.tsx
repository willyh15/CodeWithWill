import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Starfield = () => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random particles
  const particles = new Float32Array(
    Array.from({ length: 1000 }, () => Math.random() * 500 - 250)
  );

  // Animation frame to rotate the points
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
      <pointsMaterial size={2.5} color="#FFFFFF" opacity={0.8} transparent />
    </points>
  );
};

const StarfieldCanvas = () => {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-full">
      <ambientLight intensity={0.7} />
      <Starfield />
    </Canvas>
  );
};

export default StarfieldCanvas;