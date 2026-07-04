# Phase 4: Premium Interactions & Scroll Animations - Context

**Gathered:** 2026-07-04
**Status:** Ready for planning

<domain>
## Phase Boundary

Implement dynamic viewport entrance scroll animations, custom micro-interactions, smooth anchor link scrolling, and a premium glassmorphic sticky top navigation bar with a responsive toggle drawer.

</domain>

<decisions>
## Implementation Decisions

### Navigation
- **D-01:** Implement a sticky top header component (`src/components/Header`):
  - Glassmorphic style (`backdrop-filter: blur(10px)`, `background-color: rgba(2, 11, 30, 0.75)`).
  - Gold hover states for anchors (`#hero`, `#products`, `#about`, `#reviews`, `#contact`).
  - Mobile layout: hamburger button toggling a sliding side drawer or dropdown overlay.

### Scroll reveal animations
- **D-02:** Develop a custom hook `useScrollReveal` in `src/hooks/useScrollReveal.ts` wrapping the DOM IntersectionObserver API.
- **D-03:** When an element is observed, append an `.is-visible` CSS class to trigger hardware-accelerated CSS transitions:
  - Transition: `opacity` and `transform: translateY(20px)` to `translateY(0)` with a duration of `0.8s` and `cubic-bezier(0.16, 1, 0.3, 1)`.

### Scroll behavior
- **D-04:** Set `html { scroll-behavior: smooth; }` in `index.css` to allow fluid native anchor transitions.

### the agent's Discretion
- Delay intervals between grid items (e.g. staggering card entrances).
- Micro-interactions on buttons (scale down slightly on active click).
- Header collapse heights on scroll.

</decisions>

<specifics>
## Specific Ideas

- The custom scroll reveal class should apply to all major container sections and inner cards (like `ProductCard` and `UspCard`).
- Header links should dynamically highlight gold when they match the active section (using active scroll tracker or basic hash anchors).

</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Visual Specs & Color Systems
- `.planning/phases/01-foundation-theme-system/01-UI-SPEC.md` — approved color palette, typography and copywriting specs.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/theme/ThemeContext.tsx` — Wrap components to leverage custom variables.
- `src/App.tsx` — Integrate Header into the landing layout.

</code_context>

<deferred>
## Deferred Ideas

- Comprehensive accessibility screening and tab-index reviews — Phase 5

</deferred>

---

*Phase: 04-premium-interactions-scroll-animations*
*Context gathered: 2026-07-04*
