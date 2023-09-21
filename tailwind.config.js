/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '360px',
        md: '720px',
        lg: '960px',
        'lg-max': { max: '960px' },
        xl: '1140px',
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
});
