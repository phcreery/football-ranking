import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import path from 'path'
// import vitePluginRaw from 'vite-plugin-raw'

const filename = fileURLToPath(import.meta.url)
const pathSegments = path.dirname(filename)

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/football-ranking/' : '/',
  plugins: [
    vue(),
    // vitePluginRaw({
    //   //   match: /\.svg$/,
    //   //   exclude: [new RegExp(path.resolve(__dirname, './src/assets'))],
    // }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(pathSegments, './src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
})
