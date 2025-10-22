import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    __CLERK_PUBLISHABLE_KEY__: JSON.stringify(
      process.env.VITE_CLERK_PUBLISHABLE_KEY
    ),
  },
  // Optional: If you need server config (e.g., for Clerk dev proxy or CORS), add here
  server: {
    port: 5173, // Default Vite port
    open: true, // Auto-open browser on dev
  },
  // Optional: Build config for production
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
