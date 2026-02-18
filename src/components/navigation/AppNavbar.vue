<script setup lang="ts">
import AppSidebar from '@/components/navigation/AppSidebar.vue'
import { computed } from 'vue'

import { useRoute } from 'vue-router'

const route = useRoute()

const navbarTitle = computed(() => {
  // kalau meta.title ada, tampilkan
  return route.meta?.title ? `AI Curring Time - ${route.meta.title}` : 'AI Curring Time'
})
</script>

<template>
  <CNavbar color-scheme="dark" class="bg-dark">
    <CContainer fluid>
      <CNavbarBrand href="#">
        <AppSidebar />
        {{ navbarTitle }}
      </CNavbarBrand>
    </CContainer>
  </CNavbar>
</template>
