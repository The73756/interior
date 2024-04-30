<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'
import BgModalWrapper from '@/components/modal/bg-modal-wrapper.vue'
import CustomButton from '@/components/shared/button/custom-button.vue'
import ButtonInput from '@/components/shared/input/button-input.vue'
import CustomCheckbox from '@/components/shared/input/custom-checkbox.vue'
import { useUserStore } from '@/store/user'
import {
  emailValidation,
  fullNameValidation,
  passwordValidation,
  surNameValidation
} from '@/utils/validation-schemas'

const emits = defineEmits(['change-modal', 'close-registration-modal'])

defineProps({
  open: {
    type: Boolean,
    required: true
  }
})

const userStore = useUserStore()
const { isLoading, error } = storeToRefs(userStore)

const validationSchema = toTypedSchema(
  z
    .object({
      name: fullNameValidation(),
      surname: surNameValidation(),
      email: emailValidation(),
      password: passwordValidation(),
      confirmPassword: z.string({ required_error: 'Это обязательное поле' }),
      isAgree: z.boolean({ required_error: 'Согласие обязательно' })
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Пароли не совпадают',
      path: ['confirmPassword']
    })
)

const { defineField, meta, errors, handleSubmit } = useForm({
  validationSchema
})

const [name, nameAttrs] = defineField('name')
const [surname, surnameAttrs] = defineField('surname')
const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword')
const [isAgree, isAgreeAttrs] = defineField('isAgree')

const onSubmit = handleSubmit(async (values) => {
  if (!meta.value.valid) return

  await userStore.registration(values)

  if (!error.value) {
    handleClose()
  }
})

const handleClose = () => {
  emits('close-registration-modal')
}
</script>

<template>
  <BgModalWrapper @close-modal="handleClose" :open="open" title="Зарегистрироваться">
    <form @submit="onSubmit" class="flex flex-col gap-4">
      <ButtonInput
        v-model="name"
        :attrs="nameAttrs"
        :error="errors.name"
        placeholder="Имя"
        button-text=""
      />
      <ButtonInput
        v-model="surname"
        :attrs="surnameAttrs"
        :error="errors.surname"
        placeholder="Фамилия"
        button-text=""
      />
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
      <ButtonInput
        v-model="confirmPassword"
        :attrs="confirmPasswordAttrs"
        :error="errors.confirmPassword"
        placeholder="Подтвердите пароль"
        button-text=""
      />
      <div>
        <label class="flex items-center gap-2 text-light">
          <CustomCheckbox v-model="isAgree" :attrs="isAgreeAttrs" />
          <span>Согласен(на) на обработку персональных данных </span>
        </label>
        <span v-if="errors.isAgree">{{ errors.isAgree }}</span>
      </div>
      <CustomButton
        :loading="isLoading"
        :disabled="!meta.valid"
        type="submit"
        custom-bg="bg-yellow text-24-500"
      >
        Зарегистрироваться
      </CustomButton>
      <div class="flex gap-2 text-light">
        <p>Уже зарегистрированы?</p>
        <button
          @click="emits('change-modal')"
          type="button"
          class="underline transition-colors hover:text-white"
        >
          Войти
        </button>
      </div>
    </form>
  </BgModalWrapper>
</template>
