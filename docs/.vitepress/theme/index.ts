import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'

// Import demo components
import DemoContainer from './components/DemoContainer.vue'
import BasicBarChartExample from './components/BasicBarChartExample.vue'
import CustomColorExample from './components/CustomColorExample.vue'
import DynamicDataExample from './components/DynamicDataExample.vue'
import MultipleChartsExample from './components/MultipleChartsExample.vue'
import CustomStylingExample from './components/CustomStylingExample.vue'
import ResponsiveDashboardExample from './components/ResponsiveDashboardExample.vue'
import CompleteAPIExample from './components/CompleteAPIExample.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register demo components globally
    app.component('DemoContainer', DemoContainer)
    app.component('BasicBarChartExample', BasicBarChartExample)
    app.component('CustomColorExample', CustomColorExample)
    app.component('DynamicDataExample', DynamicDataExample)
    app.component('MultipleChartsExample', MultipleChartsExample)
    app.component('CustomStylingExample', CustomStylingExample)
    app.component('ResponsiveDashboardExample', ResponsiveDashboardExample)
    app.component('CompleteAPIExample', CompleteAPIExample)
  },
} satisfies Theme
