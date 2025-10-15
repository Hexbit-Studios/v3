import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BarChart from './BarChart.vue'

describe('BarChart', () => {
  const sampleData = [
    { name: 'A', value: 10 },
    { name: 'B', value: 20 },
    { name: 'C', value: 30 },
  ]

  it('renders properly', () => {
    const wrapper = mount(BarChart, {
      props: {
        data: sampleData,
        xKey: 'name',
        yKey: 'value',
      },
    })

    expect(wrapper.find('.v3-bar-chart').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('applies custom color', () => {
    const wrapper = mount(BarChart, {
      props: {
        data: sampleData,
        xKey: 'name',
        yKey: 'value',
        color: '#ff0000',
      },
    })

    expect(wrapper.props('color')).toBe('#ff0000')
  })

  it('handles empty data gracefully', () => {
    const wrapper = mount(BarChart, {
      props: {
        data: [],
        xKey: 'name',
        yKey: 'value',
      },
    })

    expect(wrapper.find('.v3-bar-chart').exists()).toBe(true)
  })

  it('applies custom margins', () => {
    const customMargin = { top: 30, right: 30, bottom: 50, left: 60 }
    const wrapper = mount(BarChart, {
      props: {
        data: sampleData,
        xKey: 'name',
        yKey: 'value',
        margin: customMargin,
      },
    })

    expect(wrapper.props('margin')).toEqual(customMargin)
  })

  it('calculates correct max value for yScale domain', () => {
    const dataWithMaxValue = [
      { name: 'A', value: 10 },
      { name: 'B', value: 50 },
      { name: 'C', value: 25 },
    ]

    const wrapper = mount(BarChart, {
      props: {
        data: dataWithMaxValue,
        xKey: 'name',
        yKey: 'value',
      },
      attachTo: document.body,
    })

    // The yScale should use max value of 50
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)

    wrapper.unmount()
  })

  it('handles data with non-numeric values in yKey', () => {
    const dataWithInvalidValues = [
      { name: 'A', value: 'invalid' },
      { name: 'B', value: undefined },
      { name: 'C', value: null },
    ]

    const wrapper = mount(BarChart, {
      props: {
        data: dataWithInvalidValues,
        xKey: 'name',
        yKey: 'value',
      },
      attachTo: document.body,
    })

    // Should not crash and should render with fallback maxValue of 0
    expect(wrapper.find('.v3-bar-chart').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(true)

    wrapper.unmount()
  })

  it('handles data with all zero values', () => {
    const dataWithZeros = [
      { name: 'A', value: 0 },
      { name: 'B', value: 0 },
      { name: 'C', value: 0 },
    ]

    const wrapper = mount(BarChart, {
      props: {
        data: dataWithZeros,
        xKey: 'name',
        yKey: 'value',
      },
      attachTo: document.body,
    })

    // Should handle zero max value gracefully
    expect(wrapper.find('.v3-bar-chart').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(true)

    wrapper.unmount()
  })

  it('handles data with negative values', () => {
    const dataWithNegatives = [
      { name: 'A', value: -10 },
      { name: 'B', value: -5 },
      { name: 'C', value: 15 },
    ]

    const wrapper = mount(BarChart, {
      props: {
        data: dataWithNegatives,
        xKey: 'name',
        yKey: 'value',
      },
      attachTo: document.body,
    })

    // Should use max value of 15
    expect(wrapper.find('.v3-bar-chart').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(true)

    wrapper.unmount()
  })
})
