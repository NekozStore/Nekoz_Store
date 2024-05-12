/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#F7B2BD', // Adjusted to a lighter shade for a softer appearance
        'brand-blue': '#B1DDF1', // A gentle blue, complementing the pink
      },
      fontFamily: {
        'heading': ['Pacifico', 'cursive'], // For headings to showcase friendliness
        'body': ['Montserrat', 'sans-serif'], // For body text, ensuring legibility
        'sub-heading': ['Amatic SC', 'cursive'], // Added based on your design for sub-headings
      },
    },
  },
  plugins: [],
}

