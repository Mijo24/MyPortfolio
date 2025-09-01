/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: {
          400: '#10B981',
          500: '#059669',
          600: '#006400',
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'bounce': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
};