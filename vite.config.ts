import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'packages/index.ts',
      name: 'vhooks',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `vhooks.${format}.js`
    }
  }
})
