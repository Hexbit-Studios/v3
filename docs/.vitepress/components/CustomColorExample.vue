<script setup lang="ts">
import { BarChart } from '@hexbit/v3'

const data = [
  { month: 'January', sales: 4200 },
  { month: 'February', sales: 3800 },
  { month: 'March', sales: 5200 },
  { month: 'April', sales: 6100 },
  { month: 'May', sales: 5800 },
]
</script>

<template>
  <BarChart :data="data" x-key="month" y-key="sales" color="#06b6d4" />
</template>
