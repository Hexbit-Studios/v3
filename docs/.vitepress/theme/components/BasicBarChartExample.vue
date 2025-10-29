<script setup lang="ts">
import { BarChart } from '@hexbit/v3'

const data = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 45 },
  { name: 'Mar', value: 60 },
  { name: 'Apr', value: 40 },
  { name: 'May', value: 75 }
]
</script>

<template>
  <BarChart 
    :data="data" 
    x-key="name" 
    y-key="value"
    color="#22d3ee"
  />
</template>

