<script lang="ts" setup>
import CustomText from '@/components/shared/custom-text.vue'
import { useCategoryStore } from '@/store/categories'

const categoryStore = useCategoryStore()

await useAsyncData('categories', () => categoryStore.getCategories())

const { categories } = categoryStore
</script>

<template>
  <aside class="fixed z-10 mr-6 h-full w-[190px] bg-brown pb-44 text-light max-lg:hidden">
    <div class="ml-4 mr-3 flex h-full flex-col gap-1 overflow-auto">
      <NuxtLink
        v-for="category in categories"
        :key="category.slug"
        :to="'/catalog/' + category.slug"
        class="block cursor-pointer hover:underline"
      >
        <CustomText size="16" as="span" weight="bold">{{ category.name }}</CustomText>
      </NuxtLink>
    </div>
  </aside>
</template>
