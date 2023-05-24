<script lang="ts" setup>
import { ref } from 'vue'
import Button from './BaseButton.vue'
//import Navigation from './BaseNavigation.vue';

const isOpen = ref(false)

const links = ref([{ name: 'Home', link: '/' }, { name: 'Login', link: '/login' }, { name: 'Other', link: '/' }])

</script>

<template>
	<Button
		class="button-rounded relative z-10 bg-gray-200 dark:bg-gray-700 hover:(bg-gray-300 dark:bg-gray-600) lg:hidden mr-20"
		@click="isOpen = !isOpen"
	>
		<span class="sr-only">Open main menu</span>
		<svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
		<svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</Button>

	<div class="lg:hidden absolute w-full">
		<nav 
			aria-label="Main Navigation"
			:class="isOpen ? 'block': 'sr-only'"
			class="bg-gray-100 dark:bg-gray-800 p-2"
		>
			<ul class="ml-2 bg-gray-200 dark:bg-gray-700 rounded">
				<li v-for="item in links"
					class="p-2 first:rounded-t last:rounded-b hover:(bg-gray-300 dark:bg-gray-600)"
				>
					<router-link :to="item.link" @click="isOpen = !isOpen" class="w-full inline-block">{{ item.name }}</router-link>
				</li>
			</ul>
		</nav>
	</div>

	<div class="<lg:hidden w-full lg:flex items-center">
		<nav 
			aria-label="Main Navigation"
			class=""
		>
			<ul class="flex justify-start bg-gray-200 dark:bg-gray-700">
				<li v-for="item in links"
					class="p-2 m-2 hover:(bg-gray-300 dark:bg-gray-600)"
				>
					<router-link :to="item.link" class="">{{ item.name }}</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>