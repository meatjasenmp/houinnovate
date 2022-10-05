/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-innovate-red",
    "bg-innovate-blue",
    "bg-innovate-pink",
    "bg-innovate-pink",
    "bg-innovate-green",
    "bg-innovate-neon",
    "bg-innovate-black",
    "text-innovate-red",
    "text-innovate-blue",
    "text-innovate-black",
    "text-innovate-pink",
    "text-innovate-green",
    "text-innovate-neon",
  ],
  theme: {
    extend: {
      colors: {
        "innovate-red": "#F54932",
        "innovate-pink": "#F6A2CB",
        "innovate-blue": "#1F2CA8",
        "innovate-green": "#0B6849",
        "innovate-neon": "#DCE63C",
        "innovate-black": "#000000",
      },
    },
  },
  plugins: [],
};
