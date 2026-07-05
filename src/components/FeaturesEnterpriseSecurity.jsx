import SectionHeader from './SectionHeader';
import { useReveal } from '../lib/useReveal';

const points = [
  { label: 'Your routing rules, your call controls', desc: 'You define which agents receive which calls — by state, product, availability, and billing status. The platform enforces your rules automatically.' },
  { label: 'Your pricing, your margins', desc: 'Set subscription tiers, wallet requirements, and per-call pricing. Agents pay what you decide, and the platform handles collection, invoicing, and billing.' },
  { label: 'Your marketplace, your inventory', desc: "Missed and unworked calls belong to your agency. List them, price them, and sell them to agents on your terms — you control what's available and at what cost." },
];

function FeaturesEnterpriseSecurity({ onOpenWaitlist, onNavigate }) {
  const ref = useReveal();
  return (
    <section className="section" ref={ref}>
      <div className="container">
        <SectionHeader
          align="center"
          label="Let's be clear"
          heading="You own the leads. You set the price. You run the team."
          sub="Inbound Select is the infrastructure layer. We don't generate your leads, recruit your agents, or set your pricing — you bring the operation, and we give you the routing engine, billing, marketplace, and reporting to run it without the overhead."
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
          <button className="btn btn--fill btn--lg" onClick={onOpenWaitlist}>Apply for Beta Access</button>
          {onNavigate && (
            <button className="btn btn--stroke btn--sm" onClick={() => onNavigate('/security')}>How we handle your data</button>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeaturesEnterpriseSecurity;
