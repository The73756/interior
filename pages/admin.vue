<script lang="ts" setup>
import { definePageMeta } from '@/.nuxt/imports'
import CreateCategory from '@/components/admin/create-category.vue'
import CreateProduct from '@/components/admin/create-product.vue'
import CustomButton from '@/components/shared/button/custom-button.vue'
import { useCategoryStore } from '@/store/categories'

definePageMeta({
  layout: 'without-sidebar'
})

useHead({
  bodyAttrs: {
    class: 'body-custom'
  }
})

const categoryStore = useCategoryStore()

const showCreateCategoryModal = ref(false)
const showCreateProductModal = ref(false)

const toggleCategoryModal = () => {
  showCreateCategoryModal.value = !showCreateCategoryModal.value
}

const openProductModal = async () => {
  await categoryStore.getCategories()
  showCreateProductModal.value = true
}

const closeProductModal = () => {
  showCreateProductModal.value = false
}
</script>

<template>
  <div class="flex flex-1 flex-col items-center justify-center gap-4">
    <h2 class="mb-10 text-5xl font-bold text-light">Админ панель</h2>
    <div class="w-full max-w-[800px]">
      <CustomButton @click="openProductModal" class="mb-2 w-full">Создать товар</CustomButton>
      <CustomButton @click="toggleCategoryModal" class="mb-2 w-full">
        Создать категорию
      </CustomButton>
      <div class="flex gap-4">
        <CustomButton custom-bg="bg-red-900 text-light" class="mb-2 w-full">
          Удалить товар
        </CustomButton>
        <CustomButton custom-bg="bg-red-900 text-light" class="w-full">
          Удалить категорию
        </CustomButton>
      </div>
    </div>

    <CreateCategory
      @close-create-category-modal="toggleCategoryModal"
      :open="showCreateCategoryModal"
    />

    <CreateProduct @close-create-product-modal="closeProductModal" :open="showCreateProductModal" />
  </div>
</template>
