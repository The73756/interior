<script lang="ts" setup>
import { PropType } from 'vue'
import CustomIcon from '@/components/shared/icon/custom-icon.vue'
import { AnyIconName } from '@/types/icon/icon'

defineProps({
  icon: {
    type: String as PropType<AnyIconName>,
    required: true
  }
})
</script>

<template>
  <button
    class="text-32-500 text-brown-red rounded-full bg-white p-2.5 transition-transform hover:scale-105"
  >
    <CustomIcon :name="icon" />
  </button>
</template>
