<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'
import BgModalWrapper from '@/components/modal/bg-modal-wrapper.vue'
import CustomButton from '@/components/shared/button/custom-button.vue'
import ButtonInput from '@/components/shared/input/button-input.vue'
import { useUserStore } from '@/store/user'
import { emailValidation } from '@/utils/validation-schemas'

const emits = defineEmits(['change-modal', 'close-login-modal'])

defineProps({
  open: {
    type: Boolean,
    required: true
  }
})

const userStore = useUserStore()
const { isLoading, error } = storeToRefs(userStore)

const validationSchema = toTypedSchema(
  z.object({
    email: emailValidation(),
    password: requiredString()
  })
)

const { defineField, meta, errors, handleSubmit } = useForm({
  validationSchema
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit(async (values) => {
  if (!meta.value.valid) return

  await userStore.login(values)

  if (!error.value) {
    emits('close-login-modal')
  }
})

const handleClose = () => {
  emits('close-login-modal')
}
</script>

<template>
  <BgModalWrapper @close-modal="handleClose" :open="open" title="Войти">
    <form @submit="onSubmit" class="flex flex-col gap-4">
      <ButtonInput
        v-model="email"
        :attrs="emailAttrs"
        :error="errors.email"
        placeholder="E-mail"
        button-text=""
      />
      <ButtonInput
        v-model="password"
        :attrs="passwordAttrs"
        :error="errors.password"
        placeholder="Пароль"
        button-text=""
      />
      <CustomButton
        :loading="isLoading"
        :disabled="!meta.valid"
        type="submit"
        custom-bg="bg-yellow text-24-500"
      >
        Войти
      </CustomButton>
      <div class="flex gap-2 text-light">
        <p>Нет аккаунта?</p>
        <button
          @click="emits('change-modal')"
          type="button"
          class="underline transition-colors hover:text-white"
        >
          Зарегистрируйтесь
        </button>
      </div>
    </form>
  </BgModalWrapper>
</template>
