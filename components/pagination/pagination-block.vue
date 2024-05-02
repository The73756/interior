<script lang="ts" setup>
import CustomIcon from '@/components/shared/icon/custom-icon.vue'
import { useProductStore } from '@/store/product'

const productStore = useProductStore()
const { page, totalPages } = storeToRefs(productStore)

const isPrevDisabled = computed(() => page.value === 1)
const isNextDisabled = computed(() => page.value === totalPages.value)

const onClickPage = (page: number) => {
  productStore.setPage(page)
}

const onClickNext = () => {
  if (page.value === totalPages.value) return
  productStore.setPage(page.value + 1)
}

const onClickPrev = () => {
  if (page.value === 1) return
  productStore.setPage(page.value - 1)
}
</script>

<template>
  <div class="flex w-full justify-center gap-4">
    <button
      @click="onClickPrev"
      :disabled="isPrevDisabled"
      class="text-16-500 text-light transition-colors hover:text-brown-red disabled:text-brown-red md:text-20-700"
      title="Назад"
    >
      <CustomIcon name="shared/arrow-filled" />
    </button>
    <div class="flex gap-4">
      <button
        v-for="item in totalPages"
        :key="item"
        @click="onClickPage(item)"
        class="text-18-700 transition-colors hover:text-brown-red md:text-24-700"
        :class="page === item ? 'text-brown-red' : 'text-light'"
      >
        {{ item }}
      </button>
    </div>
    <button
      @click="onClickNext"
      :disabled="isNextDisabled"
      class="rotate-180 text-16-500 text-light transition-colors hover:text-brown-red disabled:text-brown-red max-md:mt-0.5 md:text-20-700"
      title="Вперед"
    >
      <CustomIcon name="shared/arrow-filled" />
    </button>
  </div>
</template>
