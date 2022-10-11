/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-gold': 'linear-gradient(to top, #B19A4D , #E3D7A0 )'
      }
    },
    fontFamily: {
      'CormorantGaramond': ['Cormorant Garamond', 'sans-serif'],
      'Arimo': ['Arimo', 'sans-serif'],
    },
  },
  plugins: [],
}
