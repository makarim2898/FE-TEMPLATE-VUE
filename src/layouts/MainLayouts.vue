<template>
  <CContainer fluid class="p-0">
    <AppNavbar />
    <!-- Page Content -->
    <CContainer fluid class="mt-3">
      <router-view />
    </CContainer>
  </CContainer>
</template>

<script setup lang="ts">
import AppNavbar from '@/components/navigation/AppNavbar.vue'
</script>
