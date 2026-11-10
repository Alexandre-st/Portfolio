import { createFileRoute } from '@tanstack/react-router';
import NotFound from '../pages/NotFound';

export const Route = createFileRoute('/404')({
    head: () => ({
        meta: [{ name: 'robots', content: 'noindex' }],
    }),
    component: NotFound,
});
