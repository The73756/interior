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
      <main class="bg-beige relative ml-[190px] flex h-[400vh] min-h-screen w-full flex-col">
        <slot />
        <FooterBlock class="mt-auto" />

        <div
          aria-hidden="true"
          class="bg-beige absolute left-0 top-0 h-[calc(100%-210px)] w-full translate-x-full"
        />
      </main>
    </div>
  </div>
</template>
