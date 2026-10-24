import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(root, "index.html"),
        howItWorks: resolve(root, "how-it-works.html"),
        dataCentres: resolve(root, "data-centres.html"),
        enterprise: resolve(root, "enterprise.html"),
        about: resolve(root, "about.html"),
      },
    },
  },
});
