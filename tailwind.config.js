/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brutal-bg': '#FFFBEB',
        'brutal-green': '#00FF41',
        'brutal-magenta': '#FF00F5',
        'brutal-orange': '#FF5C00',
        'brutal-blue': '#00F0FF',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px rgba(0,0,0,1)',
        'brutal-hover': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-active': '0px 0px 0px 0px rgba(0,0,0,1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        jitter: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(2px)' },
          '50%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(1px)' },
        }
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
        jitter: 'jitter 0.2s linear infinite',
      }
    },
  },
  plugins: [],
}