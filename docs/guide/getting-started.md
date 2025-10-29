# Getting Started

Welcome to @hexbit/v3! This guide will help you get started with creating beautiful data visualizations using Vue 3 and D3.js.

## What is @hexbit/v3?

@hexbit/v3 is a TypeScript-based Vue 3 library that simplifies D3.js visualizations using Composition API patterns. It combines the declarative power of Vue 3 with the data visualization capabilities of D3.js.

> v3 = Vue + D3

## Installation

Install the library using your preferred package manager:

::: code-group

```bash [npm]
npm install @hexbit/v3
```

```bash [pnpm]
pnpm add @hexbit/v3
```

```bash [yarn]
yarn add @hexbit/v3
```

:::

### Peer Dependencies

The library requires the following peer dependencies:

- `vue`: ^3.5.0
- `d3`: ^7.9.0

These are typically already installed in Vue 3 projects. If not, install them:

```bash
npm install vue d3
```

## Basic Usage

Here's how to create your first chart:

### 1. Import the Component

```vue
<script setup>
import { BarChart } from '@hexbit/v3'
</script>
```

### 2. Prepare Your Data

Data should be an array of objects with at least two properties:

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const data = [
  { name: 'January', value: 30 },
  { name: 'February', value: 45 },
  { name: 'March', value: 60 },
  { name: 'April', value: 40 },
  { name: 'May', value: 75 }
]
</script>
```

### 3. Create the Chart

```vue
<template>
  <BarChart 
    :data="data" 
    x-key="name" 
    y-key="value"
  />
</template>
```

### Complete Example

```vue
<script setup lang="ts">
import { BarChart } from '@hexbit/v3'

const data = [
  { name: 'January', value: 30 },
  { name: 'February', value: 45 },
  { name: 'March', value: 60 },
  { name: 'April', value: 40 },
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

<DemoContainer title="Live Example">
  <BasicBarChartExample />
</DemoContainer>

## Customization

### Chart Colors

You can customize the bar color:

```vue
<BarChart 
  :data="data" 
  x-key="name" 
  y-key="value"
  color="#06b6d4"
/>
```

### Margins

Control the chart margins for axis labels and spacing:

```vue
<BarChart 
  :data="data" 
  x-key="name" 
  y-key="value"
  :margin="{ top: 30, right: 30, bottom: 50, left: 60 }"
/>
```

### Responsive Behavior

Charts are responsive by default. To disable:

```vue
<BarChart 
  :data="data" 
  x-key="name" 
  y-key="value"
  :responsive="false"
/>
```

## TypeScript Support

The library is fully typed. Import types as needed:

```typescript
import { BarChart } from '@hexbit/v3'
import type { DataPoint, ChartMargin } from '@hexbit/v3'

interface SalesData extends DataPoint {
  month: string
  sales: number
}

const data: SalesData[] = [
  { month: 'Jan', sales: 1000 },
  { month: 'Feb', sales: 1500 }
]

const margin: Partial<ChartMargin> = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 50
}
```

## Using Composables

For more advanced use cases, you can use the underlying composables directly:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useSvgCanvas } from '@hexbit/v3'

const containerRef = ref<HTMLElement>()
const { dimensions, margin } = useSvgCanvas(containerRef, {
  top: 20,
  right: 20,
  bottom: 40,
  left: 50
})
</script>

<template>
  <div ref="containerRef" style="width: 100%; height: 400px;">
    <svg :width="dimensions.width" :height="dimensions.height">
      <!-- Your custom SVG content -->
    </svg>
  </div>
</template>
```

## Next Steps

- Explore the [BarChart API](/api/bar-chart) for all available props and options
- Learn about the [useSvgCanvas composable](/api/use-svg-canvas) for advanced usage
- Check out [interactive examples](/examples/basic-bar-chart) for inspiration

## Need Help?

- Check out the [API documentation](/api/bar-chart)
- Browse [examples](/examples/basic-bar-chart)
- Open an issue on [GitHub](https://github.com/Hexbit-Studios/v3/issues)
- Join the discussion on [GitHub Discussions](https://github.com/Hexbit-Studios/v3/discussions)

