# InboundSelect marketing site — conventions

Public marketing site for **InboundSelect**, the platform insurance agencies run their
inbound calls on. React 19 + Vite (JSX, no TypeScript), Express for the lead endpoint.

---

## Voice — this matters more than the code

The audience is agency owners and licensed insurance agents. They are not technical.
**Write the way you would explain it to them out loud.**

Banned from anything a visitor reads:

| Don't write | Write instead |
|---|---|
| routing, route a call, SelectRoute™ | the call reaches / goes to the right agent |
| infrastructure, the pipes, platform layer | the system your agency runs on |
| wallet | account balance |
| queue, in the queue | in line, next in line, your call flow |
| IMO | agency |
| CRM, metadata, eligibility criteria | (say the actual thing in plain words) |
| tenant, subprocessor, telephony | agency, the companies we use, phone service |
| seat | agent |

There is a check for this — run it before you ship copy:

```bash
grep -rniE "routing|routed|infrastructure|wallet|queue|\bIMO\b|\bCRM\b|metadata|eligibility|SelectRoute|telephony|\bseat|tenant" client/src --include="*.jsx" | grep -v "/legal/"
```

Only `ROUTES` / `ROUTE_ALIASES` (URL identifiers in code) and the legal documents may match.

---

## Two hard content rules

1. **No invented figures.** Never put a revenue number, call count, percentage lift or
   customer statistic on the site — we have not earned any of them. Illustrations may
   show the *shape* of a screen (a bar with no value, a listing with no price) and must
   say so in a caption. Real, published rates (the plan prices, the 25% marketplace
   share, the 15-second rule) are fine because they are things we actually charge.

2. **No unearned trust badges.** We are not SOC 2 / ISO 27001 / HIPAA / PCI certified.
   `/trust` says so in as many words. Never add a certification logo, and never soften
   that paragraph.

---

## Prices live in exactly one file

`client/src/lib/site.js` holds every amount, and it takes them from **`BILLING_QA.md`**
at the repo root — the billing system's own reference. **No component may contain a
dollar amount.** If a price changes, change `BILLING_QA.md` and `site.js`, nothing else.

The site once advertised a price list the product had stopped charging ($499/mo, $30 a
seat, $1 per connection). That is what this rule exists to prevent.

---

## Structure

```
client/src/
├── App.jsx              # history-API router; page → real URL, no router library
├── main.jsx             # scroll-reveal + broken-image guard
├── index.css            # the entire design system — one file, tokens at the top
├── lib/
│   ├── site.js          # company details, nav, ROUTES, and all prices
│   ├── icons.jsx        # inline SVG icon set — no icon package
│   └── leads.js         # the only place that knows the form endpoint
├── components/          # shared pieces (header, footer, modal, lede, faq, cta)
│   └── legal/           # compliance-reviewed documents — see below
└── pages/               # one file per page
```

## Styling

- **Global CSS classes only**, all in `client/src/index.css`. No Tailwind, no CSS
  modules, no styled-components.
