<script setup lang="ts">
import { ref } from 'vue'
import Input from '../components/InputDefault.vue'

defineProps<{ msg: string }>()

const value = ref('')
</script>

<template>
<Input v-model="value" id="defaultInput"/>
<pre>{{ value }}</pre>
</template>
