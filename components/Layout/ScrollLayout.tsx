import React, { ReactNode, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, useScroll } from "@react-three/drei";
import StarfieldCanvas from "@/components/Starfield/Starfield";
import ThreeDBackground from "@/components/ThreeDBackground";

export default function ScrollLayout({ children }: { children: ReactNode }) {
  const scrollRef = useRef(null);

  return (
    <div className="relative overflow-hidden">
      {/* Scroll Controls */}
      <Canvas className="absolute inset-0 -z-10">
        <ScrollControls pages={3}>
          <ScrollAnimation scrollRef={scrollRef} />
          <StarfieldCanvas color="#FFD700" />
          <ThreeDBackground cubeColor={0x6e44ff} />
        </ScrollControls>
      </Canvas>

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function ScrollAnimation({ scrollRef }: { scrollRef: React.MutableRefObject<any> }) {
  const scroll = useScroll();

  useFrame(() => {
    if (scrollRef.current) {
      const scrollOffset = scroll.offset;
      scrollRef.current.rotation.y = scrollOffset * Math.PI * 2;
    }
  });

  return null;
}