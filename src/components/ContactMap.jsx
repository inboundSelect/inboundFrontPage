import SectionHeader from './SectionHeader';
import { useReveal } from '../lib/useReveal';

const expectations = [
  { time: '24 hours', label: 'Beta applications', desc: 'Applied for a beta spot? You’ll hear back from us within 24 hours.' },
  { time: '1 business day', label: 'General inquiries', desc: 'Questions about pricing, setup, or fit are answered within one business day.' },
  { time: 'Same day', label: 'Demo requests', desc: 'Ask for a demo and we’ll send a scheduling link the same day.' },
];

function ContactMap() {
  const ref = useReveal();
  return (
    <section className="section section--alt" ref={ref}>
      <div className="container">
        <SectionHeader align="center" label="Response times" heading="What to expect after you reach out." />
        <div className="trust-grid">
          {expectations.map((e) => (
            <div className="trust-card resp-card" data-reveal key={e.label}>
              <span className="resp-card__time">{e.time}</span>
              <h3 className="trust-card__title resp-card__label">{e.label}</h3>
              <p className="trust-card__body">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactMap;
