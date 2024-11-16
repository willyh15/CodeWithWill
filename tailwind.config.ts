import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a", // Dark background color
        accent: "#ffdd57", // Accent color, similar to the yellow in the images
        neonBlue: "#00f0ff",
        neonPink: "#ff00cc",
        neon: '#FFD700',
        'neon-light': '#ff99ff',
      },
      backgroundImage: {
        glass: "linear-gradient(to right bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))",
      },
      backdropBlur: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
      dropShadow: {
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".glass": {
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          borderRadius: "10px",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};

export default config;
