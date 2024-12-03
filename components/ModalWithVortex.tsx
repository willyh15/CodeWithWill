// components/ModalWithVortex.tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function SwirlingVortex() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(
            Array.from({ length: 1000 }, () => Math.random() * 5 - 2.5)
          )}
          count={1000}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#FF83FF" />
    </points>
  );
}

export function ModalWithVortex({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Canvas className="absolute inset-0">
        <SwirlingVortex />
      </Canvas>
      <div className="relative z-10 bg-white p-4 rounded shadow-lg max-w-sm w-full text-center">
        <p
          className={`text-lg font-bold ${
            type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}