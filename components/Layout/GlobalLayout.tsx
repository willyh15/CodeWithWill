import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import LazyLoad from "react-lazyload";

// Dynamically import enhanced components
const StarfieldCanvas = dynamic(() => import("@/components/Starfield/Starfield"), { ssr: false });
const ThreeDBackground = dynamic(() => import("@/components/ThreeDBackground"), { ssr: false });

export default function GlobalLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  // Define route configuration with type safety
  const routeConfig: Record<string, { starColor: string; threeColor: number; speed: number }> = {
    "/": { starColor: "#FFD700", threeColor: 0x6e44ff, speed: 0.0005 },
    "/projects": { starColor: "#FF83FF", threeColor: 0xff0000, speed: 0.001 },
    "/contact": { starColor: "#00FF00", threeColor: 0x00ff00, speed: 0.0003 },
    "/skills": { starColor: "#6E44FF", threeColor: 0x0000ff, speed: 0.0007 },
  };

  // Use a type-safe fallback
  const { starColor, threeColor, speed } = routeConfig[router.pathname as keyof typeof routeConfig] || {
    starColor: "#6E44FF",
    threeColor: 0x00ff00,
    speed: 0.0005,
  };

  return (
    <div className="relative overflow-hidden">
      <LazyLoad height="100vh">
        <div className="absolute inset-0 -z-10">
          <StarfieldCanvas color={starColor} speed={speed} />
          <ThreeDBackground cubeColor={threeColor} />
        </div>
      </LazyLoad>
      <div className="relative z-10">{children}</div>
    </div>
  );
}