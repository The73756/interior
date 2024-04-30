<script lang="ts" setup>
import { cva, VariantProps } from 'class-variance-authority'
import ModalWrapper from '@/components/modal/modal-wrapper.vue'
import CustomTitle from '@/components/shared/custom-title.vue'
import CustomIcon from '@/components/shared/icon/custom-icon.vue'

const bgModalVariants = cva('relative rounded-2xl bg-brown p-5 pt-6', {
  variants: {
    size: {
      '480': 'max-w-screen-sm w-screen',
      'fit': 'w-fit'
    }
  }
})

type BgModalVariantsType = VariantProps<typeof bgModalVariants>

interface BgModalProps {
  open: boolean
  size?: BgModalVariantsType['size']
  title?: string
  wrapperClass?: string
  titleClass?: string
  closeClass?: string
}

const props = withDefaults(defineProps<BgModalProps>(), {
  size: '480'
})

const emits = defineEmits(['close-modal'])

const bgModalClasses = computed(() => {
  return bgModalVariants({
    size: props.size,
    class: props.wrapperClass
  })
})

const handleClose = () => {
  emits('close-modal')
}
</script>

<template>
  <ModalWrapper @close-modal="handleClose" :open="open">
    <div :class="bgModalClasses">
      <slot name="close">
        <button
          @click="handleClose"
          title="Закрыть"
          type="button"
          class="ring-basic-hover focus:outline-basic absolute right-4 top-2 z-10 text-24-700 text-light outline-none transition-colors hover:text-white focus:outline focus:outline-offset-1"
          :class="closeClass"
        >
          <CustomIcon name="shared/close" />
        </button>
      </slot>

      <slot name="title">
        <CustomTitle
          v-if="title"
          size="32"
          tag="h2"
          :class="['mb-4 text-center text-light', titleClass]"
        >
          {{ title }}
        </CustomTitle>
      </slot>

      <slot />
    </div>
  </ModalWrapper>
</template>
