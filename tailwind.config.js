/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",    // Matches all HTML and JS files in the root directory
    "./src/**/*.{html,js}"  // Matches all HTML and JS files in the src directory and its subdirectories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
