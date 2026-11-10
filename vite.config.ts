import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        tanstackStart({
            // Site statique : toutes les pages sont pré-rendues en HTML au build
            prerender: {
                enabled: true,
                crawlLinks: true,
                failOnError: true,
            },
            pages: [
                // Page servie automatiquement par Netlify pour les URL inconnues
                { path: '/404', prerender: { enabled: true, outputPath: '/404.html' } },
            ],
        }),
        viteReact(),
    ],
});
