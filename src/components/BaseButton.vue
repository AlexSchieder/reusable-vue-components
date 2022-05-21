<template>
	<!-- <component
		:is="elementTag"
  	:href="href"
		class="button"
	>
		<slot></slot>
	</component> -->
	<button class="button" type="button">
		<slot></slot>
	</button>
</template>

<script lang="ts" setup>
/*import { computed } from 'vue'

const props = defineProps<{ 
	href?: string
}>();

 const elementTag = computed(() => props.href ? 'a' : 'button')*/
</script>