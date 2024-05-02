<script lang="ts" setup>
import LoginModal from '@/components/login-modal.vue'
import MobileMenu from '@/components/mobile-menu.vue'
import ModalWrapper from '@/components/modal/modal-wrapper.vue'
import SubmitModal from '@/components/modal/submit-modal.vue'
import RegistrationModal from '@/components/registration-modal.vue'
import CustomButton from '@/components/shared/button/custom-button.vue'
import IconButton from '@/components/shared/button/icon-button.vue'
import CustomImage from '@/components/shared/custom-image.vue'
import CustomText from '@/components/shared/custom-text.vue'
import CustomInput from '@/components/shared/input/custom-input.vue'
import IconLink from '@/components/shared/link/icon-link.vue'
import SidebarBlock from '@/components/sidebar/sidebar-block.vue'
import { useBasketStore } from '@/store/basket'
import { useProductStore } from '@/store/product'
import { useUserStore } from '@/store/user'

const navLinks = [
  {
    label: 'Новости сайта',
    href: '/news',
    isPrivate: false
  },
  {
    label: 'Контакты',
    href: '/contacts',
    isPrivate: false
  },
  {
    label: 'Админ панель',
    href: '/admin',
    isPrivate: true
  }
]

const userStore = useUserStore()
const productStore = useProductStore()
const basketStore = useBasketStore()
const { user, isAuth } = storeToRefs(userStore)
const { search } = storeToRefs(productStore)
const { basket, isShowBasketAuthModal } = storeToRefs(basketStore)

const showSubmitModal = ref(false)

const isShowLoginModal = ref(false)
const isShowRegistrationModal = ref(false)
const isShowMobileMenu = ref(false)
const searchInput = computed({
  get: () => search.value,
  set: (value) => {
    productStore.setSearch(value)
  }
})

const toggleSubmitModal = () => {
  showSubmitModal.value = !showSubmitModal.value
}

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
  showSubmitModal.value = false
}

const handleAuth = () => {
  basketStore.closeBasketAuthModal()
  isShowLoginModal.value = true
}

const toggleMobileMenu = () => {
  isShowMobileMenu.value = !isShowMobileMenu.value
}
</script>

<template>
  <header class="sticky top-0 z-10 flex h-40 w-full justify-center bg-brown py-6 text-light">
    <div class="container flex flex-col gap-2 lg:gap-6">
      <div class="ml-auto max-lg:hidden">
        <nav>
          <ul class="flex gap-5">
            <template v-for="link in navLinks" :key="link.href">
              <li v-if="!link.isPrivate || isAuth">
                <NuxtLink :to="link.href" class="hover:underline">
                  <CustomText size="18" as="span" weight="bold">
                    {{ link.label }}
                  </CustomText>
                </NuxtLink>
              </li>
            </template>
          </ul>
        </nav>
      </div>

      <div class="flex items-center justify-between gap-4 lg:hidden">
        <NuxtLink
          @click="productStore.setSearch('')"
          class="relative block"
          to="/"
          title="На главную"
        >
          <CustomImage
            src="/images/logo.svg"
            width="200"
            height="auto"
            img-class="h-[65px] block"
            alt="Логотип компании"
          />
          <h1 class="sr-only">Мастерская интерьера</h1>
        </NuxtLink>
        <CustomInput v-model="searchInput" placeholder="Поиск..." icon="shared/search" />
      </div>

      <div class="flex items-center gap-6">
        <NuxtLink
          @click="productStore.setSearch('')"
          class="relative block h-full max-lg:hidden"
          to="/"
          title="На главную"
        >
          <CustomImage src="/images/logo.svg" width="200" height="auto" alt="Логотип компании" />
          <h1 class="sr-only">Мастерская интерьера</h1>
        </NuxtLink>
        <div class="flex w-full justify-between gap-5">
          <CustomInput
            v-model="searchInput"
            class="max-lg:hidden"
            placeholder="Поиск..."
            icon="shared/search"
          />
          <div class="flex items-center gap-2 max-lg:ml-auto max-lg:w-full md:gap-4">
            <IconButton @click="toggleMobileMenu" icon="shared/menu" class="lg:hidden" />
            <div class="relative">
              <IconLink v-if="isAuth" title="Корзина" to="/basket" icon="shared/cart" />
              <div
                v-if="basket.length"
                class="absolute -top-1 right-0 flex h-5 w-5 translate-x-1/2 items-center justify-center rounded-full bg-red-500 text-12-500 font-bold text-light"
              >
                {{ basket.length }}
              </div>
            </div>

            <CustomButton
              v-if="isAuth"
              @click="toggleSubmitModal"
              class="relative whitespace-nowrap after:absolute after:inset-0 after:flex after:items-center after:justify-center after:rounded-2xl after:border-2 after:border-light after:bg-brown-red after:text-light after:opacity-0 after:transition-opacity after:content-['Выйти'] hover:after:opacity-100 focus-visible:after:opacity-100"
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

    <SubmitModal
      @click-submit-button="handleLogout"
      @close-submit-modal="toggleSubmitModal"
      @click-reject-button="toggleSubmitModal"
      :open="showSubmitModal"
      title="Выход из профиля"
      desc="Вы уверены что хотите выйти?"
      submit-button-text="Выйти"
    />

    <SubmitModal
      @click-submit-button="handleAuth"
      @close-submit-modal="basketStore.closeBasketAuthModal"
      @click-reject-button="basketStore.closeBasketAuthModal"
      :open="isShowBasketAuthModal"
      title="Авторизация"
      desc="Чтобы добавить в корзину, вы должны быть авторизованы!"
      submit-button-text="Авторизоваться"
    />

    <div class="fixed bottom-0 z-10 lg:hidden" :class="isShowMobileMenu ? 'block' : 'hidden'">
      <div class="relative bottom-0 flex h-[calc(100vh-160px)] w-screen flex-col bg-brown p-2">
        <MobileMenu @close-mobile-menu="toggleMobileMenu" class="" />
        <div class="p-3">
          <nav>
            <ul class="flex flex-wrap justify-center gap-3">
              <template v-for="link in navLinks" :key="link.href">
                <li v-if="!link.isPrivate || isAuth">
                  <NuxtLink @click="toggleMobileMenu" :to="link.href" class="hover:underline">
                    <CustomText size="16" as="span" weight="bold">
                      {{ link.label }}
                    </CustomText>
                  </NuxtLink>
                </li>
              </template>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
