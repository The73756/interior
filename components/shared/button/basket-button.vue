<script lang="ts" setup>
import CustomIcon from '@/components/shared/icon/custom-icon.vue'
import { formatPrice } from '@/helpers/price-format'

defineProps({
  price: {
    type: Number,
    required: true
  },
  isBig: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    :class="
      isBig
        ? 'h-12 bg-light text-24-700 text-brown-red hover:bg-brown-red hover:text-light'
        : 'h-9 bg-brown-red text-16-600 text-light hover:bg-brown'
    "
    class="flex w-full items-center justify-between rounded-2xl px-4 transition-colors"
  >
    <span>{{ formatPrice(price) }}</span>
    <span v-if="isBig" class="text-24-500">В корзину</span>
    <CustomIcon v-else name="shared/cart" class="text-20-700" />
  </button>
</template>
