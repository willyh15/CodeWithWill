import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6E44FF",
        secondary: "#4A3AFF",
        highlight: "#FF83FF",
        background: "#1B1B2F",
        text: "#EAEAEA",
        "glass-bg": "rgba(255, 255, 255, 0.1)",
        "glass-border": "rgba(255, 255, 255, 0.2)",
      },
      fontFamily: {
        sans: ["Roboto Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(110, 68, 255, 0.7)",
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      backdropBlur: {
        glass: "8px",
      },
      backgroundImage: {
        "hero-pattern": "url('/backgrounds/hero-bg.svg')",
        "section-pattern": "url('/backgrounds/section-bg.svg')",
      },
      screens: {
        xs: "480px",
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-in-out",
        "pulse-fast": "pulse 0.5s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" }, // Converted to string
          "100%": { opacity: "1" }, // Converted to string
        },
      },
    },
  },
  plugins: [forms, typography, aspectRatio],
};

export default config;