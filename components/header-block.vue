<script lang="ts" setup>
import CustomButton from '@/components/shared/button/custom-button.vue'
import CustomImage from '@/components/shared/custom-image.vue'
import CustomText from '@/components/shared/custom-text.vue'
import CustomInput from '@/components/shared/input/custom-input.vue'
import IconLink from '@/components/shared/link/icon-link.vue'

const navLinks = [
  {
    label: 'Новости сайта',
    href: '/news'
  },
  {
    label: 'Контакты',
    href: '/contacts'
  }
]
</script>

<template>
  <header class="text-light sticky top-0 z-10 flex h-40 w-full justify-center bg-brown py-6">
    <div class="container flex flex-col gap-6">
      <div class="ml-auto">
        <nav>
          <ul class="flex gap-5">
            <li v-for="link in navLinks" :key="link.href">
              <NuxtLink :to="link.href" class="hover:underline">
                <CustomText size="18" as="span" weight="bold">
                  {{ link.label }}
                </CustomText>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex items-center gap-6">
        <NuxtLink class="w block h-full" to="/" title="На главную">
          <CustomImage src="/images/logo.svg" width="200" height="auto" alt="Логотип компании" />
        </NuxtLink>
        <div class="flex w-full justify-between gap-5">
          <CustomInput placeholder="Поиск..." icon="shared/search" />
          <div class="flex items-center gap-4">
            <IconLink to="/basket" icon="shared/cart" />
            <CustomButton> Иванов Иван</CustomButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
