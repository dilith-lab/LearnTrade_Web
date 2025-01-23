import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Use "/" for hosting at the root
  plugins: [react()],
});
