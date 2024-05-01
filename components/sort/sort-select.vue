<script setup>
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import CustomIcon from '@/components/shared/icon/custom-icon.vue'
import { sortParams } from '@/components/sort/sort-params'
import { useProductStore } from '@/store/product'

const productStore = useProductStore()
const { currentSort } = storeToRefs(productStore)

const selectedSort = computed({
  get: () => currentSort.value,
  set: (value) => productStore.setSort(value)
})

const compareDepartments = (a, b) => {
  return a.label === b.label
}
</script>

<template>
  <div>
    <Listbox v-model="selectedSort" :by="compareDepartments">
      <div class="relative">
        <ListboxButton
          v-slot="{ open }"
          class="relative flex w-full cursor-pointer items-center gap-2 rounded-lg text-18-700 text-light ring-offset-2 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-1 focus-visible:ring-light"
        >
          <span class="block truncate">{{ selectedSort.label }}</span>
          <CustomIcon
            name="shared/down"
            class="text-[20px] text-light transition-transform"
            :class="open ? '-rotate-180' : ''"
          />
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute z-10 mt-1 max-h-72 overflow-auto rounded-2xl bg-light py-1 text-base shadow-lg focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-for="item in sortParams"
              v-slot="{ active, selected }"
              :key="item.label"
              :value="item"
              as="template"
            >
              <li
                class="relative cursor-pointer select-none px-5 py-3 pl-8 text-16-500 transition-colors"
                :class="{
                  'bg-brown-red/10 text-brown': active || selected,
                  'text-brown-red': !active && !selected
                }"
              >
                <span
                  class="block truncate"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ item.label }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-brown"
                >
                  <CustomIcon name="shared/check" class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
