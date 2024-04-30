<script lang="ts" setup>
import LoginModal from '@/components/login-modal.vue'
import RegistrationModal from '@/components/registration-modal.vue'
import CustomButton from '@/components/shared/button/custom-button.vue'
import CustomImage from '@/components/shared/custom-image.vue'
import CustomText from '@/components/shared/custom-text.vue'
import CustomInput from '@/components/shared/input/custom-input.vue'
import IconLink from '@/components/shared/link/icon-link.vue'
import { useUserStore } from '@/store/user'

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

const userStore = useUserStore()
const { user, isAuth } = storeToRefs(userStore)

const isShowLoginModal = ref(false)
const isShowRegistrationModal = ref(false)

const toggleLoginModal = () => {
  isShowLoginModal.value = !isShowLoginModal.value
}

const toggleRegistrationModal = () => {
  isShowRegistrationModal.value = !isShowRegistrationModal.value
}

const closeRegistrationAndOpenLoginModal = () => {
  isShowRegistrationModal.value = false
  isShowLoginModal.value = true
}

const closeLoginAndOpenRegistrationModal = () => {
  isShowLoginModal.value = false
  isShowRegistrationModal.value = true
}
</script>

<template>
  <header class="sticky top-0 z-10 flex h-40 w-full justify-center bg-brown py-6 text-light">
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

            <CustomButton v-if="isAuth"> {{ user?.name }} {{ user?.surname }} </CustomButton>
            <CustomButton v-else @click="toggleLoginModal">Войти</CustomButton>
          </div>
        </div>
      </div>
    </div>
    <RegistrationModal
      @close-registration-modal="toggleRegistrationModal"
      @change-modal="closeRegistrationAndOpenLoginModal"
      :open="isShowRegistrationModal"
    />

    <LoginModal
      @close-login-modal="toggleLoginModal"
      @change-modal="closeLoginAndOpenRegistrationModal"
      :open="isShowLoginModal"
    />
  </header>
</template>
