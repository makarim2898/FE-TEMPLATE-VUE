<script setup lang="ts">
import { ref } from 'vue'
const historyData = ref([
  { id: 1, name: 'History 1', description: 'Description of History 1' },
  { id: 2, name: 'History 2', description: 'Description of History 2' },
])
</script>

<template>
  <div>
    <h1>History</h1>
    <ul>
      <li v-for="history in historyData" :key="history.id">
        <h2>{{ history.name }}</h2>
        <p>{{ history.description }}</p>
      </li>
    </ul>
  </div>
</template>