<template>
  <div class="max-w-1/3">
    <label v-if="label" :for="id" class="font-semibold dark:font-normal">
      {{ label }}
    </label>
    <textarea
      :id="id"
      :type="type"
      :value="modelValue"
      @input="handleInput"
      class="mt-1 block w-full rounded border-gray-300 h-12 px-4 focus:border-blue-700 dark:focus:border-blue-300 dark:bg-gray-800 dark:border-gray-700"
    >
		</textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		modelValue: {
			type: String, Number,
			default: ''
		},
		id: {
			type: String,
			required: true
		},
		type: {
			type: String,
			default: 'text'
		},
		label: {
			type: String
		}
	},
	emits: ['update:modelValue'],

	setup(props, {emit}) {
		const handleInput = (event:Event) => {
			emit('update:modelValue', (event.target as HTMLInputElement).value)
		}
		return {
			handleInput
		}
	}
});
</script>