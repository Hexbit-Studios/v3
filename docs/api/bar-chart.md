# BarChart

The `BarChart` component creates a responsive bar chart using D3.js and Vue 3.

## Import

```vue
<script setup>
import { BarChart } from '@hexbit/v3'
</script>
```

## Props

### data

- **Type:** `DataPoint[]`
- **Required:** Yes
- **Description:** Array of data objects to visualize

The data array should contain objects with at least two properties that match the `xKey` and `yKey` props.

```typescript
interface DataPoint {
  [key: string]: string | number | Date | null | undefined
}
```

**Example:**

```javascript
const data = [
  { name: 'A', value: 30 },
  { name: 'B', value: 80 },
  { name: 'C', value: 45 }
]
```

### xKey

- **Type:** `string`
- **Required:** Yes
- **Description:** The property name from data objects to use for the X-axis

This key is used to access the values that will be displayed on the X-axis.

**Example:**

```vue
<BarChart :data="data" x-key="name" y-key="value" />
```

### yKey

- **Type:** `string`
- **Required:** Yes
- **Description:** The property name from data objects to use for the Y-axis

This key is used to access the numeric values that will determine bar heights.

**Example:**

```vue
<BarChart :data="data" x-key="category" y-key="sales" />
```

### margin

- **Type:** `Partial<ChartMargin>`
- **Required:** No
- **Default:** `{ top: 20, right: 20, bottom: 40, left: 50 }`
- **Description:** Margin configuration for the chart

Margins provide space for axes, labels, and padding around the chart.

```typescript
interface ChartMargin {
  top: number
  right: number
  bottom: number
  left: number
}
```

**Example:**

```vue
<BarChart 
  :data="data" 
  x-key="name" 
  y-key="value"
  :margin="{ top: 30, right: 30, bottom: 50, left: 60 }"
/>
```

### color

- **Type:** `string`
- **Required:** No
- **Default:** `'#4f46e5'` (indigo)
- **Description:** The fill color for the bars

Accepts any valid CSS color value.

**Example:**

```vue
<BarChart 
  :data="data" 
  x-key="name" 
  y-key="value"
  color="#06b6d4"
/>
```

You can also use CSS color names, RGB, RGBA, HSL, etc.:

```vue
<!-- Named color -->
<BarChart color="steelblue" />

<!-- Hex color -->
<BarChart color="#ff6b6b" />

<!-- RGB -->
<BarChart color="rgb(99, 102, 241)" />

<!-- RGBA with transparency -->
<BarChart color="rgba(79, 70, 229, 0.8)" />
```

### responsive

- **Type:** `boolean`
- **Required:** No
- **Default:** `true`
- **Description:** Whether the chart should automatically resize when the container changes size

When enabled, the chart uses `ResizeObserver` to detect container size changes and updates accordingly.

**Example:**

```vue
<!-- Responsive (default) -->
<BarChart :data="data" x-key="name" y-key="value" />

<!-- Fixed size -->
<BarChart 
  :data="data" 
  x-key="name" 
  y-key="value"
  :responsive="false"
/>
```

## Styling

The component includes default styles that can be customized using CSS.

### Default Styles

- Bars have rounded corners (4px border radius)
- Bars have a hover effect (opacity: 0.8)
- Axes use a gray color scheme
- Smooth transitions on bar updates

### Custom Styling

You can override the default styles using CSS:

```vue
<style>
/* Change bar hover effect */
:deep(.bar:hover) {
  opacity: 0.6;
  transform: translateY(-2px);
}

/* Customize axis text */
:deep(.x-axis text),
:deep(.y-axis text) {
  font-size: 14px;
  font-weight: 600;
  fill: #1f2937;
}

/* Customize axis lines */
:deep(.x-axis path),
:deep(.y-axis path) {
  stroke: #9ca3af;
  stroke-width: 2;
}
</style>
```

## Complete Example

<DemoContainer title="Live Interactive Example">
  <CompleteAPIExample />
</DemoContainer>

```vue
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
  { month: 'Jun', sales: 9000 }
])
</script>

<template>
  <div class="chart-container">
    <h2>Monthly Sales</h2>
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
.chart-container {
  width: 100%;
  height: 500px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

h2 {
  margin: 0 0 20px 0;
  color: #1f2937;
}
</style>
```

## Features

### Automatic Scaling

The Y-axis automatically scales based on the data values using D3's `nice()` method for clean, rounded scale values.

### Responsive Layout

When the `responsive` prop is `true` (default), the chart automatically:

- Adjusts to container size changes
- Updates when window is resized
- Uses `ResizeObserver` for efficient updates

### Smooth Transitions

Bars smoothly transition when data changes, providing a polished user experience.

### Accessibility

The component generates semantic SVG markup with proper structure:

- Clear axis labels
- Readable text sizes
- Sufficient color contrast

## Best Practices

### Container Sizing

Always ensure the container has defined dimensions:

```vue
<template>
  <!-- Good: Defined height -->
  <div style="width: 100%; height: 400px;">
    <BarChart :data="data" x-key="name" y-key="value" />
  </div>
  
  <!-- Better: Using CSS class -->
  <div class="chart-wrapper">
    <BarChart :data="data" x-key="name" y-key="value" />
  </div>
</template>

<style>
.chart-wrapper {
  width: 100%;
  height: 400px;
  min-height: 300px;
}
</style>
```

### Data Structure

Keep data structure consistent and clean:

```javascript
// Good: Consistent types
const data = [
  { category: 'A', value: 30 },
  { category: 'B', value: 45 }
]

// Avoid: Mixed types for same key
const data = [
  { category: 'A', value: 30 },
  { category: 'B', value: '45' } // String instead of number
]
```

### Performance

For large datasets, consider:

- Limiting the number of bars displayed
- Implementing pagination or filtering
- Using the `responsive` prop wisely based on your use case

## See Also

- [useSvgCanvas Composable](/api/use-svg-canvas) - Underlying composable for canvas management
- [Basic Bar Chart Example](/examples/basic-bar-chart)
- [Custom Styling Example](/examples/custom-styling)

