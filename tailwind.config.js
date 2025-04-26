/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f5ff',
          100: '#cceaff',
          200: '#99d5ff',
          300: '#66c0ff',
          400: '#33aaff',
          500: '#0095ff',
          600: '#0077cc',
          700: '#005999',
          800: '#003c66',
          900: '#001e33',
        },
        success: {
          100: '#d4edda',
          500: '#28a745',
          700: '#1e7e34',
        },
        warning: {
          100: '#fff3cd',
          500: '#ffc107',
          700: '#d39e00',
        },
        error: {
          100: '#f8d7da',
          500: '#dc3545',
          700: '#bd2130',
        },
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};