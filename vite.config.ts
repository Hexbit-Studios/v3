import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.ts', 'src/**/*.vue'],
      exclude: ['src/**/*.spec.ts', 'src/**/*.test.ts']
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'V3',
      formats: ['es', 'umd'],
      fileName: (format) => {
        if (format === 'es') return 'v3.js'
        if (format === 'umd') return 'v3.umd.cjs'
        return `v3.${format}.js`
      }
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: ['vue', 'd3'],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          vue: 'Vue',
          d3: 'd3'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})