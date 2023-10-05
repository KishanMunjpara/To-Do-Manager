/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          800: "#141E33",
          button: '#d01f8e'
        },
      },
      screens: {
        "2xl": "1736px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "class",
};
