import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function StarfieldCanvas({ color = "#FFD700", particleCount = 1000 }: { color?: string; particleCount?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(Array.from({ length: particleCount }, () => Math.random() * 500 - 250))}
          count={particleCount / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={1.5} color={color} />
    </points>
  );
}