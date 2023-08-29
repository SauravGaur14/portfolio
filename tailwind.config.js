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
        hero_pattern: "url('/public/subtle-prism.svg')",
      },
    },
  },
  plugins: [],
};
