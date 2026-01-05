/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './presentation/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {

      colors: {
        'primary': '#49129c',
        'secondary': {
          DEFAULT: '#850086',
          100: '#C51297',
          200: '#831266',
          // 300: '#850086',
          // 400: '#850086',
          // 500: '#850086',
          // 600: '#850086',
          // 700: '#850086',
          // 800: '#850086',
          // 900: '#850086',
        },
        'tertiary': '#EF2967',
      },

      fontFamily: {
        /* 'nombre como lo usaremos en el className': ['nombre de la fuente tal cual esta en el archivo de fuentes', 'fallback font family (si la fuente principal no esta disponible)'] */
        'work-black': ['WorkSans-Black', 'sans-serif'],
        'work-light': ['WorkSans-Light', 'sans-serif'],
        'work-medium': ['WorkSans-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
