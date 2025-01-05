import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";

const StarfieldCanvas = dynamic(() => import("@/components/Starfield/Starfield"), { ssr: false });

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const routeConfig: Record<string, { starColor: string; speed: number }> = {
    "/": { starColor: "#FFD700", speed: 0.0005 },
    "/projects": { starColor: "#FF83FF", speed: 0.001 },
    "/contact": { starColor: "#00FF00", speed: 0.0003 },
    "/skills": { starColor: "#6E44FF", speed: 0.0007 },
  };

  const { starColor, speed } =
    routeConfig[router.pathname as keyof typeof routeConfig] || {
      starColor: "#6E44FF",
      speed: 0.0005,
    };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative overflow-hidden">
      <div ref={ref} className="absolute inset-0 -z-10">
        {inView && <StarfieldCanvas color={starColor} speed={speed} />}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}