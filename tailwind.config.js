/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#054853',
          50: '#e6f3f5',
          100: '#cce7eb',
          200: '#99cfd8',
          300: '#66b7c4',
          400: '#339fb1',
          500: '#00879d',
          600: '#054853',
          700: '#043c45',
          800: '#033037',
          900: '#022429',
        },
        secondary: {
          DEFAULT: '#ede0bd',
          50: '#fdfbf7',
          100: '#faf7ee',
          200: '#f6efdd',
          300: '#f1e7cc',
          400: '#ede0bd',
          500: '#e4d3a3',
          600: '#dbc689',
          700: '#d2b96f',
          800: '#c9ac55',
          900: '#c09f3b',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};