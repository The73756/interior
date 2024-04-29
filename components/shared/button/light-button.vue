<script lang="ts" setup>
import { formatPrice } from '@/helpers/price-format'

defineProps({
  total: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  customBg: {
    type: String,
    default: 'bg-light hover:bg-brown-red hover:text-light'
  }
})
</script>

<template>
  <button
    @click="navigateTo('/checkout')"
    :class="customBg"
    class="mx-auto flex items-center justify-between gap-6 rounded-2xl px-8 py-2 text-brown-red transition-colors"
  >
    <span class="text-24-700">{{ formatPrice(total) }}</span>
    <span class="text-24-500">{{ label }}</span>
  </button>
</template>
