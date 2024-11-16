import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: '#FFD700', // Bright yellow for neon effects
        'neon-light': '#FFF5A3', // Lighter neon shade
        'gray-900': '#121212', // Dark gray for the background
        'gray-800': '#1F1F1F', // Slightly lighter dark gray
        'gray-700': '#2D2D2D', // Medium-dark gray
        'gray-400': '#B3B3B3', // Light gray for text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern sans-serif font
      },
      animation: {
        slideIn: 'slideIn 0.6s ease-out', // For scroll animations
        ping: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite', // For button effects
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        neon: '0 0 20px rgba(255, 215, 0, 0.8)', // Neon-like glow
      },
      backdropBlur: {
        lg: '10px', // Glassmorphism effect
      },
      screens: {
        sm: '640px', // Small devices (mobile)
        md: '768px', // Medium devices (tablet)
        lg: '1024px', // Large devices (desktop)
        xl: '1280px', // Extra large devices
        '2xl': '1536px', // 4K displays
      },
    },
  },
  plugins: [],
};

export default config;