<script setup lang="ts">
import { ref } from 'vue'

const collectData = ref([
  { id: 1, name: 'Collect Data 1', description: 'Description of Collect Data 1' },
  { id: 2, name: 'Collect Data 2', description: 'Description of Collect Data 2' },
])
</script>

<template>
  <div>
    <h1>Collect Data</h1>
    <ul>
      <li v-for="data in collectData" :key="data.id">
        <h2>{{ data.name }}</h2>
        <p>{{ data.description }}</p>
      </li>
    </ul>
  </div>
</template>