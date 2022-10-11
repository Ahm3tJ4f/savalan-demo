/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-gold': 'linear-gradient(to top, #B19A4D , #E3D7A0 )',
        'buta': 'url("../img/bg-header.jpg")'
      },
      fontFamily: {
        'CormorantGaramond': ['Cormorant Garamond', 'sans-serif'],
        'Arimo': ['Arimo', 'sans-serif'],
      },
    },

  },
  plugins: [],
}
