/** @type {import('tailwindcss').Config} */

const headerDefaults = {
  fontFamily: "Sohne-Kraftig-Bold",
  marginBottom: "0.5rem",
  lineHeight: 1,
};

const bodyDefaults = {
  lineHeight: 1.5,
  fontFamily: "Sohne-Kraftig-Normal",
};

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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: "3.5rem",
              ...headerDefaults,
            },
            h2: {
              fontSize: "2.875rem",
              ...headerDefaults,
            },
            h3: {
              fontSize: "1.875rem",
              ...headerDefaults,
            },
            h4: {
              fontSize: "1.563rem",
              ...headerDefaults,
            },
            h5: {
              fontSize: "1.125rem",
              lineHeight: 1.5,
              marginBottom: "1rem",
            },
            p: {
              ...bodyDefaults,
            },
            li: {
              ...bodyDefaults,
            },
            span: {
              fontFamily: "Sohne-Kraftig-Normal",
            },
          },
        },
        white: {
          css: {
            "--tw-prose-body": theme("colors.white"),
            "--tw-prose-headings": theme("colors.white"),
            "--tw-prose-lead": theme("colors.white"),
            "--tw-prose-links": theme("colors.white"),
            "--tw-prose-bold": theme("colors.white"),
            "--tw-prose-counters": theme("colors.white"),
            "--tw-prose-bullets": theme("colors.white"),
            "--tw-prose-hr": theme("colors.white"),
            "--tw-prose-quotes": theme("colors.white"),
            "--tw-prose-quote-borders": theme("colors.white"),
            "--tw-prose-captions": theme("colors.white"),
            "--tw-prose-code": theme("colors.white"),
            "--tw-prose-pre-code": theme("colors.white"),
            "--tw-prose-pre-bg": theme("colors.white"),
            "--tw-prose-th-borders": theme("colors.white"),
            "--tw-prose-td-borders": theme("colors.white"),
            "--tw-prose-invert-body": theme("colors.white"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.white"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.white"),
            "--tw-prose-invert-bullets": theme("colors.white"),
            "--tw-prose-invert-hr": theme("colors.white"),
            "--tw-prose-invert-quotes": theme("colors.white"),
            "--tw-prose-invert-quote-borders": theme("colors.white"),
            "--tw-prose-invert-captions": theme("colors.white"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.white"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.white"),
            "--tw-prose-invert-td-borders": theme("colors.white"),
          },
        },
        black: {
          css: {
            "--tw-prose-body": theme("colors.black"),
            "--tw-prose-headings": theme("colors.black"),
            "--tw-prose-lead": theme("colors.black"),
            "--tw-prose-links": theme("colors.black"),
            "--tw-prose-bold": theme("colors.black"),
            "--tw-prose-counters": theme("colors.black"),
            "--tw-prose-bullets": theme("colors.black"),
            "--tw-prose-hr": theme("colors.black"),
            "--tw-prose-quotes": theme("colors.black"),
            "--tw-prose-quote-borders": theme("colors.black"),
            "--tw-prose-captions": theme("colors.black"),
            "--tw-prose-code": theme("colors.black"),
            "--tw-prose-pre-code": theme("colors.black"),
            "--tw-prose-pre-bg": theme("colors.black"),
            "--tw-prose-th-borders": theme("colors.black"),
            "--tw-prose-td-borders": theme("colors.black"),
            "--tw-prose-invert-body": theme("colors.black"),
            "--tw-prose-invert-headings": theme("colors.black"),
            "--tw-prose-invert-lead": theme("colors.black"),
            "--tw-prose-invert-links": theme("colors.black"),
            "--tw-prose-invert-bold": theme("colors.black"),
            "--tw-prose-invert-counters": theme("colors.black"),
            "--tw-prose-invert-bullets": theme("colors.black"),
            "--tw-prose-invert-hr": theme("colors.black"),
            "--tw-prose-invert-quotes": theme("colors.black"),
            "--tw-prose-invert-quote-borders": theme("colors.black"),
            "--tw-prose-invert-captions": theme("colors.black"),
            "--tw-prose-invert-code": theme("colors.black"),
            "--tw-prose-invert-pre-code": theme("colors.black"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.black"),
            "--tw-prose-invert-td-borders": theme("colors.black"),
          },
        },
      }),
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
