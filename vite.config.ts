// vite.config.ts
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
    server: {
        port: 3000,
    },
    plugins: [
        // this is the plugin that enables path aliases
        viteTsConfigPaths({
            projects: ["./tsconfig.json"],
        }),
        tanstackStart({
            // Static site generation: crawl from "/" and emit real HTML per route
            // into dist/client. Deploy that folder as static files (see netlify.toml).
            prerender: {
                enabled: true,
                crawlLinks: true,
            },
        }),
        // react's vite plugin must come after start's vite plugin
        viteReact(),
    ],
});

export default config;