import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface StarfieldCanvasProps {
  color?: string;
  particleCount?: number;
  speed?: number;
}

const StarfieldContent = ({
  color,
  particleCount,
  speed,
}: StarfieldCanvasProps) => {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = new Float32Array(
    Array.from({ length: particleCount || 1000 }, () => Math.random() * 500 - 250)
  );

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += speed || 0.0005;
      pointsRef.current.rotation.y += speed || 0.0005;
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
      <pointsMaterial size={1.5} color={color || "#6E44FF"} />
    </points>
  );
};

const StarfieldCanvas: React.FC<StarfieldCanvasProps> = ({
  color = "#6E44FF",
  particleCount = 1000,
  speed = 0.0005,
}) => {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-full">
      <StarfieldContent color={color} particleCount={particleCount} speed={speed} />
    </Canvas>
  );
};

export default StarfieldCanvas;