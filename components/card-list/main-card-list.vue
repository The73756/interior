<script lang="ts" setup>
import ProductCard from '@/components/card/product-card.vue'
import CustomTitle from '@/components/shared/custom-title.vue'
import CustomIcon from '@/components/shared/icon/custom-icon.vue'
import { Product } from '@/types/product'

defineProps({
  title: {
    type: String,
    default: 'Товары дня'
  },
  products: {
    type: Array as () => Product[],
    default: () => [
      {
        id: '1',
        title: 'Product 1',
        price: 100,
        image:
          'https://ru-apple.com.ru/image/cache/catalog/products_images/Apple-iPhone-14-Pro-Max-Space-Black-1-1000x1000.png'
      },
      {
        id: '2',
        title: 'Product 2',
        price: 200,
        image:
          'https://ru-apple.com.ru/image/cache/catalog/products_images/Apple-iPhone-14-Pro-Max-Space-Black-1-1000x1000.png'
      },
      {
        id: '3',
        title: 'Product 3',
        price: 300,
        image:
          'https://ru-apple.com.ru/image/cache/catalog/products_images/Apple-iPhone-14-Pro-Max-Space-Black-1-1000x1000.png'
      },
      {
        id: '4',
        title: 'Product 4',
        price: 300,
        image:
          'https://ru-apple.com.ru/image/cache/catalog/products_images/Apple-iPhone-14-Pro-Max-Space-Black-1-1000x1000.png'
      }
    ]
  }
})
</script>

<template>
  <section>
    <CustomTitle as="h2" size="32" weight="semibold" class="text-light mb-4 font-bold">
      Товары дня
    </CustomTitle>
    <div class="grid-cols-auto-fill grid gap-5">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
      <NuxtLink
        to="/catalog/slug"
        class="text-20-700 text-light flex h-full w-full items-center justify-center gap-4 rounded-2xl bg-brown-red px-4 transition-colors hover:bg-brown"
      >
        <span>Смотреть еще</span>
        <CustomIcon class="text-24-500" name="shared/arrow" />
      </NuxtLink>
    </div>
  </section>
</template>
