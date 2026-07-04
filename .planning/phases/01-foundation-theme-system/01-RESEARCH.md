# Phase 1: Foundation & Theme System - Research

**Researched:** 2026-07-04
**Domain:** React + TypeScript Theme Context & Scaffolding
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- Scaffold with Vite, React 18+, TypeScript.
- Strict folder-per-component pattern: component file, Vanilla CSS file, and `index.ts` exporting it.
- Clean directory boundaries: `src/components/`, `src/sections/`, `src/layouts/`, and `src/theme/`.
- ThemeProvider using React Context providing theme state, theme values, and a `useTheme()` hook.
- Styling tokens mapped to CSS Custom Properties at the `:root` level. Colors (Blue `#020B1E`, White `#FFFFFF`, Silver `#D8D9DA`, Gold `#D4AF37`), typography, spacing, shadows, and transition durations.
- No hardcoded colors, sizes, or fonts in component styles. All component styles must reference CSS variables.
- Custom full-screen entrance loader that displays a premium branded animation and hides after initial load is complete.

### the agent's Discretion
- Easing functions for animations and preload transitions.
- Specific folder layout configurations under `src/`.

### Deferred Ideas (OUT OF SCOPE)
- Product listing components — Phase 2
- Layout assembly & brand content sections — Phase 3
- Scroll reveal & smooth scroll animations — Phase 4
- Accessibility audits & landmarks — Phase 5

</user_constraints>

<research_summary>
## Summary

Researched modern practices for initializing a Vite React TS project and implementing a robust ThemeProvider utilizing pure CSS Custom Properties (variables) in tandem with React Context. For styling, Vanilla CSS modules or vanilla CSS files linked explicitly to component folders are selected.

Key recommendation: Define all theme values as a TypeScript configuration object. On mount, serialize these config values into CSS custom properties and inject them into the `:root` CSS selector. This guarantees that changing the typography or colors only requires changing the TypeScript theme config, and avoids hardcoded CSS files.

**Primary recommendation:** Initialize Vite React TS, structure directories, establish a React Context ThemeProvider that writes TS design tokens directly into `:root` CSS variables, and implement a CSS keyframe-based preloader.
</research_summary>

<standard_stack>
## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| react | ^18.2.0 | Core UI Library | Stable, production-ready declarative UI |
| typescript | ^5.0.0 | Static Typing | Enhances codebase scaling and safety |
| vite | ^5.0.0 | Bundler & Dev Server | Fast compilation and hot module reloading |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| lucide-react | ^0.300.0 | Icon Library | Clean, outline SVG icons matching premium aesthetic |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Vanilla CSS | Tailwind CSS | Tailwind would require configuration and classes; Vanilla CSS variables offer cleaner separation of concerns for custom premium grids and fluid typography. |

**Installation:**
No additional external libraries needed for the foundation.
</standard_stack>

<architecture_patterns>
## Architecture Patterns

### Recommended Project Structure
```
src/
├── components/          # Reusable atomic UI elements (Buttons, Inputs, Cards)
├── sections/            # Page sections (Hero, Products, Contact, etc.)
├── layouts/             # Page structural layouts (MainLayout)
├── theme/               # Central ThemeProvider and theme variables
│   ├── ThemeContext.tsx
│   ├── themeConfig.ts
│   └── index.ts
├── main.tsx
└── index.css            # Global base styles (resets, scroll behaviors)
```

### Pattern 1: Serializing Theme Config to CSS Variables
**What:** Write a TypeScript object containing design tokens, and dynamically inject them into the DOM as CSS variables.
**When to use:** Required to avoid hardcoded styles while maintaining a single source of truth for the theme.
**Example:**
```typescript
export const themeConfig = {
  colors: {
    background: '#020B1E',
    text: '#FFFFFF',
    accent: '#D4AF37',
    silver: '#D8D9DA',
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif",
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  }
};
```

