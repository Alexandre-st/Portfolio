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
            // Le shell SPA est écrit dans /404.html, que Netlify sert automatiquement (statut 404)
            // pour les URL inconnues. Le router résout ensuite l'URL côté client et affiche le
            // notFoundComponent de la route racine.
            spa: {
                enabled: true,
                // Query string pour que le shell ne soit pas confondu avec la page d'accueil
                maskPath: '/?shell',
                prerender: { outputPath: '/404' },
            },
        }),
        viteReact(),
    ],
});
