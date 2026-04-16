# PRD: Inbound Select — ERP SaaS Marketing Website

**Version:** 1.0
**Date:** April 12, 2026
**Status:** Draft — awaiting build start signal

> **Content placeholders:** Product name, logo, pricing ($0/$5/$25), trust strip logos, and waitlist email address are all placeholder values. These will be updated before or during build.

---

## Problem Statement

Growing enterprises evaluating ERP platforms have no dedicated landing destination that communicates Inbound Select's value proposition, feature breadth, and pricing in a single cohesive experience. Without this, prospects bounce to competitors whose marketing sites already demonstrate product capability at a glance. The cost of not shipping this is zero inbound pipeline — the product exists but cannot be discovered or evaluated without a sales rep in the loop.

---

## Goals

1. **Capture qualified leads** — Achieve a waitlist/demo-request conversion rate of ≥3% of unique visitors within 60 days of launch.
2. **Communicate product value** — Visitors spend ≥90 seconds on-page (indicating content engagement), measured via analytics.
3. **Drive demo bookings** — Contact & Demo page generates ≥50 demo requests in the first 30 days.
4. **Establish credibility** — Trust strip and security section reduce early-funnel objections; track CTA click-through rate from security section ≥5%.
5. **Support multi-persona acquisition** — Home, Platform Features, Agency, and Pricing pages each serve a distinct ICP segment, measurable via UTM-tagged inbound traffic per page.

---

## Non-Goals

- **No authenticated app UI** — Marketing-only. The actual ERP product dashboard is out of scope.
- **No CMS** — Copy is hardcoded for v1; headless CMS deferred to v2.
- **No A/B testing infrastructure** — Deferred until baseline metrics are established.
- **No multi-language support** — English only for v1.
- **No payment processing** — Pricing page links to waitlist/demo flow only. Billing integration is a separate initiative.

---

## Pages

| Page | Route | Primary CTA | Key Sections |
|---|---|---|---|
| Home | `/` | Get Started (modal) | Hero, Product Overview, Key Features, Live Demo, Industry Solutions, Pricing, Security, CTA |
| Platform Features | `/features` | Book a Demo | Hero, Key Features, Product Overview, Security, Pricing, Why Erphoria, CTA |
| Agency | `/agency` | Book a Demo | Hero, Why Erphoria, Key Features, What We Do, Security, Team, Industry Solutions, CTA |
| Pricing & Plans | `/pricing` | Get Started (per tier) | Hero, Pricing Cards, Product Overview, Industry Solutions, FAQ, CTA |
| Contact & Demo | `/contact` | Submit Form | Hero, Contact Form, Location info, Pricing section, Industry Solutions, CTA |

---

## Requirements

### P0 — Must-Have

1. **Global Navbar** — Logo, 5 nav links, "Get Started" CTA. Sticky. Collapses on mobile ≤768px.
2. **Home / Hero** — Headline, subheadline, dual CTA, dashboard analytics mockup, avatar trust strip.
3. **Product Overview** — 6 feature cards (2-col grid, responsive).
4. **Key Features & Benefits** — Split layout with chart mockups.
5. **Pricing Plans** — 3 tiers (Free, Plus, Enterprise), feature checklists, CTA per tier.
6. **Contact Form** — 5 fields, POSTs to `/api/waitlist`, inline success/error states.
7. **Waitlist Modal** — Email capture, triggered by all CTAs site-wide, POSTs to `/api/waitlist`.
8. **Design tokens applied** — All colors via CSS custom properties, no hardcoded hex.
9. **Responsive** — Functional at 1440px, 1024px, 768px, 375px. No horizontal scroll.
10. **Express backend** — `/api/waitlist` endpoint, nodemailer, error handling.

### P1 — Nice-to-Have (post-MVP)

11. FAQ accordion (Pricing page)
12. Live Demo video/gif embed
13. Solutions for Every Industry scrolling strip
14. Enterprise-Grade Security section
15. Scroll-triggered fade animations
16. "Why Erphoria?" differentiator section
17. Team section (Agency page)

### P2 — Future

- Blog / Resources (requires CMS)
- Demo booking calendar embed
- Chat widget
- Internal analytics dashboard
- Dark mode (token system already supports it)

---

## Tech Stack

- **Frontend:** React 19 + Vite, `.jsx` files, no TypeScript
- **Styling:** Global CSS (`client/src/index.css`), CSS custom properties — no Tailwind, no CSS Modules
- **Components:** `client/src/components/` — PascalCase, default exports
- **Backend:** Node.js + Express (`server.js`), nodemailer via `.env`
- **Deploy:** Vercel (`vercel.json` pre-configured)
- **Design system:** Figma file `AbhmgyKUX5aWM0gd7QGYdT` — tokens, components, and text styles all established

### CSS Token Reference

```css
:root {
  --brand: #837CFE;
  --blue: #1267f8;
  --black: #000000;
  --white: #ffffff;
  --text: #575757;
  --text-secondary: #7D7D7D;
  --gray-stroke: #D9D9D9;
  --gray-bg: #F5F5F5;
  --success: #00BF36;
  --warning: #FF9900;
  --error: #c31e26;
  --accent: #F1A4C2;
  --yellow: #ffcd51;
}
```

### Typography
- **Headings:** Inter Tight (Bold, SemiBold, Medium) — load via Google Fonts
- **Body:** Inter (Regular, Medium, Bold)
- **Captions/Labels:** Bricolage Grotesque (SemiBold, Regular)

---

## Build Phases

**Phase 1 — Foundation (Week 1–2)**
- Project scaffold (Vite + React + Express mirroring `../inbound` structure)
- `index.css` with full token system + fonts
- Navbar component
- Home: Hero + Product Overview

**Phase 2 — Core Pages (Week 3)**
- Home: Key Features, Pricing preview, CTA
- Pricing & Plans page (full)
- Waitlist modal + `/api/waitlist` backend

**Phase 3 — Remaining Pages + Polish (Week 4)**
- Platform Features, Agency, Contact & Demo pages
- Animations, responsive QA
- Security section, Trust strip, FAQ

**Phase 4 — P1 items (post-launch)**
- Live Demo embed, Team section, analytics, SEO meta tags

---

## Success Metrics

| Metric | Target | Window |
|---|---|---|
| Hero CTA click-through | ≥8% of visitors | Weekly |
| Pricing page visit rate | ≥40% of home visitors | Weekly |
| Form submission rate | ≥3% of Contact page visitors | Weekly |
| Bounce rate | ≤60% | Weekly |
| Waitlist signups | 200 | 30 days post-launch |
| Demo requests | 50 | 30 days post-launch |

---

## Open Questions (to resolve before/during build)

| # | Question | Owner | Blocking? |
|---|---|---|---|
| 1 | Final product name — "Erphoria" or "Inbound Select"? | Stakeholder | Yes |
| 2 | Pricing tiers — are $0/$5/$25 final? | Product | Yes |
| 3 | Waitlist email address for nodemailer | Ops | Yes |
| 4 | Real logos for trust strip, or keep placeholders? | Marketing | No |
| 5 | Live Demo — real video or static screenshot? | Product | No |
| 6 | Analytics account (GA4/Mixpanel)? | Marketing | No |
| 7 | Industry verticals for "Solutions" section | Product | No |
