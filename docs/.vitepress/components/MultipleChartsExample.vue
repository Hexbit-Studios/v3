<script setup lang="ts">
import { BarChart } from '@hexbit/v3'

const salesData = [
  { quarter: 'Q1', amount: 45000 },
  { quarter: 'Q2', amount: 52000 },
  { quarter: 'Q3', amount: 48000 },
  { quarter: 'Q4', amount: 61000 },
]

const expenseData = [
  { quarter: 'Q1', amount: 32000 },
  { quarter: 'Q2', amount: 35000 },
  { quarter: 'Q3', amount: 33000 },
  { quarter: 'Q4', amount: 38000 },
]
</script>

<template>
  <div class="charts-grid">
    <div class="chart-item">
      <h4>Sales</h4>
      <BarChart :data="salesData" x-key="quarter" y-key="amount" color="#22d3ee" />
    </div>

    <div class="chart-item">
      <h4>Expenses</h4>
      <BarChart :data="expenseData" x-key="quarter" y-key="amount" color="#ef4444" />
    </div>
  </div>
</template>

<style scoped>
.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.chart-item {
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.chart-item h4 {
  margin: 0 0 12px 0;
  font-size: 16px;
  color: #1f2937;
  font-weight: 600;
}

.chart-item :deep(.v3-bar-chart) {
  height: 280px;
}
</style>
