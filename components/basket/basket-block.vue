<script lang="ts" setup>
import { PropType } from 'vue'
import ProductCard from '@/components/card/product-card.vue'
import { Product } from '@/types/product'
import { formatPrice } from '../../helpers/price-format'

defineProps({
  products: {
    type: Array as PropType<Product[]>,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div>
    <div class="grid-cols-auto-fill grid gap-5">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>

    <button
      class="bg-light hover:text-light mx-auto my-[70px] flex items-center justify-between gap-6 rounded-2xl px-8 py-2 text-brown-red transition-colors hover:bg-brown-red"
    >
      <span class="text-24-700">{{ formatPrice(total) }}</span>
      <span class="text-24-500"> Оформить заказ </span>
    </button>
  </div>
</template>
