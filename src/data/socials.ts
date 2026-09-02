export type Social = { label: string; href: string };

// TODO: confirm the real GitHub handle (also used by src/lib/github.ts).
export const GITHUB_USERNAME = "AlexandreStPrix";

export const SOCIALS: Social[] = [
    { label: "GitHub", href: `https://github.com/${GITHUB_USERNAME}` },
    { label: "Twitter", href: "https://twitter.com/a_saintprix" },
    { label: "Email", href: "mailto:alexandre@bwat.fr" },
];
