<script lang="ts" setup>
import FooterBlock from '@/components/footer-block.vue'
import HeaderBlock from '@/components/header-block.vue'
import SidebarBlock from '@/components/sidebar/sidebar-block.vue'
</script>

<template>
  <div>
    <HeaderBlock />
    <div class="container flex">
      <SidebarBlock />
      <main class="relative flex min-h-[calc(100vh-160px)] w-full flex-col bg-beige lg:ml-[190px]">
        <div class="flex flex-1 flex-col p-5">
          <slot />
        </div>
        <FooterBlock class="mt-auto" />

        <div
          aria-hidden="true"
          class="absolute left-0 top-0 h-[calc(100%-210px)] w-full translate-x-full bg-beige max-lg:hidden"
        />
      </main>
    </div>
  </div>
</template>
