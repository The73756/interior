<script lang="ts" setup>
import { definePageMeta } from '@/.nuxt/imports'
import BasketBlock from '@/components/basket/basket-block.vue'
import BasketEmpty from '@/components/basket/basket-empty.vue'
import { plural } from '@/helpers/plural'
import { useBasketStore } from '@/store/basket'

definePageMeta({
  layout: 'without-sidebar'
})

useHead({
  bodyAttrs: {
    class: 'body-custom'
  }
})

const basketStore = useBasketStore()
const { basket } = storeToRefs(basketStore)

const total = computed(() => {
  return basket.value.reduce((acc, product) => acc + product.price * product.count, 0)
})
</script>

<template>
  <div class="flex h-full flex-col">
    <div class="mb-6">
      <h2 class="text-5xl font-bold text-light">Корзина</h2>
      <p class="text-18-500 text-light">
        {{ basket.length }} {{ plural(basket.length, ['товар', 'товара', 'товаров']) }}
      </p>
    </div>

    <BasketBlock v-if="basket?.length" :total="total" :products="basket" />
    <BasketEmpty v-else />
  </div>
</template>
