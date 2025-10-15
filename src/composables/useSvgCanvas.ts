import { ref, computed, onMounted, onUnmounted, type Ref } from 'vue'
import type { ChartMargin, ChartDimensions } from '@/types'

/**
 * Default margin values for charts
 */
const DEFAULT_MARGIN: ChartMargin = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 50,
}

/**
 * Composable for managing SVG canvas dimensions and container
 *
 * @param containerRef - Reference to the container element
 * @param margin - Optional margin configuration
 * @param responsive - Whether to resize on window resize
 * @returns SVG canvas utilities and dimensions
 */
export function useSvgCanvas(
  containerRef: Ref<HTMLElement | null | undefined>,
  margin: Partial<ChartMargin> = {},
  responsive = true
) {
  const width = ref(0)
  const height = ref(0)

  // Merge user margin with defaults
  const chartMargin = computed<ChartMargin>(() => ({
    ...DEFAULT_MARGIN,
    ...margin,
  }))

  // Calculate inner dimensions (accounting for margins)
  const dimensions = computed<ChartDimensions>(() => ({
    width: width.value,
    height: height.value,
    innerWidth: Math.max(0, width.value - chartMargin.value.left - chartMargin.value.right),
    innerHeight: Math.max(0, height.value - chartMargin.value.top - chartMargin.value.bottom),
  }))

  /**
   * Update dimensions based on container size
   */
  const updateDimensions = () => {
    if (!containerRef.value) return

    const rect = containerRef.value.getBoundingClientRect()
    width.value = rect.width
    height.value = rect.height
  }

  let resizeObserver: ResizeObserver | null = null

  onMounted(() => {
    updateDimensions()

    if (responsive && containerRef.value) {
      // Use ResizeObserver for better performance than window resize
      resizeObserver = new ResizeObserver(updateDimensions)
      resizeObserver.observe(containerRef.value)
    }
  })

  onUnmounted(() => {
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
  })

  return {
    width,
    height,
    margin: chartMargin,
    dimensions,
    updateDimensions,
  }
}
