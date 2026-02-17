<script setup lang="ts">
import { ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const navRoutes = router.getRoutes().filter((route) => route.meta?.showInNav)
const showOffcanvas = ref(false)

const isActive = (r: RouteRecordRaw) => r.name === route.name
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
        <li
          v-for="r in navRoutes"
          :key="r.name"
          class="list-group-item"
          :class="{ 'bg-success text-white': isActive(r) }"
        >
          <router-link
            :to="{ name: r.name }"
            class="text-decoration-none text-white"
            @click="showOffcanvas = false"
          >
            <CIcon :icon="r.meta?.icon" class="me-2" />
            {{ r.meta?.title }}
          </router-link>
        </li>
      </ul>
    </COffcanvasBody>
  </COffcanvas>
</template>
