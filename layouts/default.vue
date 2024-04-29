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
      <main class="relative ml-[190px] flex min-h-[calc(100vh-160px)] w-full flex-col bg-beige">
        <div class="p-5">
          <slot />
        </div>
        <FooterBlock class="mt-auto" />

        <div
          aria-hidden="true"
          class="absolute left-0 top-0 h-[calc(100%-210px)] w-full translate-x-full bg-beige"
        />
      </main>
    </div>
  </div>
</template>
