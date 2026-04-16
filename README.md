# Inbound Select — ERP SaaS Marketing Website

A multi-page marketing site for **Erphoria**, a cloud-native ERP platform. Built with React 19 + Vite on the frontend and Node.js + Express on the backend.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend framework | React 19 + Vite 7 |
| Language | JavaScript (JSX — no TypeScript) |
| Styling | Global CSS with CSS custom properties (`client/src/index.css`) |
| Backend | Node.js + Express 4 |
| Email | Nodemailer (SMTP) |
| Deploy | Vercel (`vercel.json` pre-configured) |
| Design source | Figma (`AbhmgyKUX5aWM0gd7QGYdT`) |

No Tailwind. No CSS Modules. No styled-components. No TypeScript.

---

## Project Structure

```
inbound-select/
├── server.js              # Express server — serves built client + /api/waitlist
├── package.json           # Server dependencies (express, nodemailer, cors, dotenv)
├── vercel.json            # Vercel deployment config
├── .env.example           # Environment variable template
├── PRD.md                 # Product requirements document
├── CLAUDE.md              # AI coding conventions for this repo
│
└── client/                # Vite React app
    ├── index.html
    ├── package.json       # React 19, Vite 7, ESLint
    ├── vite.config.js
    ├── public/
    │   └── assets/        # Static SVG/PNG assets (served directly)
    └── src/
        ├── main.jsx
        ├── App.jsx         # Page routing (state-based), modal state
        ├── index.css       # All styles — design tokens, component CSS
        └── components/
            ├── Navbar.jsx
            ├── Hero.jsx
            ├── ProductOverview.jsx
            ├── KeyFeaturesBenefits.jsx
            ├── HomeLiveDemo.jsx
            ├── WhyErphoria.jsx
            ├── IndustrySolutions.jsx
            ├── EnterpriseSecurity.jsx
            ├── PricingSection.jsx
            ├── Footer.jsx
            ├── WaitlistModal.jsx
            │
            ├── FeaturesPage.jsx
            ├── FeaturesHero.jsx
            ├── FeaturesProductOverview.jsx
            ├── FeaturesCTA.jsx
            │
            ├── RolePage.jsx
            ├── RoleHero.jsx
            ├── RoleWhatWeDo.jsx
            ├── RoleKeyFeatures.jsx
            ├── RoleWhyErphoria.jsx
            ├── RoleIndustrySolutions.jsx
            ├── RoleEnterpriseSecurity.jsx
            ├── RoleTeam.jsx
            │
            ├── PricingPage.jsx
            ├── PricingHero.jsx
            ├── PricingProductOverview.jsx
            ├── PricingFAQ.jsx
            │
            ├── ContactPage.jsx
            ├── ContactHero.jsx
            ├── ContactForm.jsx
            └── ContactMap.jsx
```

---

## Pages

| Page | Nav label | Key sections |
|---|---|---|
| Home | Home | Hero, Product Overview, Key Features, Live Demo, Why Erphoria, Industry Solutions, Security, Pricing, Footer CTA |
| Platform Features | Features | Hero, Key Features & Benefits, Product Overview, Security, Why Erphoria, CTA |
| Select Your Role | Select Your Role | Hero, What We Do, Key Features, Why Erphoria, Industry Solutions, Security, Team, CTA |
| Pricing | Pricing | Hero, Pricing Cards, Product Overview, Industry Solutions, FAQ, CTA |
| Contact | Contact us | Hero, Contact Form, Map, CTA |

Routing is **state-based** (no React Router). `App.jsx` holds a `page` state string (`'home'`, `'features'`, `'role'`, `'pricing'`, `'contact'`). Nav buttons call `setPage()`.

---

## Design Tokens

All colors are CSS custom properties in `:root` in `client/src/index.css`. Never use hardcoded hex values in components.

```css
:root {
  --brand:          #837CFE;   /* primary purple */
  --blue:           #1267f8;
  --black:          #000000;
  --white:          #ffffff;
  --text:           #575757;
  --text-secondary: #7D7D7D;
  --text-light:     #ffffff;
  --gray-stroke:    #D9D9D9;
  --gray-bg:        #F5F5F5;
  --warning:        #FF9900;
  --success:        #00BF36;
  --accent:         #F1A4C2;   /* pink */
  --yellow:         #ffcd51;
  --pink:           #BE3A3A;
  --red:            #c31e26;
}
```

---

## Typography

Fonts loaded via Google Fonts in `client/index.html`.

| Use | Family | Size | Weight |
|---|---|---|---|
| Large headings | Inter Tight | 40px | 400 |
| Section headings | Inter Tight | 20px+ | 500–700 |
| Body | Inter | 16px | 400 |
| Body medium | Inter | 14px | 400 |
| Captions / labels | Bricolage Grotesque | 10px | 400–600 |

---

## Responsive Breakpoints

Defined in `index.css` media queries:

| Breakpoint | Usage |
|---|---|
| 900px | Two-column → single column layouts |
| 768px | Tablet — navbar collapses, cards stack |
| 640px | Small tablet |
| 480px | Mobile — font sizes reduce via `clamp()` |

Fluid sizing uses `clamp()` throughout (e.g. `clamp(12px, 2.5vw, 16px)`).

---

## Animation Utilities

Reusable scroll-entrance classes in `index.css`:

```css
.animate-down          /* fade + slide down — above-the-fold content */
.animate-up            /* fade + slide up — scroll-triggered sections */
.delay-1 … .delay-13   /* 0.1s–1.3s delays */
```

---

## Backend — `/api/waitlist`

`POST /api/waitlist` accepts JSON: `{ name, email, company, message }`

- Sends a notification email to `YOUR_EMAIL` (owner)
- Sends a confirmation email to the submitter
- Returns `{ success: true }` on success, `{ success: false, message }` on error

Used by both the **WaitlistModal** and the **ContactForm** components.

---

## Environment Variables

Copy `.env.example` to `.env` and fill in:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your@gmail.com
SMTP_PASS=your_app_password   # Gmail: use an App Password
SMTP_FROM=your@gmail.com
YOUR_EMAIL=you@yourdomain.com
PORT=3000
```

---

## Local Development

```bash
# Install server deps
npm install

# Install client deps
cd client && npm install && cd ..

# Run backend (port 3000)
npm run dev

# Run frontend dev server (port 5173)
npm run dev:client
```

The Vite dev server proxies are not configured — run both servers simultaneously for full-stack dev. The Express server serves the built client in production.

---

## Build & Deploy

```bash
# Build client
npm run build:client

# Start production server (serves built client + API)
npm start
```

Deployed on **Vercel**. `vercel.json` routes:
- `/api/*` → `server.js` (Node serverless function)
- `/*` → `client/dist` (static build)

---

## Assets

All static assets (SVGs, PNGs exported from Figma) live in `client/public/assets/` and are referenced as root-relative paths (e.g. `/assets/abc123.svg`). Asset filenames are content-hashed (Figma export format). Do not rename them.

---

## Coding Conventions

See `CLAUDE.md` for the full coding guide. Key rules:

- Components in `client/src/components/`, PascalCase filenames, default exports
- All CSS in `client/src/index.css` — no inline styles, no Tailwind
- Always use `var(--token)` for colors — never hardcode hex
- No path aliases — use relative imports
- `App.jsx` owns all modal/page state and passes callbacks as props
