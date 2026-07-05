import SectionHeader from './SectionHeader';
import { useReveal } from '../lib/useReveal';

const points = [
  { label: 'Call recordings saved automatically', detail: 'Every inbound call session is recorded and accessible from your dashboard after the call ends.' },
  { label: 'Download your reports anytime', detail: 'Export call history, talk time, marketplace purchases, and performance stats whenever you need them.' },
  { label: 'Live dashboard updates', detail: 'Your call alerts, wallet balance, and routing status refresh in real time without reloading the page.' },
  { label: 'Full transaction history', detail: 'Every wallet top-up, call charge, and marketplace purchase is logged with timestamps, so your billing is always clear.' },
];

function RoleEnterpriseSecurity() {
  const ref = useReveal();
  return (
    <section className="section section--alt" ref={ref}>
      <div className="container">
        <SectionHeader
          align="center"
          label="Platform reliability"
          heading="Everything is tracked. Everything is accessible."
          sub="Every call, transaction, and session is logged automatically — your records are always there when you need them."
        />
        <div className="trust-grid trust-grid--4">
          {points.map((p) => (
            <div className="trust-card" data-reveal key={p.label}>
              <h3 className="trust-card__title">{p.label}</h3>
              <p className="trust-card__body">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoleEnterpriseSecurity;
