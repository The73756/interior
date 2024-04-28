<script lang="ts" setup>
import CustomImage from '@/components/shared/custom-image.vue'
import CustomText from '@/components/shared/custom-text.vue'
</script>

<template>
  <aside class="bg-brown fixed mr-6 h-full w-[270px] -translate-x-full pb-40 text-white">
    <div class="flex h-40 items-end justify-center">
      <NuxtLink class="mb-6" to="/" title="На главную">
        <CustomImage src="/images/logo.svg" width="200" height="auto" alt="Логотип компании" />
      </NuxtLink>
    </div>
    <div class="ml-10 mr-3 flex h-full flex-col gap-1 overflow-auto">
      <NuxtLink v-for="(_, index) in 100" :key="index" class="block cursor-pointer hover:underline">
        <CustomText size="16" as="span" weight="bold">Категория {{ index + 1 }}</CustomText>
      </NuxtLink>
    </div>
  </aside>
</template>
