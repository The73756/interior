<script lang="ts" setup>
import CustomText from '@/components/shared/custom-text.vue'
import { useCategoryStore } from '@/store/categories'

const categoryStore = useCategoryStore()

await useAsyncData('categories', () => categoryStore.getCategories())

const { categories } = categoryStore

const emits = defineEmits(['close-mobile-menu'])
</script>

<template>
  <div class="ml-4 mr-3 flex h-full flex-col gap-1 overflow-auto">
    <NuxtLink
      v-for="category in Array(100).fill(categories).flat()"
      :key="category.slug"
      @click="emits('close-mobile-menu')"
      :to="'/catalog/' + category.slug"
      class="block cursor-pointer text-light hover:underline"
    >
      <CustomText size="16" as="span" weight="bold">{{ category.name }}</CustomText>
    </NuxtLink>
  </div>
</template>
