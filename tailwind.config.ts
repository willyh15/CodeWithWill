import type { Config } from "tailwindcss"; // Import type for IntelliSense
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Toggle dark mode using a `class`
  theme: {
    extend: {
      colors: {
        primary: "#6E44FF", // Vibrant purple for primary UI elements
        secondary: "#4A3AFF", // Accent color (slightly darker purple)
        highlight: "#FF83FF", // Bright pink for highlights
        background: "#1B1B2F", // Deep dark background for dark mode
        text: "#EAEAEA", // Light text color for better readability
        "glass-bg": "rgba(255, 255, 255, 0.1)", // Glassmorphism light background
        "glass-border": "rgba(255, 255, 255, 0.2)", // Glassmorphism light border
      },
      fontFamily: {
        sans: ["Roboto Mono", "monospace"], // Clean monospace aesthetic
      },
      boxShadow: {
        glow: "0 0 20px rgba(110, 68, 255, 0.7)", // Purple glow for hover/focus
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)", // Subtle glass effect shadow
      },
      backdropBlur: {
        glass: "8px", // Glassmorphism background blur
      },
      backgroundImage: {
        "hero-pattern": "url('/backgrounds/hero-bg.svg')", // Hero section background
        "section-pattern": "url('/backgrounds/section-bg.svg')", // Section dividers
      },
      screens: {
        xs: "480px", // Additional breakpoint for smaller devices
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-in-out", // Smooth fade-in animation
        "pulse-fast": "pulse 0.5s ease-in-out infinite", // Fast pulsating effect
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    forms, // Tailwind CSS Forms plugin for better form styling
    typography, // Typography plugin for beautiful content styling
    aspectRatio, // Aspect Ratio plugin for responsive media
  ],
};

export default config;