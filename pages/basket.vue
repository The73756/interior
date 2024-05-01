<script lang="ts" setup>
import { definePageMeta } from '@/.nuxt/imports'
import BasketBlock from '@/components/basket/basket-block.vue'
import BasketEmpty from '@/components/basket/basket-empty.vue'
import { plural } from '@/helpers/plural'
import { Product } from '@/types/product'

definePageMeta({
  layout: 'without-sidebar'
})

useHead({
  bodyAttrs: {
    class: 'body-custom'
  }
})

const products = ref<Product[]>([])

for (let i = 1; i <= 20; i++) {
  products.value.push({
    id: i.toString(),
    title: `Product ${i}`,
    price: 100 * i,
    image:
      'https://ru-apple.com.ru/image/cache/catalog/products_images/Apple-iPhone-14-Pro-Max-Space-Black-1-1000x1000.png'
  })
}

const total = computed(() => {
  return products.value.reduce((acc, product) => acc + product.price, 0)
})
</script>

<template>
  <div class="flex h-full flex-col">
    <div class="mb-6">
      <h2 class="text-5xl font-bold text-light">Корзина</h2>
      <p class="text-18-500 text-light">
        {{ products.length }} {{ plural(products.length, ['товар', 'товара', 'товаров']) }}
      </p>
    </div>

    <BasketBlock v-if="products?.length" :total="total" :products="products" />
    <BasketEmpty v-else />
  </div>
</template>
