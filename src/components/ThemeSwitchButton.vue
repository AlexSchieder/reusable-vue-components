<template>
	<button
		@click="changeTheme()"
		aria-label="toggle to change color-mode"
		title="toggle to change color-mode"
		class="fixed right-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-xl hover:bg-gray-300 hover:dark:bg-gray-700 rounded-full flex items-center content-center"
	>
		<span aria-live="assertive" class="sr-only">
			current color-mode is {{ theme }}
		</span>
		<svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
		</svg>
		<svg v-else-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
		</svg>
		<svg v-else-if="theme === 'system'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
		</svg>
	</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  name: 'ThemeBtn',

  setup: () => {
    const theme = ref('');

		theme.value = localStorage.getItem('theme') || 'system'

		// check system preferrence
		const checkSystemTheme = function () {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.remove('light')
				document.documentElement.classList.add('dark')
			}
			else {
				document.documentElement.classList.remove('dark')
				document.documentElement.classList.add('light')
			}
		}

		checkSystemTheme()

		const changeTheme = function () {
			if (theme.value === 'system') {
				theme.value = 'light'
				document.documentElement.classList.remove('dark')
				document.documentElement.classList.add('light')
				localStorage.setItem('theme', 'light')
			}

			else if (theme.value === 'light') {
				theme.value = 'dark'
				document.documentElement.classList.remove('light')
				document.documentElement.classList.add('dark')
				localStorage.setItem('theme', 'dark')
			}

			else if (theme.value === 'dark') {
				theme.value = 'system'
				checkSystemTheme()
			}

			return theme
		}

    return {
			changeTheme,
			theme
    }
  },
})
</script>