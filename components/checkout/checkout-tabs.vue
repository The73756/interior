<script lang="ts" setup>
import { PropType } from 'vue'
import { formatPrice } from '@/helpers/price-format'
import { Tab } from '@/types/tabs'

defineProps({
  tabs: {
    type: Array as PropType<Tab[]>,
    required: true
  }
})

const model = defineModel({
  type: Object as PropType<Tab>
})

const handleClick = (tab: Tab) => {
  model.value = tab
}
</script>

<template>
  <div class="flex items-center gap-5">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      @click="handleClick(tab)"
      :disabled="!tab.isAvailable"
      :title="
        !tab.isAvailable ? 'На данный момент этот вариант не доступен. Уже разбираемся с этим' : ''
      "
      :class="
        tab.value === model?.value
          ? 'bg-yellow hover:bg-yellow'
          : 'bg-light hover:bg-brown-red hover:text-light'
      "
      class="text mx-auto flex h-[38px] w-full items-center justify-between gap-6 rounded-2xl px-4 text-brown-red transition-colors disabled:bg-grey disabled:text-white"
    >
      <span class="text-16-500" :class="!formatPrice(tab?.price) && 'mx-auto'">
        {{ tab.label }}
      </span>
      <span v-if="formatPrice(tab?.price)" class="text-16-500">{{ formatPrice(tab?.price) }}</span>
    </button>
  </div>
</template>
