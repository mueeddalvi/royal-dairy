# Roadmap: Royal Dairy Web Application

## Overview

A premium digital experience journey for Royal Dairy, building a luxury single-page React + TypeScript + Vite web application using CSS Custom Properties for styling, dynamic product lists, scroll-based animations, and responsive CSS Grid structures.

## Phases

- [ ] **Phase 1: Foundation & Theme System** - Establish the Vite/TS architecture, central ThemeProvider, and preloader.
- [ ] **Phase 2: Core Components & Dynamic Products Data** - Build the dynamic product catalog and reusable components.
- [ ] **Phase 3: Brand Sections & Layout Assembly** - Implement Hero, Who We Are, USP, Numbers, Partners, Reviews, and Contact sections.
- [ ] **Phase 4: Premium Interactions & Scroll Animations** - Integrate scroll reveal, smooth scrolling, and hover effects.
- [ ] **Phase 5: Accessibility & Production Compliance** - Deliver semantic compliance, keyboard navigation, and finalize build.

## Phase Details

### Phase 1: Foundation & Theme System
**Goal**: Initialize the Vite + TS workspace, implement the central ThemeProvider, design system CSS custom properties, routing-ready directory hierarchy, and the premium preloader.
**Depends on**: Nothing
**Requirements**: THEM-01, THEM-02, THEM-03, ARCH-01, ARCH-02, ARCH-03, UXIN-01
**Success Criteria**:
  1. Vite/React environment compiles cleanly with TypeScript.
  2. ThemeProvider correctly applies color palette (blue, white, silver, gold) and typography variables to root elements.
  3. Preloader displays a branded, elegant entrance animation.
**Plans**: 2 plans

Plans:
- [ ] 01-01: Vite & Architecture Setup
- [ ] 01-02: ThemeProvider, CSS Design Tokens, and Preloader

### Phase 2: Core Components & Dynamic Products Data
**Goal**: Build the data layer for product categories, load products dynamically from `products.ts`, and construct reusable responsive Grid product cards.
**Depends on**: Phase 1
**Requirements**: ARCH-04, SECT-02
**Success Criteria**:
  1. Product list is rendered dynamically from `products.ts`.
  2. Filter options allow users to view Milk, Cheese, Butter & Ghee, and Yogurt & Cream in a CSS Grid catalog.
**Plans**: 1 plan

Plans:
- [ ] 02-01: Products Model & Dynamic Card Listing Component

### Phase 3: Brand Sections & Layout Assembly
**Goal**: Assemble all required content sections: Hero, Who We Are, Why Choose Royal Dairy (USP), Numbers/Achievements, Partners, Customer Reviews, Contact Us (form), and Footer.
**Depends on**: Phase 2
**Requirements**: SECT-01, SECT-03, SECT-04, SECT-05, SECT-06, SECT-07, SECT-08, SECT-09
**Success Criteria**:
  1. All 9 sections render in the correct sequential order.
  2. All layouts adjust fluidly using CSS Grid on mobile, tablet, desktop, and ultrawide screens.
  3. Contact form accepts user input and simulates submission cleanly.
**Plans**: 2 plans

Plans:
- [ ] 03-01: Brand Story & Achievement Sections
- [ ] 03-02: Partners, Testimonials & Contact Sections

### Phase 4: Premium Interactions & Scroll Animations
**Goal**: Implement scroll reveal animations, smooth scrolling, elegant hover interactions, and micro-animations to enhance premium aesthetic.
**Depends on**: Phase 3
**Requirements**: UXIN-02, UXIN-03
**Success Criteria**:
  1. Sections fade or glide into view smoothly as the user scrolls.
  2. Hovering over cards, buttons, or navigation links triggers subtle visual feedback.
  3. Smooth scroll is active on navigation/scroll triggers.
**Plans**: 1 plan

Plans:
- [ ] 04-01: Premium Animations & Interaction Polish

### Phase 5: Accessibility & Production Compliance
**Goal**: Audit WCAG accessibility guidelines, add ARIA attributes, test keyboard focus, and verify semantic structures.
**Depends on**: Phase 4
**Requirements**: ACCS-01, ACCS-02
**Success Criteria**:
  1. Landmarks and interactive controls have proper ARIA attributes.
  2. The application build finishes successfully with zero warnings/errors.
**Plans**: 1 plan

Plans:
- [ ] 05-01: Semantic Audit & Accessibility Compliance

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Theme System | 0/2 | Not started | - |
| 2. Core Components & Dynamic Products Data | 0/1 | Not started | - |
| 3. Brand Sections & Layout Assembly | 0/2 | Not started | - |
| 4. Premium Interactions & Scroll Animations | 0/1 | Not started | - |
| 5. Accessibility & Production Compliance | 0/1 | Not started | - |
