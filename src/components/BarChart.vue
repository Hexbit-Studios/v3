<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import * as d3 from 'd3'
import { useSvgCanvas } from '@/composables/useSvgCanvas'
import type { DataPoint, ChartMargin } from '@/types'

interface Props {
  data: DataPoint[]
  xKey: string
  yKey: string
  margin?: Partial<ChartMargin>
  color?: string
  responsive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  margin: () => ({}),
  color: '#4f46e5',
  responsive: true,
})

const containerRef = ref<HTMLElement | null>(null)
const svgRef = ref<SVGSVGElement | null>(null)

const { dimensions, margin } = useSvgCanvas(containerRef, props.margin, props.responsive)

// Create scales
const xScale = computed(() => {
  if (!props.data.length) return null
  
  return d3
    .scaleBand()
    .domain(props.data.map((d) => String(d[props.xKey])))
    .range([0, dimensions.value.innerWidth])
    .padding(0.2)
})

const yScale = computed(() => {
  if (!props.data.length) return null

  const maxValue = d3.max(props.data, (d) => Number(d[props.yKey])) || 0

  return d3
    .scaleLinear()
    .domain([0, maxValue])
    .range([dimensions.value.innerHeight, 0])
    .nice()
})

// Render chart
const renderChart = () => {
  if (!svgRef.value || !xScale.value || !yScale.value) return

  const svg = d3.select(svgRef.value)
  const g = svg.select('.chart-content')

  // Clear previous content
  g.selectAll('*').remove()

  // Draw bars
  g.selectAll('.bar')
    .data(props.data)
    .join('rect')
    .attr('class', 'bar')
    .attr('x', (d) => xScale.value!(String(d[props.xKey])) || 0)
    .attr('y', (d) => yScale.value!(Number(d[props.yKey])))
    .attr('width', xScale.value.bandwidth())
    .attr('height', (d) => dimensions.value.innerHeight - yScale.value!(Number(d[props.yKey])))
    .attr('fill', props.color)
    .attr('rx', 4)
    .style('transition', 'all 0.3s ease')

  // Draw X axis
  const xAxis = d3.axisBottom(xScale.value)
  g.select('.x-axis')
    .attr('transform', `translate(0,${dimensions.value.innerHeight})`)
    .call(xAxis as any)

  // Draw Y axis
  const yAxis = d3.axisLeft(yScale.value)
  g.select('.y-axis').call(yAxis as any)
}

// Watch for changes and re-render
watch([() => props.data, dimensions, xScale, yScale], renderChart)

onMounted(renderChart)
</script>

<template>
  <div ref="containerRef" class="v3-bar-chart">
    <svg ref="svgRef" :width="dimensions.width" :height="dimensions.height">
      <g class="chart-content" :transform="`translate(${margin.left},${margin.top})`">
        <g class="x-axis" />
        <g class="y-axis" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.v3-bar-chart {
  width: 100%;
  height: 100%;
  min-height: 300px;
}

svg {
  display: block;
}

:deep(.bar:hover) {
  opacity: 0.8;
  cursor: pointer;
}

:deep(.x-axis text),
:deep(.y-axis text) {
  font-size: 12px;
  fill: #374151;
}

:deep(.x-axis path),
:deep(.y-axis path),
:deep(.x-axis line),
:deep(.y-axis line) {
  stroke: #d1d5db;
}
</style>