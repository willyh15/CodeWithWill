// components/Layout/GlobalLayout.tsx
import React, { ReactNode } from "react";
import StarfieldCanvas from "@/components/Starfield/Starfield";
import ThreeDBackground from "@/components/ThreeDBackground";
import { useRouter } from "next/router";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  // Dynamic configurations per route
  const routeConfig = {
    "/": { starColor: "#FFD700", threeColor: 0x6e44ff },
    "/projects": { starColor: "#FF83FF", threeColor: 0xff0000 },
    "/contact": { starColor: "#00FF00", threeColor: 0x00ff00 },
    "/skills": { starColor: "#6E44FF", threeColor: 0x00ff00 },
  };

  const { starColor, threeColor } = routeConfig[router.pathname] || {
    starColor: "#6E44FF",
    threeColor: 0x00ff00,
  };

  return (
    <div className="relative overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 -z-10">
        <StarfieldCanvas color={starColor} />
        <ThreeDBackground cubeColor={threeColor} />
      </div>

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}