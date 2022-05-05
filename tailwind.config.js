const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./public/index.html', './src/components/**/*.{js,jsx,ts,tsx}'],

  theme: {
    fontFamily: {
      monserrat: ['Montserrat', ...defaultTheme.fontFamily['serif']],
    },

    fontSize: {
      xxs: '12px',
      xs: '13px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '22px',
      heading: '32px',
    },

    colors: {
      inherit: 'inherit',
      tranparent: 'tranparent',
      blue: {
        light: '#81b29a',
      },
      white: '#e6f1ff',
      black: '#000',
      fairy: '#f85888',
      fire: '#fb6c6c',
      fighting: '#fc5849',
      dragon: ' #f5a018',
      electric: '#f6c747',
      grass: '#78c850',
      normal: '#a8a878',
      bug: ' #48d0b0',
      ice: ' #7ac7ff',
      water: ' #429bed',
      psychic: ' #7c538c',
      poison: '#9f5bba',
      ghost: ' #7038f8',
      ground: ' #795548',
      rock: ' #b1736c',
      steel: ' #bababa',
      dark: ' #303943',
    },

    extend: {
      lineHeight: {
        1.1: 1.1,
        1.3: 1.3,
      },
      content: {
        empty: '""',
      },
    },
  },
  plugins: [],
};
