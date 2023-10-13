/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      young: ["Young Serif", "serif"],
      open: ["Open Sans", "sans-serif"],
      average: ["Average Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "main-v1": "#1A1A30",
        "main-v2": "#E3E7EA",
      },
    },
  },
  plugins: [],
};
