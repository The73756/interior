<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { toast } from 'vue3-toastify'
import { z } from 'zod'
import BgModalWrapper from '@/components/modal/bg-modal-wrapper.vue'
import CustomButton from '@/components/shared/button/custom-button.vue'
import ButtonInput from '@/components/shared/input/button-input.vue'
import { useCategoryStore } from '@/store/categories'
import { requiredString } from '@/utils/validation-schemas'

const emits = defineEmits(['close-create-category-modal'])

defineProps({
  open: {
    type: Boolean,
    required: true
  }
})

const categoryStore = useCategoryStore()
const { isLoading, error } = storeToRefs(categoryStore)

const validationSchema = toTypedSchema(
  z.object({
    name: requiredString(),
    slug: requiredString()
  })
)

const { defineField, meta, errors, handleSubmit } = useForm({
  validationSchema
})

const [name, nameAttrs] = defineField('name')
const [slug, slugAttrs] = defineField('slug')

const onSubmit = handleSubmit(async (values) => {
  if (!meta.value.valid) return

  await categoryStore.createCategory(values)

  if (!error.value) {
    emits('close-create-category-modal')
    toast.success('Категория успешно создана')
  }
})

const handleClose = () => {
  emits('close-create-category-modal')
}
</script>

<template>
  <BgModalWrapper @close-modal="handleClose" :open="open" title="Создать категорию">
    <form @submit="onSubmit" class="flex flex-col gap-4">
      <ButtonInput
        v-model="name"
        :attrs="nameAttrs"
        :error="errors.name"
        placeholder="Название категории"
        button-text=""
      />
      <ButtonInput
        v-model="slug"
        :attrs="slugAttrs"
        :error="errors.slug"
        placeholder="Слаг категории"
        button-text=""
      />
      <CustomButton
        :loading="isLoading"
        :disabled="!meta.valid"
        type="submit"
        custom-bg="bg-yellow text-24-500"
      >
        Создать
      </CustomButton>
    </form>
  </BgModalWrapper>
</template>
