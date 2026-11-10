import { createFileRoute } from '@tanstack/react-router';
import Contact from '~/pages/Contact';
import { pageTitle } from '~/utils/seo';

export const Route = createFileRoute('/contact')({
    head: () => ({
        meta: [{ title: pageTitle('Contact') }],
    }),
    component: Contact,
});
