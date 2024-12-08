// components/Layout/GlobalLayout.tsx
import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import LazyLoad from "react-lazyload";

// Dynamic imports for Three.js components with SSR disabled
const StarfieldCanvas = dynamic(() => import("@/components/Starfield/Starfield"), {
  ssr: false,
});
const ThreeDBackground = dynamic(() => import("@/components/ThreeDBackground"), {
  ssr: false,
});

export default function GlobalLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  // Dynamic configurations per route
  const routeConfig = {
    "/": { starColor: "#FFD700", threeColor: 0x6e44ff },
    "/projects": { starColor: "#FF83FF", threeColor: 0xff0000 },
    "/contact": { starColor: "#00FF00", threeColor: 0x00ff00 },
    "/skills": { starColor: "#6E44FF", threeColor: 0x00ff00 },
  };

  // Default colors if route is not in the configuration
  const { starColor, threeColor } = routeConfig[router.pathname] || {
    starColor: "#6E44FF",
    threeColor: 0x00ff00,
  };

  return (
    <div className="relative overflow-hidden">
      {/* Lazy-load backgrounds */}
      <LazyLoad height="100vh">
        <div className="absolute inset-0 -z-10">
          <StarfieldCanvas color={starColor} />
          <ThreeDBackground cubeColor={threeColor} />
        </div>
      </LazyLoad>

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}