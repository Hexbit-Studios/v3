# @hexbit/v3 Documentation

This directory contains the VitePress documentation site for @hexbit/v3.

## Development

To run the documentation site locally:

```bash
npm run docs:dev
```

The site will be available at `http://localhost:5173`

## Building

To build the documentation for production:

```bash
npm run docs:build
```

The built files will be in `docs/.vitepress/dist`

## Preview

To preview the production build locally:

```bash
npm run docs:preview
```

## Structure

```
docs/
├── .vitepress/
│   ├── config.ts          # VitePress configuration
│   └── theme/
│       ├── index.ts       # Custom theme
│       └── custom.css     # Custom styles
├── api/
│   ├── bar-chart.md       # BarChart component API
│   └── use-svg-canvas.md  # useSvgCanvas composable API
├── examples/
│   ├── basic-bar-chart.md    # Basic examples
│   ├── custom-styling.md     # Styling examples
│   └── responsive-charts.md  # Responsive examples
├── guide/
│   └── getting-started.md # Getting started guide
├── public/                # Static assets
└── index.md               # Home page
```

## Deployment

The documentation is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment is handled by the `.github/workflows/deploy-docs.yml` workflow.

### Manual Deployment

You can also trigger a deployment manually from the GitHub Actions tab.

## Writing Documentation

### Adding a New Page

1. Create a new markdown file in the appropriate directory
2. Add the page to the sidebar in `.vitepress/config.ts`
3. Use proper markdown formatting and Vue components as needed

### Code Examples

Use fenced code blocks with language identifiers:

\`\`\`vue
<script setup>
import { BarChart } from '@hexbit/v3'
</script>

<template>
  <BarChart :data="data" x-key="name" y-key="value" />
</template>
\`\`\`

### Custom Components

You can use Vue components in markdown files. They will be rendered as interactive examples.

## Styling

Custom styles are defined in `.vitepress/theme/custom.css`. The theme extends the default VitePress theme with custom brand colors and component styles.

## Configuration

The main configuration is in `.vitepress/config.ts`. Key settings:

- `title` - Site title
- `description` - Site description
- `base` - Base URL (currently `/v3/` for GitHub Pages)
- `themeConfig.nav` - Navigation menu
- `themeConfig.sidebar` - Sidebar navigation

## Contributing

When contributing to the documentation:

1. Follow the existing structure and formatting
2. Test locally with `npm run docs:dev`
3. Ensure all links work correctly
4. Build the docs with `npm run docs:build` to check for errors
5. Submit a pull request

## Resources

- [VitePress Documentation](https://vitepress.dev)
- [Markdown Extensions](https://vitepress.dev/guide/markdown)
- [Theme Customization](https://vitepress.dev/guide/custom-theme)

