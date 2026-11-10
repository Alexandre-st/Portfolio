import { createFileRoute } from '@tanstack/react-router';
import Portfolio from '~/pages/Portfolio';
import { pageTitle } from '~/utils/seo';

export const Route = createFileRoute('/portfolio/')({
    head: () => ({
        meta: [{ title: pageTitle('Portfolio') }],
    }),
    component: Portfolio,
});
