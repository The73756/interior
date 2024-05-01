<script lang="ts" setup>
import MainCardList from '@/components/card-list/main-card-list.vue'
import { useProductStore } from '@/store/product'

const productStore = useProductStore()

await useAsyncData('product-groups', () => productStore.getProductGroups())

const { productGroups } = storeToRefs(productStore)
</script>

<template>
  <div>
    <MainCardList v-for="group in productGroups" :key="group.id" :products-group="group" />
  </div>
</template>
