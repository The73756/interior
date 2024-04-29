<script lang="ts" setup>
import { DialogPanel, TransitionChild, TransitionRoot, Dialog } from '@headlessui/vue'

defineProps({
  open: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['close-modal'])

const handleClose = () => {
  emits('close-modal')
}
</script>

<template>
  <TransitionRoot appear :show="open" as="template">
    <Dialog @close="handleClose" as="div" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/40" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel>
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
