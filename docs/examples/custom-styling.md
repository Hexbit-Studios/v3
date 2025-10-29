# Custom Styling

Learn how to customize the appearance of your charts with custom styles and colors.

## Custom Bar Colors

The simplest way to customize appearance is with the `color` prop:

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const data = [
  { product: 'Product A', sales: 4500 },
  { product: 'Product B', sales: 6200 },
  { product: 'Product C', sales: 3800 }
]
</script>

<template>
  <div style="width: 100%; height: 400px;">
    <BarChart 
      :data="data" 
      x-key="product" 
      y-key="sales"
      color="#f59e0b"
    />
  </div>
</template>
```

## Custom Margins

Adjust margins to accommodate longer labels or add more spacing:

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const data = [
  { category: 'Very Long Category Name 1', value: 45 },
  { category: 'Very Long Category Name 2', value: 62 },
  { category: 'Very Long Category Name 3', value: 38 }
]
</script>

<template>
  <div style="width: 100%; height: 400px;">
    <BarChart 
      :data="data" 
      x-key="category" 
      y-key="value"
      :margin="{ top: 30, right: 30, bottom: 80, left: 60 }"
    />
  </div>
</template>
```

## Styled Container

Wrap your chart in a styled container:

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const data = [
  { month: 'Jan', revenue: 12500 },
  { month: 'Feb', revenue: 15800 },
  { month: 'Mar', revenue: 18200 }
]
</script>

<template>
  <div class="chart-card">
    <h2 class="chart-title">Monthly Revenue</h2>
    <p class="chart-subtitle">Last Quarter Performance</p>
    <div class="chart-wrapper">
      <BarChart 
        :data="data" 
        x-key="month" 
        y-key="revenue"
        color="#0891b2"
      />
    </div>
  </div>
</template>

<style scoped>
.chart-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.chart-title {
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
}

.chart-subtitle {
  margin: 0 0 20px 0;
  font-size: 14px;
  color: #6b7280;
}

.chart-wrapper {
  width: 100%;
  height: 400px;
}
</style>
```

## Custom Axis Styling

Override the default axis styles using deep selectors:

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const data = [
  { year: '2020', growth: 5.2 },
  { year: '2021', growth: 7.8 },
  { year: '2022', growth: 6.5 },
  { year: '2023', growth: 8.9 }
]
</script>

<template>
  <div class="custom-chart">
    <BarChart 
      :data="data" 
      x-key="year" 
      y-key="growth"
      color="#06b6d4"
    />
  </div>
</template>

<style scoped>
.custom-chart {
  width: 100%;
  height: 400px;
}

/* Customize axis text */
.custom-chart :deep(.x-axis text),
.custom-chart :deep(.y-axis text) {
  font-size: 14px;
  font-weight: 600;
  fill: #1f2937;
  font-family: 'Inter', sans-serif;
}

/* Customize axis lines */
.custom-chart :deep(.x-axis path),
.custom-chart :deep(.y-axis path),
.custom-chart :deep(.x-axis line),
.custom-chart :deep(.y-axis line) {
  stroke: #9ca3af;
  stroke-width: 2;
}

/* Hide domain line */
.custom-chart :deep(.domain) {
  display: none;
}
</style>
```

## Custom Bar Hover Effects

Create unique hover interactions:

<DemoContainer title="Live Preview - Hover over the bars!">
  <CustomStylingExample />
</DemoContainer>

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const data = [
  { category: 'Electronics', value: 78 },
  { category: 'Clothing', value: 56 },
  { category: 'Food', value: 89 },
  { category: 'Books', value: 34 }
]
</script>

<template>
  <div class="hover-chart">
    <BarChart 
      :data="data" 
      x-key="category" 
      y-key="value"
      color="#ec4899"
    />
  </div>
</template>

<style scoped>
.hover-chart {
  width: 100%;
  height: 400px;
}

/* Enhanced hover effect */
.hover-chart :deep(.bar) {
  transition: all 0.3s ease;
}

