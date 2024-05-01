<script lang="ts" setup>
import { PropType } from 'vue'
import { Product } from '@/api/services/product/type'
import ProductDetailsSlider from '@/components/product-details/product-details-slider.vue'
import BasketButton from '@/components/shared/button/basket-button.vue'
import CollapsedText from '@/components/shared/collapsed-text.vue'

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})
</script>

<template>
  <div class="flex gap-12">
    <ProductDetailsSlider :images="product.images" />
    <div class="flex flex-1 flex-col">
      <h2 class="mb-4 text-40-500 font-extrabold text-light">
        {{ product.title }}
      </h2>
      <div class="flex flex-1 flex-col">
        <CollapsedText :text="product.description" />
        <BasketButton class="mt-auto max-w-[365px]" :product="product" is-big />
      </div>
    </div>
  </div>
</template>
