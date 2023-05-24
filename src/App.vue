<script setup lang="ts">
import ThemeBtn from './components/ThemeSwitchButton.vue'
import MainNavigation from './components/MainNavigation.vue'
</script>

<template>
  <a href="#main" class="sr-only">skip to content</a>
  <header class="bg-gray-200 dark:bg-gray-700 flex justify-end">
    <MainNavigation />
    <ThemeBtn />
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