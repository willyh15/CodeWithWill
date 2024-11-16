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
      backdropBlur: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        lg: "0 10px 15px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        xl: "1rem",
      },
      gradientColorStops: {
        "pink-to-purple": ["rgba(255, 105, 180, 0.3)", "rgba(138, 43, 226, 0.3)"],
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
