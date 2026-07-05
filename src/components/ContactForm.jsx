import { useState } from 'react';
import { submitLead } from '../lib/leads';

// NOTE: replace [Business Mailing Address] with the real postal address before launch.
const CONTACT_EMAIL = 'tech@inboundselect.com';

function ContactForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', enquiry: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [msg, setMsg] = useState('');

  const change = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email) { setStatus('error'); setMsg('Please enter your email address.'); return; }
    setStatus('loading'); setMsg('');
    try {
      const name = `${form.firstName} ${form.lastName}`.trim();
      const message = form.enquiry ? `Enquiry type: ${form.enquiry}` : '';
      const res = await submitLead({ name, email: form.email, company: form.company, message, sourcePage: 'contact_page' });
      if (res.ok && res.success) {
        setStatus('success');
        setMsg(res.message || "Thanks for reaching out. We'll follow up within one business day.");
      } else {
        setStatus('error');
        setMsg(res.message || 'Unable to submit right now. Please try again in a moment.');
      }
    } catch {
      setStatus('error');
      setMsg('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section className="cform" id="contact">
      <div className="cform__left">
        <div className="cform__info">
          <div className="section__label-tag">REACH OUT</div>
          <h2 className="cform__heading">We'll get back to you fast.</h2>
          <p className="cform__desc">
            Got a question about pricing, routing setup, or whether Inbound Select fits your
            operation? Send us a note and we'll follow up within one business day.
          </p>
        </div>

        <div className="cform__meta">
          <div className="cform__meta-item">
            <span className="cform__meta-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            </span>
            <a className="cform__meta-text" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
          <div className="cform__meta-item">
            <span className="cform__meta-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </span>
            <span className="cform__meta-text">Support is handled by email during beta.</span>
          </div>
          <div className="cform__meta-item">
            <span className="cform__meta-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <span className="cform__meta-text">Serving insurance agents and agencies across the US.</span>
          </div>
        </div>
      </div>

      <form className="cform__card" onSubmit={handleSubmit} noValidate>
        {status === 'success' ? (
          <div className="cform__success">
            <div className="cform__success-icon">
              <svg width="40" height="40" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="21" stroke="var(--color-success)" strokeWidth="2"/>
                <path d="M13 22l6 6 12-12" stroke="var(--color-success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="cform__success-title">Message sent</h3>
            <p className="cform__success-sub">{msg}</p>
          </div>
        ) : (
          <>
            <div className="cform__fields">
              <div className="cform__row">
                <div className="cform__field">
                  <label className="cform__label" htmlFor="cf-first">First Name</label>
                  <input id="cf-first" name="firstName" className="cform__input" type="text" placeholder="Your first name" value={form.firstName} onChange={change} autoComplete="given-name" />
                </div>
                <div className="cform__field">
                  <label className="cform__label" htmlFor="cf-last">Last Name</label>
                  <input id="cf-last" name="lastName" className="cform__input" type="text" placeholder="Your last name" value={form.lastName} onChange={change} autoComplete="family-name" />
                </div>
              </div>
              <div className="cform__field">
                <label className="cform__label" htmlFor="cf-email">Email <span className="modal-box__required">*</span></label>
                <input id="cf-email" name="email" className="cform__input" type="email" placeholder="your@email.com" value={form.email} onChange={change} required autoComplete="email" />
              </div>
              <div className="cform__field">
                <label className="cform__label" htmlFor="cf-company">Company</label>
                <input id="cf-company" name="company" className="cform__input" type="text" placeholder="Your company name" value={form.company} onChange={change} autoComplete="organization" />
              </div>
              <div className="cform__field">
                <label className="cform__label" htmlFor="cf-enquiry">Enquiry Type</label>
                <select id="cf-enquiry" name="enquiry" className="cform__select" value={form.enquiry} onChange={change}>
                  <option value="" disabled>Select enquiry type</option>
                  <option>Agency Setup Inquiry</option>
                  <option>Agent Access Inquiry</option>
                  <option>Beta Application</option>
                  <option>General Question</option>
                  <option>Technical Support</option>
                </select>
              </div>
            </div>

            {status === 'error' && <p className="form-message form-message--error">{msg}</p>}

            <button className="btn btn--fill btn--sm cform__submit" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
          </>
        )}
      </form>
    </section>
  );
}

export default ContactForm;
