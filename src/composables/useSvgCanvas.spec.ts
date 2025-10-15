import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ref, defineComponent, h } from 'vue'
import { mount } from '@vue/test-utils'
import { useSvgCanvas } from './useSvgCanvas'
import type { ChartMargin } from '@/types'

describe('useSvgCanvas', () => {
  let containerRef: ReturnType<typeof ref<HTMLElement | null | undefined>>

  beforeEach(() => {
    containerRef = ref(null)
  })

  // Helper function to mount composable in a component context
  const mountComposable = (margin?: Partial<ChartMargin>, responsive = true) => {
    let result!: ReturnType<typeof useSvgCanvas>

    const TestComponent = defineComponent({
      setup() {
        result = useSvgCanvas(containerRef, margin, responsive)
        return () => h('div')
      },
    })

    const wrapper = mount(TestComponent)
    return { result, wrapper }
  }

  it('should initialize with zero dimensions when container is null', () => {
    const {
      result: { width, height, dimensions },
    } = mountComposable()

    expect(width.value).toBe(0)
    expect(height.value).toBe(0)
    expect(dimensions.value.width).toBe(0)
    expect(dimensions.value.height).toBe(0)
  })

  it('should use default margins', () => {
    const {
      result: { margin },
    } = mountComposable()

    expect(margin.value).toEqual({
      top: 20,
      right: 20,
      bottom: 40,
      left: 50,
    })
  })

  it('should merge custom margins with defaults', () => {
    const customMargin = { top: 30, left: 60 }
    const {
      result: { margin },
    } = mountComposable(customMargin)

    expect(margin.value).toEqual({
      top: 30,
      right: 20,
      bottom: 40,
      left: 60,
    })
  })

  it('should calculate inner dimensions correctly', () => {
    // Mock container with dimensions
    const mockContainer = document.createElement('div')
    Object.defineProperty(mockContainer, 'getBoundingClientRect', {
      value: vi.fn(() => ({
        width: 800,
        height: 600,
        top: 0,
        left: 0,
        right: 800,
        bottom: 600,
      })),
    })
    containerRef.value = mockContainer

    const {
      result: { dimensions, updateDimensions },
    } = mountComposable()
    updateDimensions()

    expect(dimensions.value.width).toBe(800)
    expect(dimensions.value.height).toBe(600)
    expect(dimensions.value.innerWidth).toBe(730) // 800 - 50 - 20
    expect(dimensions.value.innerHeight).toBe(540) // 600 - 20 - 40
  })

  it('should not have negative inner dimensions', () => {
    const mockContainer = document.createElement('div')
    Object.defineProperty(mockContainer, 'getBoundingClientRect', {
      value: vi.fn(() => ({
        width: 50,
        height: 30,
        top: 0,
        left: 0,
        right: 50,
        bottom: 30,
      })),
    })
    containerRef.value = mockContainer

    const {
      result: { dimensions, updateDimensions },
    } = mountComposable()
    updateDimensions()

    expect(dimensions.value.innerWidth).toBe(0)
    expect(dimensions.value.innerHeight).toBe(0)
  })

  it('should disconnect ResizeObserver on unmount', () => {
    // Mock ResizeObserver
    const mockDisconnect = vi.fn()
    const mockObserve = vi.fn()
    const mockResizeObserver = vi.fn(() => ({
      observe: mockObserve,
      disconnect: mockDisconnect,
      unobserve: vi.fn(),
    }))

    global.ResizeObserver = mockResizeObserver

    const mockContainer = document.createElement('div')
    Object.defineProperty(mockContainer, 'getBoundingClientRect', {
      value: vi.fn(() => ({
        width: 800,
        height: 600,
        top: 0,
        left: 0,
        right: 800,
        bottom: 600,
      })),
    })
    containerRef.value = mockContainer

    const { wrapper } = mountComposable()

    // Verify ResizeObserver was created and observe was called
    expect(mockResizeObserver).toHaveBeenCalled()
    expect(mockObserve).toHaveBeenCalledWith(mockContainer)

    // Unmount the component
    wrapper.unmount()

    // Verify disconnect was called
    expect(mockDisconnect).toHaveBeenCalled()
  })

  it('should not create ResizeObserver when responsive is false', () => {
    const mockResizeObserver = vi.fn(() => ({
      observe: vi.fn(),
      disconnect: vi.fn(),
      unobserve: vi.fn(),
    }))

    global.ResizeObserver = mockResizeObserver

    const mockContainer = document.createElement('div')
    containerRef.value = mockContainer

    mountComposable({}, false)

    // Verify ResizeObserver was NOT created
    expect(mockResizeObserver).not.toHaveBeenCalled()
  })
})
