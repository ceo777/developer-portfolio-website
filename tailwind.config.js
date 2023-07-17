/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '3rem',
        md: '2rem',
        lg: '3rem',
        xl: '8rem',
        '2xl': '8rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
