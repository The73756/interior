<script setup lang="ts">
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot
} from '@headlessui/vue'
import { PropType } from 'vue'
import CustomIcon from '@/components/shared/icon/custom-icon.vue'
import { ComboboxItem } from '@/types/combobox'

const props = defineProps({
  labelText: {
    type: String,
    default: ''
  },
  labelClass: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object as PropType<ComboboxItem[]>,
    required: true
  },
  multiply: {
    type: Boolean,
    default: false
  }
})

const selectedOption = defineModel({ type: Object as PropType<ComboboxItem[]> })
const query = ref('')

const filteredOption = computed<ComboboxItem[]>(() => {
  return query.value === ''
    ? props.options
    : props.options.filter((options) =>
        options.name
          .toString()
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      )
})
</script>

<template>
  <div>
    <Combobox v-model="selectedOption" :multiple="multiply">
      <div class="relative">
        <div
          class="relative w-full cursor-default overflow-hidden rounded-2xl bg-white text-left outline outline-2 outline-transparent focus-within:outline-yellow"
        >
          <ComboboxInput
            @change="query = $event.target.value"
            class="h-[45px] w-full rounded-2xl border-none bg-light py-2 pl-5 pr-10 text-18-500 leading-5 text-brown-red focus:outline-none"
            :display-value="
              (item: unknown) =>
                Array.isArray(item) ? '' : (selectedOption && (item as ComboboxItem).name) || ''
            "
          />
          <ComboboxButton
            v-slot="{ open }"
            :disabled="disabled"
            class="absolute inset-y-0 right-0 flex w-full items-center justify-between gap-1 px-5 pr-2 disabled:opacity-50"
          >
            <span
              v-if="(!selectedOption || selectedOption.length < 1) && !query"
              class="text-18-500 text-grey"
            >
              {{ placeholder }}
            </span>

            <span v-if="Array.isArray(selectedOption) && !query" class="text-basic text-18-500">
              {{ (selectedOption as ComboboxItem[]).map((item) => item.name).join(', ') }}
            </span>
            <CustomIcon
              name="shared/down"
              class="ml-auto text-brown transition-transform"
              :class="open ? '-rotate-180' : ''"
            />
          </ComboboxButton>
        </div>
        <TransitionRoot
          @after-leave="query = ''"
          leave="transition ease-in duration-100"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <ComboboxOptions
            class="ring-border-lavender absolute z-10 mt-1 max-h-72 w-full overflow-auto rounded-2xl bg-light py-1 text-base shadow-lg ring-1 focus:outline-none sm:text-sm"
          >
            <div
              v-if="filteredOption.length === 0 && query !== ''"
              class="relative cursor-default select-none px-4 py-2 text-16-500 text-brown-red"
            >
              Ничего не найдено
            </div>

            <ComboboxOption
              v-for="option in filteredOption"
              :key="option.slug"
              v-slot="{ selected, active }"
              as="template"
              :value="option"
            >
              <li
                class="relative cursor-pointer select-none px-5 py-3 text-16-500 transition-colors"
                :class="{
                  'bg-brown-red/10 text-brown': active || selected,
                  'text-brown-red': !active && !selected
                }"
              >
                <span
                  class="block truncate"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ option.name }}
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
        <ul
          v-if="Array.isArray(selectedOption) && selectedOption.length > 0"
          class="mt-2 flex flex-wrap gap-1"
        >
          <li
            v-for="multiplyOption in selectedOption"
            :key="multiplyOption.slug"
            class="rounded-lg border border-brown px-3 py-1 text-16-500 text-brown-red transition-colors"
          >
            {{ multiplyOption.name }}
          </li>
        </ul>
      </div>
    </Combobox>
  </div>
</template>
