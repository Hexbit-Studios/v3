<script setup lang="ts">
import { ref } from 'vue'
import { BarChart } from '@hexbit/v3'
import type { DataPoint } from '@hexbit/v3'

interface SalesData extends DataPoint {
  month: string
  sales: number
}

const salesData = ref<SalesData[]>([
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 6000 },
  { month: 'Apr', sales: 8000 },
  { month: 'May', sales: 7000 },
  { month: 'Jun', sales: 9000 },
])
</script>

<template>
  <div class="api-demo">
    <h3>Monthly Sales</h3>
    <BarChart
      :data="salesData"
      x-key="month"
      y-key="sales"
      color="#22d3ee"
      :margin="{ top: 20, right: 30, bottom: 40, left: 60 }"
    />
  </div>
</template>

<style scoped>
.api-demo {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.api-demo h3 {
  margin: 0 0 20px 0;
  color: #1f2937;
  font-size: 20px;
}

.api-demo :deep(.v3-bar-chart) {
  height: 400px;
}
</style>
