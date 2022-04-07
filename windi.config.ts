import { defineConfig } from 'windicss/helpers'

export default defineConfig({
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
