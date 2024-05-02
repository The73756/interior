<script lang="ts" setup>
defineProps({
  customBg: {
    type: String,
    default: 'bg-light'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    :class="[
      customBg,
      {
        'cursor-not-allowed opacity-50': disabled,
        'animate-pulse': loading,
        'hover:scale-105': !disabled && !loading
      }
    ]"
    class="h-9 w-full rounded-2xl px-10 text-16-700 text-brown-red transition-transform md:h-11 md:text-18-700"
  >
    <slot />
  </button>
</template>
