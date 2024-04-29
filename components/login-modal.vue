<script lang="ts" setup>
import BgModalWrapper from '@/components/modal/bg-modal-wrapper.vue'
import CustomButton from '@/components/shared/button/custom-button.vue'
import ButtonInput from '@/components/shared/input/button-input.vue'

const emits = defineEmits(['change-modal', 'close-login-modal'])

defineProps({
  open: {
    type: Boolean,
    required: true
  }
})

const handleClose = () => {
  emits('close-login-modal')
}
</script>

<template>
  <BgModalWrapper @close-modal="handleClose" :open="open" title="Войти">
    <div class="flex flex-col gap-4">
      <ButtonInput placeholder="E-mail" button-text="" />
      <ButtonInput placeholder="Пароль" button-text="" />
      <CustomButton custom-bg="bg-yellow text-24-500">Войти</CustomButton>
      <div class="text-light flex gap-2">
        <p>Нет аккаунта</p>
        <button @click="emits('change-modal')" class="underline transition-colors hover:text-white">
          Зарегистрируйтесь
        </button>
      </div>
    </div>
  </BgModalWrapper>
</template>
