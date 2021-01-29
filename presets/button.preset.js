const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addUtilities, theme, e }) {
      const btnUtilities = _.map(theme('colors'), (value, key) => {
        return {
          [`.${e(`btn-contained-${key}`)}`]: {
            'background-color': value[400],
            'color': theme('colors').white,
          },
          [`.${e(`btn-text-${key}`)}`]: {
            color: value[400]
          },
          [`.${e(`btn-outline-${key}`)}`]: {
            color: value[400],
            'border': `1px solid ${value[400]}`
          }
        }
      })

      addUtilities(btnUtilities)
    })
  ],
}