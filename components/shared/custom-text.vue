<script setup lang="ts">
import { cva } from 'class-variance-authority'

const tagClasses = {
  div: '',
  span: '',
  p: ''
} as const

const CustomTextSizeClasses = {
  '14': { base: '', normal: 'text-14-400', bold: 'text-14-700' },
  '16': { base: '', normal: 'text-16-400', bold: 'text-16-700' },
  '18': { base: '', normal: 'text-18-400', bold: 'text-18-700' }
} as const

const CustomTextWeightClasses = {
  normal: '',
  bold: ''
} as const

const customTextVariants = cva('text-basic', {
  variants: {
    size: {
      '14': CustomTextSizeClasses['14'].base,
      '16': CustomTextSizeClasses['16'].base,
      '18': CustomTextSizeClasses['18'].base
    },
    weight: {
      normal: CustomTextWeightClasses.normal,
      bold: CustomTextWeightClasses.bold
    },
    as: {
      div: tagClasses.div,
      span: tagClasses.span,
      p: tagClasses.p
    }
  },
  compoundVariants: Object.keys(CustomTextSizeClasses).flatMap((size) => {
    const sizeKey = size as keyof typeof CustomTextSizeClasses
    return [
      {
        size: sizeKey,
        weight: 'normal',
        class: CustomTextSizeClasses[sizeKey].normal
      },
      {
        size: sizeKey,
        weight: 'bold',
        class: CustomTextSizeClasses[sizeKey].bold ?? CustomTextSizeClasses[sizeKey].normal
      }
    ]
  })
})

interface CustomTextProps {
  size?: keyof typeof CustomTextSizeClasses
  weight?: keyof typeof CustomTextWeightClasses
  as?: keyof typeof tagClasses
  custom?: boolean
}

const props = withDefaults(defineProps<CustomTextProps>(), {
  size: '18',
  weight: 'normal',
  custom: false,
  as: 'p'
})

const customTextClasses = computed(() => {
  return props.custom ? '' : customTextVariants({ size: props.size, weight: props.weight })
})
</script>

<template>
  <component :is="as" :class="customTextClasses">
    <slot />
  </component>
</template>
