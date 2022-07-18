/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin') //eslint-disable-line

module.exports = {
  //eslint-disable-line
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
        central:['Caveat', 'sans-serif']
      },
      colors: {
        primary: '#EF6F6F',
        secondary: '#2D2D2D',
        tertiary: '#EDFD8A',
      },
      backgroundImage: {
        registerImg: "url('/src/assets/images/registerImg.jpg')", //eslint-disable-line
        loginImg: "url('/src/assets/images/loginImg.jpg')", //eslint-disable-line
        landingImg: "url('/src/assets/images/landing.png')", //eslint-disable-line
        heroImg: "url('/src/assets/images/hero.jpg')", //eslint-disable-line
        aboutImg: "url('/src/assets/images/about.jpg')", //eslint-disable-line
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
