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
    "bg-innovate-white",
    "text-innovate-red",
    "text-innovate-blue",
    "text-innovate-black",
    "text-innovate-pink",
    "text-innovate-green",
    "text-innovate-neon",
    "text-innovate-white",
    "prose",
    "prose-black",
    "prose-white",
    "text-kraftigBold",
  ],
  theme: {
    fontFamily: {
      body: ["Sohne-Kraftig-Normal", "sans-serif"],
      kraftigBold: ["Sohne-Kraftig-Bold", "sans-serif"],
    },
    extend: {
      colors: {
        "innovate-red": "#F54932",
        "innovate-pink": "#F6A2CB",
        "innovate-blue": "#1F2CA8",
        "innovate-green": "#0B6849",
        "innovate-neon": "#DCE63C",
        "innovate-black": "#000000",
        "innovate-white": "#FFFFFF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
