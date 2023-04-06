import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    node({
      mode: "standalone",
    }),
    react(),
    tailwind(),
  ],
  output: "server",
});
