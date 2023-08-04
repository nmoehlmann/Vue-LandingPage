import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(
    // so vite tries to find images externally
    // {
    //   template: {
    //     transformAssetUrls: {
    //       includeAbsolute: false
    //     }
    //   }
    // }
  )],
  build: {
    outDir: 'docs',
    sourcemap: false
  },
  server: {
    port: 8080
  },
  // testing
  assetsInclude: ['cooking-compass.svg'],
})
