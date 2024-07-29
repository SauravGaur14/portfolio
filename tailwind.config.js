/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Martel Sans", "sans-serif"],
      alegreya: ["Alegreya", "serif"],
    },
    extend: {
      backgroundImage: {
        hero_pattern: "url('/src/assets/bg2.jpg')",
      },
    },
  },
  plugins: [],
};
