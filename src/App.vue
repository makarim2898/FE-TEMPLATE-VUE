<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from './components/navigation/AppNavbar.vue'
</script>

<template>
  <!-- <CIcon name="cil-home" size="2xl" /> -->
  <AppNavbar />
  <RouterView />
</template>

<style scoped></style>
