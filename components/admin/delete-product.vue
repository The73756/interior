<script lang="ts" setup>
import BgModalWrapper from '@/components/modal/bg-modal-wrapper.vue'
import CustomButton from '@/components/shared/button/custom-button.vue'
import CustomCombobox from '@/components/shared/custom-combobox.vue'
import { useProductStore } from '@/store/product'
import { ComboboxItem } from '@/types/combobox'

const emits = defineEmits(['close-delete-product-modal'])

defineProps({
  open: {
    type: Boolean,
    required: true
  }
})

const productStore = useProductStore()
const { productsForDelete, isLoading } = storeToRefs(productStore)

const selectedProduct = ref<ComboboxItem | null>(null)

const handleClose = () => {
  emits('close-delete-product-modal')
}

const handleDeleteProduct = async () => {
  if (!selectedProduct.value) return

  await productStore.deleteProduct(selectedProduct.value.id)
  handleClose()
}
</script>

<template>
  <BgModalWrapper @close-modal="handleClose" :open="open" title="Удалить товар">
    <CustomCombobox
      v-model="selectedProduct"
      :options="productsForDelete"
      placeholder="Выберите товар"
    />
    <p class="mb-4 mt-2 text-16-500 text-light">Это действие нельзя отменить.</p>

    <CustomButton
      @click="handleDeleteProduct"
      :loading="isLoading"
      :disabled="!selectedProduct"
      type="submit"
      custom-bg="bg-yellow text-24-500"
    >
      Удалить
    </CustomButton>
  </BgModalWrapper>
</template>
