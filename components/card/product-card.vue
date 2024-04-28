<script lang="ts" setup>
import { PropType } from 'vue'
import CustomButton from '@/components/shared/button/custom-button.vue'
import CustomImage from '@/components/shared/custom-image.vue'
import { formatPrice } from '@/helpers/priceFormat'
import { Product } from '@/types/product'

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})
</script>

<template>
  <article>
    <div>
      <CustomImage :src="product.image" />
    </div>
    <h2>{{ product.title }}</h2>
    <div>
      <CustomButton>{{ formatPrice(product.price) }}</CustomButton>
    </div>
  </article>
</template>
