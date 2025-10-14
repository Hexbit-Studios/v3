<script setup lang="ts">
import { ref } from 'vue'
import { BarChart } from './index'

const sampleData = ref([
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 45 },
  { name: 'Mar', value: 60 },
  { name: 'Apr', value: 40 },
  { name: 'May', value: 70 },
  { name: 'Jun', value: 55 },
])
</script>

<template>
  <div class="app">
    <h1>@hexbit/v3 - Development Playground</h1>
    
    <div class="chart-container">
      <h2>Bar Chart Example</h2>
      <BarChart 
        :data="sampleData" 
        x-key="name" 
        y-key="value"
        color="#10b981"
      />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: #f9fafb;
}

.app {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: #1f2937;
  margin-bottom: 2rem;
}

h2 {
  color: #374151;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.chart-container {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: 500px;
}
</style>