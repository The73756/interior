<script lang="ts" setup>
defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: 'ок'
  }
})

const model = defineModel({
  type: String,
  required: false
})

const emits = defineEmits(['click-button'])
</script>

<template>
  <label
    class="outline-3 bg-light flex h-[45px] w-full items-center gap-2.5 rounded-2xl px-4 outline-yellow focus-within:outline"
  >
    <input
      v-model="model"
      class="bg-light text-18-500 placeholder:text-18-500 block h-full w-full text-brown-red placeholder:text-grey focus:outline-none"
      type="text"
      :placeholder="placeholder"
    />

    <button
      v-if="buttonText"
      @click="emits('click-button')"
      class="text-light flex h-6 items-center justify-center rounded-md bg-brown-red px-5 text-18-700 lowercase transition-colors hover:bg-brown"
    >
      {{ buttonText }}
    </button>
  </label>
</template>
