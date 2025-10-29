import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '@hexbit/v3',
  description: 'A TypeScript-based Vue 3 library that simplifies D3.js visualizations using Composition API patterns',
  base: '/v3/',

  vite: {
    resolve: {
      alias: {
        '@hexbit/v3': fileURLToPath(new URL('../../src/index.ts', import.meta.url)),
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/v3-logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/bar-chart' },
      { text: 'Examples', link: '/examples/basic-bar-chart' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Installation', link: '/guide/getting-started#installation' },
        ],
      },
      {
        text: 'Components',
        items: [{ text: 'BarChart', link: '/api/bar-chart' }],
      },
      {
        text: 'Composables',
        items: [{ text: 'useSvgCanvas', link: '/api/use-svg-canvas' }],
      },
      {
        text: 'Examples',
        items: [
          { text: 'Basic Bar Chart', link: '/examples/basic-bar-chart' },
          { text: 'Custom Styling', link: '/examples/custom-styling' },
          { text: 'Responsive Charts', link: '/examples/responsive-charts' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/Hexbit-Studios/v3' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Hexbit Studios',
    },

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/Hexbit-Studios/v3/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
})
