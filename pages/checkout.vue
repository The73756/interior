<script lang="ts" setup>
import { definePageMeta } from '@/.nuxt/imports'
import CheckoutTabs from '@/components/checkout/checkout-tabs.vue'
import LightButton from '@/components/shared/button/light-button.vue'
import ButtonInput from '@/components/shared/input/button-input.vue'
import { formatPrice } from '@/helpers/price-format'
import { Tab } from '@/types/tabs'

definePageMeta({
  layout: 'without-sidebar'
})

useHead({
  bodyAttrs: {
    class: 'body-custom'
  }
})

const deliveryTabs = ref<Tab[]>([
  {
    label: 'Самовывоз',
    value: 'pickup',
    price: 0,
    isAvailable: false
  },
  {
    label: 'Доставка',
    value: 'delivery',
    price: 100,
    isAvailable: true
  }
])

const paymentTabs = ref<Tab[]>([
  {
    label: 'Картой онлайн',
    value: 'online',
    isAvailable: true
  },
  {
    label: 'Картой при получении',
    value: 'card',
    isAvailable: true
  },
  {
    label: 'Наличными при получении',
    value: 'cash',
    isAvailable: true
  }
])

const activeDeliveryTab = ref<Tab>(deliveryTabs.value[1])
const activePaymentTab = ref<Tab>(paymentTabs.value[0])
</script>

<template>
  <div>
    <h2 class="mb-10 text-5xl font-bold text-light">Оформление заказа</h2>

    <div class="flex gap-10">
      <div class="w-full">
        <div class="mb-4 flex max-w-[640px] justify-start rounded-2xl">
          <CheckoutTabs v-model="activeDeliveryTab" :tabs="deliveryTabs" />
        </div>

        <ButtonInput placeholder="Адрес" class="mb-8" />

        <div class="mb-6 overflow-hidden rounded-5">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A450e11f32fac890e0b9edc512d1e1331c6e44bf0f1f32952bea674137ed0fe2b&amp;source=constructor"
            width="100%"
            height="450"
            frameborder="0"
          />
        </div>

        <div class="mb-4 justify-start rounded-2xl">
          <h3 class="mb-2 text-24-700 text-light">Выберите способ оплаты</h3>
          <CheckoutTabs v-model="activePaymentTab" :tabs="paymentTabs" />
        </div>
      </div>
      <div class="h-fit rounded-5 bg-light p-6">
        <h3 class="mb-2 text-24-700 text-brown-red">Ваш заказ</h3>
        <div class="flex items-center justify-between text-brown-red">
          <span class="text-18-500">Товары на сумму</span>
          <span class="text-20-700 text-brown">{{ formatPrice(20000) }}</span>
        </div>
        <div class="mb-5 flex items-center justify-between text-brown-red">
          <span class="text-18-500">Доставка</span>
          <span class="text-20-700 text-brown">{{ formatPrice(100) }}</span>
        </div>

        <LightButton
          custom-bg="bg-brown-red hover:bg-brown text-light"
          label="Оплатить"
          :total="20100"
        />
      </div>
    </div>
  </div>
</template>
