import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
//import vercel from "@astrojs/vercel/serverless";
//import react from "@astrojs/react";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: "https://Ivanricee.github.io",
  base: "/ivanrice",
  integrations: [tailwind(), compressor()],
  output: "static"
  /*output: "server",
  adapter: vercel({
    edgeMiddleware: true,
  }),*/
});