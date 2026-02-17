<script setup lang="ts">
import { ref } from 'vue'
import AppSidebar from '@/components/navigation/AppSidebar.vue'
import AppNavbar from '@/components/navigation/AppNavbar.vue'

const collapsed = ref(false)

const toggleSidebar = () => {
  collapsed.value = !collapsed.value
}
</script>

<template>
  <div class="layout">
    <AppSidebar
      :collapsed="collapsed"
      @toggle="toggleSidebar"
    />

    <div
      class="main"
      :class="{ expanded: collapsed }"
    >
      <AppNavbar
        :collapsed="collapsed"
        @toggle="toggleSidebar"
      />

      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
}

.main {
  flex: 1;
  transition: margin-left 0.3s ease;
}

.main.expanded {
  margin-left: 0;
}

.content {
  padding: 24px;
  background: #f9fafb;
  min-height: calc(100vh - 60px);
}
</style>
