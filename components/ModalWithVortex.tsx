import React, { useRef } from "react";
import { useGlobalState } from "@/lib/globalState";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";

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

export const ModalWithVortex = () => {
  const { state, dispatch } = useGlobalState(); // Access state and dispatch from the hook
  const { modal } = state; // Extract modal from state

  if (!modal.isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Canvas className="absolute inset-0">
          <SwirlingVortex />
        </Canvas>
        <motion.div
          className="relative z-10 bg-white p-4 rounded shadow-lg max-w-sm w-full text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p
            className={`text-lg font-bold ${
              modal.type === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {modal.content}
          </p>
          <button
            onClick={() =>
              dispatch({
                type: "SET_MODAL",
                payload: { isVisible: false, type: null, content: "" },
              })
            }
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};