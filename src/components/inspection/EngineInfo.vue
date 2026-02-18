<script setup lang="ts">
interface Props {
  title: string
  value?: string
}

defineProps<Props>()
</script>

<template>
  <div class="engine-card">
    <span class="engine-title">{{ title }} :</span>
    <span class="engine-value">{{ value || '-' }}</span>
  </div>
</template>



<style scoped>
.engine-card {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #263551;
  color: #fff;
  border-radius: 6px;
  font-size: 14px;
}

.engine-title {
  font-weight: 600;
  color: #9ba7b4;
  white-space: nowrap;
}

.engine-value {
  font-weight: 500;
}
</style>
