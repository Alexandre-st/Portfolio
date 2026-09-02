import { queryOptions } from "@tanstack/react-query";
import { fetchRepos } from "./github";
import { GITHUB_USERNAME } from "~/data/socials";

/**
 * Centralised query definitions. Import these into components via useQuery, or
 * prefetch them in a route loader with context.queryClient.ensureQueryData().
 */
export const githubQueries = {
    repos: (username: string = GITHUB_USERNAME) =>
        queryOptions({
            queryKey: ["github", "repos", username],
            queryFn: () => fetchRepos(username),
            staleTime: 1000 * 60 * 60, // 1h — repo lists change slowly
        }),
};
