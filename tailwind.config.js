// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brutal-yellow': '#FACC15',
        'brutal-pink': '#FF00F5',
        'brutal-blue': '#00F0FF',
        'brutal-green': '#00FF41',
        'bg-main': '#FFFBEB', // Warna krem khas kertas
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
      boxShadow: {
        // Shadow kotak tanpa blur (Offset X, Offset Y, Blur, Spread, Color)
        'brutal': '8px 8px 0px 0px rgba(0,0,0,1)',
        'brutal-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-hover': '2px 2px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}