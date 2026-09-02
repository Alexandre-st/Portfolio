# AGENTS.md

Guidance for AI agents working in this portfolio (Alexandre Saint-Prix, v2 rebuild on the `portfolio-v2` branch). Read this before making changes. For build/architecture basics see `CLAUDE.md`; for the ordered rebuild steps see `docs/IMPLEMENTATION_PLAN.md`.

## Stack & decisions (locked)

- **Framework**: TanStack Start (SSR React on Vite), React 19, TypeScript strict.
- **Rendering/deploy**: **Static prerender (SSG)** → Netlify (static) → Cloudflare DNS/CDN. Dynamic data (GitHub) is fetched **client-side** with TanStack Query. Do not add full SSR / server functions unless a feature genuinely needs a secret or per-request data — then add a single Netlify Function proxy, not app-wide SSR.
- **Styling**: global SCSS in **one central `src/styles/` folder** — NOT co-located with components, NO CSS Modules. Everything is aggregated into `src/styles/index.scss` (imported once in `__root.tsx`) under sections: `globals/` (base), `layouts/`, `routes/`, `components/`. Components reference plain global class names (BEM-ish: `.block`, `.block__el`, `.block--mod`); partials pull in helpers with `@use '../globals/mixins' as *;`. Add a new style file to the right section folder and `@use` it in `index.scss` — never co-locate a `.scss`/`.module.scss` next to a component.
- **Design tokens**: CSS custom properties in `src/styles/globals/_variables.scss`, consumed as `var(--…)`. Palette and motion values there are **placeholders** — replace the palette with real values from `portfolio.pen`.
- **Style helpers**: mixins/functions in `src/styles/globals/_mixins.scss` — `media-breakpoint-up/down($name)`, `pxToRem($n)`, `preset($level)`, `wrapper`. Reuse these; don't hardcode breakpoints or re-derive rem.
- **Animation**: `motion` (Framer Motion, `motion/react`). Reuse presets from `src/lib/motion.ts`. `<MotionConfig reducedMotion="user">` is set in `__root.tsx`; keep entrance animations non-essential.
- **Structure**: feature + ui split — `components/ui` (primitives), `components/layout` (chrome), `features/<section>` (page sections). Each folder has an `index.ts` barrel.
- **Imports**: use the `~/*` alias (→ `src/*`), not deep relative paths.

## Directory map

```
src/
  routes/            # file-based routes; routeTree.gen.ts is GENERATED — never edit
  components/ui/     # primitives (Container, Button, …)
  components/layout/ # Header, Footer, page chrome
  features/          # page sections (hero, portfolio, …)
  data/              # content source of truth (projects.ts, socials.ts)
  lib/               # github.ts, queries.ts, motion.ts, cn.ts
  styles/            # ALL styles live here — one central folder
    index.scss       #   aggregates every partial (imported in __root.tsx)
    globals/         #   base: reset, variables (tokens), fonts, typography, common, mixins
    layouts/         #   header, footer
    routes/          #   per-page styles (home)
    components/      #   button, project-card, …
```

## Design source

`portfolio.pen` is an encrypted **pen.dev** file — the design system of record. Access it **only** through the pencil MCP tools (`mcp__pencil__*`); it must be **open in the Pencil editor** for the tools to read it. Never `Read`/`Grep` the `.pen` file. When translating design → code, pull real tokens (palette, type scale, spacing) into `base/_root.scss` first, then build components against `var(--…)`.

## Quality gates — do not skip

Before considering any UI work done, run the available skills. These are required, not optional:

- **Accessibility** — run the accessibility skill on new/changed UI. Non-negotiables: semantic landmarks, keyboard operability, visible `:focus-visible`, `alt` text (empty `alt=""` for decorative images with an `.overlink` label), color contrast against the real palette, and `prefers-reduced-motion` respected.
- **Animation** — run the animation/motion skill on anything using `motion`. Check reduced-motion behavior, no layout shift (CLS), 60fps transform/opacity-only animation, and consistent use of `src/lib/motion.ts` presets.
- **Code structure** — run the structure/review skills (`/code-review`, `/simplify`) on the diff. Verify the feature + ui split, module boundaries, and that nothing bypasses the design tokens or `globals/_mixins` helpers.
- **Verify** — run `/verify` (or drive the app with the browser tools) to confirm the change works in the real app, not just that it typechecks.

Run `yarn build` before finishing — it is the de facto typecheck (`noEmit` strict) and catches SCSS resolution errors.

## Pre-launch Evolution

This portfolio has not launched: no production visitors, no persisted user data, no analytics history to protect. Revisit this policy before the first production deploy of v2.

- Optimize for the **smallest coherent design that represents the portfolio today**. Prefer deleting over adding.
- Remove obsolete code, styles, components, routes, design tokens, config, and aliases **directly**. The v1 code and the old `feature/*` branches are reference, not something to preserve in this tree.
- **Do not** add backward-compatibility shims, legacy class-name aliases, dual style systems, or transitional wrappers unless explicitly asked. There are no old consumers to keep working.
- Internal component/prop and utility APIs are **not public contracts**. When you change one, update its callers, stories, and styles **atomically** in the same change.
- Local/dev content is **disposable**. The `data/*` files and placeholder assets are seed material — recreate or replace them freely rather than contorting the code to preserve sample content.
- Treat the design-token set and `data/*` as a **replaceable baseline**, but keep the token layer and the SCSS `@use` graph **coherent**: don't leave dangling `var(--…)` references or orphaned partials. If you rename a token, update every reference in the same change.
- Preserve the real **correctness properties**: accessibility, deterministic builds, valid prerendered/static output, no console errors, no layout shift, and reduced-motion support. These are requirements, not backward-compatibility concerns.
- Consolidate or restructure the styles/component architecture only as an **explicit, coordinated change**, not as incidental churn inside a feature branch.
