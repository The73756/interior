<script lang="ts" setup>
import { PropType } from 'vue'
import CustomIcon from '@/components/shared/icon/custom-icon.vue'
import { AnyIconName } from '@/types/icon/icon'

defineProps({
  icon: {
    type: String as PropType<AnyIconName>,
    required: true
  },
  to: {
    type: String,
    required: true
  }
})
</script>

<template>
  <NuxtLink
    :to="to"
    class="flex items-center justify-center rounded-full bg-light p-2 text-brown-red transition-transform hover:scale-105 md:min-h-[50px] md:min-w-[50px] md:p-2.5 md:text-32-500"
  >
    <CustomIcon :name="icon" class="max-md:text-24-500" />
  </NuxtLink>
</template>
