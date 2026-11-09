import { createFileRoute, notFound } from '@tanstack/react-router';
import { projects } from '../data/data';
import NotFound from '../pages/NotFound';
import Project from '../pages/Project';

export const Route = createFileRoute('/portfolio/$work')({
    loader: ({ params }) => {
        const project = projects.find((project) => project.linkName === params.work);
        if (!project) {
            throw notFound();
        }
        return project;
    },
    component: Project,
    notFoundComponent: NotFound,
});
