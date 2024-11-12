
/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // Enable JIT mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'sequential': 'slideIn 2s ease-in-out 1s infinite',
        'slide-1': 'slideIn 3s ease-in-out 0s 1',
        'slide-2': 'slideIn 3s ease-in-out 3s 1',
        'slide-3': 'slideIn 3s ease-in-out 6s 1',
      },
      fontFamily: {
        sans: ["Your Custom Font", "sans-serif"],
      },
    },
  },
  plugins: [],
};

