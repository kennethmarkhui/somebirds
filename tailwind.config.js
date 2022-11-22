/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#f8f7f5",
      },
      backgroundImage: {
        "hero-pattern": "url('/hero_pattern.png')",
      },
    },
  },
  plugins: [],
};
