<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import ThemeBtn from './components/ThemeSwitchButton.vue'
import MainNavigation from './components/MainNavigation.vue'
import BaseDropdown from './components/BaseDropdown.vue';
</script>

<template>
  <a href="#main" class="sr-only">skip to content</a>
  <header class="bg-gray-200 flex justify-end">
    <MainNavigation />
    <ThemeBtn />
    <!-- <BaseDropdown /> -->
  </header>

  <main id="main" class="mx-3">
   <router-view></router-view>
  </main>
</template>

<style lang="scss">
.content-wrapper {
  margin: 0 auto;
  max-width: 95vw;
}
</style>