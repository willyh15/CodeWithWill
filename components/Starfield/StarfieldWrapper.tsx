// components/Starfield/StarfieldWrapper.tsx
import StarfieldCanvas from "@/components/Starfield/Starfield";

interface StarfieldWrapperProps {
  color?: string;
  particleCount?: number;
  speed?: number;
  children: React.ReactNode;
}

const StarfieldWrapper: React.FC<StarfieldWrapperProps> = ({
  color = "#6E44FF",
  particleCount = 300,
  speed = 0.0005,
  children,
}) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0 -z-10">
        <StarfieldCanvas
          color={color}
          particleCount={particleCount}
          speed={speed}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default StarfieldWrapper;
