<script lang="ts" setup>
import { definePageMeta } from '@/.nuxt/imports'
import CustomButton from '@/components/shared/button/custom-button.vue'

definePageMeta({
  layout: 'without-sidebar'
})

useHead({
  bodyAttrs: {
    class: 'body-custom'
  }
})
</script>

<template>
  <div class="flex flex-1 flex-col items-center justify-center gap-4">
    <h2 class="text-light mb-10 text-5xl font-bold">Админ панель</h2>
    <div class="w-full max-w-[800px]">
      <CustomButton class="mb-2 w-full"> Создать товар</CustomButton>
      <CustomButton class="mb-2 w-full"> Создать категорию</CustomButton>
      <div class="flex gap-4">
        <CustomButton custom-bg="bg-red-900 text-light" class="mb-2 w-full">
          Удалить товар
        </CustomButton>
        <CustomButton custom-bg="bg-red-900 text-light" class="w-full">
          Удалить категорию
        </CustomButton>
      </div>
    </div>
  </div>
</template>
