/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
