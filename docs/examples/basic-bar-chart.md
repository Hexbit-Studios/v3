# Basic Bar Chart

This example demonstrates the most basic usage of the BarChart component.

## Simple Example

```vue
<script setup>
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
  <div style="width: 100%; height: 400px;">
    <BarChart 
      :data="data" 
      x-key="name" 
      y-key="value"
      color="#22d3ee"
    />
  </div>
</template>
```

<DemoContainer title="Live Preview">
  <BasicBarChartExample />
</DemoContainer>

## With TypeScript

```vue
<script setup lang="ts">
import { BarChart } from '@hexbit/v3'
import type { DataPoint } from '@hexbit/v3'

interface MonthlyData extends DataPoint {
  name: string
  value: number
}

const data: MonthlyData[] = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 45 },
  { name: 'Mar', value: 60 },
  { name: 'Apr', value: 40 },
  { name: 'May', value: 75 }
]
</script>

<template>
  <div style="width: 100%; height: 400px;">
    <BarChart 
      :data="data" 
      x-key="name" 
      y-key="value"
      color="#22d3ee"
    />
  </div>
</template>
```

<DemoContainer title="Live Preview with TypeScript">
  <BasicBarChartExample />
</DemoContainer>

## Custom Color

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const data = [
  { month: 'January', sales: 4200 },
  { month: 'February', sales: 3800 },
  { month: 'March', sales: 5200 },
  { month: 'April', sales: 6100 },
  { month: 'May', sales: 5800 }
]
</script>

<template>
  <div style="width: 100%; height: 400px;">
    <BarChart 
      :data="data" 
      x-key="month" 
      y-key="sales"
      color="#06b6d4"
    />
  </div>
</template>
```

<DemoContainer title="Live Preview">
  <CustomColorExample />
</DemoContainer>

## Multiple Charts

You can display multiple charts side by side:

<DemoContainer title="Live Preview - Multiple Charts">
  <MultipleChartsExample />
</DemoContainer>

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const salesData = [
  { quarter: 'Q1', amount: 45000 },
  { quarter: 'Q2', amount: 52000 },
  { quarter: 'Q3', amount: 48000 },
  { quarter: 'Q4', amount: 61000 }
]

const expenseData = [
  { quarter: 'Q1', amount: 32000 },
  { quarter: 'Q2', amount: 35000 },
  { quarter: 'Q3', amount: 33000 },
  { quarter: 'Q4', amount: 38000 }
]
</script>

<template>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
    <div style="height: 400px;">
      <h3>Sales</h3>
      <BarChart 
        :data="salesData" 
        x-key="quarter" 
        y-key="amount"
        color="#22d3ee"
      />
    </div>
    
    <div style="height: 400px;">
      <h3>Expenses</h3>
      <BarChart 
        :data="expenseData" 
        x-key="quarter" 
        y-key="amount"
        color="#ef4444"
      />
    </div>
  </div>
</template>
```

## Dynamic Data

Update chart data reactively:

<DemoContainer title="Live Preview - Try clicking the buttons!">
  <DynamicDataExample />
</DemoContainer>

```vue
<script setup>
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
    <div style="margin-bottom: 20px;">
      <button @click="addDay">Add Day</button>
      <button @click="reset" style="margin-left: 10px;">Reset</button>
    </div>
    
    <div style="width: 100%; height: 400px;">
      <BarChart 
        :data="data" 
        x-key="day" 
        y-key="visitors"
        color="#0891b2"
      />
    </div>
  </div>
</template>

<style scoped>
button {
  padding: 8px 16px;
  background: #22d3ee;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  background: #06b6d4;
}
</style>
```

## With Different Data Ranges

The chart automatically adjusts to different value ranges:

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

// Small values
const smallData = [
  { label: 'A', value: 0.5 },
  { label: 'B', value: 1.2 },
  { label: 'C', value: 0.8 }
]

// Large values
const largeData = [
  { label: 'X', value: 15000 },
  { label: 'Y', value: 28000 },
  { label: 'Z', value: 21000 }
]
</script>

<template>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
    <div style="height: 300px;">
      <h4>Small Values</h4>
      <BarChart 
        :data="smallData" 
        x-key="label" 
        y-key="value"
      />
    </div>
    
    <div style="height: 300px;">
      <h4>Large Values</h4>
      <BarChart 
        :data="largeData" 
        x-key="label" 
        y-key="value"
      />
    </div>
  </div>
</template>
```

## Key Takeaways

- The component requires `data`, `x-key`, and `y-key` props
- Data should be an array of objects
- The container needs defined dimensions (width and height)
- Color can be customized with any valid CSS color
- Data updates are reactive and smoothly animated
- Y-axis automatically scales with D3's `nice()` method

## See Also

- [BarChart API Reference](/api/bar-chart)
- [Custom Styling Example](/examples/custom-styling)
- [Responsive Charts Example](/examples/responsive-charts)

