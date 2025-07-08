/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{html,js}',
  './index.php'
];
export const theme = {
  extend: {
    backgroundImage: {
      'background-main': 'url("../assets/images/background-main.jpg")',
    },
    colors: {
      'main': '#312782',
      'green': '#2dab66',
      "blue": '#312782',
      'maron' : '#caba9f',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
};
export const plugins = [
  require('tailwindcss'),
  require('autoprefixer'),
];