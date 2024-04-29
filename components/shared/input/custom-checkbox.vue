<script setup>
import CustomIcon from '@/components/shared/icon/custom-icon.vue'

const model = defineModel({ type: Boolean })

defineProps({
  checked: {
    type: Boolean,
    default: false
  },
  attrs: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <label class="relative inline-flex cursor-pointer items-center">
    <input
      v-bind="attrs"
      v-model="model"
      :checked="checked"
      type="checkbox"
      class="checkbox-input peer sr-only"
    />
    <span
      class="icon-size bg-light size-7 rounded-[10px] border border-current outline outline-2 outline-offset-1 outline-transparent peer-checked:bg-current peer-focus:outline-current"
    />
    <CustomIcon
      name="shared/check"
      class="absolute bottom-1/2 right-1/2 hidden size-1/2 translate-x-1/2 translate-y-1/2 text-brown-red peer-checked:block"
    />
  </label>
</template>
