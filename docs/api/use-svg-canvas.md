# useSvgCanvas

A Vue 3 composable for managing SVG canvas dimensions and responsive behavior.

## Import

```typescript
import { useSvgCanvas } from '@hexbit/v3'
```

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useSvgCanvas } from '@hexbit/v3'

const containerRef = ref<HTMLElement>()

const { dimensions, margin, width, height, updateDimensions } = useSvgCanvas(
  containerRef,
  { top: 20, right: 20, bottom: 40, left: 50 },
  true
)
</script>

<template>
  <div ref="containerRef" style="width: 100%; height: 400px;">
    <svg :width="dimensions.width" :height="dimensions.height">
      <g :transform="`translate(${margin.left}, ${margin.top})`">
        <!-- Your chart content with innerWidth and innerHeight -->
        <rect 
          :width="dimensions.innerWidth" 
          :height="dimensions.innerHeight" 
          fill="transparent"
          stroke="#ccc"
        />
      </g>
    </svg>
  </div>
</template>
```

## Parameters

### containerRef

- **Type:** `Ref<HTMLElement | null | undefined>`
- **Required:** Yes
- **Description:** A Vue ref pointing to the container element

The composable will measure this container's dimensions and observe it for size changes.

```typescript
const containerRef = ref<HTMLElement>()
```

### margin

- **Type:** `Partial<ChartMargin>`
- **Required:** No
- **Default:** `{ top: 20, right: 20, bottom: 40, left: 50 }`
- **Description:** Margin configuration for the chart

```typescript
interface ChartMargin {
  top: number
  right: number
  bottom: number
  left: number
}
```

The margin values are merged with the defaults, so you can provide partial values:

```typescript
// Only override left and bottom
useSvgCanvas(containerRef, { left: 60, bottom: 50 })
```

### responsive

- **Type:** `boolean`
- **Required:** No
- **Default:** `true`
- **Description:** Whether to observe container size changes

When `true`, the composable uses `ResizeObserver` to automatically update dimensions when the container is resized.

## Return Value

The composable returns an object with the following properties:

### width

- **Type:** `Ref<number>`
- **Description:** The full width of the container

This represents the total width available for the SVG canvas.

### height

- **Type:** `Ref<number>`
- **Description:** The full height of the container

This represents the total height available for the SVG canvas.

### margin

- **Type:** `ComputedRef<ChartMargin>`
- **Description:** The computed margin configuration (user values merged with defaults)

### dimensions

- **Type:** `ComputedRef<ChartDimensions>`
- **Description:** Computed dimensions including inner dimensions

```typescript
interface ChartDimensions {
  width: number          // Full width
  height: number         // Full height
  innerWidth: number     // Width minus left and right margins
  innerHeight: number    // Height minus top and bottom margins
}
```

The `innerWidth` and `innerHeight` are calculated automatically:

```typescript
innerWidth = width - margin.left - margin.right
innerHeight = height - margin.top - margin.bottom
```

These values are guaranteed to be non-negative (minimum 0).

### updateDimensions

- **Type:** `() => void`
- **Description:** Manually trigger a dimension update

Useful when you need to force a dimension recalculation, though this is rarely needed with responsive mode enabled.

## Examples

### Basic Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useSvgCanvas } from '@hexbit/v3'

const containerRef = ref<HTMLElement>()
const { dimensions, margin } = useSvgCanvas(containerRef)
</script>

<template>
  <div ref="containerRef" style="width: 100%; height: 400px;">
    <svg :width="dimensions.width" :height="dimensions.height">
      <g :transform="`translate(${margin.left}, ${margin.top})`">
        <!-- Chart content goes here -->
        <text x="0" y="0">Width: {{ dimensions.innerWidth }}</text>
        <text x="0" y="20">Height: {{ dimensions.innerHeight }}</text>
      </g>
    </svg>
  </div>
</template>
```

### Custom Margins

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useSvgCanvas } from '@hexbit/v3'

const containerRef = ref<HTMLElement>()
const { dimensions, margin } = useSvgCanvas(containerRef, {
  top: 40,
  right: 40,
  bottom: 60,
  left: 80
})
</script>
```

### Non-Responsive Chart

For charts that don't need to resize:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useSvgCanvas } from '@hexbit/v3'

const containerRef = ref<HTMLElement>()
const { dimensions, margin } = useSvgCanvas(
  containerRef, 
  { top: 20, right: 20, bottom: 40, left: 50 },
  false  // Disable responsive behavior
)
</script>
```

### Building a Custom Chart

Here's a complete example of building a custom chart with `useSvgCanvas`:

