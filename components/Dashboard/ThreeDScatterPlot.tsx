import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { supabase } from "@/lib/supabaseClient";

const ThreeDScatterPlot = () => {
  const pointsRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("bookings").select("*");
      const positions = new Float32Array(data.map((_, i) => [i * 2, Math.random() * 10, Math.random() * 10]).flat());

      if (pointsRef.current) {
        pointsRef.current.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      }
    };

    fetchData();
  }, []);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial size={0.5} color="#FFD700" />
      </points>
    </Canvas>
  );
};

export default ThreeDScatterPlot;