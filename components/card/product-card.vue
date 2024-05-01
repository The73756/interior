<script lang="ts" setup>
import { PropType } from 'vue'
import { Product } from '@/api/services/product/type'
import BasketButton from '@/components/shared/button/basket-button.vue'
import CustomImage from '@/components/shared/custom-image.vue'
import CustomIcon from '@/components/shared/icon/custom-icon.vue'
import { useBasketStore } from '@/store/basket'

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})

const basketStore = useBasketStore()
const productInBasket = basketStore.getProductFromBasket(props.product.id)

const handleRemoveFromBasket = () => {
  if (!productInBasket.value) return console.error('Product not found in basket')
  basketStore.deleteFromBasket(productInBasket.value.id)
}
</script>

<template>
  <article class="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-light">
    <button
      v-if="productInBasket"
      @click="handleRemoveFromBasket"
      class="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-light text-16-700 text-brown-red opacity-0 transition-all hover:bg-brown-red hover:text-light group-hover:opacity-100"
    >
      <CustomIcon name="shared/close" />
    </button>
    <div class="mb-1 flex max-h-[200px] items-center justify-center rounded-2xl bg-white">
      <CustomImage
        width="200"
        height="110"
        :src="product.images?.[0]"
        img-class="h-full object-contain"
      />
    </div>
    <div class="flex flex-1 flex-col justify-between px-2.5 pb-2.5">
      <h3 class="mb-2 line-clamp-2 text-20-700 text-brown-red">
        <NuxtLink :to="'/product/' + product.id" class="hover:underline">
          {{ product.title }}
        </NuxtLink>
      </h3>
      <BasketButton :product="product" class="mt-auto" />
    </div>
  </article>
</template>
