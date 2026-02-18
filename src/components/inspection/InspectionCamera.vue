<script setup lang="ts">
import { CCard, CCardHeader, CCardBody } from '@coreui/vue'

interface Props {
  cameraId: number
  streamUrl: string
}

defineProps<Props>()
</script>

<template>
  <CCard class="camera-card">
    <CCardHeader class="camera-header">
      Camera {{ cameraId }}
    </CCardHeader>

    <CCardBody class="camera-body">
      <img
        :src="streamUrl"
        alt="camera stream"
      />
    </CCardBody>
  </CCard>
</template>

<style scoped>
.camera-card {
  background: #0b1220;
  border: none;
  border-radius: 14px;
  overflow: hidden;
  height: 100%;
}

/* HEADER */
.camera-header {
  background: #111827;
  color: #e5e7eb;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  text-align: center;
}

/* BODY */
.camera-body {
  padding: 0;
  background: black;
  aspect-ratio: 16 / 9;
}

.camera-body img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
