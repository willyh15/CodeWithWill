import React, { useRef } from "react";
import { useGlobalState } from "@/lib/globalState";
import { Canvas, useFrame } from "@react-three/fiber";

function RotatingCube() {
  const cubeRef = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6E44FF" />
    </mesh>
  );
}

export const LoadingIndicator = () => {
  const { state } = useGlobalState(); // Extract state from the hook
  const { loading } = state; // Extract loading from state

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <RotatingCube />
      </Canvas>
    </div>
  );
};