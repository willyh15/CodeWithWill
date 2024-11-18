const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo[500],
        secondary: colors.purple[500],
        background: colors.gray[900],
        neon: "#FFD700",
      },
      fontFamily: {
        sans: ["Roboto Mono", "sans-serif"],
      },
      boxShadow: {
        neon: "0 4px 30px rgba(255, 215, 0, 0.6)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};