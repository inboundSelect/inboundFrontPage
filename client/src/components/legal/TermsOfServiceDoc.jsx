import { APP_NAME, LEGAL_ENTITY, ADDRESS, CONTACT_EMAIL } from './legalMeta';

function TermsOfServiceDoc({ onNavigate }) {
  return (
    <>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) are a binding agreement between {LEGAL_ENTITY}{' '}
        (&ldquo;{APP_NAME},&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) and the
        entity or individual accessing the {APP_NAME} platform (the &ldquo;Platform&rdquo;). By
        creating an account or using the Platform, you agree to these Terms. If you are accepting on
        behalf of an agency or company, you represent that you have authority to bind that entity.
      </p>

      <h2>1. The Platform</h2>
      <p>
        {APP_NAME} provides infrastructure for routing, tracking, recording, billing, and analyzing
        inbound phone calls for insurance agencies and licensed insurance agents. {APP_NAME} does not
        sell calls or leads. We do not generate, source, or originate consumer inquiries. Agencies
        bring their own lead sources and use the Platform to route resulting calls to their agents.
      </p>

      <h2>2. Definitions</h2>
      <ul>
        <li><strong>&ldquo;Agency&rdquo;</strong> means an agency or IMO operating a tenant account, managing agents, routing rules, tracking numbers, and pricing plans.</li>
        <li><strong>&ldquo;Agent&rdquo;</strong> means an individual user registered under an Agency who accepts calls through the Platform.</li>
        <li><strong>&ldquo;Wallet&rdquo;</strong> means an Agent&rsquo;s prepaid internal balance used to pay for accepted calls under the Agency&rsquo;s acceptance plans.</li>
        <li><strong>&ldquo;Acceptance Plan&rdquo;</strong> means an Agency-configured duration and price threshold applied to a call (for example, 60 seconds for a stated price).</li>
      </ul>

      <h2>3. Accounts and eligibility</h2>
      <p>
        You must be at least 18 years old and, where required for your role, hold valid and current
        insurance licenses for the states and products you enable on the Platform. You are responsible
        for the accuracy of your registration information, for maintaining the security of your
        credentials, and for all activity under your account. Agent accounts are created under an
        Agency through referral registration; an Agent&rsquo;s financial relationship attaches to the
        Agency at the root of their organization and cannot be reassigned after registration.
      </p>

      <h2>4. Fees and billing</h2>

      <h3>4.1 Agency fees</h3>
      <p>
        Agencies pay a monthly platform subscription, per-call connection fees at rates configured in
        their agreement, and marketplace platform fees on marketplace transactions. Connection fees are
        aggregated and invoiced daily. Agencies authorize {APP_NAME} to charge their stored payment
        method for these fees, including automated retry of failed charges.
      </p>

      <h3>4.2 Agent wallets and call charges</h3>
      <p>
        Agents fund a prepaid Wallet through the Agency&rsquo;s connected payment processor. No charge
        is applied when an Agent accepts a call. A Wallet debit occurs only after a call completes and
        only if the talk time meets or exceeds the selected Acceptance Plan duration. Calls shorter
        than the plan threshold incur no Agent charge. A minimum Wallet buffer is required to remain
        eligible for call routing. Agency-issued credits, where configured, offset a portion of call
        charges according to the Agency&rsquo;s settings.
      </p>

      <h3>4.3 Marketplace</h3>
      <p>
        Agencies may list unworked calls for purchase by Agents. Marketplace purchases are debited from
        the buyer&rsquo;s Wallet at the time of purchase and are final except where a listing materially
        misdescribed the item.
      </p>

      <h3>4.4 Refunds</h3>
      <p>
        Wallet top-ups, subscription fees, and completed call charges are non-refundable except as
        required by law or expressly stated otherwise. Billing disputes must be raised within 30 days of
        the charge.
      </p>

      <h3>4.5 Taxes</h3>
      <p>
        Fees exclude taxes. You are responsible for all applicable taxes other than taxes on our net
        income.
      </p>

      <h2>5. Third-party integrations</h2>
      <p>The Platform integrates with third-party services, each governed by its own terms:</p>
      <ul>
        <li><strong>Twilio</strong> for telephony. Agencies connect their own Twilio account or a managed subaccount; voice carrier costs are billed by Twilio to the Agency directly.</li>
        <li><strong>Stripe</strong> for payments, including Stripe Connect accounts operated by Agencies.</li>
        <li>
          <strong>Google Ads API and Meta Marketing API</strong> for read-only advertising performance
          reporting. By connecting an ad account you represent that you are authorized to grant that
          access. The Platform reads campaign-level reporting metrics only; it does not create, modify,
          pause, or delete campaigns, ads, budgets, bids, audiences, or creatives, and takes no automated
          action on any ad account. You may revoke access at any time; revocation deletes the stored
          credential immediately and stops all syncs for that source. See our{' '}
          <button className="legal__link" onClick={() => onNavigate('data-deletion')}>
            Data Deletion Instructions
          </button>.
        </li>
      </ul>
      <p>We are not responsible for the acts, omissions, or availability of third-party services.</p>

      <h2>6. Compliance obligations</h2>

      <h3>6.1 Agency responsibilities</h3>
      <p>Agencies are solely responsible for:</p>
      <ul>
        <li>The legality of their lead sources, advertising, and consumer outreach, including compliance with the Telephone Consumer Protection Act (TCPA), the Telemarketing Sales Rule, state telemarketing and insurance marketing laws, and carrier messaging requirements (including A2P 10DLC registration for messaging traffic).</li>
        <li>Obtaining and documenting all legally required consents from consumers, including prior express written consent where required.</li>
        <li>Providing all legally required call recording disclosures and obtaining all required recording consents under federal and state law, including all-party consent states.</li>
        <li>Ensuring their Agents hold required licenses for the states and products routed to them.</li>
      </ul>

      <h3>6.2 Agent responsibilities</h3>
      <p>
        Agents represent that their licensing and coverage settings are accurate and current, and that
        they will conduct calls in compliance with applicable insurance regulations and marketing laws.
      </p>

      <h3>6.3 Platform position</h3>
      <p>
        {APP_NAME} provides routing and billing infrastructure only. We do not verify consumer consent,
        do not act as an insurance producer, and do not provide legal advice. You are responsible for
        your own compliance program.
      </p>

      <h2>7. Acceptable use</h2>
      <p>
        You will not: (a) use the Platform for calls or campaigns that violate applicable law; (b) route
        calls involving deceptive, fraudulent, or misleading practices; (c) attempt to access data of
        other tenants; (d) probe, scan, or test the vulnerability of the Platform without written
        authorization; (e) resell or white-label the Platform except under a written agreement with us;
        (f) interfere with the operation of the Platform, including circumventing routing, billing, or
        eligibility logic; or (g) upload malicious code.
      </p>
      <p>
        We may suspend routing or accounts immediately where we reasonably believe continued activity
        creates legal exposure, network abuse, or risk to other users.
      </p>

      <h2>8. Data</h2>
      <p>
        Our collection and use of information is described in our{' '}
        <button className="legal__link" onClick={() => onNavigate('privacy')}>Privacy Policy</button>. As
        between the parties, Agencies own their caller data, call recordings, and connected advertising
        data; {APP_NAME} owns the Platform, its software, and aggregated or de-identified operational
        data. You grant us the rights needed to host, process, transmit, and display your data to operate
        the Platform.
      </p>

      <h2>9. Intellectual property</h2>
      <p>
        The Platform, including software, design, and documentation, is owned by {APP_NAME} and its
        licensors. We grant you a limited, non-exclusive, non-transferable right to use the Platform
        during your subscription for your internal business purposes. Feedback you provide may be used by
        us without restriction.
      </p>

      <h2>10. Term, suspension, and termination</h2>
      <p>
        These Terms apply while you use the Platform. Either party may terminate with notice as set out in
        the applicable subscription. We may suspend or terminate access for material breach, non-payment,
        legal risk, or extended inactivity. Upon termination: outstanding fees become due, routing stops,
        and remaining Wallet balances are handled between the Agent and their Agency in accordance with
        the Agency&rsquo;s connected payment arrangement and applicable law. Sections 4, 6, 8, 9, 11, 12,
        13, and 14 survive termination.
      </p>

      <h2>11. Disclaimers</h2>
      <p className="legal__caps">
        THE PLATFORM IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo; WE DISCLAIM ALL
        WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
        NON-INFRINGEMENT. WE DO NOT WARRANT UNINTERRUPTED OR ERROR-FREE OPERATION, THAT CALLS WILL CONNECT,
        OR THAT ANY CALL WILL RESULT IN A SALE. TELEPHONY, PAYMENT, AND ADVERTISING SERVICES DEPEND ON
        THIRD PARTIES OUTSIDE OUR CONTROL.
      </p>

      <h2>12. Limitation of liability</h2>
      <p className="legal__caps">
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY IS LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR LOST PROFITS OR REVENUE. OUR TOTAL LIABILITY ARISING OUT OF
        THESE TERMS WILL NOT EXCEED THE FEES PAID BY YOU TO INBOUNDSELECT IN THE TWELVE (12) MONTHS BEFORE
        THE EVENT GIVING RISE TO THE CLAIM. THESE LIMITS DO NOT APPLY TO YOUR PAYMENT OBLIGATIONS OR YOUR
        INDEMNIFICATION OBLIGATIONS.
      </p>

      <h2>13. Indemnification</h2>
      <p>
        You will defend and indemnify {APP_NAME} against third-party claims arising from: (a) your lead
        sources, advertising, or consumer outreach, including TCPA and telemarketing claims; (b) call
        recording without required disclosure or consent; (c) your breach of these Terms; or (d) your
        violation of applicable law, including insurance licensing requirements.
      </p>

      <h2>14. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of the State of Michigan, without regard to conflict-of-law
        rules. Disputes will be resolved in the state or federal courts located in Ingham County, Michigan.
        Each party waives class actions to the extent permitted by law.
      </p>

      <h2>15. Changes to these Terms</h2>
      <p>
        We may update these Terms. Material changes will be notified by email or in-app notice at least 30
        days before taking effect. Continued use after the effective date constitutes acceptance.
      </p>

      <h2>16. General</h2>
      <p>
        These Terms, together with the Privacy Policy and any order form, are the entire agreement. If any
        provision is unenforceable, the remainder stays in effect. You may not assign these Terms without
        our consent; we may assign in connection with a merger or asset sale. Notices to us go to{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>17. Contact us</h2>
      <p>
        {LEGAL_ENTITY}<br />
        {ADDRESS}<br />
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </>
  );
}

export default TermsOfServiceDoc;
