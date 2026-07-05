import SectionHeader from './SectionHeader';
import CtaBand from './CtaBand';
import { useReveal } from '../lib/useReveal';

const stages = [
  { n: '01', name: 'Ring', desc: 'A prospect calls one of your tracked numbers — from a Google Ads campaign, a lead vendor, or a referral. The call carries its UTM attribution, and a call session is created the instant it connects.' },
  { n: '02', name: 'Match', desc: 'The routing engine filters your agents in real time: available status, approved and routing-enabled, licensed in the caller’s state, aligned to the product, subscription in good standing, and wallet funded above the plan price plus a $10 buffer.' },
  { n: '03', name: 'Alert', desc: 'Every eligible agent gets a live in-app alert with the call details and the acceptance-plan options — pushed over a real-time socket, not a callback list.' },
  { n: '04', name: 'Accept & bridge', desc: 'An agent accepts and picks an acceptance plan. Twilio dials and bridges the caller to the agent’s phone in seconds. No charge is taken yet — only a balance check.' },
  { n: '05', name: 'Complete & bill', desc: 'When the call ends, talk time and the recording are resolved. If talk time meets or exceeds the plan duration, the agent’s wallet is debited the fixed plan price — otherwise the charge is $0. The agency’s connection fee is recorded separately.' },
  { n: '06', name: 'Attribute & report', desc: 'The call, its outcome, and any revenue flow into reporting, the leaderboard, and — joined on the UTM campaign — the Marketing Hub’s cost-per-call and ROAS. Missed or unworked calls can be listed to the marketplace.' },
];

const eligibility = [
  'Availability set to “available”',
  'Approved and routing-enabled by the agency',
  'Licensed in the caller’s state',
  'Aligned to the call’s product',
  'Subscription in good standing',
  'Wallet ≥ plan price + $10 buffer',
];

function HowItWorksPage({ onOpenWaitlist, onNavigate }) {
  const flowRef = useReveal();
  const detailRef = useReveal();

  return (
    <main id="main">
      <section className="page-hero">
        <div className="aurora" aria-hidden="true" />
        <div className="dot-grid" aria-hidden="true" />
        <div className="container page-hero__inner">
          <p className="eyebrow animate-down">How it works</p>
          <h1 className="page-hero__title animate-down delay-1">
            From a tracked number to a{' '}
            <span className="hero__heading-gradient">booked appointment</span>.
          </h1>
          <p className="page-hero__sub animate-down delay-2">
            Inbound Select closes the gap between the click and the conversation. Here is exactly what
            happens to every inbound call — from the first ring to the revenue report.
          </p>
        </div>
      </section>

      <section className="section" ref={flowRef}>
        <div className="container">
          <SectionHeader align="center" label="The call lifecycle" heading="Six connected stages. Fully automatic." />
          <ol className="hiw-flow">
            {stages.map((s) => (
              <li className="hiw-stage" key={s.n} data-reveal>
                <span className="hiw-stage__num">{s.n}</span>
                <div className="hiw-stage__body">
                  <h3 className="hiw-stage__name">{s.name}</h3>
                  <p className="hiw-stage__desc">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--alt" ref={detailRef}>
        <div className="container hiw-detail">
          <div className="hiw-detail__card" data-reveal>
            <p className="eyebrow">Eligibility</p>
            <h3 className="hiw-detail__title">Who a call can route to</h3>
            <p className="hiw-detail__lead">Every inbound call is checked against a strict, real-time checklist so only ready agents ever get the alert.</p>
            <ul className="hiw-checklist">
              {eligibility.map((e) => (
                <li key={e}>
                  <span className="hiw-checklist__tick">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="hiw-detail__col">
            <div className="hiw-detail__card" data-reveal>
              <p className="eyebrow">Billing</p>
              <h3 className="hiw-detail__title">Pay only when you actually talk</h3>
              <p className="hiw-detail__lead">
                Agents fund a simple wallet. On completion, the wallet is debited a fixed plan price only if
                talk time meets or exceeds the plan duration — otherwise the charge is <strong>$0</strong>.
                There is <strong>no per-minute</strong> platform surcharge to the agent.
              </p>
              <div className="hiw-meter">
                <div className="stat-tile"><span className="stat-tile__value mono">$0.62</span><span className="stat-tile__label">Cost / connected call</span></div>
                <div className="stat-tile"><span className="stat-tile__value mono">$10</span><span className="stat-tile__label">Wallet buffer</span></div>
              </div>
            </div>
            <div className="hiw-detail__card" data-reveal>
              <p className="eyebrow">Attribution</p>
              <h3 className="hiw-detail__title">Every call ties back to its campaign</h3>
              <p className="hiw-detail__lead">
                Because each call carries its UTM attribution, the Marketing Hub can join your Google Ads
                spend to real call outcomes — giving you true cost-per-call and ROAS instead of guesses.
              </p>
              <button className="btn btn--stroke btn--sm" onClick={() => onNavigate('/integrations')}>See integrations</button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="See it running on your numbers."
        titleAccent="Apply for beta access."
        sub="We're onboarding a small number of agencies before public launch. Waived platform fees and a short demo to confirm the fit."
        onPrimary={onOpenWaitlist}
        secondaryLabel="Book a Demo"
        onSecondary={() => onNavigate('/contact')}
      />
    </main>
  );
}

export default HowItWorksPage;
