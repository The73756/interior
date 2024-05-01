<script lang="ts" setup>
import { BaseFieldProps, GenericObject } from 'vee-validate'
import { ref, onMounted, watch, nextTick } from 'vue'

defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  minHeight: {
    type: String,
    default: 'none'
  },
  error: {
    type: String,
    default: ''
  },
  attrs: {
    type: Object as () => BaseFieldProps & GenericObject,
    default: () => ({})
  },
  maxHeight: {
    type: String,
    default: '400px'
  }
})

const model = defineModel({ type: String })

const textareaRef = ref<HTMLTextAreaElement | null>(null)

watch(
  () => model.value,
  () => {
    adjustHeight()
  }
)

const adjustHeight = () => {
  nextTick(() => {
    if (textareaRef.value) {
      textareaRef.value.style.height = 'auto' // reset for recalculate scrollHeight
      textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`
    }
  })
}

onMounted(adjustHeight)
</script>

<template>
  <div>
    <label
      class="outline-3 block h-full w-full rounded-2xl bg-light px-4 outline-yellow focus-within:outline"
    >
      <textarea
        ref="textareaRef"
        v-model="model"
        :style="{
          minHeight: minHeight,
          maxHeight: maxHeight
        }"
        :placeholder="placeholder"
        v-bind="attrs"
        class="outline-lavender placeholder:text-lavender block h-full w-full resize-none overflow-auto rounded-2xl bg-light py-2 text-18-500 text-brown-red placeholder:text-18-500 placeholder:text-grey focus:outline-none"
      />
    </label>
    <span v-if="error" class="mt-1 block text-12-500 text-red-200">{{ error }}</span>
  </div>
</template>
