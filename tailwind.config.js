/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '1440': '1440px',
        '992': '992px',
        '400': '400px',
    
      },
    },
  },
  plugins: [],

}
