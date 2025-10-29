<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="demo-container">
    <div v-if="title" class="demo-title">{{ title }}</div>
    <div class="demo-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  margin: 24px 0;
  background: linear-gradient(135deg, #f0fdff 0%, #f0f9ff 100%);
}

.demo-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.demo-content {
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.demo-content :deep(.v3-bar-chart) {
  height: 350px;
  width: 100%;
}
</style>
