import { APP_NAME, LEGAL_ENTITY, ADDRESS, CONTACT_EMAIL } from './legalMeta';

function DataDeletionDoc({ onNavigate }) {
  return (
    <>
      <p>
        {APP_NAME} ({LEGAL_ENTITY}) gives you control over the data connected to your account, including
        advertising data accessed through the Meta Marketing API and the Google Ads API. This page
        explains how to disconnect integrations, request deletion of specific data, and delete your
        account entirely.
      </p>
      <p>
        For details on what we collect and how we use it, see our{' '}
        <button className="legal__link" onClick={() => onNavigate('privacy')}>Privacy Policy</button>.
      </p>

      <h2>1. Disconnect your Meta (Facebook / Instagram) ad account</h2>
      <p>
        {APP_NAME} accesses your Meta ad account on a read-only basis (<code>ads_read</code>) to display
        campaign performance inside your dashboard. To disconnect:
      </p>
      <h3>Option A &mdash; inside {APP_NAME} (recommended)</h3>
      <ol>
        <li>Log in to your {APP_NAME} dashboard.</li>
        <li>Go to <em>Settings &rarr; Integrations</em>.</li>
        <li>Find <strong>Meta Ads</strong> and click <strong>Disconnect</strong>.</li>
      </ol>
      <h3>Option B &mdash; from your Meta settings</h3>
      <ol>
        <li>
          Go to your Meta Business Settings at{' '}
          <a href="https://business.facebook.com" target="_blank" rel="noopener noreferrer">business.facebook.com</a>.
        </li>
        <li>
          Open <em>Integrations &rarr; Connected Apps</em> (or <em>Settings &rarr; Business Integrations</em>{' '}
          on a personal profile at{' '}
          <a href="https://facebook.com/settings" target="_blank" rel="noopener noreferrer">facebook.com/settings</a>).
        </li>
        <li>Locate <strong>{APP_NAME}</strong> and select <strong>Remove</strong>.</li>
      </ol>
      <p>
        <strong>What happens next.</strong> The stored credential for your ad account is deleted
        immediately and all scheduled syncs for the Meta source stop at once. All cached Meta campaign
        data associated with the disconnected ad account (campaign names, spend, impressions, clicks, and
        related metrics) is deleted from our production systems within 30 days. Call records and analytics
        that do not contain Meta data are unaffected.
      </p>
      <p>
        <strong>Automatic deletion via Meta.</strong> If you remove {APP_NAME} through Option B, Meta also
        sends us a data deletion request through its data deletion callback. We process that request
        automatically: stored credentials and cached campaign data tied to your Meta account are deleted
        without any further action from you, and Meta receives a confirmation code you are able to use to
        check the status of the request.
      </p>

      <h2>2. Disconnect your Google Ads account</h2>
      <p>
        {APP_NAME} accesses your Google Ads account on a read-only basis to display campaign performance
        inside your dashboard. To disconnect:
      </p>
      <h3>Option A &mdash; inside {APP_NAME} (recommended)</h3>
      <ol>
        <li>Log in to your {APP_NAME} dashboard.</li>
        <li>Go to <em>Settings &rarr; Integrations</em>.</li>
        <li>Find <strong>Google Ads</strong> and click <strong>Disconnect</strong>.</li>
      </ol>
      <h3>Option B &mdash; from your Google Account</h3>
      <ol>
        <li>
          Go to{' '}
          <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
            myaccount.google.com/permissions
          </a>.
        </li>
        <li>Under <em>Third-party apps with account access</em>, select <strong>{APP_NAME}</strong>.</li>
        <li>Click <strong>Remove Access</strong>.</li>
      </ol>
      <p>
        <strong>What happens next.</strong> The stored OAuth credential is deleted immediately, token
        refresh stops, and all scheduled syncs for the Google source halt at once. All cached Google Ads
        campaign data associated with the disconnected account is deleted from our production systems
        within 30 days.
      </p>

      <h2>3. Request deletion of specific data</h2>
      <p>
        To request deletion of specific data (for example, cached advertising data, profile details, or
        other personal information) without closing your account, email{' '}
        <a href={`mailto:${CONTACT_EMAIL}?subject=Data%20Deletion%20Request`}>{CONTACT_EMAIL}</a> from the
        email address on your account with the subject line{' '}
        <strong>&ldquo;Data Deletion Request.&rdquo;</strong> Include:
      </p>
      <ul>
        <li>Your account email and role (agency or agent).</li>
        <li>A description of the data you want deleted.</li>
      </ul>
      <p>
        We will confirm receipt within five (5) business days and complete verified requests within the
        timelines required by applicable law.
      </p>

      <h2>4. Delete your entire account</h2>
      <p>To permanently close your account and delete associated personal data:</p>
      <ol>
        <li>
          Email{' '}
          <a href={`mailto:${CONTACT_EMAIL}?subject=Account%20Deletion%20Request`}>{CONTACT_EMAIL}</a> with
          the subject line <strong>&ldquo;Account Deletion Request&rdquo;</strong> from your registered
          email address, or contact your agency administrator if you are an agent under an agency.
        </li>
        <li>We will verify your identity and confirm the request.</li>
        <li>Deletion is completed within 30 days of verification.</li>
      </ol>
      <p>
        <strong>What is deleted:</strong> profile information, cached advertising data (Google and Meta),
        OAuth tokens, dashboard configurations, and other personal data held in our production systems.
      </p>
      <p>
        <strong>What we must retain:</strong> certain records are kept where the law requires it, including
        wallet transaction ledgers, invoices, and billing records retained for financial and tax
        recordkeeping, and call records or recordings subject to legal retention obligations or active
        disputes. Retained records are kept only as long as legally required and then deleted.
      </p>
      <p>
        <strong>Agency accounts:</strong> deleting an agency account affects agents registered under that
        agency. Agency administrators should contact{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> to coordinate an orderly wind-down,
        including agent wallet balances, before deletion.
      </p>

      <h2>5. Backups</h2>
      <p>
        Deleted data may persist in encrypted backups for up to 35 days after deletion from production
        systems, after which backups are cycled and the data is unrecoverable.
      </p>

      <h2>6. Contact</h2>
      <p>Questions about data deletion:</p>
      <p>
        {LEGAL_ENTITY}<br />
        {ADDRESS}<br />
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </>
  );
}

export default DataDeletionDoc;
