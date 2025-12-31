/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plage: {
          dark: '#0A1F26',
          'petrol-dark': '#051A20',
          teal: '#00D9C0',
          'teal-light': '#1FFFD9',
          'teal-dark': '#00B8A3',
          gold: '#F4C542',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-teal': '0 0 20px rgba(0, 217, 192, 0.3)',
        'glow-gold': '0 0 20px rgba(244, 197, 66, 0.3)',
      }
    },
  },
  plugins: [],
};
