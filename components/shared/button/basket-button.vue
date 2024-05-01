<script lang="ts" setup>
import { PropType } from 'vue'
import { Product } from '@/api/services/product/type'
import CustomIcon from '@/components/shared/icon/custom-icon.vue'
import { formatPrice } from '@/helpers/price-format'
import { useBasketStore } from '@/store/basket'

const props = defineProps({
  isBig: {
    type: Boolean,
    default: false
  },
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})

const basketStore = useBasketStore()
const productInBasket = basketStore.getProductFromBasket(props.product.id)

const handleAddToBasket = async () => {
  await basketStore.addToBasket(props.product)
}

const handleIncrementProductCount = async () => {
  if (!productInBasket.value) return

  await basketStore.updateBasketProductCount(
    productInBasket.value.id,
    productInBasket.value.count + 1
  )
}

const handleDecrementProductCount = async () => {
  if (!productInBasket.value) return

  if (productInBasket.value.count === 1) {
    await basketStore.deleteFromBasket(productInBasket.value.id)
    return
  }

  await basketStore.updateBasketProductCount(
    productInBasket.value.id,
    productInBasket.value.count - 1
  )
}
</script>

<template>
  <div>
    <div
      v-if="productInBasket"
      class="flex items-center justify-between rounded-2xl bg-brown-red px-4 py-1.5"
    >
      <button
        @click="handleDecrementProductCount"
        class="flex h-[30px] w-[30px] items-center justify-center rounded text-24-500 text-light transition-colors hover:bg-light/20"
      >
        <CustomIcon name="shared/minus" />
      </button>
      <div class="flex flex-col items-center justify-center text-16-500 text-light">
        <span>{{ formatPrice(productInBasket.count * product.price) }}</span>
        <span class="text-12-500">{{ productInBasket.count }} шт</span>
      </div>
      <button
        @click="handleIncrementProductCount"
        class="flex h-[30px] w-[30px] items-center justify-center rounded text-24-500 text-light transition-colors hover:bg-light/20"
      >
        <CustomIcon name="shared/plus" />
      </button>
    </div>

    <button
      v-else
      @click="handleAddToBasket"
      :class="
        isBig
          ? 'h-12 bg-light text-24-700 text-brown-red hover:bg-brown-red hover:text-light'
          : 'h-9 bg-brown-red text-16-600 text-light hover:bg-brown'
      "
      class="flex w-full items-center justify-between rounded-2xl px-4 transition-colors"
    >
      <span>{{ formatPrice(product.price) }}</span>
      <span v-if="isBig" class="text-24-500">В корзину</span>
      <CustomIcon v-else name="shared/cart" class="text-20-700" />
    </button>
  </div>
</template>
