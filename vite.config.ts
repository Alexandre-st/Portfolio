import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 3000,
    },
    resolve: {
        // Résout l'alias ~/* déclaré dans tsconfig.json
        tsconfigPaths: true,
    },
    plugins: [
        tanstackStart({
            // Site statique : toutes les pages sont pré-rendues en HTML au build
            prerender: {
                enabled: true,
                crawlLinks: true,
                failOnError: true,
                // Le router ajoute un slash final (trailingSlash: 'always') : on écarte les
                // chemins sans slash découverts dans l'arbre des routes pour éviter les doublons
                filter: (page) => page.path.split('?')[0]!.endsWith('/'),
            },
            // Netlify sert /404.html (statut 404) pour les URL inconnues
            pages: [{ path: '/404/', prerender: { outputPath: '/404.html' } }],
        }),
        viteReact(),
    ],
});
