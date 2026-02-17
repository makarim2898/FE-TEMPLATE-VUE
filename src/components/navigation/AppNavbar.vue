<script setup lang="ts">
defineProps<{
  collapsed: boolean
}>()

const emit = defineEmits(['toggle'])
</script>

<template>
  <header class="navbar">
    <button class="toggle-btn" @click="emit('toggle')">
      ☰
    </button>

    <div class="right">
      <span>User</span>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  height: 60px;
  background: white;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.toggle-btn {
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
}

.right {
  font-weight: 500;
}
</style>
