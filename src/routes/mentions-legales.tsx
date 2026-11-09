import { createFileRoute } from '@tanstack/react-router';
import MentionsLegales from '../pages/MentionsLegales';

export const Route = createFileRoute('/mentions-legales')({
    component: MentionsLegales,
});
