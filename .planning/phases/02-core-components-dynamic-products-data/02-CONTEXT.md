# Phase 2: Core Components & Dynamic Products Data - Context

**Gathered:** 2026-07-04
**Status:** Ready for planning

<domain>
## Phase Boundary

Build the data model and catalog listing components for Phase 2. This phase delivers the static product registry `products.ts`, reusable UI product cards, category filter buttons, and a CSS Grid product showcase.

</domain>

<decisions>
## Implementation Decisions

### Data Schema
- **D-01:** Define a Product TypeScript interface (`id`, `name`, `category`, `description`, `price`, `image`, `specs` [array of strings, e.g. A2, Organic], `volume` [e.g. 1L, 500g]).
- **D-02:** Categories: `milk` (Milk), `cheese` (Cheese), `butter-ghee` (Butter & Ghee), `yogurt-cream` (Yogurt & Cream).
- **D-03:** Store static product configuration list dynamically inside `src/data/products.ts`.

### Components
- **D-04:** Strictly folder-per-component pattern:
  - `src/components/ProductCard`: Individual card with image, glowing gold border on hover, elegant typography, spec labels, and action CTAs.
  - `src/components/ProductGrid`: Responsive CSS Grid rendering product catalog and handling search/category filter states.

### Styling & Theme Integration
- **D-05:** Layout should use `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` to avoid fixed widths and remain fully responsive.
- **D-06:** Colors must exclusively reference custom theme properties: background card (`var(--color-backgroundCard)`), text titles (`var(--color-text)`), highlights/prices/active categories (`var(--color-accent)`), borders (`var(--color-border)`).

### the agent's Discretion
- Product image design styles (SVG placeholders or dynamic visual marks).
- Layout padding and card margin spacing.

</decisions>

<specifics>
## Specific Ideas

- Filter buttons should have smooth background/border animations when hovered or active.
- Premium design: Prices should be formatted elegantly with currency symbols and decimals.

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
- `src/theme/ThemeContext.tsx` — Wrap component trees and read CSS styling variables.

</code_context>

<deferred>
## Deferred Ideas

- Full page assembly of other brand pages — Phase 3
- Scroll reveal animations — Phase 4
- Semantic keyboard navigation accessibility — Phase 5

</deferred>

---

*Phase: 02-core-components-dynamic-products-data*
*Context gathered: 2026-07-04*
