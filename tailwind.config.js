/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F0C1A',
        bglight: '#1A172B',
        accentPurple: '#A259FF',
        accentBlue: '#3C9EFF',
        textLight: '#E4E4E4',
      },
      fontFamily: {
        furgatorio: ['"Furgatorio Titling"', 'sans-serif'],
        monserat: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}