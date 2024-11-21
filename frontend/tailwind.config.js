/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      '4xl': '60px',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      fontFamily:{
        sans:["IRANSans", "Arial", "sans-serif"],
        yekan: ['YekanFont', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

