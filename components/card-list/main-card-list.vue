<script lang="ts" setup>
import { PropType } from 'vue'
import { ProductGroup } from '@/api/services/product/type'
import ProductCard from '@/components/card/product-card.vue'
import CustomTitle from '@/components/shared/custom-title.vue'
import CustomIcon from '@/components/shared/icon/custom-icon.vue'

defineProps({
  productsGroup: {
    type: Object as PropType<ProductGroup>,
    required: true
  }
})
</script>

<template>
  <section v-if="productsGroup.products.length">
    <CustomTitle as="h2" size="32" weight="semibold" class="mb-4 font-bold text-light">
      {{ productsGroup.name }}
    </CustomTitle>
    <div class="grid grid-cols-auto-fill gap-5">
      <ProductCard
        v-for="product in productsGroup.products?.slice(0, 4)"
        :key="product.id"
        :product="product"
      />
      <NuxtLink
        :to="'/catalog/' + productsGroup.slug"
        class="flex h-full w-full items-center justify-center gap-4 rounded-2xl bg-brown-red px-4 text-20-700 text-light transition-colors hover:bg-brown"
      >
        <span>Смотреть еще</span>
        <CustomIcon class="text-24-500" name="shared/arrow" />
      </NuxtLink>
    </div>
  </section>
</template>
