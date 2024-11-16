import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: '#FFD700',
        'neon-light': '#FFF5A3',
        'gray-900': '#121212',
        'gray-800': '#1F1F1F',
        'gray-700': '#2D2D2D',
        'gray-400': '#B3B3B3',
        'purple-500': '#9F7AEA',
        'pink-500': '#ED64A6',
        'blue-500': '#4299E1',
        'yellow-500': '#F6E05E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        slideIn: 'slideIn 0.6s ease-out',
        ping: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        bounceIn: 'bounceIn 0.8s ease-out',
        growAndGlow: 'growAndGlow 1s ease-in-out infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        growAndGlow: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0px 0px 10px rgba(255, 215, 0, 0.5)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0px 0px 20px rgba(255, 215, 0, 0.8)' },
        },
      },
      boxShadow: {
        neon: '0 0 20px rgba(255, 215, 0, 0.8)',
        button: '0px 4px 20px rgba(255, 215, 0, 0.5)',
      },
      backdropBlur: {
        lg: '10px',
        xl: '20px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      zIndex: {
        '-1': '-1',
        '60': '60',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config;