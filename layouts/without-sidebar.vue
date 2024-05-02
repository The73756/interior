<script lang="ts" setup>
import FooterBlock from '@/components/footer-block.vue'
import HeaderBlock from '@/components/header-block.vue'
</script>

<template>
  <div>
    <HeaderBlock />
    <div class="container flex">
      <main
        class="relative flex min-h-[calc(100vh-370px)] w-full flex-col bg-beige max-lg:h-[calc(100vh-337px)]"
      >
        <div class="flex flex-1 flex-col p-5 max-lg:px-0">
          <slot />
        </div>
      </main>
    </div>
    <FooterBlock :is-container="true" class="mt-auto" />
  </div>
</template>
