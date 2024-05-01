<script lang="ts" setup>
import BgModalWrapper from '@/components/modal/bg-modal-wrapper.vue'
import CustomButton from '@/components/shared/button/custom-button.vue'
import CustomImage from '@/components/shared/custom-image.vue'
import CustomText from '@/components/shared/custom-text.vue'

defineProps({
  open: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['close-success-modal', 'click-ok-button'])

const handleClose = () => {
  emits('close-success-modal')
}

const handleOkButtonClick = () => {
  emits('click-ok-button')
}
</script>

<template>
  <BgModalWrapper
    @close-modal="handleClose"
    :title="title"
    :open="open"
    wrapper-class="flex flex-col items-center justify-center gap-6"
  >
    <CustomImage src="/images/success.svg" alt="" aria-hidden="true" width="200" height="200" />

    <CustomText class="text-light" size="18">{{ desc }}</CustomText>

    <CustomButton @click="handleOkButtonClick" class="w-full">Хорошо</CustomButton>
  </BgModalWrapper>
</template>
