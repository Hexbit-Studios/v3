# Responsive Charts

Learn how to create charts that automatically adapt to different screen sizes and container dimensions.

## Default Responsive Behavior

By default, all charts are responsive:

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const data = [
  { month: 'Jan', sales: 120 },
  { month: 'Feb', sales: 180 },
  { month: 'Mar', sales: 150 },
  { month: 'Apr', sales: 220 },
  { month: 'May', sales: 190 }
]
</script>

<template>
  <div style="width: 100%; height: 400px;">
    <BarChart 
      :data="data" 
      x-key="month" 
      y-key="sales"
    />
  </div>
</template>
```

The chart will automatically resize when:
- The window is resized
- The container dimensions change
- The layout changes (e.g., sidebar toggle)

## Flexible Container

Use percentage-based sizing for truly flexible charts:

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const data = [
  { category: 'A', value: 45 },
  { category: 'B', value: 78 },
  { category: 'C', value: 62 }
]
</script>

<template>
  <div class="container">
    <div class="chart-box">
      <BarChart 
        :data="data" 
        x-key="category" 
        y-key="value"
        color="#0891b2"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  padding: 20px;
}

.chart-box {
  width: 100%;
  height: 50vh; /* 50% of viewport height */
  min-height: 300px;
  max-height: 600px;
}
</style>
```

## Grid Layout

Create responsive dashboards with multiple charts:

<DemoContainer title="Live Preview - Resize your browser!">
  <ResponsiveDashboardExample />
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

const profitData = [
  { quarter: 'Q1', amount: 13000 },
  { quarter: 'Q2', amount: 17000 },
  { quarter: 'Q3', amount: 15000 },
  { quarter: 'Q4', amount: 23000 }
]
</script>

<template>
  <div class="dashboard">
    <div class="chart-card">
      <h3>Sales</h3>
      <div class="chart-wrapper">
        <BarChart 
          :data="salesData" 
          x-key="quarter" 
          y-key="amount"
          color="#22d3ee"
        />
      </div>
    </div>
    
    <div class="chart-card">
      <h3>Expenses</h3>
      <div class="chart-wrapper">
        <BarChart 
          :data="expenseData" 
          x-key="quarter" 
          y-key="amount"
          color="#ef4444"
        />
      </div>
    </div>
    
    <div class="chart-card">
      <h3>Profit</h3>
      <div class="chart-wrapper">
        <BarChart 
          :data="profitData" 
          x-key="quarter" 
          y-key="amount"
          color="#06b6d4"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
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
  height: 300px;
}
</style>
```

## Mobile-Responsive

Adjust chart dimensions based on screen size:

```vue
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { BarChart } from '@hexbit/v3'

const data = [
  { product: 'Product A', sales: 4500 },
  { product: 'Product B', sales: 6200 },
  { product: 'Product C', sales: 3800 },
  { product: 'Product D', sales: 5400 }
]

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const chartMargin = computed(() => 
  isMobile.value
    ? { top: 20, right: 10, bottom: 60, left: 40 }
    : { top: 20, right: 20, bottom: 40, left: 50 }
)
</script>

<template>
  <div :class="['responsive-container', { mobile: isMobile }]">
    <BarChart 
      :data="data" 
      x-key="product" 
      y-key="sales"
      :margin="chartMargin"
      color="#06b6d4"
    />
  </div>
</template>

<style scoped>
.responsive-container {
  width: 100%;
  height: 500px;
  padding: 20px;
}

.responsive-container.mobile {
  height: 400px;
  padding: 10px;
}

@media (max-width: 768px) {
  .responsive-container {
    height: 350px;
  }
}
</style>
```

## Container Query Support

For modern browsers, use container queries:

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const data = [
  { label: 'A', value: 42 },
  { label: 'B', value: 68 },
  { label: 'C', value: 55 },
  { label: 'D', value: 81 }
]
</script>

<template>
  <div class="container-query-wrapper">
    <div class="chart-container">
      <BarChart 
        :data="data" 
        x-key="label" 
        y-key="value"
        color="#f59e0b"
      />
    </div>
  </div>
</template>

<style scoped>
.container-query-wrapper {
  container-type: inline-size;
  container-name: chart;
  width: 100%;
}

.chart-container {
  width: 100%;
  height: 400px;
  padding: 20px;
}

/* Adjust based on container width */
@container chart (max-width: 500px) {
  .chart-container {
    height: 300px;
    padding: 10px;
  }
}

@container chart (min-width: 800px) {
  .chart-container {
    height: 500px;
    padding: 30px;
  }
}
</style>
```

## Sidebar Toggle

Charts that adapt when a sidebar is toggled:

