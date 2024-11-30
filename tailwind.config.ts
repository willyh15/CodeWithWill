import type { Config } from "tailwindcss"; // Import the type
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import lineClamp from "@tailwindcss/line-clamp";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enables dark mode via class
  theme: {
    extend: {
      colors: {
        primary: "#6E44FF", // Vibrant purple
        secondary: "#4A3AFF", // Darker purple for accents
        highlight: "#FF83FF", // Bright pink for highlights
        background: "#1B1B2F", // Deep dark background
        text: "#EAEAEA", // Light text color
      },
      fontFamily: {
        sans: ["Roboto Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(110, 68, 255, 0.7)", // Purple glow
      },
      backgroundImage: {
        "hero-pattern": "url('/backgrounds/hero-bg.svg')", // Hero background
        "section-pattern": "url('/backgrounds/section-bg.svg')", // Section background
      },
      screens: {
        xs: "480px", // Small devices
      },
    },
  },
  plugins: [forms, typography, aspectRatio, lineClamp],
};

export default config;
