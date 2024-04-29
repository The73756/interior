<script lang="ts" setup>
import { definePageMeta } from '@/.nuxt/imports'
import ProductDetailsBlock from '@/components/product-details/product-details-block.vue'

definePageMeta({
  layout: 'without-sidebar'
})

useHead({
  bodyAttrs: {
    class: 'body-custom'
  }
})
</script>

<template>
  <ProductDetailsBlock />
</template>
