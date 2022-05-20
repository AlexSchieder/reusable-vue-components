<template>
	<form>
		<Input v-model="inputValue" id="passwordInput" label="Password Input" type="password"/>
	</form>
</template>
<script lang="ts" setup>
//defineProps<{  }>();
import { ref } from 'vue'
import Input from './BaseInput.vue'

const inputValue = ref('')
</script>