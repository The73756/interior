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
  },
  submitButtonText: {
    type: String,
    default: 'Продолжить'
  },
  rejectButtonText: {
    type: String,
    default: 'Отменить'
  }
})

const emits = defineEmits(['close-submit-modal', 'click-submit-button', 'click-reject-button'])

const handleClose = () => {
  emits('close-submit-modal')
}

const handleSubmitButton = () => {
  emits('click-submit-button')
}

const handleRejectButton = () => {
  emits('click-reject-button')
}
</script>

<template>
  <BgModalWrapper
    @close-modal="handleClose"
    :title="title"
    :open="open"
    wrapper-class="flex flex-col items-center justify-center gap-6"
  >
    <CustomImage src="/images/submit.svg" alt="" aria-hidden="true" width="200" height="200" />

    <CustomText class="text-light" size="18">{{ desc }}</CustomText>

    <div class="flex w-full items-center gap-2 max-md:flex-col md:gap-4">
      <CustomButton @click="handleRejectButton" custom-bg="bg-yellow" class="w-full">
        {{ rejectButtonText }}
      </CustomButton>
      <CustomButton @click="handleSubmitButton" class="w-full">{{ submitButtonText }}</CustomButton>
    </div>
  </BgModalWrapper>
</template>
