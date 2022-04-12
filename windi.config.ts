import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'

export default defineConfig({
  transformCSS: "pre",
  theme: {
    extend: {
     //
    },
  },
  darkMode: 'class',
  plugins: [
    require('windicss/plugin/typography'),
    require('windicss/plugin/forms'),
  ],
})
