# Royal Dairy Web Application

## What This Is

A premium, minimalist, modern, elegant, and futuristic single-page React web application for Royal Dairy. It showcases their premium dairy products with clean, spacious, and luxurious layouts, subtle micro-interactions, smooth scrolling, and elegant hover effects. The app is designed to represent the pinnacle of luxury in the dairy industry, using a signature color palette of blue, white, silver, and gold.

## Core Value

Exude unmatched luxury and premium quality while presenting Royal Dairy's products and story in an elegant, responsive, and performance-optimized single-page React app.

## Requirements

### Validated

- ✓ A premium branded loader. (Validated in Phase 1)
- ✓ Centralized ThemeProvider using Vanilla CSS custom variables. (Validated in Phase 1)
- ✓ Scalable React directory architecture organized for future multi-page routing. (Validated in Phase 1)
- ✓ Dynamic product listing fetched/imported from a products.ts configuration file. (Validated in Phase 2)
- ✓ CSS Grid as the primary layout system, fully responsive across all device sizes. (Validated in Phase 3)
- ✓ Sections (in order): Hero, Products, Who We Are, Why Choose Royal Dairy (USP), Numbers/Achievements, Partners, Customer Reviews, Contact Us, Footer. (Validated in Phase 3)

### Active

- [ ] Accessible UI matching WCAG guidelines with semantic HTML elements.
- [ ] High-performance implementation with smooth scrolling, scroll-reveal animations, and micro-interactions.

### Out of Scope

- [ ] Complete multi-page React routing (to be deferred to subsequent milestones, though the architecture must prepare for it).
- [ ] Dynamic backend database or live order processing systems.
- [ ] Admin panel or portal for adding/editing products online.

## Context

Royal Dairy requires a digital presence that reflects its high standards of purity and prestige. The website needs to feel more like a luxury boutique than a generic dairy supplier. The codebase needs to be structured cleanly, applying SOLID, DRY, and KISS principles, utilizing React + TypeScript + Vite.

## Constraints

- **Tech Stack**: React 18+, TypeScript, Vite, Vanilla CSS.
- **Styling**: All design tokens (colors, fonts, sizes, etc.) must be defined in the ThemeProvider using CSS variables. No hardcoded colors or fonts allowed in component styles.
- **Layout**: CSS Grid is the primary layout system. Fluid spacing and typography should be used to avoid fixed widths.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Vite | Fast, modern SPA setup, easily scales to multi-page or React Router later | — Pending |
| Vanilla CSS Custom Properties | Ensures maximum styling flexibility, conforms to user request for native CSS and custom ThemeProvider | — Pending |
| Product configuration TS file | Allows dynamic and scalable product listings without requiring a database in the first phase | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-07-04 after initialization*
