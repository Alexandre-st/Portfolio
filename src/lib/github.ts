import { GITHUB_USERNAME } from "~/data/socials";

const API = "https://api.github.com";

export type GithubRepo = {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    stargazers_count: number;
    language: string | null;
    topics: string[];
    fork: boolean;
    updated_at: string;
};

/**
 * Read-only, unauthenticated calls to the public GitHub REST API.
 * The browser can call this directly (CORS is enabled). Unauthenticated limit is
 * 60 req/hr per IP — fine for a cached portfolio. If that becomes a problem, put a
 * token behind a Netlify Function proxy instead of shipping it to the client.
 */
export async function fetchRepos(
    username: string = GITHUB_USERNAME,
): Promise<GithubRepo[]> {
    const res = await fetch(
        `${API}/users/${username}/repos?sort=updated&per_page=100`,
        { headers: { Accept: "application/vnd.github+json" } },
    );

    if (!res.ok) {
        throw new Error(`GitHub API ${res.status}: ${res.statusText}`);
    }

    const repos = (await res.json()) as GithubRepo[];
    return repos
        .filter((repo) => !repo.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count);
}
