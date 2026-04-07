// src/router.tsx
import { QueryClient } from "@tanstack/query-core";
import { createRouter } from "@tanstack/react-router"
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary";
import { NotFound } from "~/components/NotFound";
import { routeTree } from "./routeTree.gen"

export function getRouter() {
    const queryClient: QueryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 5, // 5 minutes
            },
        },
    })

    const router = createRouter({
        routeTree,
        defaultPreload: "intent",
        defaultErrorComponent: DefaultCatchBoundary,
        scrollRestoration: true,
        defaultStaleTime: 1,
        defaultNotFoundComponent: () => {
            return <NotFound/>;
        },
        context: { queryClient }
    })

    setupRouterSsrQueryIntegration({ router, queryClient })

    return router
}

declare module "@tanstack/react-router" {
    interface Register {
        router: ReturnType<typeof createRouter>;
    }
}