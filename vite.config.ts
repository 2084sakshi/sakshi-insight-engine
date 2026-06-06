import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/PRODIGY_WD_04/",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});