<template>
	<component
		:is="elementTag"
  	:href="href"
		class="button button-style"
	>
		<slot></slot>
	</component>
</template>
<style lang="scss" scoped>

</style>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{ 
	href?: string
}>();

 const elementTag = computed(() => props.href ? 'a' : 'button')
</script>