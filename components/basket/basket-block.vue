<script lang="ts" setup>
import { PropType } from 'vue'
import ProductCard from '@/components/card/product-card.vue'
import LightButton from '@/components/shared/button/light-button.vue'
import { Product } from '@/types/product'

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
    <div class="grid grid-cols-auto-fill gap-5">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>

    <LightButton class="my-[70px]" label="Оформить заказ" :total="total" />
  </div>
</template>
