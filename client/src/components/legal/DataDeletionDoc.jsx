import { APP_NAME, LEGAL_ENTITY, CONTACT_EMAIL, PHONE } from './legalMeta';

function DataDeletionDoc({ onNavigate }) {
  return (
    <>
      <p>
        {APP_NAME} ({LEGAL_ENTITY}) gives users and consumers options to disconnect integrations,
        request deletion or correction of certain information, and close Platform accounts. These
        instructions apply to information controlled by {LEGAL_ENTITY} and explain when coordination
        with the originating Agency, its authorized Agents, or a third-party provider may be necessary.
      </p>
      <p>
        Deletion is subject to identity verification, legal retention requirements, fraud prevention,
        billing obligations, active disputes, consumer-suppression needs, and the rights of other
        parties. Deleting information from {APP_NAME} does not necessarily delete independent copies
        previously received or lawfully retained by the originating Agency, its authorized Agents,
        Twilio, Stripe, or other providers.
      </p>
      <p>
        For details on what we collect and how we use it, see our{' '}
        <button className="legal__link" onClick={() => onNavigate('privacy')}>Privacy Policy</button>.
      </p>

      <h2>1. Disconnect a Meta advertising account</h2>
      <h3>Option A &mdash; in {APP_NAME}</h3>
      <ol>
        <li>Log in to the {APP_NAME} dashboard.</li>
        <li>Open <em>Settings</em>, then <em>Integrations</em>.</li>
        <li>Locate <strong>Meta Ads</strong> and select <strong>Disconnect</strong>.</li>
      </ol>
      <h3>Option B &mdash; through Meta</h3>
      <ol>
        <li>
          Open your Meta Business Settings at{' '}
          <a href="https://business.facebook.com" target="_blank" rel="noopener noreferrer">business.facebook.com</a>{' '}
          or your Facebook Business Integrations settings.
        </li>
        <li>Locate <strong>{APP_NAME}</strong> under connected apps or business integrations.</li>
        <li>Select <strong>Remove</strong> or <strong>Remove Access</strong>.</li>
      </ol>
      <p>
        <strong>What happens:</strong> scheduled Meta syncs stop. Stored credentials are deleted
        promptly, and cached Meta campaign data associated with the disconnected account is deleted
        from {APP_NAME} production systems within 30 days. Meta may also send {APP_NAME} a
        platform-initiated deletion request, which we process according to Meta requirements.
      </p>

      <h2>2. Disconnect a Google advertising account</h2>
      <h3>Option A &mdash; in {APP_NAME}</h3>
      <ol>
        <li>Log in to the {APP_NAME} dashboard.</li>
        <li>Open <em>Settings</em>, then <em>Integrations</em>.</li>
        <li>Locate <strong>Google Ads</strong> and select <strong>Disconnect</strong>.</li>
      </ol>
      <h3>Option B &mdash; through Google</h3>
      <ol>
        <li>
          Open your{' '}
          <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
            Google Account permissions page
          </a>.
        </li>
        <li>Select <strong>{APP_NAME}</strong> under third-party applications with account access.</li>
        <li>Choose <strong>Remove Access</strong>.</li>
      </ol>
      <p>
        <strong>What happens:</strong> future Google syncs stop. Stored credentials are deleted
        promptly, and cached Google Ads campaign data associated with the disconnected account is
        deleted from {APP_NAME} production systems within 30 days.
      </p>

      <h2>3. Request access, correction, or deletion of specific information</h2>
      <p>
        Email <a href={`mailto:${CONTACT_EMAIL}?subject=Privacy%20Request`}>{CONTACT_EMAIL}</a> from
        the email address associated with your account and use the subject line{' '}
        <strong>&ldquo;Privacy Request&rdquo;</strong> or{' '}
        <strong>&ldquo;Data Deletion Request.&rdquo;</strong> Include:
      </p>
      <ul>
        <li>Your full name and account email address.</li>
        <li>Your Agency or organization, if applicable.</li>
        <li>Whether you are an Agency administrator, Agent, website visitor, caller, or consumer.</li>
        <li>A clear description of the information and action requested.</li>
        <li>
          Any relevant phone number, approximate call date, Agency name, or internal Agency
          Marketplace information needed to locate the record.
        </li>
      </ul>
      <p>
        We generally acknowledge verified requests within 10 business days and respond within the
        period required by applicable law. We may request additional information to verify identity
        and prevent unauthorized deletion.
      </p>

      <h2>4. Caller, recording, and follow-up requests</h2>
      <p>
        Caller Data, recordings, transcripts, and follow-up records are generally processed on behalf
        of the Agency associated with the called number. We may refer or coordinate a request with
        that Agency because the Agency typically controls the business purpose, recording
        configuration, sales follow-up, and legal retention of the record.
      </p>
      <p>
        A request to stop future calls or texts should also be directed to the Agency or Agent making
        the communication. {APP_NAME} may add or communicate suppression information within the
        Platform where appropriate, but we do not control every independent system or copy used by an
        Agency or its Agents.
      </p>
      <p>
        Recording deletion may be delayed or denied where the recording is needed for an active
        dispute, legal hold, regulatory requirement, fraud investigation, billing issue, or defense
        of a claim.
      </p>

      <h2>5. Internal Agency Marketplace records</h2>
      <p>
        If a caller&rsquo;s information was made available through an internal Agency Marketplace, a
        deletion, correction, opt-out, consent-revocation, or suppression request may require
        coordination with:
      </p>
      <ul>
        <li>The Agency that originally collected and listed the information.</li>
        <li>Any authorized Agent within that same Agency organization who previously accessed the record.</li>
        <li>Any Agent or Agency that independently stored notes, recordings, or follow-up history.</li>
      </ul>
      <p>
        {APP_NAME} will delete or restrict information in its own systems as required, but may not be
        able to delete independent copies lawfully retained by the originating Agency or its
        authorized Agents. Where appropriate, we may notify the originating Agency or relevant Agents
        within that Agency organization of a verified suppression or deletion request. An Agent must
        continue honoring a consumer&rsquo;s Do-Not-Call or consent-revocation request even if
        transaction or audit records must be retained.
      </p>

      <h2>6. Delete an individual user account</h2>
      <ol>
        <li>
          Email{' '}
          <a href={`mailto:${CONTACT_EMAIL}?subject=Account%20Deletion%20Request`}>{CONTACT_EMAIL}</a>{' '}
          from the registered email address with the subject line{' '}
          <strong>&ldquo;Account Deletion Request.&rdquo;</strong>
        </li>
        <li>Identify your Agency and role.</li>
        <li>Complete identity and authority verification.</li>
        <li>Resolve any outstanding billing, Wallet, security, legal, or dispute issues.</li>
      </ol>
      <p>
        Deleting an Agent account does not necessarily delete Agency-owned call records, recordings,
        invoices, transaction history, suppression records, or compliance information associated with
        that Agent&rsquo;s work. Those records may remain available to the Agency or be retained as
        required by law and contract.
      </p>

      <h2>7. Delete an Agency account</h2>
      <p>
        An authorized Agency administrator may request closure by emailing{' '}
        <a href={`mailto:${CONTACT_EMAIL}?subject=Agency%20Account%20Deletion%20Request`}>{CONTACT_EMAIL}</a>{' '}
        with the subject line <strong>&ldquo;Agency Account Deletion Request.&rdquo;</strong> We will
        verify authority and coordinate an orderly wind-down, which may include:
      </p>
      <ul>
        <li>Stopping routing and integrations.</li>
        <li>Resolving unpaid balances and charge disputes.</li>
        <li>Addressing Agent Wallet balances and Agency-Agent financial arrangements.</li>
        <li>Providing a reasonable opportunity to export available data.</li>
        <li>
          Preserving recordings, Agency Marketplace records, suppression information, and transaction
          records that must remain for legal, consumer-protection, or dispute purposes.
        </li>
      </ul>
      <p>
        Agency account deletion may affect all users registered under that Agency. Data may be deleted
        from production systems within 30 days after verification and completion of the wind-down
        process, subject to the retention exceptions described below.
      </p>

      <h2>8. Information we may retain</h2>
      <ul>
        <li>
          Invoices, tax records, payment records, Wallet ledgers, Agency Marketplace transactions, and
          chargeback records, generally for seven years.
        </li>
        <li>
          Call records, recordings, transcripts, and communications subject to legal hold, active
          dispute, regulatory requirement, fraud prevention, or insurance compliance needs.
        </li>
        <li>Suppression, opt-out, and consent-revocation records needed to prevent unwanted future contact.</li>
        <li>Security logs, audit logs, and records needed to investigate misuse or protect the Platform.</li>
        <li>De-identified or aggregated information that no longer identifies an individual.</li>
        <li>
          Information retained by third-party providers according to their own legal,
          telecommunications, payment, security, and backup obligations.
        </li>
      </ul>
      <p>
        Retained information is limited to the purposes requiring retention and is deleted or
        de-identified when no longer needed.
      </p>

      <h2>9. Backups</h2>
      <p>
        Information deleted from active production systems may remain in encrypted backups for up to
        35 days before normal backup cycling removes it. During that period, backup data is not used
        for ordinary business operations and may be restored only for disaster recovery, security, or
        legal reasons. If restored, deletion requests will be reapplied where reasonably practicable.
      </p>

      <h2>10. Contact</h2>
      <p>
        {LEGAL_ENTITY}<br />
        East Lansing, Michigan, United States<br />
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><br />
        Phone: <a href={`tel:+1${PHONE.replace(/\D/g, '')}`}>{PHONE}</a>
      </p>
    </>
  );
}

export default DataDeletionDoc;
