# Inbound Select — Design System Rules

## Project Overview

This is a React + Vite landing page project (JSX, not TSX). It follows the same architecture as the `../inbound` project:
- **Frontend:** React 19 with Vite, `.jsx` files
- **API:** Integrate with the main PayPerCall backend (this repo is client-only; previously used Express `/api/waitlist`)
- **Styling:** Global CSS with CSS Custom Properties (no Tailwind, no CSS Modules, no styled-components)

---

## Component Organization

- Place all UI components in `client/src/components/`
- Use **PascalCase** for filenames matching the component name (e.g., `HeroSection.jsx`)
- Export components as **default exports**
- `App.jsx` owns modal/global state and passes callbacks down as props
- Component structure:
  ```jsx
  function ComponentName({ prop1, prop2 }) {
    return <section className="section-name">...</section>;
  }
  export default ComponentName;
  ```

## Import Conventions

- No path aliases — use relative imports (`./components/Hero`, `../styles/tokens.css`)
- Group imports: React hooks first, then internal components

---

## Styling Rules

- **IMPORTANT: Use global CSS classes defined in `client/src/index.css` — never use inline styles or Tailwind**
- **IMPORTANT: Never hardcode color hex values — always reference CSS custom properties**
- Add CSS for new components directly in `client/src/index.css`
- Use `clamp()` for responsive fluid sizing (e.g., `clamp(12px, 2.5vw, 16px)`)
- Use `.container` class for max-width centering (max-width: 960px, centered with auto margins)
- Responsive breakpoints: 900px, 768px, 640px, 480px

### Design Tokens (CSS Custom Properties)

Define all tokens in `:root` in `client/src/index.css`. The Figma design uses:

```css
:root {
  /* Colors */
  --brand: #837CFE;
  --blue: #1267f8;
  --black: #000000;
  --white: #ffffff;
  --text: #575757;
  --text-secondary: #7D7D7D;
  --text-light: #ffffff;
  --gray-stroke: #D9D9D9;
  --gray-bg: #F5F5F5;
  --warning: #FF9900;
  --success: #00BF36;
  --accent: #F1A4C2;
  --yellow: #ffcd51;
  --pink: #BE3A3A;
  --red: #c31e26;
}
```

### Typography Scale

Fonts: **Inter**, **Inter Tight**, **Bricolage Grotesque** (load via Google Fonts in `index.html`)

| Token name | Family | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| H3 | Inter | 40px | 400 | 1.3 | 0.5px |
| H6 | Inter | 20px | 400 | 1.4 | 0.5px |
| Body Large | Inter | 16px | 400 | 1.4 | 0 |
| Body Medium Regular | Inter | 14px | 400 | 1.4 | 2px |
| Body Medium Bold | Inter Tight | 14px | 700 | 1.4 | 0 |
| Body Small | Inter | 12px | 400 | 1.4 | 0 |
| Caption Small SemiBold | Bricolage Grotesque | 10px | 600 | 1.0 | 0 |
| Caption Small Regular | Bricolage Grotesque | 10px | 400 | 1.0 | 0 |

---

## Animation Utilities

Reuse these animation classes (already in `index.css` if copied from the base project):

```css
.animate-down   /* fadeDown entrance — for above-the-fold content */
.animate-up     /* fadeUp entrance — for scroll-in content */
.delay-1 to .delay-13  /* 0.1s–1.3s animation delays */
```

---

## Asset Handling

- Store static assets (images, videos) in `client/public/` or `client/src/assets/`
- Reference public assets with root-relative paths (e.g., `/hero-video.mp4`)
- **IMPORTANT: If the Figma MCP server returns a localhost source for an image or SVG, use that source directly**
- **IMPORTANT: Do NOT install new icon packages** — use SVG icons inline or from Figma MCP assets
- **IMPORTANT: Do NOT use placeholder images** if a Figma asset source is provided

---

## Figma MCP Integration Rules

These rules must be followed for every Figma-driven implementation task.

### Required Flow (do not skip)

1. Run `get_design_context` first to fetch the structured representation for the exact node(s)
2. If the response is too large, run `get_metadata` to get the node map, then re-fetch only required nodes
3. Run `get_screenshot` for a visual reference of the variant being implemented
4. After you have both `get_design_context` and `get_screenshot`, download any assets and start implementation
5. Translate the MCP output (React + Tailwind) into **this project's conventions** (global CSS classes, CSS custom properties, `.jsx` files)
6. Validate final UI against the Figma screenshot for 1:1 visual parity before marking complete

### Translation Rules

- Replace Tailwind utility classes with **global CSS classes** using CSS custom properties
- Map Figma color variables to `var(--token-name)` from the token table above
- Map Figma typography to the typography scale classes/tokens above
- Reuse existing components from `client/src/components/` instead of duplicating
- Never hardcode hex values, pixel sizes for typography, or font names as strings in JSX

### Component Validation Checklist

Before marking a Figma component implementation complete:
- [ ] Colors use CSS custom properties, no hardcoded hex
- [ ] Typography matches the Figma scale (size, weight, family, line-height)
- [ ] Spacing uses `clamp()` or consistent multiples of 4px/8px
- [ ] Component is visually compared against the Figma screenshot
- [ ] Responsive behavior is tested at 900px and 480px breakpoints
- [ ] Component added to `App.jsx` if it's a page section

---

## Backend API

- `WaitlistModal` POSTs JSON to `/api/waitlist` (see `client/src/components/WaitlistModal.jsx`). Point this at your main backend or configure a dev proxy in `vite.config.js` when integrating.
