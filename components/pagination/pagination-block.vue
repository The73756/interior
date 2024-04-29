<script lang="ts" setup>
import CustomIcon from '@/components/shared/icon/custom-icon.vue'

const activePage = ref(1)
</script>

<template>
  <div class="flex w-full justify-center gap-4">
    <button class="text-light text-20-700 transition-colors hover:text-brown-red" title="Вперед">
      <CustomIcon name="shared/arrow-filled" />
    </button>
    <div class="flex gap-4">
      <button
        v-for="(_, index) in 10"
        :key="index"
        class="text-24-700 transition-colors hover:text-brown-red"
        :class="activePage === index + 1 ? 'text-brown-red' : 'text-light'"
      >
        {{ index + 1 }}
      </button>
    </div>
    <button
      class="text-light text-20-700 rotate-180 transition-colors hover:text-brown-red"
      title="Назад"
    >
      <CustomIcon name="shared/arrow-filled" />
    </button>
  </div>
</template>
