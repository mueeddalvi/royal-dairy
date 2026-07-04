# Phase 1: Foundation & Theme System - Context

**Gathered:** 2026-07-04
**Status:** Ready for planning

<domain>
## Phase Boundary

Set up the core frontend scaffolding for the Royal Dairy web application. This phase delivers the React + TypeScript + Vite project configuration, the central ThemeProvider with custom useTheme hook, styling design tokens mapped to CSS Custom Properties, a folder-per-component architecture ready for future routing/multi-page migrations, and a luxury preloader.

</domain>

<decisions>
## Implementation Decisions

### Technical Stack & Setup
- **D-01:** Scaffold with Vite, React 18+, TypeScript.
- **D-02:** Strict folder-per-component pattern. Every component folder must contain the component file, a `.css` file for styles (Vanilla CSS), and an `index.ts` file exporting it.
- **D-03:** Clean directory boundaries: `src/components/` for reusable atomic elements, `src/sections/` for page sections, `src/layouts/` for future routing containers, and `src/theme/` for styling configurations.

### Theme & Design Tokens
- **D-04:** ThemeProvider using React Context. Provide active theme state, theme values, and a `useTheme()` hook.
- **D-05:** Styling tokens mapped to CSS Custom Properties at the `:root` level. Properties must include colors (Blue `#020B1E`, White `#FFFFFF`, Silver `#D8D9DA`, Gold `#D4AF37`), typography (Playfair Display for headers, Inter for body), spacing (multiples of 4px), shadows, and transition durations.
- **D-06:** No hardcoded colors, sizes, or fonts in component styles. All component styles must reference CSS variables.

### Preloader
- **D-07:** Custom full-screen entrance loader that displays a premium branded animation (logo mark or title fade with custom gold transitions) and hides after initial load is complete.

### the agent's Discretion
- Easing functions for animations and preload transitions.
- Specific folder layout configurations under `src/`.

</decisions>

<specifics>
## Specific Ideas

- Aesthetic: Premium, dark luxury, minimalist layout.
- The preloader should fade out with a smooth CSS opacity transition rather than abrupt deletion.

</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Visual Specs & Color Systems
- `.planning/phases/01-foundation-theme-system/01-UI-SPEC.md` — approved color palette, typography and copywriting specs.

</canonical_refs>

<code_context>
## Existing Code Insights

Greenfield workspace — no existing code assets to integrate.

</code_context>

<deferred>
## Deferred Ideas

- Product listing components — Phase 2
- Layout assembly & brand content sections — Phase 3
- Scroll reveal & smooth scroll animations — Phase 4
- Accessibility audits & landmarks — Phase 5

</deferred>

---

*Phase: 01-foundation-theme-system*
*Context gathered: 2026-07-04*
