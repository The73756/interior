<script lang="ts" setup>
import ProductCard from '@/components/card/product-card.vue'
import PaginationBlock from '@/components/pagination/pagination-block.vue'
import CustomIcon from '@/components/shared/icon/custom-icon.vue'
import { Product } from '@/types/product'

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
</script>

<template>
  <div>
    <div class="mb-10 flex gap-8">
      <button class="flex items-center gap-1 text-18-700 text-white hover:underline">
        Сортировка
        <CustomIcon class="text-24-500" name="shared/down" />
      </button>
      <button class="flex items-center gap-1 text-18-700 text-white hover:underline">
        Фильтры
        <CustomIcon class="text-24-500" name="shared/down" />
      </button>
    </div>
    <div class="grid-cols-auto-fill grid gap-5">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
    <PaginationBlock class="pb-10 pt-[70px]" />
  </div>
</template>
