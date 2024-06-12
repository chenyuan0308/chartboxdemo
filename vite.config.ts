import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          content: [
            "./public/index.html",
            "./src/**/*.{js,ts,jsx,tsx,mdx}",
            "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
          ],
          theme: {
            screens: {},
            extend: {},
          },
          plugins: [],
          corePlugins: {
            preflight: true,
          },
        }),
      ],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
