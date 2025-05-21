import { defineConfig } from "vite";
import { defineConfig as testConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export const config = defineConfig({
  plugins: [react()],
  base: "/react-rimac",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

export const tstConfig = testConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
  },
});

export default {
  ...config,
  ...tstConfig,
};
