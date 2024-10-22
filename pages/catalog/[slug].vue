<script lang="ts" setup>
import ProductCard from '@/components/card/product-card.vue'
import PaginationBlock from '@/components/pagination/pagination-block.vue'
import CustomImage from '@/components/shared/custom-image.vue'
import CustomIcon from '@/components/shared/icon/custom-icon.vue'
import SortBlock from '@/components/sort/sort-block.vue'
import { useCategoryStore } from '@/store/categories'
import { useProductStore } from '@/store/product'

const productStore = useProductStore()
const categoryStore = useCategoryStore()

const route = useRoute()
await useAsyncData('products', () => productStore.getProducts(route.params.slug))

const { products, total } = storeToRefs(productStore)

const currentCategory = categoryStore.findCategoryBySlug(route.params.slug)
</script>

<template>
  <div class="flex flex-1 flex-col">
    <div class="mb-5 flex flex-wrap items-center justify-between gap-2 md:mb-10 md:gap-4">
      <h2 v-if="currentCategory" class="text-3xl font-bold text-light md:text-5xl">
        {{ currentCategory.name }}
      </h2>

      <SortBlock />
    </div>
    <div v-if="total === 0" class="m-auto flex flex-col items-center justify-center">
      <CustomImage
        class="mb-4"
        img-class="w-[200px] block height-auto"
        src="/images/search-empty.svg"
        alt="Ничего не найдено"
      />
      <h2 class="text-32-500 font-bold text-light">В этой категории еще нет товаров</h2>
      <p class="text-18-400 text-light">
        Но мы стараемся, что бы в ней появилось много интересного
      </p>

      <NuxtLink
        to="/"
        class="btn btn-primary mt-6 flex items-center gap-2 rounded-2xl bg-light px-4 py-2 pl-2 text-18-500 font-bold text-brown-red transition-colors hover:bg-brown-red hover:text-light"
      >
        <CustomIcon name="shared/arrow" class="rotate-180 text-32-500" />
        Вернуться на главную
      </NuxtLink>
    </div>
    <div v-else class="flex flex-1 flex-col">
      <div class="grid grid-cols-auto-fill gap-5">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
      <PaginationBlock class="mt-auto pb-5 pt-10 md:pb-10 md:pt-[70px]" />
    </div>
  </div>
</template>
