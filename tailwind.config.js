/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm-700': '700px', // Custom breakpoint for 700px
      },

      fontFamily: {
        sans: ["Your Custom Font", "sans-serif"],
      },
    },
  },
  plugins: [],
};
