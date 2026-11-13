import { createFileRoute } from '@tanstack/react-router';
import NotFound from '~/pages/NotFound';
import { pageTitle } from '~/utils/seo';

export const Route = createFileRoute('/404')({
    head: () => ({
        meta: [{ title: pageTitle('Page introuvable') }, { name: 'robots', content: 'noindex' }],
    }),
    component: NotFound,
});
