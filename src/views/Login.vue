<script setup lang="ts">
import { ref } from 'vue'
import Input from '../components/BaseInput.vue'
import Button from '../components/BaseButton.vue'

//defineProps<{ msg: string }>()

const textValue = ref('')
const passwordValue = ref('')
const textareaValue = ref('')
const checkBoxValue = ref('')

</script>

<template>
<Input v-model="textValue" id="textInput" label="Text Input" type="text"/>
<pre>{{ textValue }}</pre>

<Input v-model="passwordValue" id="passwordInput" label="Password Input" type="password"/>
<pre>{{ passwordValue }}</pre>

<Input v-model="textareaValue" id="textarea" label="Textarea Input"/>
<pre>{{ textareaValue }}</pre>

<Button class="button-style">
  This is a Button
</Button>

<Button :href="`#`">
  This is a Link
</Button>
</template>
