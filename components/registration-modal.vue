<script lang="ts" setup>
import BgModalWrapper from '@/components/modal/bg-modal-wrapper.vue'
import CustomButton from '@/components/shared/button/custom-button.vue'
import ButtonInput from '@/components/shared/input/button-input.vue'
import CustomCheckbox from '@/components/shared/input/custom-checkbox.vue'

const emits = defineEmits(['change-modal', 'close-registration-modal'])

defineProps({
  open: {
    type: Boolean,
    required: true
  }
})

const handleClose = () => {
  emits('close-registration-modal')
}
</script>

<template>
  <BgModalWrapper @close-modal="handleClose" :open="open" title="Зарегистрироваться">
    <div class="flex flex-col gap-4">
      <ButtonInput placeholder="Имя" button-text="" />
      <ButtonInput placeholder="Фамилия" button-text="" />
      <ButtonInput placeholder="E-mail" button-text="" />
      <ButtonInput placeholder="Пароль" button-text="" />
      <ButtonInput placeholder="Подтвердите пароль" button-text="" />
      <label class="text-light flex items-center gap-2">
        <CustomCheckbox /> <span>Согласен(на) на обработку персональных данных </span>
      </label>
      <CustomButton custom-bg="bg-yellow text-24-500">Зарегистрироваться</CustomButton>
      <div class="text-light flex gap-2">
        <p>Уже зарегистрированы?</p>
        <button @click="emits('change-modal')" class="underline transition-colors hover:text-white">
          Войти
        </button>
      </div>
    </div>
  </BgModalWrapper>
</template>
