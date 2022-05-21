<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import ThemeBtn from './components/ThemeSwitchButton.vue'
import Navigation from './components/BaseNavigation.vue'
</script>

<template>
  <Navigation />
  <ThemeBtn />
  <router-view></router-view>
</template>
