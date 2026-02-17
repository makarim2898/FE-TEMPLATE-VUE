<template>
  <CContainer fluid class="p-0">
    <!-- Topbar -->
    <CHeader class="bg-dark text-white d-flex align-items-center px-3">
      <CButton color="secondary" @click="toggleOffcanvas"> ☰ </CButton>
      <span class="ms-2">My App</span>
    </CHeader>

    <!-- Offcanvas -->
    <COffcanvas
      :backdrop="true"
      dark
      placement="start"
      :visible="offcanvasVisible"
      @close="offcanvasVisible = false"
    >
      <COffcanvasHeader>
        <COffcanvasTitle>Menu</COffcanvasTitle>
        <CCloseButton class="text-reset" @click="offcanvasVisible = false" />
      </COffcanvasHeader>

      <COffcanvasBody>
        <ul class="list-group list-group-flush">
          <li v-for="route in navRoutes" :key="route.name" class="list-group-item">
            <router-link
              :to="{ name: route.name }"
              class="text-decoration-none"
              @click="offcanvasVisible = false"
            >
              <CIcon :icon="route.meta?.icon" class="me-2" />
              {{ route.meta?.title }}
            </router-link>
          </li>
        </ul>
      </COffcanvasBody>
    </COffcanvas>

    <!-- Page Content -->
    <CContainer fluid class="mt-3">
      <router-view />
    </CContainer>
  </CContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  COffcanvasBody,
  CHeader,
  CButton,
  CCloseButton,
  CContainer,
} from '@coreui/vue'

const offcanvasVisible = ref(false)
const toggleOffcanvas = () => (offcanvasVisible.value = !offcanvasVisible.value)

const router = useRouter()

const navRoutes = router.getRoutes().filter((route) => route.meta?.showInNav)
</script>
