import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface StarfieldCanvasProps {
  color?: string;
  particleCount?: number;
  speed?: number;
}

const Starfield = ({ color = "#6E44FF", particleCount = 1000, speed = 0.0005 }: StarfieldCanvasProps) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random particles
  const particles = new Float32Array(
    Array.from({ length: particleCount }, () => Math.random() * 500 - 250)
  );

  // Animation frame to rotate the points
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += speed;
      pointsRef.current.rotation.y += speed;
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
      <pointsMaterial size={1.5} color={color} />
    </points>
  );
};

const StarfieldCanvas = (props: StarfieldCanvasProps) => {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-full">
      <ambientLight intensity={0.5} />
      <Starfield {...props} />
    </Canvas>
  );
};

export default StarfieldCanvas;
