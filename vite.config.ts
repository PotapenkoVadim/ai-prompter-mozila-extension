import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: 'esbuild',
    rollupOptions: {
      input: 'index.html',
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
});