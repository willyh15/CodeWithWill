import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
        sans: ["Poppins", "sans-serif"], // Modern font from Google Fonts
      },
      boxShadow: {
        glow: "0 0 20px rgba(110, 68, 255, 0.7)", // Purple glow
      },
      backgroundImage: {
        'hero-pattern': "url('/public/backgrounds/hero-bg.svg')", // Hero background
        'section-pattern': "url('/public/backgrounds/section-bg.svg')", // Section background
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};

export default config;