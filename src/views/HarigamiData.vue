<script setup lang="ts">
import { ref } from 'vue'

const harigamiData = ref([
  { id: 1, name: 'Harigami 1', description: 'Description of Harigami 1' },
  { id: 2, name: 'Harigami 2', description: 'Description of Harigami 2' },
])
</script>

<template>
  <div>
    <h1>Harigami Data</h1>
    <ul>
      <li v-for="harigami in harigamiData" :key="harigami.id">
        <h2>{{ harigami.name }}</h2>
        <p>{{ harigami.description }}</p>
      </li>
    </ul>
  </div>
</template>