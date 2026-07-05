import SectionHeader from './SectionHeader';
import { useReveal } from '../lib/useReveal';

const accessItems = [
  {
    title: 'Check availability',
    desc: 'We read your calendar so the platform can offer open times and avoid double-booking when an appointment is set.',
  },
  {
    title: 'Create appointments',
    desc: 'When your team books a lead, we add the event — with the contact and notes — to your Google Calendar, including reminders.',
  },
  {
    title: 'Keep appointments in sync',
    desc: 'If an appointment is rescheduled or cancelled in Inbound Select, we update or remove the matching calendar event.',
  },
];

const promises = [
  'We never sell your Google data and never use it for advertising.',
  'We do not use your Google data to train AI or machine-learning models.',
  'Access tokens are stored securely and used only for the calendar features above.',
  'You can revoke access anytime in Inbound Select settings or your Google Account.',
];

function GoogleGlyph() {
  return (
    <svg width="24" height="24" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.9z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C39 35.2 44 30 44 24c0-1.3-.1-2.7-.4-3.9z"/>
    </svg>
  );
}

// Premium, on-brand "appointment synced to Google Calendar" visual.
function CalendarSyncVisual() {
  return (
    <div className="gcal-card" aria-hidden="true">
      <div className="gcal-card__head">
        <span className="gcal-card__logo"><GoogleGlyph /></span>
        <div className="gcal-card__head-text">
          <span className="gcal-card__title">Google Calendar</span>
          <span className="gcal-card__status"><span className="gcal-card__dot" />Connected</span>
        </div>
      </div>
      <div className="gcal-card__event">
        <span className="gcal-card__event-rail" />
        <div className="gcal-card__event-body">
          <span className="gcal-card__event-title">Consultation — J. Martinez</span>
          <span className="gcal-card__event-meta">Tomorrow · 2:00 PM · FL · Final Expense</span>
          <span className="chip chip--live">Booked from an inbound call</span>
        </div>
      </div>
      <div className="gcal-card__foot">
        <span className="ripple" />
        <span>Synced from Inbound Select · with reminders</span>
      </div>
    </div>
  );
}

function GoogleIntegration() {
  const ref = useReveal();

  return (
    <section className="gint section section--alt" id="google-integration" ref={ref}>
      <div className="container">
        <SectionHeader
          align="center"
          label="Google integration"
          heading="Why Inbound Select connects to your Google Calendar"
          sub="Signing in with Google lets your team link Inbound Select to the calendar where lead appointments live — for one clear reason: to schedule and manage the consultations your inbound leads generate. It’s optional, the rest of the platform works without it, and you can disconnect anytime."
        />

        <div className="gint__grid">
          <div className="gint__visual" data-reveal>
            <CalendarSyncVisual />
          </div>

          <div className="gint__access-col" data-reveal>
            <h3 className="gint__col-title">What we access — and why</h3>
            <ul className="gint__access">
              {accessItems.map((item) => (
                <li key={item.title} className="gint__access-item">
                  <span className="gint__tick" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <div>
                    <h4 className="gint__access-title">{item.title}</h4>
                    <p className="gint__access-desc">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="gint__scopes-label">The specific Google scopes we request</p>
            <div className="gint__scopes">
              <code className="gint__scope">https://www.googleapis.com/auth/calendar</code>
              <code className="gint__scope">https://www.googleapis.com/auth/calendar.events</code>
            </div>
          </div>
        </div>

        <div className="gint__commit" data-reveal>
          <p className="gint__limited">
            <strong>Limited Use.</strong> Inbound Select’s use and transfer of information received from
            Google APIs to any other app will adhere to the{' '}
            <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">
              Google API Services User Data Policy
            </a>, including the Limited Use requirements.
          </p>

          <div className="gint__promise">
            {promises.map((text) => (
              <div key={text} className="gint__promise-item">
                <span className="gint__tick" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <p className="gint__foot">
            For full details, see our <a href="/privacy.html">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GoogleIntegration;
