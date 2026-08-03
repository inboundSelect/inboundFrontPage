# InboundSelect — marketing site

The public website for **InboundSelect**, the platform US insurance agencies run their
inbound calls on. React 19 + Vite, with a small Express server for the contact endpoint.

For coding and copy conventions — including the plain-language rules and the
"prices live in one file" rule — read **[CLAUDE.md](CLAUDE.md)** first.

---

## Running it

```bash
npm install                 # server dependencies
cd client && npm install    # site dependencies

# development — Vite on :5173, proxying /api to :3000
cd client && npm run dev
npm run dev                 # (separate terminal) Express on :3000, for the form

# production
cd client && npm run build  # → client/dist
npm start                   # Express serves client/dist and /api/waitlist
```

Copy `.env.example` to `.env` and fill in the SMTP details to make the forms deliver.
Without them the site still runs; submissions just fail with a message.

---

## Tech

| Layer | What |
|---|---|
| Framework | React 19 + Vite 7, JSX (no TypeScript) |
| Styling | One global stylesheet, `client/src/index.css`, tokens in `:root` |
| Icons | Inline SVG in `client/src/lib/icons.jsx` — no icon package |
| Routing | History API in `App.jsx` — no router library |
| Fonts | Sora (headings) + Plus Jakarta Sans (body), via Google Fonts |
| Backend | Express 4 + Nodemailer, single `POST /api/waitlist` |
| Deploy | Vercel (`vercel.json`) |

### Environment

Only one variable, and it is optional — see `client/.env.example`:

| Variable | Default | What it does |
|---|---|---|
| `VITE_APP_URL` | `https://app.inboundselect.com` | Where the **Sign Up** link in the header points. Set it to aim the site at a local or staging dashboard. |

No Tailwind, no CSS modules, no styled-components, no animation library.

---

## Pages

Every page has a real URL, so any of them can be linked or shared.

| URL | Page | What it is for |
|---|---|---|
| `/` | Home | The problem, how it works, the two ways an agency earns, who it is for |
| `/for-agencies` | For Agencies | What an owner controls, setup, advertising results, reporting |
| `/for-agents` | For Agents | What a day looks like, what they get, how to start |
| `/marketplace` | Lead Marketplace | How listing and buying works, plus a locked preview |
| `/pricing` | Pricing | The three plans, add-ons, and where the money goes |
| `/trust` | Trust & Safety | How data is protected — and what we are *not* certified for |
| `/contact` | Contact | A form that actually submits |
| `/privacy-policy` `/terms-of-service` `/data-deletion` | Legal | Compliance documents |

`/security`, `/privacy`, `/terms` and `/data-deletion-instructions` are kept as aliases
because they have been linked externally.

> **Adding a page?** Add it to `ROUTES` in `client/src/lib/site.js` **and** to the route
> list in `vercel.json`, otherwise it 404s when someone refreshes on it.

---

## Structure

```
inboundselectfront/
├── server.js              # Express — serves client/dist and /api/waitlist
├── vercel.json            # deploy config; the page URL list lives here
├── CLAUDE.md              # conventions — read this before editing
└── client/
    ├── index.html         # meta tags + the no-JavaScript fallback
    ├── public/assets/     # the brand mark
    └── src/
        ├── App.jsx        # router + page shell
        ├── main.jsx       # scroll reveal, broken-image guard
        ├── index.css      # the whole design system
        ├── lib/           # site.js (prices, nav), icons.jsx, leads.js
        ├── components/    # header, footer, modal, lede, faq, cta, callstage
        │   └── legal/     # compliance-reviewed — restyle, never reword
        └── pages/         # one file per page
```

---

## Two things not to break

**Prices.** Every amount comes from `client/src/lib/site.js`, which mirrors
`BILLING_QA.md` at the repo root. No component may contain a dollar figure. The site
previously advertised prices the product had stopped charging; this is the fix.

**Legal URLs.** Google's OAuth consent screen and Meta's app review link straight at the
legal pages, so those paths must resolve on a cold request — that is what the route list
in `vercel.json` is for. The `#root` fallback in `index.html` is what those reviewers see
if scripts are blocked; keep it meaningful.
