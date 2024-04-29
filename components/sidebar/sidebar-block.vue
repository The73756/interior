<script lang="ts" setup>
import CustomText from '@/components/shared/custom-text.vue'
</script>

<template>
  <aside class="text-light fixed z-10 mr-6 h-full w-[190px] bg-brown pb-44">
    <div class="ml-4 mr-3 flex h-full flex-col gap-1 overflow-auto">
      <NuxtLink v-for="(_, index) in 100" :key="index" class="block cursor-pointer hover:underline">
        <CustomText size="16" as="span" weight="bold">Категория {{ index + 1 }}</CustomText>
      </NuxtLink>
    </div>
  </aside>
</template>
