# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page personal portfolio site (React + TypeScript + Vite) for Senthilkumaran P, an AI/Data Engineer. Deployed to Vercel as a static SPA (`vercel.json` rewrites all routes to `index.html`).

## Commands

Use `npm`, not `bun` (a `bun.lockb` exists but is stale — `package-lock.json` is the one actually used).

```bash
npm run dev        # vite dev server on port 8080 (see vite.config.ts)
npm run build       # production build
npm run build:dev   # development-mode build (unminified, useful for debugging build output)
npm run lint         # eslint .
npm run preview      # preview a production build locally
```

There is no test suite configured in this repo.

To sanity-check a change visually, run `npm run dev` and check `http://localhost:8080` (the dev server may bind to 8081/8083 etc. if 8080 is taken — check the actual terminal output).

## Architecture

**Routing shell**: `src/App.tsx` sets up `QueryClientProvider` → `TooltipProvider` → `MotionConfig` (framer-motion, respects `prefers-reduced-motion` via `reducedMotion="user"`) → `BrowserRouter`. All routes render inside `Layout` (`src/components/Layout.tsx`), which owns the persistent chrome: `LenisProvider` (smooth-scroll, `src/hooks/use-lenis.tsx`) wrapping a `ScrollManager` (scrolls to the URL hash via `lenis.scrollTo`, falling back to native `scrollIntoView`), `AmbientBackground`, `MouseGlow`, `Navigation`, `Footer`, `BackToTop`, `CustomCursor`, and an `AnimatePresence` page-transition wrapper (keyed on `location.pathname`) around `<Outlet />`. Routes: `/` (`Index`), `/resume` (`Resume`), `*` (`NotFound`).

**Single-page composition**: `Index.tsx` is a stack of full-width `<section>` components rendered in a fixed order (Hero → About → Skills → Projects → Experience → Certifications → Contact). Each section is self-contained in `src/components/*.tsx` — no shared section-level state. To add/reorder/remove a section on the homepage, edit `src/pages/Index.tsx` and the corresponding component in `src/components/`.

**Animation system**: `src/lib/motion.ts` centralizes framer-motion primitives — `EASE_BUTTER` (the site's signature expo-out easing), spring presets, and reusable `Variants` (`fadeInUp`, `fadeInDown`, `fadeInLeft/Right`, `scaleIn`, `fadeInBlur`, `staggerContainer`). Section components import these rather than defining ad hoc transitions — keep new scroll-reveal animations consistent by reusing these variants with `viewport` (from the same file) for `whileInView` triggers. `src/lib/gsap.ts` registers GSAP's `ScrollTrigger`/`SplitText` plugins once and exports a shared `prefersReducedMotion()` check for the handful of effects driven by GSAP instead of framer-motion. `src/lib/noise-shader.ts` holds the raw GLSL vertex/fragment shader source for the WebGL noise background effect.

**Visual/theme system** (`src/index.css`): dark-only theme defined as HSL CSS custom properties on `:root` (mirrored in `.dark`, though the site never actually toggles light mode). Custom tokens beyond the shadcn defaults: `--glow-primary`/`--glow-secondary` (ambient blob colors) and `--text-gradient-start/mid/end` (used by the `.text-gradient` / `.text-gradient-animated` utility classes). `GradientBlob.tsx`, `AmbientBackground.tsx`, and `MouseGlow.tsx` are the decorative, `aria-hidden` background effects layered behind content — reuse `GradientBlob` for new sections' background glow rather than hand-rolling blur divs.

**UI components** (`src/components/ui/`): shadcn/ui primitives (Radix UI + `class-variance-authority` + Tailwind), generated via the shadcn CLI per `components.json` (style: default, baseColor: slate, no RSC). Path aliases: `@/components`, `@/components/ui`, `@/lib`, `@/hooks` all resolve under `src/` (configured in both `tsconfig.json` and `vite.config.ts`). Prefer adding new shadcn components via the CLI rather than hand-writing Radix wrappers, to stay consistent with the existing set.

**Contact form**: `ContactSection.tsx` posts directly to Formspree (`https://formspree.io/f/xwvgvenl`) client-side — there is no backend/API route in this project. Includes a honeypot field (`_gotcha`) for spam filtering.

**Content is inline**: there's no CMS or JSON data layer — project/skill/experience/certification content lives directly inside each section component's JSX/arrays. Update content by editing the relevant component in `src/components/`.
