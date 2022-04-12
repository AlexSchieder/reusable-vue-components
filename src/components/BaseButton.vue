<template>
	<component
		:is="elementTag"
  	:href="href"
		class="btn font-semibold
	text-purple-600 border-purple-200 dark:border-purple-800
	hover:text-white hover:bg-purple-600 ring-purple-600"
	>
		<slot></slot>
	</component>
</template>
<style lang="scss" scoped>
.btn {
	@apply m-2 rounded-full inline-flex items-center justify-center rounded-md border-2 focus:(outline-none ring-2) hover:border-transparent ring-opacity-40 ring-offset-2 transition duration-200 ease-in-out no-underline min-w-[10ch] min-h-[44px] px-[0.75em] py-[0.25em];
}
</style>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{ 
	href?: string
}>();

 const elementTag = computed(() => props.href ? 'a' : 'button')
</script>