<script setup lang="ts">
import { cva, VariantProps } from 'class-variance-authority'

const CustomTitleTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
} as const

const CustomTitleSizeClasses = {
  '40': { base: '', normal: 'text-40-500', bold: 'text-40-600' },
  '48': { base: '', normal: 'text-48-500', bold: 'text-48-600' },
  '32': { base: '', normal: 'text-32-500', bold: 'text-32-600' }
} as const

const customTitleVariants = cva('', {
  variants: {
    size: {
      '40': CustomTitleSizeClasses['40'].base,
      '48': CustomTitleSizeClasses['48'].base,
      '32': CustomTitleSizeClasses['32'].base
    },
    weight: {
      normal: '',
      semibold: ''
    }
  },
  compoundVariants: Object.keys(CustomTitleSizeClasses).flatMap((size) => {
    const sizeKey = size as keyof typeof CustomTitleSizeClasses
    return [
      {
        size: sizeKey,
        weight: 'normal',
        class: CustomTitleSizeClasses[sizeKey].normal
      },
      {
        size: sizeKey,
        weight: 'semibold',
        class: CustomTitleSizeClasses[sizeKey].bold ?? CustomTitleSizeClasses[sizeKey].normal
      }
    ]
  })
})

type CustomTitlePropsType = VariantProps<typeof customTitleVariants>

interface CustomTitleProps {
  as?: keyof typeof CustomTitleTags
  size?: CustomTitlePropsType['size']
  weight?: CustomTitlePropsType['weight']
  custom?: boolean
}

const props = withDefaults(defineProps<CustomTitleProps>(), {
  weight: 'normal',
  size: '40',
  as: 'h2',
  custom: false
})

const customTitleClasses = computed(() => {
  return props.custom ? '' : customTitleVariants({ size: props.size, weight: props.weight })
})
</script>

<template>
  <component :is="as" :class="customTitleClasses">
    <slot />
  </component>
</template>
