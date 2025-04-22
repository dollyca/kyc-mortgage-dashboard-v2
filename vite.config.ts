// vite.config.ts - 設定 Vite 的路徑別名與插件
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ @ 指向 src 資料夾
    },
  },
});
