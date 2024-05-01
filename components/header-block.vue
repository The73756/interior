<script lang="ts" setup>
import LoginModal from '@/components/login-modal.vue'
import RegistrationModal from '@/components/registration-modal.vue'
import CustomButton from '@/components/shared/button/custom-button.vue'
import CustomImage from '@/components/shared/custom-image.vue'
import CustomText from '@/components/shared/custom-text.vue'
import CustomInput from '@/components/shared/input/custom-input.vue'
import IconLink from '@/components/shared/link/icon-link.vue'
import { useBasketStore } from '@/store/basket'
import { useProductStore } from '@/store/product'
import { useUserStore } from '@/store/user'

const navLinks = [
  {
    label: 'Новости сайта',
    href: '/news'
  },
  {
    label: 'Контакты',
    href: '/contacts'
  },
  {
    label: 'Админ панель',
    href: '/admin'
  }
]

const userStore = useUserStore()
const productStore = useProductStore()
const basketStore = useBasketStore()
const { user, isAuth } = storeToRefs(userStore)
const { search } = storeToRefs(productStore)
const { basket } = storeToRefs(basketStore)

const isShowLoginModal = ref(false)
const isShowRegistrationModal = ref(false)
const searchInput = computed({
  get: () => search.value,
  set: (value) => {
    productStore.setSearch(value)
  }
})

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

const handleLogout = () => {
  userStore.logout()
  basketStore.resetBasket()
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
        <NuxtLink
          @click="productStore.setSearch('')"
          class="w block h-full"
          to="/"
          title="На главную"
        >
          <CustomImage src="/images/logo.svg" width="200" height="auto" alt="Логотип компании" />
        </NuxtLink>
        <div class="flex w-full justify-between gap-5">
          <CustomInput v-model="searchInput" placeholder="Поиск..." icon="shared/search" />
          <div class="flex items-center gap-4">
            <div class="relative">
              <IconLink to="/basket" icon="shared/cart" />
              <div
                v-if="basket.length"
                class="absolute -top-1 right-0 flex h-5 w-5 translate-x-1/2 items-center justify-center rounded-full bg-red-500 text-12-500 font-bold text-light"
              >
                {{ basket.length }}
              </div>
            </div>

            <CustomButton
              v-if="isAuth"
              @click="handleLogout"
              class="relative after:absolute after:inset-0 after:flex after:items-center after:justify-center after:rounded-2xl after:border-2 after:border-light after:bg-brown-red after:text-light after:opacity-0 after:transition-opacity after:content-['Выйти'] hover:after:opacity-100 focus-visible:after:opacity-100"
            >
              {{ user?.name }} {{ user?.surname }}
            </CustomButton>
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
