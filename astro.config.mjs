import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://Ivanricee.github.io",
  base: "/my-repo",
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel({
    edgeMiddleware: true,
  }),
});
