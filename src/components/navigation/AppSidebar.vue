<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

defineProps<{ collapsed: boolean }>()
const emit = defineEmits(['toggle'])

const router = useRouter()
const route = useRoute()

const navigationItems = router
  .getRoutes()
  .filter(r => r.meta?.showInNav)
</script>

<template>
  <aside :class="['sidebar', { collapsed }]">
    <div class="sidebar-header">
      <h2 v-if="!collapsed">MyApp</h2>
      <button @click="emit('toggle')">☰</button>
    </div>

    <nav v-if="!collapsed">
      <RouterLink
        v-for="item in navigationItems"
        :key="item.path"
        :to="item.path"
        class="nav-item"
        :class="{ active: route.path === item.path }"
      >
        <i :class="item.meta.icon"></i>
        {{ item.meta.title }}
      </RouterLink>
    </nav>
  </aside>
</template>
