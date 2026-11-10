import { createFileRoute, notFound } from '@tanstack/react-router';
import { projects } from '~/data/data';
import Project from '~/pages/Project';
import { pageTitle } from '~/utils/seo';

export const Route = createFileRoute('/portfolio/$work')({
    loader: ({ params }) => {
        const project = projects.find((project) => project.linkName === params.work);
        if (!project) {
            throw notFound();
        }
        return project;
    },
    head: ({ loaderData }) => ({
        meta: loaderData ? [{ title: pageTitle(loaderData.title) }] : [],
    }),
    component: Project,
});
