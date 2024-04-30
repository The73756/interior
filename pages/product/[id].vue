<script lang="ts" setup>
import { definePageMeta } from '@/.nuxt/imports'
import ProductDetailsBlock from '@/components/product-details/product-details-block.vue'
import { useProductDetailsStore } from '@/store/product-details'

definePageMeta({
  layout: 'without-sidebar'
})

useHead({
  bodyAttrs: {
    class: 'body-custom'
  }
})

const productDetailsStore = useProductDetailsStore()
const route = useRoute()

await useAsyncData('product-details', () => productDetailsStore.getProductDetails(route.params.id))

const { productDetails } = storeToRefs(productDetailsStore)
</script>

<template>
  <ProductDetailsBlock :product="productDetails" />
</template>
