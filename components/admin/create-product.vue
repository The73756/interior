<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { toast } from 'vue3-toastify'
import { z } from 'zod'
import { Category } from '@/api/services/categories/type'
import BgModalWrapper from '@/components/modal/bg-modal-wrapper.vue'
import CustomButton from '@/components/shared/button/custom-button.vue'
import IconButton from '@/components/shared/button/icon-button.vue'
import CustomCombobox from '@/components/shared/custom-combobox.vue'
import CustomImage from '@/components/shared/custom-image.vue'
import CustomIcon from '@/components/shared/icon/custom-icon.vue'
import ButtonInput from '@/components/shared/input/button-input.vue'
import CustomTextarea from '@/components/shared/input/custom-textarea.vue'
import { useCategoryStore } from '@/store/categories'
import { useProductStore } from '@/store/product'
import { ComboboxItem } from '@/types/combobox'
import { requiredString, requiredNumber } from '@/utils/validation-schemas'

const emits = defineEmits(['close-create-product-modal'])

defineProps({
  open: {
    type: Boolean,
    required: true
  }
})

const categoryStore = useCategoryStore()
const productStore = useProductStore()
const { categories } = storeToRefs(categoryStore)
const { isLoading, error } = storeToRefs(productStore)

const selectedCategory = ref<Category | null>(null)
const validationSchema = toTypedSchema(
  z.object({
    title: requiredString(),
    price: requiredNumber(),
    description: requiredString()
  })
)

const { defineField, meta, errors, handleSubmit, resetForm } = useForm({
  validationSchema
})

const [title, titleAttrs] = defineField('title')
const [price, priceAttrs] = defineField('price')
const [description, descriptionAttrs] = defineField('description')
const imageInput = ref('')
const productImages = ref<string[]>([])

const onSubmit = handleSubmit(async (values) => {
  if (!meta.value.valid || !selectedCategory.value || productImages.value.length < 1) return

  await productStore.createProduct({
    ...values,
    images: productImages.value,
    price: Number(values.price),
    categorySlug: selectedCategory.value.slug,
    categoryId: selectedCategory.value.id
  })

  if (!error.value) {
    emits('close-create-product-modal')
    toast.success('Продукт успешно создан')
    resetForm()
  }
})

const handleAddImage = () => {
  if (!imageInput.value) return

  productImages.value.push(imageInput.value)
  imageInput.value = ''
}

const handleDeleteImage = (imageIndex: number) => {
  productImages.value = productImages.value.filter((_, index) => index !== imageIndex)
}

const handleClose = () => {
  emits('close-create-product-modal')
}
</script>

<template>
  <BgModalWrapper @close-modal="handleClose" :open="open" title="Создать продукт">
    <form @submit="onSubmit" class="flex flex-col gap-4 px-2">
      <div>
        <h3 class="mb-2 text-24-500 text-light">Изображения продукта</h3>
        <div class="mb-4 flex flex-wrap gap-2">
          <div
            v-for="(image, index) in productImages"
            :key="image"
            class="relative flex h-[140px] w-[140px] items-center justify-center overflow-hidden rounded-xl border-light bg-light"
          >
            <CustomImage
              img-class="w-full h-auto object-contain"
              width="150"
              height="150"
              :src="image"
            />

            <button
              @click="handleDeleteImage(index)"
              type="button"
              class="absolute right-1 top-1 text-18-500 text-brown transition-colors hover:text-red-600"
            >
              <CustomIcon name="shared/close" />
            </button>
          </div>
        </div>
        <ButtonInput
          v-model="imageInput"
          @click-button="handleAddImage()"
          placeholder="Введите ссылку на изображение"
          button-text="добавить"
        />
      </div>

      <CustomCombobox
        v-model="selectedCategory"
        :options="categories as ComboboxItem[]"
        placeholder="Выберите категорию"
      />

      <ButtonInput
        v-model="title"
        :attrs="titleAttrs"
        :error="errors.title"
        placeholder="Название продукта"
        button-text=""
      />
      <ButtonInput
        v-model="price"
        :attrs="priceAttrs"
        :error="errors.price"
        placeholder="Цена продукта"
        button-text=""
      />
      <CustomTextarea
        v-model="description"
        :attrs="descriptionAttrs"
        :error="errors.description"
        placeholder="Описание продукта"
        max-height="300px"
      />
      <CustomButton
        :loading="isLoading"
        :disabled="!meta.valid || !selectedCategory || productImages.length < 1"
        type="submit"
        custom-bg="bg-yellow text-24-500"
      >
        Создать
      </CustomButton>
    </form>
  </BgModalWrapper>
</template>
