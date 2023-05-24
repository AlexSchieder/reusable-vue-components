<script lang="ts" setup>
import { ref } from 'vue'

type item = { name: string, link: string }

const props = defineProps<{
	items: item[]
}>()

</script>

<template>
	<nav 
		aria-label="Main Navigation"
		class="bg-gray-100 p-2"
	>
		<ul class="ml-2 bg-gray-200 dark:bg-gray-700 rounded">
			<li v-for="item in props.items"
				class="p-2 first:rounded-t last:rounded-b hover:(bg-gray-300 dark:bg-gray-600)"
			>
				<router-link :to="item.link" class="w-full inline-block">{{ item.name }}</router-link>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
</style>