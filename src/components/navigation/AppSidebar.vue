<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const navRoutes = router.getRoutes().filter((route) => route.meta?.showInNav)
const showOffcanvas = ref(false)

console.log(navRoutes)
</script>

<template>
  <CButton
    @click="
      () => {
        showOffcanvas = !showOffcanvas
      }
    "
  >
    <img
      src="../../assets/icon-tittle.png"
      alt=""
      width="22"
      height="24"
      class="d-inline-block align-top"
    />
  </CButton>
  <COffcanvas
    placement="start"
    :visible="showOffcanvas"
    @hide="
      () => {
        showOffcanvas = !showOffcanvas
      }
    "
  >
    <COffcanvasHeader>
      <COffcanvasTitle>
        <img src="../../assets/icon-tittle.png" alt="" width="22" height="24" />
        AI Curring Time
      </COffcanvasTitle>
      <CCloseButton
        class="text-reset"
        @click="
          () => {
            showOffcanvas = false
          }
        "
      />
    </COffcanvasHeader>
    <COffcanvasBody>
      <ul class="list-group list-group-flush">
        <li v-for="route in navRoutes" :key="route.name" class="list-group-item">
          <router-link
            :to="{ name: route.name }"
            class="text-decoration-none text-white"
            @click="showOffcanvas = false"
          >
            <CIcon :icon="route.meta?.icon" class="me-2" />
            {{ route.meta?.title }}
          </router-link>
        </li>
      </ul>
    </COffcanvasBody>
  </COffcanvas>
</template>
