import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // path import रखा

export default defineConfig({
  plugins: [react()], // यहाँ tailwindcss() हटाया
  css: {
    postcss: "./postcss.config.mjs",
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