```vue
<script setup>
import { ref } from 'vue'
import { BarChart } from '@hexbit/v3'

const sidebarOpen = ref(true)

const data = [
  { metric: 'Metric A', value: 75 },
  { metric: 'Metric B', value: 82 },
  { metric: 'Metric C', value: 68 },
  { metric: 'Metric D', value: 91 }
]
</script>

<template>
  <div class="layout">
    <aside v-if="sidebarOpen" class="sidebar">
      <button @click="sidebarOpen = false">Close Sidebar</button>
      <p>Sidebar Content</p>
    </aside>
    
    <main class="main">
      <button v-if="!sidebarOpen" @click="sidebarOpen = true" class="open-btn">
        Open Sidebar
      </button>
      
      <div class="chart-area">
        <h2>Dashboard Metrics</h2>
        <div class="chart-box">
          <BarChart 
            :data="data" 
            x-key="metric" 
            y-key="value"
            color="#0891b2"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 600px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

.sidebar {
  width: 250px;
  background: #f3f4f6;
  padding: 20px;
  transition: all 0.3s ease;
}

.sidebar button {
  width: 100%;
  padding: 8px;
  background: #22d3ee;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
}

.main {
  flex: 1;
  padding: 20px;
  overflow: auto;
}

.open-btn {
  padding: 8px 16px;
  background: #22d3ee;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
}

.chart-area h2 {
  margin: 0 0 20px 0;
  color: #1f2937;
}

.chart-box {
  width: 100%;
  height: 450px;
}
</style>
```

## Full-Screen Chart

Toggle between normal and full-screen view:

```vue
<script setup>
import { ref } from 'vue'
import { BarChart } from '@hexbit/v3'

const isFullscreen = ref(false)

const data = [
  { year: '2019', revenue: 125000 },
  { year: '2020', revenue: 145000 },
  { year: '2021', revenue: 168000 },
  { year: '2022', revenue: 192000 },
  { year: '2023', revenue: 215000 }
]

const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
}
</script>

<template>
  <div>
    <button @click="toggleFullscreen" class="toggle-btn">
      {{ isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen' }}
    </button>
    
    <div :class="['chart-view', { fullscreen: isFullscreen }]">
      <button 
        v-if="isFullscreen" 
        @click="toggleFullscreen" 
        class="close-btn"
      >
        ✕
      </button>
      
      <h2>Annual Revenue</h2>
      <div class="chart-container">
        <BarChart 
          :data="data" 
          x-key="year" 
          y-key="revenue"
          color="#06b6d4"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.toggle-btn {
  padding: 10px 20px;
  background: #22d3ee;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 20px;
}

.toggle-btn:hover {
  background: #06b6d4;
}

.chart-view {
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.chart-view.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  border-radius: 0;
  box-shadow: none;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.close-btn:hover {
  background: #dc2626;
}

.chart-view h2 {
  margin: 0 0 20px 0;
  color: #1f2937;
}

.chart-container {
  width: 100%;
  height: 400px;
}

.chart-view.fullscreen .chart-container {
  height: calc(100vh - 120px);
}
</style>
```

## Disabling Responsive Behavior

For specific use cases where you want a fixed size:

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const data = [
  { item: 'A', count: 30 },
  { item: 'B', count: 60 },
  { item: 'C', count: 45 }
]
</script>

<template>
  <div style="width: 600px; height: 400px;">
    <BarChart 
      :data="data" 
      x-key="item" 
      y-key="count"
      :responsive="false"
    />
  </div>
</template>
```

## Best Practices

1. **Always set container dimensions** - Charts need explicit width and height
2. **Use min/max constraints** - Prevent charts from becoming too small or large
3. **Test at different sizes** - Ensure charts work well on mobile, tablet, and desktop
4. **Adjust margins for mobile** - Use smaller margins on small screens
5. **Consider data density** - Limit number of bars on small screens
6. **Use viewport units wisely** - `vh` and `vw` can help with responsive sizing

## Performance Tips

The responsive behavior uses `ResizeObserver` which is highly performant, but keep in mind:

- **Debouncing is built-in** - The chart updates are already optimized
- **Multiple charts** - Each chart observes only its own container
- **Disable when not needed** - Set `responsive={false}` for fixed-size charts
- **Minimize re-renders** - Keep data updates efficient

## Common Responsive Patterns

### Pattern 1: Fluid Width, Fixed Height
```vue
<div style="width: 100%; height: 400px;">
  <BarChart :data="data" x-key="name" y-key="value" />
</div>
```

### Pattern 2: Aspect Ratio Container
```vue
<div style="width: 100%; aspect-ratio: 16/9;">
  <BarChart :data="data" x-key="name" y-key="value" />
</div>
```

### Pattern 3: Viewport-Based Sizing
```vue
<div style="width: 90vw; height: 60vh; max-width: 1200px;">
  <BarChart :data="data" x-key="name" y-key="value" />
</div>
```

## See Also

- [useSvgCanvas Composable](/api/use-svg-canvas) - The underlying responsive mechanism
- [Basic Bar Chart Example](/examples/basic-bar-chart)
- [Custom Styling Example](/examples/custom-styling)

