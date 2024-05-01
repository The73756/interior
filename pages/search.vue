<script lang="ts" setup>
import ProductCard from '@/components/card/product-card.vue'
import PaginationBlock from '@/components/pagination/pagination-block.vue'
import CustomImage from '@/components/shared/custom-image.vue'
import CustomIcon from '@/components/shared/icon/custom-icon.vue'
import { plural } from '@/helpers/plural'
import { useProductStore } from '@/store/product'

const productStore = useProductStore()

const route = useRoute()
await useAsyncData('products', () => productStore.getProducts(route.params.slug))

const { products, search, total } = storeToRefs(productStore)

const handleResetSearch = () => {
  productStore.setSearch('')
}
</script>

<template>
  <div class="flex flex-1 flex-col">
    <h2 class="mb-1 text-5xl font-bold text-light">Поиск</h2>
    <div v-if="total === 0" class="m-auto flex flex-col items-center justify-center">
      <CustomImage
        class="mb-4"
        img-class="w-[200px] block height-auto"
        src="/images/search-empty.svg"
        alt="Ничего не найдено"
      />
      <h2 class="text-32-500 font-bold text-light">По вашему запросу ничего не найдено</h2>
      <p class="text-18-400 text-light">Попробуйте изменить запрос или вернитесь на главную</p>

      <NuxtLink
        @click="handleResetSearch"
        to="/"
        class="btn btn-primary mt-6 flex items-center gap-2 rounded-2xl bg-light px-4 py-2 pl-2 text-18-500 font-bold text-brown-red transition-colors hover:bg-brown-red hover:text-light"
      >
        <CustomIcon name="shared/arrow" class="rotate-180 text-32-500" />
        Вернуться на главную
      </NuxtLink>
    </div>

    <div v-else class="flex flex-1 flex-col">
      <div class="mb-4 text-18-500 text-light">
        По запросу "<span class="text-brown">{{ search }} </span>" найдено
        <span>{{ total }} {{ plural(total, ['товар', 'товара', 'товаров']) }}</span>
      </div>

      <!--<div class="mb-10 flex gap-8">-->
      <!--  <button class="flex items-center gap-1 text-18-700 text-white hover:underline">-->
      <!--    Сортировка-->
      <!--    <CustomIcon class="text-24-500" name="shared/down" />-->
      <!--  </button>-->
      <!--  <button class="flex items-center gap-1 text-18-700 text-white hover:underline">-->
      <!--    Фильтры-->
      <!--    <CustomIcon class="text-24-500" name="shared/down" />-->
      <!--  </button>-->
      <!--</div>-->
      <div class="grid grid-cols-auto-fill gap-5">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
      <PaginationBlock class="mt-auto pb-10 pt-[70px]" />
    </div>
  </div>
</template>
