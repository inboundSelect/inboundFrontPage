/* Public privacy policy page served at /privacy (same domain as the home page).
 * This is the URL to submit on the Google OAuth consent screen. Edit the
 * constants below if the legal entity or contact details change. */
const APP_NAME = 'Inbound Select';
const WEBSITE = 'https://inboundselect.com';
const CONTACT_EMAIL = 'tech@inboundselect.com';
const LAST_UPDATED = 'June 20, 2026';

function PrivacyPolicy() {
  return (
    <main className="legal">
      <div className="container legal__inner">
        <a className="legal__back" href="/">&larr; Back to {APP_NAME}</a>
        <h1 className="legal__title">Privacy Policy</h1>
        <p className="legal__updated">Last updated: {LAST_UPDATED}</p>

        <p className="legal__p">
          This Privacy Policy explains how {APP_NAME} (&ldquo;{APP_NAME}&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, stores, shares, and protects
          information when you use our call-routing and appointment platform, including our
          websites, dashboards, and related services (the &ldquo;Service&rdquo;).
        </p>

        <h2 className="legal__h2">1. Who we are</h2>
        <p className="legal__p">
          {APP_NAME} is a business-to-business platform that routes inbound phone calls (for example,
          insurance enquiries) from marketing campaigns to licensed agents on behalf of agencies, and
          gives agents tools to manage calls and appointments. The Service is used by agencies, their
          agents, and administrators. It is intended for business users and is not directed to children.
        </p>

        <h2 className="legal__h2">2. Information we collect</h2>
        <ul className="legal__ul">
          <li><strong>Account information</strong> &mdash; name, email, phone number, role, agency affiliation, hashed password, profile photo, and licensing/state-eligibility details.</li>
          <li><strong>Call and appointment data</strong> &mdash; records of routed calls (caller number, US state, timestamps, duration, outcome, notes), call recordings where applicable, and appointments you schedule (client name, date/time, notes).</li>
          <li><strong>Billing information</strong> &mdash; subscription status, wallet balances, and transaction history. Card and bank details are processed by our payment processor (Stripe) and are not stored on our servers.</li>
          <li><strong>Google account data</strong> &mdash; if you connect Google Calendar, the data described in Section 4.</li>
          <li><strong>Usage and device data</strong> &mdash; log data, IP address, browser type, and marketing attribution parameters used to route and report on calls.</li>
        </ul>

        <h2 className="legal__h2">3. How we use information</h2>
        <ul className="legal__ul">
          <li>To operate the Service: authenticate you, route calls to eligible agents, and record call outcomes.</li>
          <li>To create and manage appointments, including syncing them to your Google Calendar when you connect it.</li>
          <li>To process subscriptions, wallet top-ups, marketplace purchases, and related billing.</li>
          <li>To provide reporting and analytics to your agency about call activity and performance.</li>
          <li>To secure the Service, prevent fraud and abuse, and comply with legal obligations.</li>
        </ul>

        <h2 className="legal__h2">4. Google user data (Google Calendar)</h2>
        <p className="legal__p">
          Connecting Google Calendar is optional and is used solely to keep your scheduled appointments
          in sync. When you connect your Google account, you grant {APP_NAME} access to these scopes:
        </p>
        <ul className="legal__ul">
          <li><code>https://www.googleapis.com/auth/calendar</code></li>
          <li><code>https://www.googleapis.com/auth/calendar.events</code></li>
        </ul>
        <p className="legal__p"><strong>What we access and why.</strong> We use these scopes only to create, update, and read calendar events that correspond to appointments you schedule in {APP_NAME}, and to display your relevant appointment events inside the {APP_NAME} appointments view.</p>
        <p className="legal__p"><strong>How we store it.</strong> We store the OAuth access and refresh tokens Google issues, your connected Google account email, and identifiers of the calendar events we create. Tokens are stored securely and used only to call the Google Calendar API for the purposes above.</p>
        <p className="legal__p">
          <strong>Limited Use.</strong> {APP_NAME}&rsquo;s use and transfer of information received from
          Google APIs to any other app will adhere to the{' '}
          <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>,
          including the Limited Use requirements. We do not use Google user data for advertising, do not
          sell it, do not transfer it except as needed to provide the Service (or with your consent, for
          security, or to comply with law), and do not use it to train generalized or third-party AI/ML models.
        </p>
        <p className="legal__p">
          <strong>Revoking access.</strong> You can disconnect Google Calendar at any time from
          Settings &rarr; Google Calendar in {APP_NAME}, or from your{' '}
          <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">Google Account permissions page</a>.
          Disconnecting revokes our access and deletes the stored tokens; events already created are not removed from your calendar.
        </p>

        <h2 className="legal__h2">5. How we share information</h2>
        <p className="legal__p">We do not sell your personal information. We share it only: within your organization (agencies see their own agents&rsquo; activity); with service providers under contract that process data on our behalf, including Stripe (payments), Twilio (telephony), Google (calendar sync, only when you connect it), and our cloud hosting provider; for legal and safety reasons; or in a business transfer. Google user data is never sold and never shared for advertising.</p>

        <h2 className="legal__h2">6. Data retention</h2>
        <p className="legal__p">We retain personal information for as long as your account is active or as needed to provide the Service, comply with legal obligations, resolve disputes, and enforce our agreements. Google OAuth tokens are deleted when you disconnect Google Calendar or close your account.</p>

        <h2 className="legal__h2">7. Security</h2>
        <p className="legal__p">We use administrative, technical, and physical safeguards designed to protect your information, including encryption in transit, access controls, and secure storage of credentials and OAuth tokens. No method of transmission or storage is completely secure, but we work to protect your data.</p>

        <h2 className="legal__h2">8. Your choices and rights</h2>
        <ul className="legal__ul">
          <li>Access, update, or correct your account information from your profile settings.</li>
          <li>Disconnect Google Calendar at any time (Section 4).</li>
          <li>Request a copy or deletion of your personal data by contacting us below.</li>
        </ul>

        <h2 className="legal__h2">9. Children&rsquo;s privacy</h2>
        <p className="legal__p">The Service is intended for business users and is not directed to children under 16. We do not knowingly collect personal information from children.</p>

        <h2 className="legal__h2">10. Changes to this Policy</h2>
        <p className="legal__p">We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date above and, where appropriate, provide additional notice.</p>

        <h2 className="legal__h2">11. Contact us</h2>
        <p className="legal__p">
          {APP_NAME}<br />
          Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><br />
          Website: <a href={WEBSITE} target="_blank" rel="noopener noreferrer">{WEBSITE}</a>
        </p>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
