// Update StarfieldCanvas in `components/Starfield/Starfield.tsx`
import { useRouter } from "next/router";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface StarfieldCanvasProps {
  color?: string;
  particleCount?: number;
  speed?: number;
}

const Starfield = ({
  color = "#6E44FF",
  particleCount = 1000,
  speed = 0.0005,
}: StarfieldCanvasProps) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate particles dynamically
  const particles = new Float32Array(
    Array.from({ length: particleCount }, () => Math.random() * 500 - 250)
  );

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
  const router = useRouter();

  // Adjust Starfield based on route
  const routeConfig = {
    "/": { color: "#FFD700", particleCount: 1000, speed: 0.0005 },
    "/projects": { color: "#FF83FF", particleCount: 700, speed: 0.001 },
    "/contact": { color: "#00FF00", particleCount: 500, speed: 0.0003 },
  };

  const config = routeConfig[router.pathname] || {
    color: "#6E44FF",
    particleCount: 1000,
    speed: 0.0005,
  };

  return (
    <Canvas className="absolute top-0 left-0 w-full h-full">
      <ambientLight intensity={0.5} />
      <Starfield {...config} />
    </Canvas>
  );
};

export default StarfieldCanvas;
