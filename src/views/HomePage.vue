<script setup lang="ts">
import { ref } from 'vue'

const homePageData = ref([
  { id: 1, name: 'Home Page 1', description: 'Description of Home Page 1' },
  { id: 2, name: 'Home Page 2', description: 'Description of Home Page 2' },
])
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <ul>
      <li v-for="home in homePageData" :key="home.id">
        <h2>{{ home.name }}</h2>
        <p>{{ home.description }}</p>
      </li>
    </ul>
  </div>
</template>