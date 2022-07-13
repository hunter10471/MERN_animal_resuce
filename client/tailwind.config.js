/** @type {import('tailwindcss').Config} */
module.exports = { //eslint-disable-line
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        heading:['Poppins','sans-serif'],
        sans:['Roboto','sans-serif']
      },
      colors:{
        primary:'#EF6F6F',
        secondary:'#2D2D2D',
        tertiary:'#EDFD8A'
      },
      backgroundImage:{
        'registerImg':"url('/src/assets/images/registerImg.jpg')" ,  //eslint-disable-line
        'loginImg':"url('/src/assets/images/loginImg.jpg')",  //eslint-disable-line
        'landingImg':"url('/src/assets/images/landing.png')"   //eslint-disable-line
      }
    },
  },
  plugins: [],
};
