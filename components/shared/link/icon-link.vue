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
    class="bg-light flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full text-32-500 text-brown-red transition-transform hover:scale-105"
  >
    <CustomIcon :name="icon" />
  </NuxtLink>
</template>
