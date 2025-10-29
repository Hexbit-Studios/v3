<script setup lang="ts">
import { BarChart } from '@hexbit/v3'

const data = [
  { category: 'Electronics', value: 78 },
  { category: 'Clothing', value: 56 },
  { category: 'Food', value: 89 },
  { category: 'Books', value: 34 }
]
</script>

<template>
  <div class="styled-chart">
    <BarChart 
      :data="data" 
      x-key="category" 
      y-key="value"
      color="#ec4899"
    />
  </div>
</template>

<style scoped>
.styled-chart {
  width: 100%;
}

.styled-chart :deep(.bar) {
  transition: all 0.3s ease;
}

.styled-chart :deep(.bar:hover) {
  opacity: 0.7;
  transform: translateY(-5px);
  filter: drop-shadow(0 10px 15px rgba(236, 72, 153, 0.3));
}

.styled-chart :deep(.x-axis text),
.styled-chart :deep(.y-axis text) {
  font-size: 13px;
  font-weight: 600;
  fill: #1f2937;
}

.styled-chart :deep(.x-axis path),
.styled-chart :deep(.y-axis path) {
  stroke: #9ca3af;
  stroke-width: 2;
}
</style>

