import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite"; // Add this import

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Add this line
  ],
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
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
