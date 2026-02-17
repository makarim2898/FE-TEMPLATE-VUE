<script setup lang="ts">
import { ref } from 'vue'

const cameraSetupData = ref([
  { id: 1, name: 'Camera Setup 1', description: 'Description of Camera Setup 1' },
  { id: 2, name: 'Camera Setup 2', description: 'Description of Camera Setup 2' },
])
</script>

<template>
  <div>
    <h1>Camera Setup</h1>
    <ul>
      <li v-for="camera in cameraSetupData" :key="camera.id">
        <h2>{{ camera.name }}</h2>
        <p>{{ camera.description }}</p>
      </li>
    </ul>
  </div>
</template>