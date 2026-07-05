import CtaBand from './CtaBand';
import { useReveal } from '../lib/useReveal';

const integrations = [
  {
    name: 'Twilio',
    tag: 'Telephony',
    body: 'Programmable voice powers inbound routing, call bridging, status and recording callbacks, and phone verification. Bring your own Twilio account via Twilio Connect, or let us provision and manage a subaccount — carrier costs are billed to you directly by Twilio.',
  },
  {
    name: 'Stripe & Stripe Connect',
    tag: 'Payments',
    body: 'Billing runs on Stripe. Agencies collect their agents’ wallet top-ups and monthly subscriptions through their own Stripe Connect account and are responsible for any refunds to their agents, while the platform handles agency plan billing, the marketplace fee, and the billing portal. Card data never touches our servers.',
  },
  {
    name: 'Google Ads',
    tag: 'Attribution · read-only',
    body: 'Agencies connect their own Google Ads account so campaign spend can be shown next to real call outcomes. We request the adwords scope read-only, call the API only from our backend, and never modify campaigns, budgets, keywords, or bids.',
  },
  {
    name: 'Google Calendar',
    tag: 'Scheduling · optional',
    body: 'Agents can connect Google Calendar to keep scheduled appointments in sync. We use the calendar and calendar.events scopes only to create, update, and read the events for appointments you book — and you can disconnect at any time.',
  },
  {
    name: 'AWS S3',
    tag: 'Storage',
    body: 'Uploaded assets such as agency logos and protected media such as call recordings are stored in AWS S3 and served through short-lived, access-controlled links.',
  },
  {
    name: 'AWS SES',
    tag: 'Email',
    body: 'Transactional email — invites, invoices, receipts, one-time passcodes, launchpad and support messages — is delivered through Amazon SES with bounce and complaint suppression, and an unsubscribe path for non-essential messages.',
  },
];

function IntegrationsPage({ onOpenWaitlist, onNavigate }) {
  const ref = useReveal();

  return (
    <main id="main">
      <section className="page-hero">
        <div className="aurora" aria-hidden="true" />
        <div className="dot-grid" aria-hidden="true" />
        <div className="container page-hero__inner">
          <p className="eyebrow animate-down">Integrations</p>
          <h1 className="page-hero__title animate-down delay-1">
            The tools we connect to —{' '}
            <span className="hero__heading-gradient">and exactly what each does</span>.
          </h1>
          <p className="page-hero__sub animate-down delay-2">
            Inbound Select is the layer that ties your telephony, payments, marketing data, and calendar
            together. Every connection is scoped to a clear purpose.
          </p>
        </div>
      </section>

      <section className="section" ref={ref}>
        <div className="container">
          <div className="trust-grid">
            {integrations.map((i) => (
              <div className="trust-card spotlight" data-reveal key={i.name}
                onPointerMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
                }}>
                <div className="trust-card__head">
                  <h3 className="trust-card__title">{i.name}</h3>
                  <span className="chip chip--tag">{i.tag}</span>
                </div>
                <p className="trust-card__body">{i.body}</p>
              </div>
            ))}
          </div>
          <p className="integrations-foot" data-reveal>
            How each integration handles your data is described in our{' '}
            <a href="/privacy.html">Privacy Policy</a>, <a href="/terms.html">Terms of Service</a>, and on our{' '}
            <button className="link-btn" onClick={() => onNavigate('/security')}>Security &amp; Compliance</button> page.
          </p>
        </div>
      </section>

      <CtaBand
        title="One platform to tie it all together."
        titleAccent="Apply for beta access."
        onPrimary={onOpenWaitlist}
        secondaryLabel="Book a Demo"
        onSecondary={() => onNavigate('/contact')}
      />
    </main>
  );
}

export default IntegrationsPage;
