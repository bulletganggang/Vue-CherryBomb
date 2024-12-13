import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'], //自动引入vue的ref、toRefs、onmounted等，无需在页面中再次引入
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: false
        // 1、改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗
      }
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ['src/components', 'src/otherComponents']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 _variables.scss 这样就可以在全局中使用 _variables.scss中预定义的变量了
        // 给导入的路径最后加上 ;
        additionalData: '@import "@/assets/styles/_variables.scss";'
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://10.14.3.174:55000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
