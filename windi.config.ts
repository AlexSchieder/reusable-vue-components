import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'

export default defineConfig({
  transformCSS: "pre",
  theme: {
    extend: {
     //
    },
  },
  shortcuts: { 
    'button': 'm-2 inline-flex items-center justify-center rounded-md border-2 focus:(outline-none ring-2) hover:border-transparent ring-opacity-40 ring-offset-2 transition duration-200 ease-in-out no-underline min-w-[10ch] min-h-[44px] px-[0.75em] py-[0.25em] font-semibold',

    'button-style': 'text-purple-600 border-purple-200 dark:border-purple-800 hover:(text-white bg-purple-600) ring-purple-600',

    'button-rounded': 'p-2 rounded-full min-w-[44px] bg-gray-100 dark:bg-gray-800 text-xl hover:bg-gray-300 hover:dark:bg-gray-700 border-transparent'
   },
  darkMode: 'class',
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        p: { width: 'clamp(45ch, 50%, 75ch)' },
      })
    }),
    require('windicss/plugin/typography'),
    require('windicss/plugin/forms'),
  ],
})
