/// <reference types="vite/client" />
import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";
import { createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary";
import { NotFound } from "~/components/NotFound";
import type { QueryClient } from "@tanstack/react-query";
import { seo } from "~/utils/seo";
import appCss from "~/styles/index.scss?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
        meta: [
            {
                charSet: "utf-8"
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            ...seo({
                title: "Alexandre Saint-Prix — Front-end developer",
                keywords: "Alexandre Saint-Prix, front-end developer, react, portfolio",
                description: "Front-end developer building calm, accessible interfaces — design systems and production React apps."
            }),
            {
                title: "Alexandre Saint-Prix — Front-end developer",
            }
        ],
        links: [
            // { rel: 'icon', href: '/favicon.ico' },
            /*{
                rel: "preload",
                href: publicSans,
                as: "font",
                type: "font/woff2",
                crossOrigin: "anonymous",
            },*/
            { rel: "stylesheet", href: appCss },
        ],
    }),
    staleTime: Infinity,
    shellComponent: ({ children }) => {
        return (
            <ShellComponent>
                    {children}
            </ShellComponent>
        );
    },
    errorComponent: DefaultCatchBoundary,
    notFoundComponent: () => <NotFound />,
});

function ShellComponent({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <HeadContent />
        </head>
        <body>
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
            <Scripts />
        </body>
        </html>
    );
}