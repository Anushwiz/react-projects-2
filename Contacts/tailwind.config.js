/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Blue: '#0000a3',

        'Blue Grotto': '#0067b3',

        Aquamarine: '#40b0df',

        Yellow: '#ffd53d',
      },
    },
  },
  plugins: [],
};
