const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  presets: [
    require('./presets/button.preset'),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
