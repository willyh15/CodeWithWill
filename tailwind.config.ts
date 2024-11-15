import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a", // Dark background color
        accent: "#ffdd57", // Accent color, similar to the yellow in the images
        neonBlue: "#00f0ff",
        neonPink: "#ff00cc",
      },
      backgroundImage: {
        glass: "linear-gradient(to right bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))",
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        neon: "0 4px 15px rgba(0, 240, 255, 0.5), 0 4px 15px rgba(255, 0, 204, 0.5)",
        subtle: "0 4px 15px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;