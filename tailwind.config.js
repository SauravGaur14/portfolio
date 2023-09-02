/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sourceSans: ["Source Code Pro"],
      sans: ["Martel Sans", "sans-serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        bg1: "url('/src/assets/bg1.jpg')",
        hero_pattern: "url('/src/assets/bg2.jpg')",
      },
    },
  },
  plugins: [],
};
