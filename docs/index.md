---
layout: home

hero:
  name: "@hexbit/v3"
  text: "Vue + D3 = v3"
  tagline: A TypeScript-based Vue 3 library that simplifies D3.js visualizations using Composition API patterns
  image:
    src: /v3-logo.png
    alt: v3
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/Hexbit-Studios/v3

features:
  - icon: 🎨
    title: Vue 3 Composition API
    details: Built from the ground up with Vue 3's Composition API for maximum flexibility and reusability
  - icon: 📊
    title: D3.js Powered
    details: Leverage the full power of D3.js for creating beautiful, interactive data visualizations
  - icon: 🔷
    title: TypeScript Support
    details: Fully typed with TypeScript for better IDE support and type safety
  - icon: 📱
    title: Responsive by Default
    details: Charts automatically adapt to container size changes with built-in responsive behavior
  - icon: 🎯
    title: Tree-shakeable
    details: Import only what you need - fully tree-shakeable for minimal bundle size
  - icon: ⚡
    title: Lightweight
    details: Minimal dependencies and optimized for performance
---

## Quick Start

Install the library:

```bash
npm install @hexbit/v3
```

Create your first chart:

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const data = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 45 },
  { name: 'Mar', value: 60 },
  { name: 'Apr', value: 40 },
  { name: 'May', value: 75 }
]
</script>

<template>
  <BarChart 
    :data="data" 
    x-key="name" 
    y-key="value"
    color="#22d3ee"
  />
</template>
```

<DemoContainer>
  <BasicBarChartExample />
</DemoContainer>

## Why @hexbit/v3?

### Seamless Integration

Combines the declarative power of Vue 3 with the data visualization capabilities of D3.js, giving you the best of both worlds.

### Developer Experience

Built with TypeScript, fully documented, and designed with developer experience in mind. IntelliSense support out of the box.

### Production Ready

Battle-tested with comprehensive test coverage, continuous integration, and semantic versioning.

### Modern Architecture

Uses Vue 3's Composition API, making it easy to create reusable, maintainable visualization components.

## Community

- [GitHub Discussions](https://github.com/Hexbit-Studios/v3/discussions)
- [Report Issues](https://github.com/Hexbit-Studios/v3/issues)
- [Contributing Guide](https://github.com/Hexbit-Studios/v3/blob/main/CONTRIBUTING.md)

## License

MIT © [Hexbit Studios](https://github.com/Hexbit-Studios)

