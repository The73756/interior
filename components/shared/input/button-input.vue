<script lang="ts" setup>
import { BaseFieldProps, GenericObject } from 'vee-validate'

defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: 'ок'
  },
  error: {
    type: String,
    default: ''
  },
  attrs: {
    type: Object as () => BaseFieldProps & GenericObject,
    default: () => ({})
  }
})

const model = defineModel({
  type: String,
  required: false
})

const emits = defineEmits(['click-button'])
</script>

<template>
  <div>
    <label
      class="outline-3 flex h-[45px] w-full items-center gap-2.5 rounded-2xl bg-light px-4 outline-yellow focus-within:outline"
    >
      <input
        v-bind="attrs"
        v-model="model"
        class="block h-full w-full bg-light text-18-500 text-brown-red placeholder:text-18-500 placeholder:text-grey focus:outline-none"
        type="text"
        :placeholder="placeholder"
      />

      <button
        v-if="buttonText"
        @click="emits('click-button')"
        type="button"
        class="flex h-6 items-center justify-center rounded-md bg-brown-red px-5 text-18-700 lowercase text-light transition-colors hover:bg-brown"
      >
        {{ buttonText }}
      </button>
    </label>
    <span v-if="error" class="mt-1 block text-12-500 text-red-200">{{ error }}</span>
  </div>
</template>
