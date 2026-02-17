<script setup>
  import { ref } from 'vue'
  const visibleEnd = ref(false)
</script>


<template>
  <CButton color="primary" @click="() => { visibleEnd = !visibleEnd }">Toggle right offcanvas</CButton>
  <COffcanvas placement="start" :visible="visibleEnd" @hide="() => { visibleEnd = !visibleEnd }">
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton class="text-reset" @click="() => { visibleEnd = false }"/>
    </COffcanvasHeader>
    <COffcanvasBody>
      Content for the offcanvas goes here. You can place just about any Bootstrap component or
      custom elements here.
    </COffcanvasBody>
  </COffcanvas>
</template>