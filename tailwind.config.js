/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["innovate-red"],
  theme: {
    extend: {
      colors: {
        "innovate-red": "#F54932",
      },
    },
  },
  plugins: [],
};
