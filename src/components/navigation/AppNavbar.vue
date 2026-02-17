<script setup lang="ts">
import AppSidebar from '@/components/navigation/AppSidebar.vue'
</script>

<template>
  <CNavbar color-scheme="dark" class="bg-dark">
    <CContainer fluid>
      <CNavbarBrand href="#">
        <AppSidebar />
        AI Curring Time
      </CNavbarBrand>
    </CContainer>
  </CNavbar>
</template>
