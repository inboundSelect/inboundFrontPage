import { APP_NAME, LEGAL_ENTITY, ADDRESS, WEBSITE, CONTACT_EMAIL } from './legalMeta';

function PrivacyPolicyDoc({ onNavigate }) {
  return (
    <>
      <p>
        This Privacy Policy describes how {LEGAL_ENTITY} (&ldquo;{APP_NAME},&rdquo; &ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, shares, and protects information in
        connection with the {APP_NAME} platform, available at{' '}
        <a href={WEBSITE}>{WEBSITE}</a> and related applications, dashboards, and services
        (collectively, the &ldquo;Platform&rdquo;).
      </p>
      <p>
        {APP_NAME} provides inbound call routing, tracking, billing, and performance analytics
        infrastructure for insurance agencies and licensed insurance agents. By accessing or using
        the Platform, you agree to the practices described in this Privacy Policy.
      </p>

      <h2>1. Who this policy covers</h2>
      <p>This policy applies to:</p>
      <ul>
        <li>Agencies and IMOs that operate a tenant account on the Platform.</li>
        <li>Agents who register under an agency, accept calls, and use Platform features.</li>
        <li>Visitors to our public website.</li>
      </ul>
      <p>
        <strong>Callers.</strong> Individuals who place inbound calls to phone numbers managed
        through the Platform are customers or prospects of the agency that owns the number, not of{' '}
        {APP_NAME}. The agency is the data controller for caller information; {APP_NAME} processes
        that information on the agency&rsquo;s behalf as a service provider. Callers with questions
        about their data should contact the agency they called.
      </p>

      <h2>2. Information we collect</h2>

      <h3>2.1 Account and profile information</h3>
      <p>
        When you register, we collect your name, email address, phone number, business name, role
        (agency or agent), referral relationships within your agency&rsquo;s organizational
        hierarchy, insurance licensing details, and the U.S. states and insurance products you are
        authorized to work.
      </p>

      <h3>2.2 Payment and billing information</h3>
      <p>
        Payments are processed by Stripe, Inc. We do not store full payment card numbers on our
        servers. We receive and store transaction records, wallet balances, wallet ledger entries,
        subscription status, invoice history, and Stripe account identifiers necessary to operate
        billing. Stripe&rsquo;s handling of your payment data is governed by the{' '}
        <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
          Stripe Privacy Policy
        </a>.
      </p>

      <h3>2.3 Telephony and call data</h3>
      <p>
        Call routing and voice services are provided through Twilio, Inc. For each call handled by
        the Platform we process: the caller&rsquo;s phone number, the dialed tracking number, call
        timestamps, call duration, routing outcomes, the agent who accepted the call, and associated
        billing events.
      </p>
      <p>
        <strong>Call recordings.</strong> Calls routed through the Platform may be recorded for
        quality assurance, dispute resolution, and compliance purposes. Recordings are initiated
        under the configuration and legal responsibility of the agency operating the tracking number.
        Agencies are responsible for providing all legally required recording disclosures and
        obtaining all legally required consents from callers under applicable federal and state law.
      </p>

      <h3>2.4 Advertising performance data (Google Ads API and Meta Marketing API)</h3>
      <p>
        If an agency chooses to connect its advertising accounts, we collect campaign-level
        performance data on a read-only basis:
      </p>
      <ul>
        <li>
          <strong>Google Ads.</strong> With your authorization via Google OAuth, we access the Google
          Ads API using the read-only <code>adwords</code> scope to retrieve campaign names,
          impressions, clicks, cost, and conversion metrics. We do not create, modify, or delete
          campaigns, ads, or budgets.
        </li>
        <li>
          <strong>Meta (Facebook and Instagram) Ads.</strong> With your authorization, we access the
          Meta Marketing API using the <code>ads_read</code> permission to retrieve ad account
          metadata and campaign-level performance metrics such as spend, impressions, and clicks. We
          do not create, modify, or delete campaigns, ads, or budgets.
        </li>
      </ul>
      <p>
        This data is cached on our servers, refreshed on a scheduled basis, and displayed only to the
        connecting agency and its authorized users, matched against the agency&rsquo;s own call
        outcomes using campaign tracking parameters (UTM values).
      </p>

      <h3>2.5 Usage and technical information</h3>
      <p>
        We collect log data, device and browser type, IP address, pages viewed, feature interactions,
        and diagnostic information used to secure and improve the Platform.
      </p>

      <h2>3. How we use information</h2>
      <p>We use the information described above to:</p>
      <ul>
        <li>Provide, operate, and maintain the Platform, including real-time call routing, agent eligibility checks, and call bridging.</li>
        <li>Process wallet transactions, subscriptions, connection fees, and marketplace purchases.</li>
        <li>Display performance analytics, including joining advertising campaign metrics with call outcomes for the connecting agency.</li>
        <li>Maintain organizational hierarchy visibility so agencies see the activity of their own agents.</li>
        <li>Detect, investigate, and prevent fraud, abuse, and security incidents.</li>
        <li>Comply with legal obligations, enforce our Terms of Service, and resolve disputes.</li>
        <li>Communicate with you about your account, service updates, and support requests.</li>
      </ul>
      <p>
        We do not sell personal information. We do not use advertising data obtained through the
        Google Ads API or Meta Marketing API for advertising targeting, model training, credit
        decisions, or any purpose other than displaying analytics to the account owner as described
        in this policy.
      </p>

      <h2>4. Google API Services &mdash; Limited Use disclosure</h2>
      <p>
        {APP_NAME}&rsquo;s use and transfer to any other app of information received from Google APIs
        will adhere to the{' '}
        <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">
          Google API Services User Data Policy
        </a>, including the Limited Use requirements. Specifically:
      </p>
      <ul>
        <li>We only use Google user data to provide and improve the user-facing advertising analytics features described in this policy.</li>
        <li>We do not transfer Google user data to third parties except as necessary to provide these features, to comply with applicable law, or as part of a merger or acquisition with notice to users.</li>
        <li>We do not use Google user data for serving advertisements.</li>
        <li>We do not allow humans to read Google user data unless we have your affirmative agreement, it is necessary for security purposes, it is required to comply with applicable law, or the data has been aggregated and anonymized.</li>
      </ul>

      <h2>5. Meta Platform Data</h2>
      <p>
        Data received through the Meta Marketing API is used solely to display advertising performance
        analytics to the agency that connected the ad account. We handle Meta Platform Data in
        accordance with the Meta Platform Terms and Developer Policies. We retain cached Meta campaign
        data only while the integration remains connected, and purge it as described in Section 8 and
        in our{' '}
        <button className="legal__link" onClick={() => onNavigate('data-deletion')}>
          Data Deletion Instructions
        </button>.
      </p>
      <p>
        We honor platform-initiated deletion requests, including Meta&rsquo;s data deletion callback:
        if you remove {APP_NAME} from your Meta settings, Meta notifies us automatically and we delete
        the associated stored credentials and cached campaign data without any further action required
        from you.
      </p>

      <h2>6. How we share information</h2>
      <p>We share information only in the following circumstances:</p>
      <ul>
        <li>
          <strong>Within your organization.</strong> Consistent with the Platform&rsquo;s hierarchy
          model, agencies and authorized upline users see call logs, performance data, and reporting
          for agents within their own organization. Financial data routes only between an agent and
          the agency at the root of their organization.
        </li>
        <li>
          <strong>Service providers.</strong> We use subprocessors to operate the Platform, including
          Twilio (telephony), Stripe (payments), and Supabase (database hosting on PostgreSQL
          infrastructure). Each provider is bound by contractual obligations limiting use of the data
          to service delivery.
        </li>
        <li>
          <strong>Legal requirements.</strong> We disclose information where required by law, subpoena,
          or court order, or where necessary to protect the rights, safety, or property of {APP_NAME},
          our users, or the public.
        </li>
        <li>
          <strong>Business transfers.</strong> If {APP_NAME} is involved in a merger, acquisition, or
          sale of assets, information may be transferred as part of that transaction with notice to
          affected users.
        </li>
      </ul>

      <h2>7. Data security</h2>
      <p>
        We use industry-standard safeguards including encryption in transit (TLS), encrypted storage
        of credentials and OAuth tokens, role-based access controls, tenant isolation at the database
        level, and logging of administrative access. No system is perfectly secure; you are responsible
        for maintaining the confidentiality of your login credentials.
      </p>

      <h2>8. Data retention</h2>
      <ul>
        <li>Account data is retained for the life of your account and for up to seven (7) years afterward where required for financial, tax, and legal recordkeeping.</li>
        <li>Call records and recordings are retained according to the agency&rsquo;s configuration and applicable legal requirements.</li>
        <li>Wallet and transaction ledgers are retained as required by financial recordkeeping laws.</li>
        <li>
          Cached advertising data (Google and Meta) is retained while the integration is connected.
          When you disconnect an ad account or revoke OAuth access, the stored credential (OAuth
          refresh token or access token) is deleted immediately and all scheduled syncs for that
          source stop at once. Cached campaign data associated with that account is deleted from our
          production systems within 30 days.
        </li>
      </ul>

      <h2>9. Your rights and choices</h2>
      <p>
        Depending on your location, you may have the right to access, correct, delete, or export your
        personal information, and to object to or restrict certain processing.
      </p>
      <ul>
        <li>
          All users may request access, correction, or deletion by emailing{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </li>
        <li>
          <strong>Disconnecting integrations.</strong> You may revoke our access to your Google or Meta
          ad accounts at any time, either inside the Platform or directly through{' '}
          <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
            Google Account permissions
          </a>{' '}
          or Meta Business Integrations settings. See our{' '}
          <button className="legal__link" onClick={() => onNavigate('data-deletion')}>
            Data Deletion Instructions
          </button>{' '}
          for step-by-step directions.
        </li>
        <li>
          California residents have rights under the CCPA/CPRA, including the right to know, delete,
          and correct. We do not sell or share personal information as those terms are defined under
          California law.
        </li>
        <li>Users in India have rights under the Digital Personal Data Protection Act, 2023, including access, correction, and erasure.</li>
        <li>EEA/UK users, where applicable, have rights under the GDPR, including the rights described above and the right to lodge a complaint with a supervisory authority.</li>
      </ul>
      <p>We respond to verified requests within the timelines required by applicable law.</p>

      <h2>10. Children</h2>
      <p>
        The Platform is a business tool for licensed insurance professionals. It is not directed to
        anyone under 18, and we do not knowingly collect information from anyone under 18.
      </p>

      <h2>11. International transfers</h2>
      <p>
        Our services are hosted in the United States. If you access the Platform from outside that
        region, your information will be transferred to and processed there.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        We will post any changes to this policy on this page and update the &ldquo;Last updated&rdquo;
        date. Material changes will be communicated by email or in-app notice before they take effect.
      </p>

      <h2>13. Contact us</h2>
      <p>
        {LEGAL_ENTITY}<br />
        {ADDRESS}<br />
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </>
  );
}

export default PrivacyPolicyDoc;
