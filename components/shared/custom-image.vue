<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  imgClass: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: 'Изображение'
  },
  width: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  },
  sizes: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <NuxtPicture
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :sizes="sizes"
    :img-attrs="{
      class: imgClass
    }"
  />
</template>
