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

const profitData = [
  { quarter: 'Q1', amount: 13000 },
  { quarter: 'Q2', amount: 17000 },
  { quarter: 'Q3', amount: 15000 },
  { quarter: 'Q4', amount: 23000 },
]
</script>

<template>
  <div class="dashboard">
    <div class="chart-card">
      <h3>Sales</h3>
      <div class="chart-wrapper">
        <BarChart :data="salesData" x-key="quarter" y-key="amount" color="#22d3ee" />
      </div>
    </div>

    <div class="chart-card">
      <h3>Expenses</h3>
      <div class="chart-wrapper">
        <BarChart :data="expenseData" x-key="quarter" y-key="amount" color="#ef4444" />
      </div>
    </div>

    <div class="chart-card">
      <h3>Profit</h3>
      <div class="chart-wrapper">
        <BarChart :data="profitData" x-key="quarter" y-key="amount" color="#06b6d4" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.chart-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.chart-card h3 {
  margin: 0 0 15px 0;
  font-size: 18px;
  color: #1f2937;
}

.chart-wrapper {
  width: 100%;
  height: 280px;
}

.chart-wrapper :deep(.v3-bar-chart) {
  height: 100%;
}
</style>
