module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure all your source files are included
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
        coldiac: ['Coldiac', 'serif'],
        coldiacItalic: ['Coldiac-italic', 'serif'],
      },
    },
  },
  plugins: [],
};
