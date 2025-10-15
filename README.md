# @hexbit/v3

[![CI](https://github.com/Hexbit-Studios/v3/actions/workflows/ci.yml/badge.svg)](https://github.com/Hexbit-Studios/v3/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/Hexbit-Studios/v3/branch/main/graph/badge.svg)](https://codecov.io/gh/Hexbit-Studios/v3)
[![npm version](https://badge.fury.io/js/@hexbit%2Fv3.svg)](https://www.npmjs.com/package/@hexbit/v3)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A TypeScript-based Vue 3 library that simplifies D3.js visualizations using Composition API patterns

> v3 = Vue + D3

## Installation

```bash
npm install @hexbit/v3
```

## Quick Start

```vue
<script setup>
import { BarChart } from '@hexbit/v3'

const data = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 45 },
  { name: 'Mar', value: 60 }
]
</script>

<template>
  <BarChart :data="data" x-key="name" y-key="value" />
</template>
```

## Features

- 🎨 Built with Vue 3 Composition API
- 📊 D3.js powered visualizations
- 🔷 TypeScript support
- 📱 Responsive by default
- 🎯 Tree-shakeable
- ⚡ Lightweight

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Run tests
npm test

# Build library
npm run build
```

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [Hexbit Studios](https://github.com/Hexbit-Studios)