### Pattern 2: Component Folder Structure
**What:** Every component resides in a dedicated subdirectory with its styles and exports.
**When to use:** Scalable component development.
**Example:**
```
src/components/Preloader/
├── Preloader.tsx
├── Preloader.css
└── index.ts
```

### Anti-Patterns to Avoid
- **Hardcoding Color Hexes:** Putting `#D4AF37` directly inside a component's `.css` file. Always use `var(--color-accent)`.
- **Global Style Clashes:** Avoid using generic tag styling globally. Scope styles using specific selectors or classes scoped to components.
</architecture_patterns>

<dont_hand_roll>
## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| CSS resets | Custom CSS reset rules | Modern CSS Reset (e.g., Andy Bell's reset) | Prevents cross-browser inconsistencies and box-sizing issues |

**Key insight:** Scaffolding the React app with a standardized reset makes responsive layout behaviors (such as CSS Grid boundaries) highly predictable.
</dont_hand_roll>

<common_pitfalls>
## Common Pitfalls

### Pitfall 1: Flash of Unstyled Content (FOUC) on Load
**What goes wrong:** The website renders basic text before the preloader finishes or before fonts are loaded.
**Why it happens:** Fonts or stylesheets take a few milliseconds to resolve, but the browser starts paint operations immediately.
**How to avoid:** Place the preloader component high in the React component tree and style it with inline critical CSS or load it synchronously to cover loading states.

### Pitfall 2: Layout Shift from CSS Custom Properties Injection
**What goes wrong:** The page jumps or resizes when JavaScript injects CSS custom properties.
**Why it happens:** The DOM renders with fallback colors/sizes before JS executes.
**How to avoid:** Define default theme CSS variables directly in a static global `index.css` file at `:root`, and let the ThemeProvider override them only if dynamic theme switching is needed.
</common_pitfalls>

<code_examples>
## Code Examples

### CSS Custom Properties Root Setup
```css
/* index.css */
:root {
  --color-background: #020B1E;
  --color-text: #FFFFFF;
  --color-accent: #D4AF37;
  --color-silver: #D8D9DA;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  --spacing-md: 16px;
}

body {
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-body);
  margin: 0;
  padding: 0;
}
```

### React Theme Provider Context
```typescript
import React, { createContext, useContext, useEffect } from 'react';
import { themeConfig } from './themeConfig';

const ThemeContext = createContext(themeConfig);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const root = document.documentElement;
    // Map themeConfig to CSS variables dynamically
    Object.entries(themeConfig.colors).forEach(([key, val]) => {
      root.style.setProperty(`--color-${key}`, val);
    });
    Object.entries(themeConfig.fonts).forEach(([key, val]) => {
      root.style.setProperty(`--font-${key}`, val);
    });
    Object.entries(themeConfig.spacing).forEach(([key, val]) => {
      root.style.setProperty(`--spacing-${key}`, val);
    });
  }, []);

  return (
    <ThemeContext.Provider value={themeConfig}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
```
</code_examples>

<sota_updates>
## State of the Art (2024-2025)

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Webpack / CRA | Vite | 2021 | Sub-second hot-reload times, instant startup |
| CSS-in-JS | CSS Variables | 2023 | Zero-runtime CSS variables yield better performance and browser rendering metrics |
</sota_updates>

<sources>
## Sources

### Primary (HIGH confidence)
- Vite official getting started guides.
- MDN Web Docs on CSS Custom Properties.
- React Context Documentation.
</sources>

<metadata>
## Metadata

**Research scope:**
- Core technology: Vite + React + TS Theme Scaffolding
- Patterns: Theme Context, folder-per-component design, CSS custom variables

**Confidence breakdown:**
- Standard stack: HIGH
- Architecture: HIGH
- Pitfalls: HIGH
- Code examples: HIGH

**Research date:** 2026-07-04
**Valid until:** 2026-08-04
</metadata>

---

*Phase: 01-foundation-theme-system*
*Research completed: 2026-07-04*
*Ready for planning: yes*
