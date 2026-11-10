import type { LinkProps } from '@tanstack/react-router';

export type NavLink = {
    label: string;
    url: LinkProps['to'];
};

export const NAV_LINKS: Array<NavLink> = [
    { label: 'Accueil', url: '/' },
    { label: 'Portfolio', url: '/portfolio/' },
    { label: 'Contact', url: '/contact/' },
];

export const FOOTER_LINKS: Array<NavLink> = [
    ...NAV_LINKS,
    { label: 'Mentions Légales', url: '/mentions-legales/' },
];
