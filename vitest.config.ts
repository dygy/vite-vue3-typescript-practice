/// <reference types="vitest" />

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [Vue()],
    test: {
        globals: true,
        include: ["**/*.test.ts"],
        environment: "happy-dom",
    },
});
