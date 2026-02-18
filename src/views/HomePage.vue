<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CameraCard from '@/components/inspection/InspectionCamera.vue'
import EngineInfo from '@/components/inspection/EngineInfo.vue'
import InspectionTable from '@/components/inspection/InspectionTable.vue'

const cameras = ref([
  { id: 1, url: 'http://localhost:5000/camera/1' },
  { id: 2, url: 'http://localhost:5000/camera/2' },
  { id: 3, url: 'http://localhost:5000/camera/3' },
  { id: 4, url: 'http://localhost:5000/camera/4' },
  { id: 5, url: 'http://localhost:5000/camera/5' },
  { id: 6, url: 'http://localhost:5000/camera/6' },
])

// 🔹 DATA DARI BACKEND
const engineNumber = ref('')
const engineVariant = ref('')
const inspectionRows = ref([])

async function fetchInspectionResult() {
  try {
    const res = await fetch('http://localhost:5000/api/inspection/latest')

    if (!res.ok) {
      resetInspection()
      return
    }

    const data = await res.json()

    // backend belum kirim data
    if (!data || !data.items || data.items.length === 0) {
      resetInspection()
      return
    }

    engineNumber.value = data.engineNumber || ''
    engineVariant.value = data.engineVariant || ''
    inspectionRows.value = data.items || []
  } catch (err) {
    console.error('Failed fetch inspection:', err)
    resetInspection()
  }
}

function resetInspection() {
  engineNumber.value = ''
  engineVariant.value = ''
  inspectionRows.value = []
}

onMounted(() => {
  fetchInspectionResult()
})
</script>

<template>
  <div class="inspection-view">
    <!-- ROW CAMERA -->
    <div class="camera-row">
      <CameraCard v-for="cam in cameras" :key="cam.id" :camera-id="cam.id" :stream-url="cam.url" />
    </div>

    <!-- INFO + TABLE -->
    <div class="engine-info">
      <EngineInfo title="Engine Number " :value="engineNumber" />

      <EngineInfo title="Engine Variant " :value="engineVariant" />
    </div>

    <div class="table-wrapper">
      <InspectionTable :rows="inspectionRows" />
    </div>
  </div>
</template>
