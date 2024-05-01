<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { PropType } from 'vue'
import CustomImage from '@/components/shared/custom-image.vue'

defineProps({
  images: {
    type: Array as PropType<string[]>,
    required: true
  }
})

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: false })
const [thumbsRef, thumbsApi] = emblaCarouselVue({ loop: false, axis: 'y', slidesToScroll: 1 }, [
  WheelGesturesPlugin()
])

watchEffect(() => {
  if (emblaApi.value && thumbsApi.value) {
    emblaApi.value?.on('select', () => {
      const selectedEmblaSnap = emblaApi.value?.selectedScrollSnap()
      if (typeof selectedEmblaSnap === 'number') {
        thumbsApi.value?.scrollTo(selectedEmblaSnap)
      }
    })
    thumbsApi.value?.on('select', () => {
      const selectedThumbsSnap = thumbsApi.value?.selectedScrollSnap()
      if (typeof selectedThumbsSnap === 'number') {
        emblaApi.value?.scrollTo(selectedThumbsSnap)
      }
    })
  }
})

const onThumbsClick = (index: number) => {
  if (!emblaApi.value || !thumbsApi.value) return

  thumbsApi.value.scrollTo(index)
  emblaApi.value.scrollTo(index)
}
</script>

<template>
  <div class="flex gap-5">
    <div ref="emblaRef" class="embla rounded-5">
      <div class="embla__container">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="embla__slide flex h-full items-center justify-center overflow-hidden rounded-5 bg-white"
        >
          <CustomImage class="size-full" img-class="size-full object-cover" :src="image" />
        </div>
      </div>
    </div>
    <div ref="thumbsRef" class="embla embla--thumb rounded-5">
      <div class="embla__container--thumb">
        <div
          v-for="(image, index) in images"
          :key="index"
          @click="onThumbsClick(index)"
          class="embla__slide flex cursor-pointer items-center justify-center overflow-hidden rounded-5 bg-white"
        >
          <CustomImage :src="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.embla {
  overflow: hidden;
}
.embla__container {
  display: flex;
  width: 400px;
  height: 100%;
  gap: 20px;
  padding-right: 20px;
  margin-right: -20px;
}
.embla__container--thumb {
  width: 200px;
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-x;
  height: 420px;
  gap: 20px;
  flex-direction: column;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}

.embla--thumb .embla__slide {
  flex: 0 0 200px;
  min-height: 0;
}
</style>
