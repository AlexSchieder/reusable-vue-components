<script lang="ts" setup>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'

//defineProps<{  }>();

const items = ref([{ name: 'Home', link: '/' }, { name: 'Login', link: '/login' }, { name: 'Other', link: '/' }])

const isOpen = ref(false)
</script>

<template>
<div 
	class="py-4 flex items-center justify-between"
	>
	<BaseButton
		class="button-rounded"
		@click="isOpen =! isOpen"
	>
		<span class="sr-only">Open main menu</span>
		<svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
		<svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</BaseButton>

	<nav 
		aria-label="Main Navigation"
	>
		<ul 
			:class="isOpen ? 'block': 'hidden'"
			class="absolute"
		>
			<li v-for="item in items"
				class="p-2"
			>
				<router-link :to="item.link">{{ item.name }}</router-link>
			</li>
		</ul>
	</nav>
</div>
</template>

<style lang="scss" scoped>

</style>