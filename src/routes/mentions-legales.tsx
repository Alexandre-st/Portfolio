import { createFileRoute } from '@tanstack/react-router';
import MentionsLegales from '~/pages/MentionsLegales';
import { pageTitle } from '~/utils/seo';

export const Route = createFileRoute('/mentions-legales')({
    head: () => ({
        meta: [{ title: pageTitle('Mentions légales') }],
    }),
    component: MentionsLegales,
});
