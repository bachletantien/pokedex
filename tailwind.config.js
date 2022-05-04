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