- **The system is flat** (owner decision, Aug 2026: "no glare or shadow — it feels
  like an AI-generated website"). No drop shadows, no glows, no frosted glass, and
  **no multi-colour gradient ramps of any kind** — that includes gradient-clipped
  headline text, gradient border rings and gradient-filled chart bars, which are
  opaque and so survive a "fades to transparent" test but still read as lit.
  Definition comes from hairline borders and flat surface tints. The `--e-*`
  elevation tokens are kept as `0 0 0 0 transparent` no-ops so old compositions
  don't break — never give them real values. A `box-shadow` is allowed only with
  zero blur and zero spread, as a drawn rule (e.g. `inset 0 2px 0`). Gradients are
  allowed only as flat drawing tools with repeated identical colour stops (hairline
  rules, measure bars, hatching) or as the two content veils (the fade that hides
  dummy data in the product illustration, and the header veil below).
- **Never hardcode a colour, size or spacing value.** Everything is a token in `:root`.
  Colour steps have jobs: `--blue-500` is graphics only (it fails contrast for text),
  `--blue-600` is actions, `--blue-700` is links and emphasis text.
- Green (`--positive`) means success or included. It is never decorative.
- Inline `style` is acceptable only for a one-off geometric value (a bar width, an
  illustration offset). Anything reusable becomes a class.
- Sizing uses `clamp()`. Breakpoints: 1040, 1000, 940, 900, 620, 600, 560.

## Motion

Add `reveal` (plus `d1`–`d4` to stagger) to fade a block in on scroll. The hidden state
is scoped under `.js-reveal`, so content stays visible with JavaScript off, and
`prefers-reduced-motion` disables it. Don't add animation libraries.

---

## Things that will break if you touch them

- **Legal documents** (`components/legal/`) are compliance-reviewed. Restyle the wrapper,
  never edit the words. `legalMeta.js` holds the entity name, address and dates.
- **Legal URLs** — `/privacy-policy`, `/terms-of-service`, `/data-deletion` are linked
  directly from Google's OAuth consent screen and Meta's app review. They must resolve on
  a cold request, which is why they are listed in `vercel.json`. **Add any new page to
  that route list too**, or it 404s on refresh.
- **The `#root` fallback in `index.html`** is what a reviewer or crawler sees with
  scripts blocked. Keep it meaningful.
- **`.site-header::before` is the veil** — near-opaque white (no blur; the flat rule
  above) that hides the page showing through the strip above and beside the floating
  bar. It works because `.site-header` has no background of its own and its `z-index`
  makes a stacking context, so the veil (`z-index: -1`) can sit behind the bar but
  above the page. Give the header itself a background and you cover it. Its
  `mask-image` stops are **percentages on purpose** — the header is shorter when
  scrolled and shorter again on a phone, and the fade has to finish at the bar's bottom
  edge at every height, or content below goes washed out.
- **The brand lockup mirrors the dashboard app's logo section exactly** (owner
  decision, Aug 2026 — this replaced the older rule that the lockup stay a single
  image). `components/Brand.jsx` reproduces what the dashboard sidebar and auth pages
  render: `public/assets/brand-mark.svg` (a byte-for-byte copy of the dashboard's
  `inbound_logo.svg` — renamed because this folder already holds a *different*
  `Inbound_Logo.svg` and the filesystem is case-insensitive) whose tallest chart bar
  doubles as the "I", then the text "nbound" (Signal Blue, Sora 600) + "Select"
  (ink, Sora 700) with the slogan beneath, merged onto the bar with a -3px pull.
  If the dashboard's logo changes, change `Brand.jsx` to match, never the other way
  round. Everything scales from `--brand-size` (the mark's height). The old
  `inboundselect-lockup.svg` is kept only for anything that hotlinks it; the icon-only
  `inboundselect-mark.png` is still the favicon and touch icon.

## Backend

The only endpoint is `POST /api/waitlist` (`server.js`, nodemailer over SMTP). Every form
goes through `lib/leads.js`. Don't add routes without updating `server.js`.

## Linking to the product

This site is marketing only — signing up and signing in happen in the **dashboard app**
(`frontend/` in the parent repo), deployed separately at `app.inboundselect.com`. Those
links live in `APP_LINKS` in `lib/site.js`; override the origin with `VITE_APP_URL`.

`/register` opens on a plan picker that decides for itself whether someone is registering
as an agent or an agency, so **do not append a role or plan parameter** — it reads none.
The only query it honours is `?ref=` for agency invite links, which this site never issues.
Someone who already has an account gets to the login screen from the link on that page, so
one Sign Up link serves both audiences.

The header's Sign Up appears twice — a button on wide screens (`.site-header__signup`) and
an item inside the collapsed menu (`.site-nav__signup`) — with exactly one shown at a time.
If you add a header action, check both, or it goes missing on mobile.
