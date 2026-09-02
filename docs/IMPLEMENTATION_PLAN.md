# Portfolio v2 — Implementation Plan

Step-by-step guide to take the current scaffold to a finished, deployed portfolio.
Read `AGENTS.md` first for the working rules (especially the **Pre-launch Evolution** policy and the **quality gates**). Architecture basics are in `CLAUDE.md`.

Current status: TanStack Start + SSG scaffold is in place and builds (`yarn build`). Home route composes `Header → Hero → Portfolio → Footer` from placeholder content. Design tokens are placeholders pending the `.pen` file.

---

## Packages

### Already installed / in use
- `@tanstack/react-start`, `@tanstack/react-router`, `@tanstack/react-query` (+ SSR-query integration) — framework, routing, data.
- `react` 19, `react-dom` 19, `typescript` 5, `vite` 7, `sass`, `vite-tsconfig-paths`.
- `motion` (Framer Motion) — animation.

### Add when needed (not before)
- `@tanstack/react-query-devtools` + `@tanstack/react-router-devtools` — **dev-only** debugging.
- `sharp` or `vite-imagetools` — if you want built-time responsive/optimized images for project thumbnails.
- `@fontsource/*` — only if you drop the local Montserrat woff2 for a different family.

### Do NOT add
- **Other styling systems** — no Tailwind, styled-components, CSS-in-JS, or a second UI kit. Central global SCSS (`src/styles/`) + CSS-variable tokens is the system. No CSS Modules, no co-located styles.
- **A second animation library** — no GSAP/react-spring alongside `motion`.
- **A component library** (MUI, Chakra, shadcn) — this is a bespoke design system from `portfolio.pen`.
- **A server/runtime for data** — no Express/Nitro server, no database, no ORM. GitHub data is fetched client-side; a single Netlify Function is the *only* server surface allowed, and only if rate limits force it.
- **State libraries** (Redux/Zustand/Jotai) — router + React Query cover it for a portfolio.
- **A date/util mega-dep** (moment, lodash) — use platform APIs.

---

## Steps

### 1. Extract the design system from `portfolio.pen`
1. Open `portfolio.pen` in the **Pencil editor** (pen.dev) so the `mcp__pencil__*` tools can read it.
2. Pull the real **palette, typography scale, spacing, radii** and replace the PLACEHOLDER values in `src/styles/globals/_variables.scss`. Keep them as CSS custom properties.
3. If the design font isn't Montserrat, swap the woff2 in `src/fonts/` and update `globals/_fonts.scss`.
4. Reconcile the type presets (`globals/_mixins.scss` `preset()` + `globals/_typography.scss`) with the design's real scale.

### 2. Build out `components/ui` primitives
Following the `Button`/`Container` pattern (component uses global class names; styles live in `src/styles/components/_<name>.scss` and are `@use`d in `index.scss`): `Tag`/`Badge`, `Icon` (inline SVG sprite), `Link` (wrapping router `Link`), `Section` wrapper, form inputs for contact.

### 3. Complete `components/layout`
- `Header`: real nav, mobile menu (accessible disclosure — focus trap, `aria-expanded`, Escape to close), active-section highlighting.
- `Footer`: finalize socials in `src/data/socials.ts` (**confirm the GitHub handle** — it drives `src/lib/github.ts`).

### 4. Build the feature sections
Add under `src/features/<section>/`: `about` (bio + `pen-assets/portrait-profil.jpg`), `contact` (form → mailto or a form provider; a Netlify Function only if server-side handling is required), and flesh out `hero`/`portfolio`.
- Replace placeholder copy in `src/data/projects.ts` with real projects; move/optimize thumbnails (currently copied into `public/projects/`).

### 5. Wire live GitHub data (optional section)
- Use `githubQueries.repos()` from `src/lib/queries.ts` with `useQuery` in a "GitHub activity" component, **or** prefetch in the route loader via `context.queryClient.ensureQueryData(...)`.
- Handle loading/error/empty states. Keep it client-side (SSG stays static).

### 6. Routing
- Single-page portfolio: keep everything on `/` with in-page anchors (current setup).
- If you add project detail pages, create `src/routes/projects.$slug.tsx` (dynamic route). `routeTree.gen.ts` regenerates automatically — never edit it. Prerender crawls links, so detail pages get static HTML too.

### 7. Per-route SEO
- The root title/description in `src/routes/__root.tsx` is set; add per-route `head`/`seo()` and an OG image. Consider enabling the prerender **sitemap** options (the plugin supports `sitemap` per page).

### 8. Quality gates (run before calling anything done — see AGENTS.md)
- **Accessibility** skill on all UI.
- **Animation** skill on `motion` usage — verify reduced-motion (note: entrance variants render `opacity:0` in the SSG HTML until hydration; confirm this is acceptable and that reduced-motion users still see content).
- **Structure/review** skills (`/code-review`, `/simplify`) on the diff.
- `/verify` (or drive the app with the browser tools) + `yarn build`.

---

## Deployment (Netlify + Cloudflare)

**What was wrong:** the build emits an SSR server (`dist/server/server.js`) but `netlify.toml` was configured as a static SPA (`/*` → `/index.html`). The SSR server would never run, and the SPA redirect doesn't match SSG output.

**What was fixed:**
- `vite.config.ts` now enables `tanstackStart({ prerender: { enabled: true, crawlLinks: true } })` → `yarn build` writes real static HTML to `dist/client/` (verified: `dist/client/index.html` contains the full rendered page).
- `netlify.toml` now publishes `dist/client` as static files, hard-caches `/assets/*` (content-hashed) and revalidates HTML. No SPA catch-all (prerendered routes are real files).

**Netlify checklist:**
1. Site build command `yarn build`, publish dir `dist/client` (from `netlify.toml`).
2. Set `NODE_VERSION` (pinned to 20 in the toml) to match local.
3. `dist` is git-ignored — Netlify builds fresh; don't commit `dist/`.

**Cloudflare checklist (DNS in front of Netlify):**
1. **Custom domain first goes on Netlify** (Netlify → Domain settings) so its TLS cert provisions; point the domain's CNAME/apex at the Netlify target.
2. In Cloudflare DNS, the record can be **DNS-only (grey cloud)** — simplest, lets Netlify handle CDN/TLS end-to-end — or **Proxied (orange cloud)**. If proxied:
   - SSL/TLS mode must be **Full (strict)**, not Flexible (Flexible causes redirect loops with Netlify's HTTPS).
   - Don't let Cloudflare aggressively cache HTML — the `must-revalidate` header on HTML handles this, but verify a redeploy goes live without a manual cache purge.
   - Avoid double-minification/Rocket Loader (Rocket Loader can break React hydration).
3. After DNS propagates, confirm: HTTPS works, `https://<domain>/` returns the prerendered HTML, and a hard refresh after a redeploy shows new content.
