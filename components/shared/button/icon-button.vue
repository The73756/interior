<script lang="ts" setup>
import { PropType } from 'vue'
import CustomIcon from '@/components/shared/icon/custom-icon.vue'
import { AnyIconName } from '@/types/icon/icon'

defineProps({
  icon: {
    type: String as PropType<AnyIconName>,
    required: true
  },
  customSize: {
    type: String,
    default: 'text-32-500'
  }
})
</script>

<template>
  <button
    class="flex items-center justify-center rounded-full bg-light p-2.5 text-brown-red transition-transform hover:scale-105"
    :class="customSize"
  >
    <CustomIcon :name="icon" />
  </button>
</template>
