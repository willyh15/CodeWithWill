import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three"; // Import THREE
import { supabase } from "@/lib/supabaseClient";

interface Booking {
  id: string;
  name: string;
  email: string;
  date: string;
  notes?: string;
  created_at: string;
}

const ThreeDScatterPlot = () => {
  const pointsRef = useRef<THREE.Points>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from<Booking>("bookings").select("*");
      if (error || !data) {
        console.error("Failed to fetch data", error);
        return;
      }

      // Explicitly type both `booking` and `i`
      const positions = new Float32Array(
        data.map((booking: Booking, i: number) => [i * 2, Math.random() * 10, Math.random() * 10]).flat()
      );

      if (pointsRef.current) {
        pointsRef.current.geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3)
        );
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