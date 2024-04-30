import { z } from 'zod'

export const fullNameValidation = () =>
  z
    .string({ required_error: 'Это обязательное поле' })
    .trim()
    .regex(/^[а-яА-ЯёЁ\s]+$/, 'Имя может содержать только русские буквы и пробелы')
    .min(3, 'Имя должно содержать не менее 3 символов')

export const surNameValidation = () =>
  z
    .string({ required_error: 'Это обязательное поле' })
    .trim()
    .regex(/^[а-яА-ЯёЁ\s]+$/, 'Фамилия может содержать только русские буквы и пробелы')
    .min(3, 'Фамилия должна содержать не менее 3 символов')

export const passwordValidation = () =>
  z
    .string({ required_error: 'Это обязательное поле' })
    .min(8, 'Пароль должен содержать не менее 8 символов')

export const schoolClassValidation = () =>
  z
    .number({
      required_error: 'Это обязательное поле',
      coerce: true,
      invalid_type_error: 'Класс должен быть числом'
    })
    .gte(1, 'Класс не может быть меньше 1')
    .lte(11, 'Класс не может быть больше 11')

export const emailValidation = () =>
  z.string({ required_error: 'Это обязательное поле' }).email('Неверный формат почты')

export const bankCardValidation = () =>
  z
    .string({ required_error: 'Это обязательное поле' })
    .min(1, 'Это обязательное поле')
    .length(19, { message: 'Неверный формат карты' })

export const CVVValidation = () =>
  z
    .string({ required_error: 'CVV обязателен' })
    .min(1, 'Это обязательное поле')
    .max(3, 'CVV должен быть 3 символа')
    .min(3, 'CVV должен быть 3 символа')
    .regex(/^\d+$/, 'CVV должен содержать только цифры')

export const cardExpirationDate = () =>
  z
    .string({ required_error: 'Срок действия обязателен' })
    .min(1, 'Это обязательное поле')
    .regex(/^\d{2}\/\d{2}$/, 'Срок действия должен быть в формате MM/YY')
    .refine((value) => {
      const [month] = value.split('/')
      return parseInt(month, 10) <= 12
    }, 'Неверный формат даты')

export const phoneValidation = () =>
  z
    .string({ required_error: 'Это обязательное поле' })
    .min(1, 'Это обязательное поле')
    .min(18, 'Неверный формат номера')

export const requiredString = () =>
  z.string({ required_error: 'Это обязательное поле' }).min(1, 'Это обязательное поле')

export const requiredNumber = () =>
  z
    .string({ required_error: 'Это обязательное поле' })
    .min(1, 'Это обязательное поле')
    .regex(/^\d+$/, 'Это поле должно содержать только цифры')
