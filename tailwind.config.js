/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        acid: '#b9f227',
        ink: '#080b0d',
        fog: '#f3f5f2',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(7, 11, 13, 0.12)',
        acid: '0 12px 34px rgba(185, 242, 39, 0.24)',
      },
      fontFamily: {
        sans: ['Inter', 'Aptos', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
