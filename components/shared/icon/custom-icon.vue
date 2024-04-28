<script setup lang="ts">
import { CustomIconProps, IconName } from '@/types/icon/icon'
import { SPRITES_META, SpritesMap } from '@/types/icon/sprite.gen'

const props = defineProps<CustomIconProps>()

const getIconMeta = <Key extends keyof SpritesMap>(name: IconName<Key>) => {
  const [spriteName, iconName] = name.split('/') as [keyof SpritesMap, SpritesMap[keyof SpritesMap]]

  if (SPRITES_META[spriteName]) {
    const {
      filePath,
      items: {
        // @ts-ignore-next-line
        [iconName]: { viewBox, width, height }
      }
    } = SPRITES_META[spriteName]

    const axis = width === height ? 'xy' : width > height ? 'x' : 'y'

    return { filePath, iconName, viewBox, axis }
  }
}

const iconMeta = computed(() => getIconMeta(props.name))
</script>

<template>
  <svg
    class="icon"
    :viewBox="iconMeta?.viewBox"
    :data-axis="iconMeta?.axis"
    focusable="false"
    :aria-hidden="true"
  >
    <use :href="`/sprites/${iconMeta?.filePath}#${iconMeta?.iconName}`" />
  </svg>
</template>
