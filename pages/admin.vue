<script lang="ts" setup>
import { definePageMeta } from '@/.nuxt/imports'
import CreateCategory from '@/components/admin/create-category.vue'
import CreateProduct from '@/components/admin/create-product.vue'
import DeleteCategory from '@/components/admin/delete-category.vue'
import DeleteProduct from '@/components/admin/delete-product.vue'
import BgModalWrapper from '@/components/modal/bg-modal-wrapper.vue'
import CustomButton from '@/components/shared/button/custom-button.vue'
import ButtonInput from '@/components/shared/input/button-input.vue'
import { useCategoryStore } from '@/store/categories'
import { useProductStore } from '@/store/product'

definePageMeta({
  layout: 'without-sidebar'
})

useHead({
  bodyAttrs: {
    class: 'body-custom'
  }
})

const categoryStore = useCategoryStore()
const productStore = useProductStore()

const showCreateCategoryModal = ref(false)
const showCreateProductModal = ref(false)
const showDeleteCategoryModal = ref(false)
const showDeleteProductModal = ref(false)
const showGuardModal = ref(true)
const isLogin = ref(false)
const guardPassword = ref('')

const handleLogin = () => {
  if (guardPassword.value === 'admin2210') {
    isLogin.value = true
    showGuardModal.value = false
  } else {
    navigateTo('/')
  }
}

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

const openDeleteCategoryModal = async () => {
  await categoryStore.getCategories()
  showDeleteCategoryModal.value = true
}

const closeDeleteCategoryModal = () => {
  showDeleteCategoryModal.value = false
}

const openDeleteProductModal = async () => {
  await productStore.getProductsForDelete()
  showDeleteProductModal.value = true
}

const closeDeleteProductModal = () => {
  showDeleteProductModal.value = false
}

const toggleGuardModal = () => {
  showGuardModal.value = !showGuardModal.value
}
</script>

<template>
  <div v-if="isLogin" class="flex flex-1 flex-col items-center justify-center gap-4">
    <h2 class="mb-10 text-5xl font-bold text-light">Админ панель</h2>
    <div class="w-full max-w-[800px]">
      <CustomButton @click="openProductModal" class="mb-2 w-full">Создать товар</CustomButton>
      <CustomButton @click="toggleCategoryModal" class="mb-2 w-full">
        Создать категорию
      </CustomButton>
      <div class="flex gap-4">
        <CustomButton
          @click="openDeleteProductModal"
          custom-bg="bg-red-900 text-light"
          class="mb-2 w-full"
        >
          Удалить товар
        </CustomButton>
        <CustomButton
          @click="openDeleteCategoryModal"
          custom-bg="bg-red-900 text-light"
          class="w-full"
        >
          Удалить категорию
        </CustomButton>
      </div>
    </div>

    <CreateCategory
      @close-create-category-modal="toggleCategoryModal"
      :open="showCreateCategoryModal"
    />

    <CreateProduct @close-create-product-modal="closeProductModal" :open="showCreateProductModal" />

    <DeleteCategory
      @close-delete-category-modal="closeDeleteCategoryModal"
      :open="showDeleteCategoryModal"
    />

    <DeleteProduct
      @close-delete-product-modal="closeDeleteProductModal"
      :open="showDeleteProductModal"
    />
  </div>
  <BgModalWrapper
    @close-modal="toggleGuardModal"
    :open="showGuardModal"
    title="Вход в админ панель"
  >
    <p class="mb-2 text-18-500 text-light">Что бы войти, введите пароль</p>
    <form @submit.prevent="handleLogin">
      <ButtonInput v-model="guardPassword" button-text="" placeholder="Пароль" class="mb-4" />
      <CustomButton type="submit">Войти</CustomButton>
    </form>
  </BgModalWrapper>
</template>
