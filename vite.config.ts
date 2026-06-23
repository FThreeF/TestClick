import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/TestClick/",
  resolve: {
    alias: {
      "@modules": path.resolve(__dirname, "./src/modules"),
    },
  },
});
