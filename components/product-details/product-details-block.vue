<script lang="ts" setup>
import { PropType } from 'vue'
import ProductDetailsSlider from '@/components/product-details/product-details-slider.vue'
import BasketButton from '@/components/shared/button/basket-button.vue'
import CollapsedText from '@/components/shared/collapsed-text.vue'
import { ProductDetails } from '@/types/product'

defineProps({
  product: {
    type: Object as PropType<ProductDetails>,
    default: () => ({
      id: '1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque consequatur culpa harum, ipsam molestiae nisi quos recusandae reprehenderit similique sit suscipit tempore, tenetur. Magni minus nostrum quas quia quibusdam!',
      title: 'Кофемашина автоматическая Philips EP2231/40',
      image: [
        'https://ru-apple.com.ru/image/cache/catalog/products_images/Apple-iPhone-14-Pro-Max-Space-Black-1-1000x1000.png',
        'https://ru-apple.com.ru/image/cache/catalog/products_images/Apple-iPhone-14-Pro-Max-Space-Black-1-1000x1000.png',
        'https://ru-apple.com.ru/image/cache/catalog/products_images/Apple-iPhone-14-Pro-Max-Space-Black-1-1000x1000.png'
      ],
      price: 29990
    })
  }
})
</script>

<template>
  <div class="flex gap-12">
    <ProductDetailsSlider :images="product.image" />
    <div class="flex flex-1 flex-col">
      <h2 class="text-light mb-4 text-40-500 font-extrabold">
        {{ product.title }}
      </h2>
      <div class="flex flex-1 flex-col">
        <CollapsedText :text="product.description" />
        <BasketButton class="mt-auto max-w-[365px]" is-big :price="product.price"></BasketButton>
      </div>
    </div>
  </div>
</template>