```vue
<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import * as d3 from 'd3'
import { useSvgCanvas } from '@hexbit/v3'

interface DataPoint {
  x: number
  y: number
}

const props = defineProps<{
  data: DataPoint[]
}>()

const containerRef = ref<HTMLElement>()
const svgRef = ref<SVGSVGElement>()

const { dimensions, margin } = useSvgCanvas(containerRef, {
  top: 30,
  right: 30,
  bottom: 50,
  left: 60
})

// Create scales
const xScale = computed(() => 
  d3.scaleLinear()
    .domain([0, d3.max(props.data, d => d.x) || 100])
    .range([0, dimensions.value.innerWidth])
)

const yScale = computed(() => 
  d3.scaleLinear()
    .domain([0, d3.max(props.data, d => d.y) || 100])
    .range([dimensions.value.innerHeight, 0])
)

// Create line generator
const lineGenerator = computed(() => 
  d3.line<DataPoint>()
    .x(d => xScale.value(d.x))
    .y(d => yScale.value(d.y))
)

// Path data for the line
const pathData = computed(() => lineGenerator.value(props.data))

// Watch for dimension changes to update axes
watch([dimensions, () => props.data], () => {
  if (!svgRef.value) return
  
  const svg = d3.select(svgRef.value)
  const g = svg.select('.content')
  
  // Update axes
  const xAxis = d3.axisBottom(xScale.value)
  const yAxis = d3.axisLeft(yScale.value)
  
  g.select<SVGGElement>('.x-axis')
    .attr('transform', `translate(0, ${dimensions.value.innerHeight})`)
    .call(xAxis)
  
  g.select<SVGGElement>('.y-axis')
    .call(yAxis)
})
</script>

<template>
  <div ref="containerRef" class="chart-container">
    <svg 
      ref="svgRef"
      :width="dimensions.width" 
      :height="dimensions.height"
    >
      <g 
        class="content"
        :transform="`translate(${margin.left}, ${margin.top})`"
      >
        <!-- Line path -->
        <path
          :d="pathData"
          fill="none"
          stroke="#22d3ee"
          stroke-width="2"
        />
        
        <!-- Data points -->
        <circle
          v-for="(point, i) in data"
          :key="i"
          :cx="xScale(point.x)"
          :cy="yScale(point.y)"
          r="4"
          fill="#22d3ee"
        />
        
        <!-- Axes -->
        <g class="x-axis" />
        <g class="y-axis" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  min-height: 300px;
}
</style>
```

## Advanced Usage

### Manual Dimension Updates

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useSvgCanvas } from '@hexbit/v3'

const containerRef = ref<HTMLElement>()
const { dimensions, updateDimensions } = useSvgCanvas(containerRef)

// Manually update dimensions when needed
const handleRefresh = () => {
  updateDimensions()
}
</script>
```

### Accessing Individual Dimensions

```vue
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSvgCanvas } from '@hexbit/v3'

const containerRef = ref<HTMLElement>()
const { width, height, dimensions } = useSvgCanvas(containerRef)

// Watch for dimension changes
watch([width, height], ([newWidth, newHeight]) => {
  console.log(`Container resized to ${newWidth}x${newHeight}`)
})

// Or watch computed dimensions
watch(dimensions, (newDimensions) => {
  console.log('Inner dimensions:', newDimensions.innerWidth, newDimensions.innerHeight)
})
</script>
```

### TypeScript Types

```typescript
import type { ChartMargin, ChartDimensions } from '@hexbit/v3'

// Margin type
const margin: ChartMargin = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 50
}

// Or partial margin
const partialMargin: Partial<ChartMargin> = {
  left: 60,
  bottom: 50
}

// Dimensions type
const dims: ChartDimensions = {
  width: 800,
  height: 600,
  innerWidth: 730,
  innerHeight: 540
}
```

## How It Works

The composable follows this lifecycle:

1. **Mount:** When the component mounts, it measures the container's dimensions
2. **Observe:** If responsive mode is enabled, it creates a `ResizeObserver` to watch for size changes
3. **Update:** When the container resizes, dimensions are automatically updated
4. **Cleanup:** When the component unmounts, the `ResizeObserver` is disconnected

### ResizeObserver vs Window Resize

The composable uses `ResizeObserver` instead of listening to window resize events because:

- More accurate - only fires when the specific element changes size
- Better performance - no need to check every element on window resize
- Works with flex layouts, grid layouts, and dynamic content
- Fires when element size changes for any reason, not just window resize

## Best Practices

### 1. Ensure Container Has Size

The container must have defined dimensions:

```vue
<!-- Good -->
<div ref="containerRef" style="width: 100%; height: 400px;">
  <!-- ... -->
</div>

<!-- Bad - no height -->
<div ref="containerRef" style="width: 100%;">
  <!-- ... -->
</div>
```

### 2. Use Computed Values

Inner dimensions are computed automatically, so always use them for chart content:

```vue
<!-- Good -->
<rect :width="dimensions.innerWidth" :height="dimensions.innerHeight" />

<!-- Bad - doesn't account for margins -->
<rect :width="dimensions.width" :height="dimensions.height" />
```

### 3. Apply Transform for Margins

Use the margin values to offset your chart content:

```vue
<g :transform="`translate(${margin.left}, ${margin.top})`">
  <!-- Chart content -->
</g>
```

## See Also

- [BarChart Component](/api/bar-chart) - Uses this composable internally
- [Responsive Charts Example](/examples/responsive-charts)

