<script lang="ts" setup>
import { ref } from 'vue'
import Button from './BaseButton.vue'
import Navigation from './BaseNavigation.vue';

const isOpen = ref(false)

const links = ref([{ name: 'Home', link: '/' }, { name: 'Login', link: '/login' }, { name: 'Other', link: '/' }])

</script>

<template>
<div class="">
	<Button
		class="relative"
		@click="isOpen = !isOpen"
	>
			<span class="mr-1">Ellie Schieder</span>
			<svg  :class="{'rotate-180' : isOpen}" class="h-4 w-4 transform transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
			</svg>
	</Button>
	<nav 
		:class="isOpen ? 'block': 'sr-only'"
		class="flex items-center default absolute w-full"
	>
		<ul class="ml-2 bg-gray-300 dark:bg-dark-700 min-w-1/3 rounded">
			<li v-for="item in links"
				class="p-2 first:rounded-t last:rounded-b hover:bg-gray-400 dark:bg-dark-500"
			>
				<router-link :to="item.link" @click="isOpen = !isOpen" class="w-full inline-block">{{ item.name }}</router-link>
			</li>
		</ul>
	</nav>

</div>
</template>