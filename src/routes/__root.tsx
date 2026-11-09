import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import RootLayout from '../layouts/RootLayout';
import NotFound from '../pages/NotFound';
import appCss from '../styles/index.scss?url';

const siteUrl = 'https://alexandre-saintprix.com';
const title = 'Alexandre Saint-Prix | Développeur';
const description =
    'Alexandre Saint-Prix | Bonjour, je suis développeur front-end JavaScript | Bienvenue sur mon portfolio !';
const image = `${siteUrl}/alexandre-saint-prix.jpg`;

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { title: 'Alexandre Saint-Prix | Développeur Front-End' },
            { name: 'description', content: description },
            { name: 'keywords', content: 'développeur, front-end, JavaScript, portfolio' },
            { name: 'image', content: '/alexandre-saint-prix.jpg' },
            { name: 'author', content: 'Alexandre Saint-Prix' },
            // Google / Search Engine Tags
            { itemProp: 'name', content: title },
            { itemProp: 'description', content: description },
            { itemProp: 'image', content: image },
            // Facebook Meta Tags
            { property: 'og:url', content: siteUrl },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: image },
            // Twitter Meta Tags
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@a_saintprix' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: image },
        ],
        links: [
            { rel: 'icon', href: '/logo.jpg', type: 'image/jpeg' },
            { rel: 'apple-touch-icon', href: '/logo.jpg' },
            { rel: 'canonical', href: siteUrl },
            { rel: 'preconnect', href: 'https://fonts.bunny.net' },
            { rel: 'stylesheet', href: 'https://fonts.bunny.net/css?family=mulish:300,400,600' },
            { rel: 'stylesheet', href: appCss },
        ],
    }),
    shellComponent: RootDocument,
    component: RootLayout,
    notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: ReactNode }) {
    return (
        <html lang="fr">
            <head>
                <HeadContent />
            </head>
            <body>
                <noscript> Il faut activer JavaScript pour pouvoir naviguer sur le site. </noscript>
                {children}
                <div id="portal"></div>
                <Scripts />
            </body>
        </html>
    );
}
