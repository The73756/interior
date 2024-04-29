<script lang="ts" setup>
import FooterBlock from '@/components/footer-block.vue'
import HeaderBlock from '@/components/header-block.vue'
</script>

<template>
  <div>
    <HeaderBlock />
    <div class="container flex">
      <main class="relative flex min-h-[calc(100vh-370px)] w-full flex-col bg-beige">
        <div class="flex flex-1 flex-col p-5">
          <slot />
        </div>
      </main>
    </div>
    <FooterBlock class="mt-auto" />
  </div>
</template>
