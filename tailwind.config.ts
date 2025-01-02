import type { Config } from "tailwindcss"; // Import the type
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
// Removed @tailwindcss/line-clamp as it is included by default in Tailwind CSS v3.3+

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Scan these folders for class usage
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enables dark mode via class strategy
  theme: {
    extend: {
      colors: {
        primary: "#6E44FF", // Vibrant purple
        secondary: "#4A3AFF", // Darker purple for accents
        highlight: "#FF83FF", // Bright pink for highlights
        background: "#1B1B2F", // Deep dark background
        text: "#EAEAEA", // Light text color
        'glass-bg': "rgba(255, 255, 255, 0.1)", // Glassmorphism background
        'glass-border': "rgba(255, 255, 255, 0.2)", // Glassmorphism border
      },
      fontFamily: {
        sans: ["Roboto Mono", "monospace"], // Custom font stack
      },
      boxShadow: {
        glow: "0 0 20px rgba(110, 68, 255, 0.7)", // Purple glow
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)", // Glassmorphism shadow
      },
      backdropBlur: {
        glass: "8px", // Glassmorphism blur
      },
      backgroundImage: {
        "hero-pattern": "url('/backgrounds/hero-bg.svg')", // Hero background
        "section-pattern": "url('/backgrounds/section-bg.svg')", // Section background
      },
      screens: {
        xs: "480px", // Small devices breakpoint
      },
    },
  },
  plugins: [
    forms, // Tailwind Forms plugin
    typography, // Tailwind Typography plugin
    aspectRatio, // Tailwind Aspect Ratio plugin
  ],
};

export default config;