import { useState } from 'react';
import Lede from '../components/Lede';
import Faq from '../components/Faq';
import { submitLead } from '../lib/leads';
import { COMPANY } from '../lib/site';
import {
  IconMail, IconPin, IconClock, IconCheck, IconChat, IconCalendar, IconInfo,
} from '../lib/icons';

const NEXT = [
  {
    Icon: IconClock,
    title: 'We reply within one business day',
    text: 'A person reads what you sent and answers it. No automatic acknowledgement that leads nowhere.',
  },
  {
    Icon: IconCalendar,
    title: 'A short call, if it helps',
    text: 'Half an hour, screen shared, walking through how your calls arrive today. Only if you want one.',
  },
  {
    Icon: IconChat,
    title: 'A straight answer either way',
    text: 'If we are not the right fit for how you work, we will tell you that and say why. It saves everyone time.',
  },
];

const FAQS = [
  {
    q: 'I am an agent, not an agency owner. Can I still get in touch?',
    a: 'Yes. Agents join through an agency already on the platform, so tell us which states you are licensed in and what you sell, and we will point you toward one that is taking on agents.',
  },
  {
    q: 'Will I end up on a mailing list?',
    a: 'No. We use your details to answer your message and nothing else. No newsletter, no sequence, and nothing shared with anyone.',
  },
  {
    q: 'Can we see it working before we commit to anything?',
    a: 'That is what the call is for. We walk through the actual product rather than slides, and you can build your whole setup before paying us anything.',
  },
];

function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', enquiry: '', message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | done
  const [error, setError] = useState('');

  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    const result = await submitLead(form);
    if (result.ok) {
      setStatus('done');
    } else {
      setStatus('idle');
      setError(result.message);
    }
  };

  return (
    <>
      <section className="pagehero">
        <div className="shell">
          <p className="eyebrow eyebrow--center">Contact us</p>
          <h1 className="pagehero__title">
            Tell us how your calls work today, <em>and we will be straight with you.</em>
          </h1>
          <p className="pagehero__text">
            Whether you run an agency, work as an agent, or just want to know whether any
            of this applies to you — send it over and a person will reply.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell contact">
          <div className="reveal">
            <h2 className="lede__title" style={{ fontSize: 'var(--t-h3)' }}>
              What happens after you send it
            </h2>

            <div className="checks mt-lg">
              {NEXT.map((n) => (
                <p key={n.title} className="checks__item">
                  <span className="checks__mark"><IconCheck size={13} /></span>
                  <span><strong>{n.title}</strong> — {n.text}</span>
                </p>
              ))}
            </div>

            <div className="contact__ways">
              <div className="contact__way">
                <span className="contact__way-ic"><IconMail size={18} /></span>
                <span>
                  <span className="contact__way-k">Email</span>
                  <a className="contact__way-v" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </span>
              </div>
              <div className="contact__way">
                <span className="contact__way-ic"><IconPin size={18} /></span>
                <span>
                  <span className="contact__way-k">Where we are</span>
                  <span className="contact__way-v">{COMPANY.address}</span>
                </span>
              </div>
              <div className="contact__way">
                <span className="contact__way-ic"><IconClock size={18} /></span>
                <span>
                  <span className="contact__way-k">Hours</span>
                  <span className="contact__way-v">Monday to Friday, US business hours</span>
                </span>
              </div>
            </div>
          </div>

          <div className="contact__panel reveal d1">
            {status === 'done' ? (
              <div className="success">
                <span className="success__ic"><IconCheck size={26} /></span>
                <h2 className="modal__title" style={{ paddingRight: 0 }}>Message sent.</h2>
                <p className="modal__text" style={{ marginBottom: 0 }}>
                  Thank you — we have it, and someone will reply within one business day.
                  If it is urgent, email us directly at {COMPANY.email} and we will move it up.
                </p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={onSubmit} noValidate>
                <div className="form-row">
                  <div className="field">
                    <label className="field__label" htmlFor="c-name">Your name</label>
                    <input className="input" id="c-name" name="name" type="text"
                      autoComplete="name" value={form.name} onChange={set} />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="c-email">
                      Email <span className="field__req">*</span>
                    </label>
                    <input className="input" id="c-email" name="email" type="email" required
                      autoComplete="email" value={form.email} onChange={set} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label className="field__label" htmlFor="c-company">Agency name</label>
                    <input className="input" id="c-company" name="company" type="text"
                      autoComplete="organization" value={form.company} onChange={set} />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="c-enquiry">What is this about?</label>
                    <select className="select" id="c-enquiry" name="enquiry"
                      value={form.enquiry} onChange={set}>
                      <option value="">Choose one</option>
                      <option>Setting up an agency</option>
                      <option>Getting access as an agent</option>
                      <option>Booking a demo</option>
                      <option>A question about pricing</option>
                      <option>Security or a supplier review</option>
                      <option>Something else</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label className="field__label" htmlFor="c-message">Your message</label>
                  <textarea className="textarea" id="c-message" name="message" rows={5}
                    placeholder="How many agents you have, what you sell, and where your callers come from — whatever is useful."
                    value={form.message} onChange={set} />
                </div>

                {error && <p className="form-alert form-alert--error">{error}</p>}

                <button className="btn btn--primary btn--block btn--lg" type="submit"
                  disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                <p className="form-note">
                  <IconInfo size={13} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 5 }} />
                  We use your details to reply to this message and nothing else. No mailing
                  list, no sequence, no sharing with anyone.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="shell shell--narrow">
          <Lede eyebrow="Before you write" title="Answered here, possibly" />
          <div className="mt-xl reveal"><Faq items={FAQS} defaultOpen={-1} /></div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
