<script setup lang="ts">
import { ref } from 'vue'
import { BarChart } from '@hexbit/v3'

const data = ref([
  { day: 'Mon', visitors: 120 },
  { day: 'Tue', visitors: 150 },
  { day: 'Wed', visitors: 180 },
  { day: 'Thu', visitors: 160 },
  { day: 'Fri', visitors: 220 }
])

const addDay = () => {
  const days = ['Sat', 'Sun']
  const randomDay = days[Math.floor(Math.random() * days.length)]
  const randomVisitors = Math.floor(Math.random() * 200) + 100
  
  data.value.push({
    day: randomDay,
    visitors: randomVisitors
  })
}

const reset = () => {
  data.value = [
    { day: 'Mon', visitors: 120 },
    { day: 'Tue', visitors: 150 },
    { day: 'Wed', visitors: 180 },
    { day: 'Thu', visitors: 160 },
    { day: 'Fri', visitors: 220 }
  ]
}
</script>

<template>
  <div>
    <div style="margin-bottom: 20px; display: flex; gap: 10px;">
      <button @click="addDay" class="demo-button">Add Day</button>
      <button @click="reset" class="demo-button secondary">Reset</button>
    </div>
    
    <BarChart 
      :data="data" 
      x-key="day" 
      y-key="visitors"
      color="#0891b2"
    />
  </div>
</template>

<style scoped>
.demo-button {
  padding: 8px 16px;
  background: #22d3ee;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.demo-button:hover {
  background: #06b6d4;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(34, 211, 238, 0.2);
}

.demo-button.secondary {
  background: #64748b;
}

.demo-button.secondary:hover {
  background: #475569;
}
</style>

