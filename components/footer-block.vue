<script lang="ts" setup>
import IconButton from '@/components/shared/button/icon-button.vue'
import ButtonInput from '@/components/shared/input/button-input.vue'

const links = ref([
  {
    title: 'Покупателям',
    items: [
      { label: 'Контакты', to: '/contacts' },
      { label: 'Сертификаты и гарантии', to: '/certificates' },
      { label: 'Онлайн-чат поддержки', to: '/chat' },
      { label: 'Вопрос-ответ (FAQ)', to: '/faq' }
    ]
  },
  {
    title: 'Компания',
    items: [
      { label: 'Акции', to: '/sales' },
      { label: 'Новости сайта', to: '/news' },
      { label: 'Способы доставки', to: '/delivery' },
      { label: 'Бренды', to: '/brands' }
    ]
  }
])
</script>

<template>
  <footer class="h-[210px] bg-brown py-4 text-light">
    <div class="container flex h-full w-full justify-between">
      <div class="flex h-full gap-10">
        <div v-for="link in links" :key="link.title">
          <h3 class="mb-1 text-24-700">{{ link.title }}</h3>
          <ul>
            <li v-for="item in link.items" :key="item.label">
              <NuxtLink class="text-16-500 hover:underline" :to="item.to">{{
                item.label
              }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col justify-between">
        <div>
          <h2 class="text-24-700">Подписаться</h2>
          <p class="text-16-500">Введите свой email и получайте рассылку</p>
        </div>
        <ButtonInput placeholder="E-mail" />
        <div class="flex items-center justify-between">
          <h3 class="text-18-700">Мы в соц сетях</h3>
          <div class="flex items-center gap-3">
            <IconButton custom-size="text-20-700" class="text-brown" icon="shared/tg" />
            <IconButton custom-size="text-20-700" class="text-brown" icon="shared/vk" />
            <IconButton custom-size="text-20-700" class="text-brown" icon="shared/youtube" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
