/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0e15", // Deep dark anime tone
        surface: "#1a1b26", // Slightly elevated dark
        surfaceHover: "#24283b",
        primary: "#7aa2f7", // Neon blue
        secondary: "#bb9af7", // Anime purple
        accent: "#f7768e", // Neon pink
        success: "#9ece6a",
        warning: "#e0af68",
        info: "#0db9d7",
        characters: {
          naruto: "#ff9e64", // Orange
          goko: "#f7768e", // Red/Pink
          toji: "#9ece6a", // Dark green / cursed energy
          luffy: "#e0af68", // Yellow / Straw Hat
          gojo: "#7aa2f7", // Infinity blue
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(122, 162, 247, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(122, 162, 247, 0.6), 0 0 30px rgba(122, 162, 247, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
