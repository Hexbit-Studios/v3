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
})
