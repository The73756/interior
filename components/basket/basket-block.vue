<script lang="ts" setup>
import { PropType } from 'vue'
import { BasketProduct } from '@/api/services/basket/type'
import ProductCard from '@/components/card/product-card.vue'
import LightButton from '@/components/shared/button/light-button.vue'

defineProps({
  products: {
    type: Array as PropType<BasketProduct[]>,
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
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="{ ...product, id: product.productId }"
      />
    </div>

    <LightButton class="my-[70px]" label="Оформить заказ" :total="total" />
  </div>
</template>
