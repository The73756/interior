<script lang="ts" setup>
defineProps({
  customBg: {
    type: String,
    default: 'bg-light'
  }
})
</script>

<template>
  <button
    :class="customBg"
    class="h-11 w-full rounded-2xl px-10 text-18-700 text-brown-red transition-transform hover:scale-105"
  >
    <slot />
  </button>
</template>
