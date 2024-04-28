<script lang="ts" setup>
import { PropType } from 'vue'
import CustomIcon from '@/components/shared/icon/custom-icon.vue'
import { AnyIconName } from '@/types/icon/icon'

defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  icon: {
    type: String as PropType<AnyIconName>,
    default: ''
  }
})

const model = defineModel({
  type: String,
  required: false
})
</script>

<template>
  <label
    class="rounded-5 outline-3 outline-yellow flex h-[63px] w-full max-w-[630px] items-center gap-2.5 bg-white px-5 focus-within:outline"
  >
    <CustomIcon v-if="icon" name="shared/search" class="text-32-500 text-brown-red" />
    <input
      v-model="model"
      class="text-24-500 placeholder:text-24-500 text-brown-red block h-full w-full placeholder:text-current focus:outline-none"
      type="text"
      :placeholder="placeholder"
    />
  </label>
</template>
