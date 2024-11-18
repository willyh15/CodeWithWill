const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6E44FF",
        secondary: "#4A3AFF",
        highlight: "#FF83FF",
        background: "#1B1B2F",
        text: "#EAEAEA"
      },
      fontFamily: {
        sans: ["Roboto Mono", "sans-serif"]
      },
      boxShadow: {
        glass: "0 8px 32px rgba(31, 38, 135, 0.37)"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography")
  ]
};

export default config;