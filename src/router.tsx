import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

export function getRouter() {
    return createRouter({
        routeTree,
        scrollRestoration: true,
        // Netlify sert les pages pré-rendues en dossier/index.html : une seule URL par page
        trailingSlash: 'always',
        defaultPreload: 'intent',
    });
}
