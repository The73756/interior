<script lang="ts" setup>
import FooterBlock from '@/components/footer-block.vue'
import HeaderBlock from '@/components/header-block.vue'
import SidebarBlock from '@/components/sidebar/sidebar-block.vue'
</script>

<template>
  <div class="container flex">
    <SidebarBlock />
    <main class="bg-beige relative flex h-[400vh] min-h-screen w-full flex-col">
      <HeaderBlock />
      <div class="mt-40">
        <slot />
      </div>
      <FooterBlock class="mt-auto" />

      <div
        aria-hidden="true"
        class="bg-beige absolute bottom-1/2 right-0 mb-[25px] h-[calc(100%-370px)] w-full translate-x-full translate-y-1/2"
      />
    </main>
  </div>
</template>