.hover-chart :deep(.bar:hover) {
  opacity: 0.7;
  transform: translateY(-5px);
  filter: drop-shadow(0 10px 15px rgba(236, 72, 153, 0.3));
}
</style>
```

## Dark Theme

Create a dark-themed chart:

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const data = [
  { metric: 'CPU', usage: 45 },
  { metric: 'Memory', usage: 62 },
  { metric: 'Disk', usage: 38 },
  { metric: 'Network', usage: 71 }
]
</script>

<template>
  <div class="dark-container">
    <div class="dark-card">
      <h3>System Resources</h3>
      <div class="dark-chart">
        <BarChart 
          :data="data" 
          x-key="metric" 
          y-key="usage"
          color="#60a5fa"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dark-container {
  background: #0f172a;
  padding: 20px;
  min-height: 500px;
}

.dark-card {
  background: #1e293b;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #334155;
}

.dark-card h3 {
  margin: 0 0 20px 0;
  color: #f1f5f9;
  font-size: 20px;
}

.dark-chart {
  width: 100%;
  height: 400px;
}

/* Dark theme axis styling */
.dark-chart :deep(.x-axis text),
.dark-chart :deep(.y-axis text) {
  fill: #cbd5e1;
}

.dark-chart :deep(.x-axis path),
.dark-chart :deep(.y-axis path),
.dark-chart :deep(.x-axis line),
.dark-chart :deep(.y-axis line) {
  stroke: #475569;
}

.dark-chart :deep(.bar:hover) {
  filter: brightness(1.2);
}
</style>
```

## Gradient Bars

Use CSS to create gradient effects:

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const data = [
  { quarter: 'Q1', profit: 125 },
  { quarter: 'Q2', profit: 158 },
  { quarter: 'Q3', profit: 142 },
  { quarter: 'Q4', profit: 189 }
]
</script>

<template>
  <div class="gradient-chart">
    <!-- Define gradient -->
    <svg width="0" height="0">
      <defs>
        <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
        </linearGradient>
      </defs>
    </svg>
    
    <BarChart 
      :data="data" 
      x-key="quarter" 
      y-key="profit"
      color="url(#barGradient)"
    />
  </div>
</template>

<style scoped>
.gradient-chart {
  width: 100%;
  height: 400px;
}
</style>
```

## Rounded Corners and Shadows

The bars already have rounded corners, but you can customize further:

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const data = [
  { item: 'Item A', count: 42 },
  { item: 'Item B', count: 58 },
  { item: 'Item C', count: 35 }
]
</script>

<template>
  <div class="modern-chart">
    <BarChart 
      :data="data" 
      x-key="item" 
      y-key="count"
      color="#14b8a6"
    />
  </div>
</template>

<style scoped>
.modern-chart {
  width: 100%;
  height: 400px;
}

.modern-chart :deep(.bar) {
  filter: drop-shadow(0 4px 6px rgba(20, 184, 166, 0.2));
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modern-chart :deep(.bar:hover) {
  filter: drop-shadow(0 10px 15px rgba(20, 184, 166, 0.3));
  opacity: 0.85;
}
</style>
```

## Comparison: Before and After

Here's a comparison showing default styling vs custom styling:

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const data = [
  { label: 'A', value: 30 },
  { label: 'B', value: 60 },
  { label: 'C', value: 45 }
]
</script>

<template>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
    <!-- Default -->
    <div>
      <h3>Default Styling</h3>
      <div style="height: 350px;">
        <BarChart 
          :data="data" 
          x-key="label" 
          y-key="value"
        />
      </div>
    </div>
    
    <!-- Custom -->
    <div>
      <h3>Custom Styling</h3>
      <div class="custom-comparison">
        <BarChart 
          :data="data" 
          x-key="label" 
          y-key="value"
          color="#f59e0b"
          :margin="{ top: 30, right: 30, bottom: 50, left: 60 }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-comparison {
  height: 350px;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 20px;
  border-radius: 12px;
}

.custom-comparison :deep(.x-axis text),
.custom-comparison :deep(.y-axis text) {
  font-size: 13px;
  font-weight: 600;
  fill: #92400e;
}

.custom-comparison :deep(.x-axis path),
.custom-comparison :deep(.y-axis path) {
  stroke: #d97706;
  stroke-width: 2;
}

.custom-comparison :deep(.bar) {
  filter: drop-shadow(0 4px 6px rgba(245, 158, 11, 0.3));
}

.custom-comparison :deep(.bar:hover) {
  opacity: 0.8;
  filter: drop-shadow(0 8px 12px rgba(245, 158, 11, 0.4));
}
</style>
```

## Tips for Custom Styling

1. **Use `:deep()` selector** for styling SVG elements generated by D3
2. **Maintain accessibility** - ensure sufficient color contrast
3. **Test responsiveness** - custom styles should work at all sizes
4. **Consider theming** - use CSS variables for easy theme switching
5. **Smooth transitions** - use CSS transitions for better UX

## Available Classes

The BarChart component uses these CSS classes that you can target:

- `.v3-bar-chart` - Container element
- `.bar` - Individual bar elements
- `.x-axis` - X-axis group
- `.y-axis` - Y-axis group
- `.chart-content` - Main SVG group containing the chart

## See Also

- [BarChart API Reference](/api/bar-chart)
- [Basic Bar Chart Example](/examples/basic-bar-chart)
- [Responsive Charts Example](/examples/responsive-charts)

