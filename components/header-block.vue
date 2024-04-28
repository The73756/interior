<script lang="ts" setup>
import CustomButton from '@/components/shared/button/custom-button.vue'
import IconButton from '@/components/shared/button/icon-button.vue'
import CustomText from '@/components/shared/custom-text.vue'
import CustomIcon from '@/components/shared/icon/custom-icon.vue'
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
  <header class="bg-brown fixed top-0 z-10 h-40 w-full py-6 text-white">
    <div class="container mx-0 flex flex-col px-0 pr-10">
      <div class="mb-6 ml-auto">
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
      <div class="flex items-center justify-between gap-6">
        <CustomInput placeholder="Поиск..." icon="shared/search" />
        <div class="flex items-center gap-4">
          <IconLink to="basket" icon="shared/cart" />
          <CustomButton> Иванов Иван </CustomButton>
        </div>
      </div>
    </div>
  </header>
</template>
