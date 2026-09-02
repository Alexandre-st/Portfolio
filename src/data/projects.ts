export type Project = {
    slug: string;
    title: string;
    description: string;
    /** Path under /public. Optimise/rename when the real design assets land. */
    image: string;
    tags: string[];
    url?: string;
    repo?: string;
};

/**
 * Portfolio content. This is the source of truth for the "Selected work" grid.
 * Copy replaced with real project details as the design in portfolio.pen is finalised.
 */
export const projects: Project[] = [
    {
        slug: "architecture-studio",
        title: "Architecture Studio",
        description: "Landing site for a design-forward architecture practice.",
        image: "/projects/Arch-1.jpg",
        tags: ["React", "SCSS", "Motion"],
    },
    {
        slug: "designo",
        title: "Designo",
        description: "Multi-page agency site with a shared component system.",
        image: "/projects/designo.jpg",
        tags: ["React", "Routing", "Responsive"],
    },
    {
        slug: "easybank",
        title: "EasyBank",
        description: "Marketing landing page for a digital bank.",
        image: "/projects/easyBank.jpg",
        tags: ["HTML", "CSS", "JS"],
    },
    {
        slug: "netflims",
        title: "Netflims",
        description: "Movie browsing UI backed by a public API.",
        image: "/projects/netflims.jpg",
        tags: ["React", "API", "React Query"],
    },
    {
        slug: "typemaster",
        title: "Typemaster",
        description: "Product landing page for a mechanical keyboard.",
        image: "/projects/typemaster.jpg",
        tags: ["HTML", "CSS"],
    },
    {
        slug: "todo-list",
        title: "Todo List",
        description: "Accessible task app with drag-and-drop and theming.",
        image: "/projects/todoList.png",
        tags: ["React", "A11y", "State"],
    },
];
