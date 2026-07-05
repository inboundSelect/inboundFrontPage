import SectionHeader from './SectionHeader';
import CtaBand from './CtaBand';
import { useReveal } from '../lib/useReveal';

const pillars = [
  {
    title: 'Data protection',
    body: 'Data is encrypted in transit. Access is controlled and scoped, credentials are hashed, and OAuth tokens are stored securely. Each agency operates in its own tenant boundary — one organization can never see another’s calls, agents, or financial data.',
  },
  {
    title: 'Google Calendar',
    body: 'Connecting Google Calendar is optional. When enabled, we use the calendar / calendar.events scopes only to create, update, and read the appointment events you schedule in Inbound Select. You can disconnect at any time, which deletes the stored tokens.',
  },
  {
    title: 'Google Ads — read-only',
    body: 'Agencies may connect their own Google Ads account so campaign spend can be shown beside call results. We request the adwords scope read-only, call the API only from our backend, encrypt the refresh token per tenant, and never modify your campaigns, budgets, or bids.',
  },
  {
    title: 'Call recording (Twilio)',
    body: 'Calls may be recorded and stored securely (AWS S3) for quality and reporting. Agencies and agents are responsible for providing any legally required notice and obtaining consent from callers under the laws that apply to them.',
  },
  {
    title: 'Payments (Stripe)',
    body: 'Card and bank details are handled by Stripe and are never stored on our servers. Agencies collect their agents’ wallet top-ups and subscriptions through their own Stripe Connect account, so any refunds to agents are issued and handled by their agency — not by Inbound Select.',
  },
  {
    title: 'Email & communications (AWS SES)',
    body: 'We send transactional email — invites, invoices, receipts, one-time passcodes, and support replies — to people who hold an account or requested access. You can unsubscribe from non-essential messages; security and billing notices are required to run the Service. We honor unsubscribes and suppress bounced addresses.',
  },
];

const limitedUse = 'Inbound Select’s use and transfer of information received from Google APIs to any other app will adhere to the Google API Services User Data Policy, including the Limited Use requirements.';

function SecurityPage({ onOpenWaitlist, onNavigate }) {
  const ref = useReveal();

  return (
    <main id="main">
      <section className="page-hero">
        <div className="aurora" aria-hidden="true" />
        <div className="dot-grid" aria-hidden="true" />
        <div className="container page-hero__inner">
          <p className="eyebrow animate-down">Security &amp; compliance</p>
          <h1 className="page-hero__title animate-down delay-1">
            How we handle your data,<br />your calls, and your{' '}
            <span className="hero__heading-gradient">integrations</span>.
          </h1>
          <p className="page-hero__sub animate-down delay-2">
            Inbound Select connects several trusted services on your behalf. Here is what each one does,
            what we access, and the commitments we make — in plain language.
          </p>
        </div>
      </section>

      <section className="section" ref={ref}>
        <div className="container">
          <div className="trust-grid">
            {pillars.map((p) => (
              <div className="trust-card spotlight" data-reveal key={p.title}
                onPointerMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
                }}>
                <h3 className="trust-card__title">{p.title}</h3>
                <p className="trust-card__body">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="limited-use-note" data-reveal>
            <strong>Limited Use.</strong> {limitedUse}{' '}
            We do not use Google user data for advertising, do not sell it, do not transfer it except to
            provide the Service, and do not use it to train generalized or third-party AI/ML models.
          </div>

          <div className="honesty-note" data-reveal>
            <p className="eyebrow">Being straight with you</p>
            <h3 className="hiw-detail__title">What we don’t claim</h3>
            <p className="hiw-detail__lead">
              Inbound Select is not currently SOC 2, ISO 27001, HIPAA, or PCI certified, and we don’t display
              badges we haven’t earned. Card data is handled by Stripe (a PCI-certified processor), and we
              apply the security practices described above. If your organization has specific compliance
              requirements, <button className="link-btn" onClick={() => onNavigate('/contact')}>talk to us</button>.
            </p>
            <p className="hiw-detail__lead">
              Full details are in our <a href="/privacy.html">Privacy Policy</a> and <a href="/terms.html">Terms of Service</a>.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Questions about data or compliance?"
        titleAccent="We’ll answer them."
        sub="Reach out before you commit to anything — we’re happy to walk through exactly how your data is handled."
        primaryLabel="Contact Us"
        onPrimary={() => onNavigate('/contact')}
        secondaryLabel="Apply for Beta"
        onSecondary={onOpenWaitlist}
      />
    </main>
  );
}

export default SecurityPage;
