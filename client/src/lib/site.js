/* Single source of truth for anything that appears in more than one place:
 * navigation, company details, and — most importantly — prices.
 *
 * PRICES: taken from BILLING_QA.md (30 July 2026), which is the billing
 * system's own reference. If a price changes there, change it here and
 * nowhere else — no component may hardcode a dollar amount.
 */

export const COMPANY = {
  name: 'InboundSelect',
  legalEntity: 'INBOUND SELECT LLC',
  tagline: 'Connect With Qualified Leads',
  email: 'support@inboundselect.com',
  phone: '(727) 248-2830',
  address: '1520 Old Mill Rd, East Lansing, MI 48823',
  founded: 2026,
};

/* Pages that have a real, shareable URL. */
export const ROUTES = {
  home: '/',
  agencies: '/for-agencies',
  agents: '/for-agents',
  marketplace: '/marketplace',
  pricing: '/pricing',
  trust: '/trust',
  contact: '/contact',
  privacy: '/privacy-policy',
  terms: '/terms-of-service',
  'data-deletion': '/data-deletion',
};

/* Extra inbound URLs that should resolve to a page (legal docs are linked
 * directly from Google's and Meta's review screens, so their older paths
 * must keep working). */
export const ROUTE_ALIASES = {
  '/privacy': 'privacy',
  '/terms': 'terms',
  '/data-deletion-instructions': 'data-deletion',
  '/security': 'trust',
};

export const NAV_LINKS = [
  { page: 'agencies', label: 'For Agencies' },
  { page: 'agents', label: 'For Agents' },
  /* "Marketplace" not "Lead Marketplace" — six links plus two buttons only fit
     across the bar at this length. The page itself still carries the full name. */
  { page: 'marketplace', label: 'Marketplace' },
  { page: 'pricing', label: 'Pricing' },
  { page: 'trust', label: 'Trust & Safety' },
  { page: 'contact', label: 'Contact' },
];

/* ── The product itself ────────────────────────────────────────────────────
 * This site is marketing only; signing up and signing in happen in the
 * dashboard app, which is deployed separately. `app.inboundselect.com` is the
 * canonical origin — it is the fallback the backend itself uses in
 * `backend/src/utils/resolveFrontendOrigin.js`, and what `FRONTEND_URL` is set
 * to in production. Override with VITE_APP_URL when pointing at a preview
 * deployment or a local dashboard.
 *
 * `/register` opens on a plan picker that decides for itself whether someone
 * is signing up as an agent or an agency, so it deliberately takes no role or
 * plan parameter. The only query it reads is `?ref=` for agency invite links,
 * which is not something this site hands out. Anyone who already has an
 * account can reach the login screen from the link on that page. */
const APP_ORIGIN = (import.meta.env.VITE_APP_URL || 'https://app.inboundselect.com')
  .replace(/\/+$/, '');

export const APP_LINKS = {
  register: `${APP_ORIGIN}/register`,
  login: `${APP_ORIGIN}/login`,
};

/* ── Pricing ───────────────────────────────────────────────────────────── */

export const PLANS = [
  {
    key: 'individual',
    name: 'Individual',
    pitch: 'One licensed agent working on their own, with no team above them.',
    monthly: '$149',
    annual: '$1,490',
    includes: [
      { strong: 'Just you.', text: 'No team members to add or manage.' },
      { strong: '50 connected calls', text: 'included every month.' },
      { strong: 'Everything in the platform', text: '— calls, reporting, recordings and the Lead Marketplace.' },
      { strong: 'Phone service handled for you', text: 'for $49 a month, if you want it.' },
    ],
    cta: 'Talk to Our Team',
  },
  {
    key: 'agency',
    name: 'Agency',
    pitch: 'For owners running a team who want full control of what agents pay.',
    monthly: '$599',
    annual: '$5,990',
    featured: true,
    badge: 'Most agencies start here',
    includes: [
      { strong: '5 agents included', text: '— $25 more per agent, per month.' },
      { strong: '250 connected calls', text: 'included every month.' },
      { strong: 'You set what your agents pay', text: 'for their subscription and for each call.' },
      { strong: 'Sell the calls your team cannot take', text: 'in the Lead Marketplace, at your price.' },
    ],
    cta: 'Book a Demo',
  },
  {
    key: 'enterprise',
    name: 'Enterprise',
    pitch: 'For larger operations that need room to grow and their own branding.',
    monthly: '$1,999',
    annual: '$19,990',
    includes: [
      { strong: '60 agents included', text: '— $20 more per agent, per month.' },
      { strong: '1,000 connected calls', text: 'included every month.' },
      { strong: 'Your own branding included', text: '— your name and your colours, on your own web address.' },
      { strong: 'A named contact on our side', text: 'for setup and anything that comes up after.' },
    ],
    cta: 'Talk to Our Team',
  },
];

/* Annual is twelve months for the price of ten, everywhere. */
export const ANNUAL_SAVING = 'Save 2 months';

/* How a Lead Marketplace sale is split. Quoted on several pages, so it is
 * defined once here. (Declared before ADD_ONS because ADD_ONS reads it.) */
export const MARKETPLACE_SPLIT = { agency: '75%', platform: '25%' };

export const ADD_ONS = [
  {
    name: 'Extra agents',
    price: '$25 each / month',
    note: 'On the Agency plan, after the 5 that are included. $20 each on Enterprise. Pay yearly and an agent costs 10 months instead of 12.',
  },
  {
    name: 'Your own branding',
    price: '$499 / month',
    note: 'Your name, your colours and your own web address, so agents only ever see your brand. Already included on Enterprise.',
  },
  {
    name: 'Phone service handled for you',
    price: '$149 / month',
    note: 'We set up and look after your phone numbers. Call minutes are passed on at exactly what they cost us, with nothing added. $49 on Individual. Prefer your own provider? Then there is no fee at all.',
  },
  {
    name: 'Calls above your monthly amount',
    price: '$0.50 each',
    note: 'Only calls that stay connected for at least 15 seconds are ever counted. Anything shorter is free.',
  },
  {
    name: 'Lead Marketplace sales',
    price: `We keep ${MARKETPLACE_SPLIT.platform}`,
    note: `When one of your listed leads sells, your agency keeps ${MARKETPLACE_SPLIT.agency} of the sale price and we keep ${MARKETPLACE_SPLIT.platform}. Nothing is charged if nothing sells.`,
  },
];

/* The one duration rule that shows up on several pages. */
export const BILLABLE_SECONDS = 15;
