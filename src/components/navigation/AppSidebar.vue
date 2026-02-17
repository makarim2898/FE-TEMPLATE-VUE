<script setup lang="ts">
import { ref } from 'vue'
const showOffcanvas = ref(false)
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
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
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
      Content for the offcanvas goes here. You can place just about any Bootstrap component or
      custom elements here.
    </COffcanvasBody>
  </COffcanvas>
</template>
