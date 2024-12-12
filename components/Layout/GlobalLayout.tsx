import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";

const StarfieldCanvas = dynamic(() => import("@/components/Starfield/Starfield"), { ssr: false });
const ThreeDBackground = dynamic(() => import("@/components/ThreeDBackground"), { ssr: false });

export default function GlobalLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const routeConfig: Record<string, { starColor: string; threeColor: number; speed: number }> = {
    "/": { starColor: "#FFD700", threeColor: 0x6e44ff, speed: 0.0005 },
    "/projects": { starColor: "#FF83FF", threeColor: 0xff0000, speed: 0.001 },
    "/contact": { starColor: "#00FF00", threeColor: 0x00ff00, speed: 0.0003 },
    "/skills": { starColor: "#6E44FF", threeColor: 0x0000ff, speed: 0.0007 },
  };

  const { starColor, threeColor, speed } =
    routeConfig[router.pathname as keyof typeof routeConfig] || {
      starColor: "#6E44FF",
      threeColor: 0x00ff00,
      speed: 0.0005,
    };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative overflow-hidden">
      <div ref={ref} className="absolute inset-0 -z-10">
        {inView && (
          <>
            <StarfieldCanvas color={starColor} speed={speed} />
            <ThreeDBackground cubeColor={threeColor} />
          </>
        )}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
