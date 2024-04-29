<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  limit: {
    type: Number,
    default: 300
  }
})

const isCollapsed = ref(true)
const isTextLong = computed(() => props.text.length > props.limit)

const collapsedText = computed(() => {
  if (!isTextLong.value) {
    return props.text
  }
  return isCollapsed.value ? `${props.text.slice(0, props.limit)}...` : props.text
})

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<template>
  <div class="text-18-500 text-light">
    <p v-if="isCollapsed">{{ collapsedText }}</p>
    <p v-else>{{ text }}</p>
    <button v-if="isTextLong" @click="toggleCollapse" class="text-18-500 underline">
      {{ isCollapsed ? 'Читать далее' : 'Скрыть' }}
    </button>
  </div>
</template>
