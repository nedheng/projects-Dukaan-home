/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue:{
          700: "#146EB4",
          750: "#1174c2",
          800: "#1E2640",
          900: "#0E4F82"
        }
      },
      boxShadow: {
        'custom': '0 2px 6px 0px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}