import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "/jakoolit-tech-world/", // GitHub Pages 用
  server: {
    port: 5173,
    open: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
