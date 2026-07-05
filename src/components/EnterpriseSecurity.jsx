import SectionHeader from './SectionHeader';
import { useReveal } from '../lib/useReveal';

const points = [
  { label: 'You keep your lead sources', desc: "Google Ads, referrals, lead vendors — keep running whatever's working. Inbound Select connects to your tracked numbers and routes what comes in." },
  { label: 'We handle the routing', desc: 'The gap between a lead and a live conversation is where most agencies lose money. We close it with real-time routing, agent eligibility checks, and automatic call bridging.' },
  { label: 'Your agents close', desc: "Less time dialing callbacks, more time on calls with people who already raised their hand. That's the shift from chasing to closing." },
];

const stack = ['Twilio', 'Stripe', 'Google Ads', 'Google Calendar', 'AWS'];

function EnterpriseSecurity({ onNavigate }) {
  const ref = useReveal();

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <SectionHeader
          align="center"
          label="Let's be clear"
          heading="We don't generate leads. We don't run your marketing. We give you the infrastructure."
          sub="You own the leads, the agents, and the relationships. We built the layer that turns an inbound call into a routed, billed, reported, and monetizable event."
        />

        <div className="trust-grid">
          {points.map((p) => (
            <div className="trust-card" data-reveal key={p.label}>
              <h3 className="trust-card__title">{p.label}</h3>
              <p className="trust-card__body">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="infra-strip" data-reveal>
          <span className="infra-strip__label">Built on infrastructure you already trust</span>
          <div className="infra-strip__chips">
            {stack.map((s) => <span className="chip" key={s}>{s}</span>)}
          </div>
          {onNavigate && (
            <button className="btn btn--stroke btn--sm" onClick={() => onNavigate('/security')}>
              How we handle your data
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default EnterpriseSecurity;
