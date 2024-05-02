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
  <div class="flex flex-wrap gap-12">
    <ProductDetailsSlider :images="product.images" />
    <div class="flex flex-1 flex-col">
      <h2 class="mb-4 text-32-500 font-extrabold text-light md:text-40-500">
        {{ product.title }}
      </h2>
      <div class="flex flex-1 flex-col">
        <CollapsedText class="max-md:mb-2" :text="product.description" />
        <BasketButton class="mt-auto max-w-[365px]" :product="product" is-big />
      </div>
    </div>
  </div>
</template>
