<script lang="ts" setup>
import { PropType } from 'vue'
import BasketButton from '@/components/shared/button/basket-button.vue'
import CustomImage from '@/components/shared/custom-image.vue'
import { Product } from '@/types/product'

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})
</script>

<template>
  <article class="bg-light flex h-full w-full flex-col overflow-hidden rounded-2xl">
    <div class="mb-1 flex max-h-[200px] items-center justify-center rounded-2xl bg-white">
      <CustomImage
        width="200"
        height="110"
        :src="product.image"
        img-class="h-full object-contain"
      />
    </div>
    <div class="flex flex-1 flex-col justify-between px-2.5 pb-2.5">
      <h3 class="text-20-700 mb-2 line-clamp-2 text-brown-red">
        <NuxtLink :to="'/product/' + product.id" class="hover:underline">
          {{ product.title }}
        </NuxtLink>
      </h3>
      <BasketButton class="mt-auto" :price="product.price" />
    </div>
  </article>
</template>
