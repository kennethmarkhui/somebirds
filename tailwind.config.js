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
        "hero-pattern": "url('/button_pattern/hero_pattern.png')",
        "banana-pattern": "url('/button_pattern/banana_pattern.jpg')",
        "space-pattern": "url('/button_pattern/space_pattern.jpg')",
        "jungle-pattern": "url('/button_pattern/jungle_pattern.png')",
        "car-pattern": "url('/button_pattern/car_pattern.jpg')",
      },
    },
  },
  plugins: [],
};
