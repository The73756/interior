<script lang="ts" setup>
import CustomImage from '@/components/shared/custom-image.vue'
import CustomIcon from '@/components/shared/icon/custom-icon.vue'
</script>

<template>
  <div class="m-auto flex flex-col items-center justify-center">
    <CustomImage
      class="mb-4"
      img-class="w-[200px] block height-auto"
      src="/images/basket-empty.svg"
      alt="Корзина пуста"
    />
    <h2 class="text-32-500 font-bold text-light">Корзина пуста</h2>
    <p class="text-18-400 text-light">Вы еще ничего не добавляли в корзину</p>

    <NuxtLink
      to="/"
      class="btn btn-primary mt-6 flex items-center gap-2 rounded-2xl bg-light px-4 py-2 pl-2 text-18-500 font-bold text-brown-red transition-colors hover:bg-brown-red hover:text-light"
    >
      <CustomIcon name="shared/arrow" class="rotate-180 text-32-500" />
      Вернуться на главную
    </NuxtLink>
  </div>
</template>
