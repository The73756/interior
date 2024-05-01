<script lang="ts" setup>
import { Category } from '@/api/services/categories/type'
import BgModalWrapper from '@/components/modal/bg-modal-wrapper.vue'
import CustomButton from '@/components/shared/button/custom-button.vue'
import CustomCombobox from '@/components/shared/custom-combobox.vue'
import { useCategoryStore } from '@/store/categories'
import { ComboboxItem } from '@/types/combobox'

const emits = defineEmits(['close-delete-category-modal'])

defineProps({
  open: {
    type: Boolean,
    required: true
  }
})

const categoryStore = useCategoryStore()
const { categories, isLoading } = storeToRefs(categoryStore)

const selectedCategory = ref<Category | null>(null)

const handleClose = () => {
  emits('close-delete-category-modal')
}

const handleDeleteCategory = async () => {
  if (!selectedCategory.value) return

  await categoryStore.deleteCategory(selectedCategory.value.id)
  handleClose()
}
</script>

<template>
  <BgModalWrapper @close-modal="handleClose" :open="open" title="Удалить категорию">
    <CustomCombobox
      v-model="selectedCategory"
      :options="categories as ComboboxItem[]"
      placeholder="Выберите категорию"
    />
    <p class="mb-4 mt-2 text-16-500 text-light">
      Это действие нельзя отменить. Все товары в этой категории будут удалены.
    </p>

    <CustomButton
      @click="handleDeleteCategory"
      :loading="isLoading"
      :disabled="!selectedCategory"
      type="submit"
      custom-bg="bg-yellow text-24-500"
    >
      Удалить
    </CustomButton>
  </BgModalWrapper>
</template>
