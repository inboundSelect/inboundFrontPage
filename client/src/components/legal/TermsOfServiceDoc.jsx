import { LEGAL_ENTITY, CONTACT_EMAIL, PHONE } from './legalMeta';

function TermsOfServiceDoc({ onNavigate }) {
  return (
    <>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) are a binding agreement between {LEGAL_ENTITY},
        doing business as Inbound Select (&ldquo;Inbound Select,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;), and the person or entity that accesses or uses the
        Platform (&ldquo;you&rdquo; or &ldquo;Customer&rdquo;). By creating an account, accepting an
        order form, or using the Platform, you agree to these Terms. If you accept these Terms on
        behalf of an agency, company, or other organization, you represent that you have authority to
        bind that organization.
      </p>

      <h2>1. The Platform</h2>
      <p>
        Inbound Select provides software infrastructure for inbound call routing, tracking, recording,
        billing, account administration, performance reporting, advertising analytics, and related
        workflow tools for insurance agencies and licensed insurance professionals.
      </p>
      <p>
        Inbound Select does not originate consumer inquiries, independently advertise insurance
        products to consumers, act as an insurance producer, provide insurance advice, or guarantee
        the legality, quality, availability, or conversion of any call or inquiry. Agencies control
        their own advertising, phone numbers, lead sources, campaigns, call handling, follow-up
        activity, and compliance programs.
      </p>
      <p>
        The Platform may include an internal Agency Marketplace through which an Agency may make an
        Agency-supplied call record or follow-up opportunity available only to eligible Agents
        registered within that same Agency organization. Agency Marketplace listings are not displayed,
        transferred, distributed, or sold to Agents or users belonging to another Agency organization.
        Inbound Select provides the software and transaction infrastructure for the internal exchange
        but does not independently originate the underlying consumer inquiry.
      </p>

      <h2>2. Definitions</h2>
      <ul>
        <li><strong>&ldquo;Agency&rdquo;</strong> means an insurance agency, IMO, FMO, or other organization operating a tenant account on the Platform.</li>
        <li><strong>&ldquo;Agent&rdquo;</strong> means an individual user registered under an Agency who may receive calls, access records, or use Platform features.</li>
        <li><strong>&ldquo;Caller Data&rdquo;</strong> means information associated with an inbound consumer call, including phone number, timestamps, routing information, call outcome, state, product interest, recording, transcript, notes, or related metadata.</li>
        <li><strong>&ldquo;Agency Marketplace Listing&rdquo;</strong> means an Agency-supplied call record or follow-up opportunity offered only to eligible Agents registered within the same Agency organization that supplied the record or opportunity.</li>
        <li><strong>&ldquo;Wallet&rdquo;</strong> means a prepaid internal balance used for Agency-configured charges.</li>
        <li><strong>&ldquo;Acceptance Plan&rdquo;</strong> means a duration and price threshold configured by an Agency for Agent-level call charges.</li>
        <li><strong>&ldquo;Order Form&rdquo;</strong> means a checkout page, pricing schedule, proposal, subscription order, or written agreement accepted by the Customer that states commercial terms.</li>
      </ul>

      <h2>3. Accounts and Eligibility</h2>
      <p>
        You must be at least 18 years old. Where required for your role, you must hold current and valid
        insurance licenses for every state and product enabled in your account. You are responsible for
        the accuracy of all account, licensing, and organizational-hierarchy information.
      </p>
      <p>
        You must protect account credentials, use unique user accounts, remove access for departing
        personnel, and promptly notify us of suspected unauthorized access. You are responsible for
        activity performed through your account by your personnel and authorized users.
      </p>
      <p>
        An Agent account is associated with the Agency under which it was created. Transfers between
        Agencies, Wallet balances, and related financial relationships are subject to Platform rules,
        Agency instructions, and applicable law.
      </p>

      <h2>4. Fees, Billing, and Payment</h2>

      <h3>4.1 Commercial Terms</h3>
      <p>
        Subscription fees, seat fees, setup fees, white-label fees, connection fees, billed-call fees,
        Agency Marketplace fees, included features, usage rates, and billing frequency are stated in the
        applicable Order Form. If an Order Form conflicts with these Terms, the Order Form controls only
        as to the conflicting commercial term.
      </p>

      <h3>4.2 Automatic Charges and Renewal</h3>
      <p>
        You authorize Inbound Select and its payment providers to charge your stored payment method for
        recurring subscriptions, seat charges, usage fees, Agency Marketplace fees, taxes, and other
        amounts due. Monthly subscriptions renew automatically until canceled in accordance with the
        applicable Order Form or account settings.
      </p>

      <h3>4.3 Agency-Level and Agent-Level Charges</h3>
      <p>
        An Agency-level connection or usage fee may apply when a call connects or otherwise meets the
        billing conditions stated in the Order Form, even when the call does not meet the separate
        duration threshold required for an Agent Wallet debit. An Agent Wallet debit occurs only under
        the Acceptance Plan and Agency settings displayed in the Platform.
      </p>

      <h3>4.4 Billing Records</h3>
      <p>
        Platform and telephony-provider records are the authoritative source for connection time, talk
        time, routing events, and billing qualification, absent a demonstrable system error. Timing may
        be rounded or calculated according to the rules displayed in the Platform or Order Form.
      </p>

      <h3>4.5 Refunds and Disputes</h3>
      <p>
        Subscription fees, Wallet top-ups, setup fees, completed usage charges, and Agency Marketplace
        purchases are non-refundable except as required by law or expressly stated in writing. Billing
        disputes must be submitted within 30 days after the charge. Failure to dispute within that period
        waives the dispute to the extent permitted by law.
      </p>
      <p>
        You agree to contact Inbound Select before initiating a chargeback. Improper or unsupported
        chargebacks may result in suspension, collection activity, and recovery of reasonable fees and
        costs.
      </p>

      <h3>4.6 Failed Payments</h3>
      <p>
        We may retry failed payments, suspend routing or account access, reduce available features, or
        terminate service for nonpayment. Outstanding amounts remain due after suspension or termination.
      </p>

      <h3>4.7 Taxes</h3>
      <p>
        Fees exclude applicable taxes, duties, and assessments. You are responsible for all such amounts
        other than taxes imposed on Inbound Select&rsquo;s net income.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>
        The Platform may connect with third-party services, including Twilio, Stripe, Supabase, Google,
        Meta, calendar providers, hosting providers, and other vendors. Your use of those services may be
        governed by separate terms. We are not responsible for third-party acts, omissions, pricing,
        outages, data practices, or changes.
      </p>
      <p>
        Where an Agency connects its own Twilio or payment account, the Agency is responsible for that
        account, carrier charges, messaging registration, and compliance with the provider&rsquo;s rules.
      </p>

      <h2>6. Compliance Responsibilities</h2>

      <h3>6.1 Agency Responsibilities</h3>
      <p>
        Agencies are solely responsible for the legality of their advertising, consumer acquisition, lead
        sources, call handling, follow-up communications, Marketplace activity, and insurance sales
        practices. This includes compliance with the Telephone Consumer Protection Act, Telemarketing
        Sales Rule, federal and state Do-Not-Call requirements, state telemarketing laws, insurance
        marketing rules, caller-ID requirements, abandoned-call restrictions, calling-time restrictions,
        consent-revocation rules, reassigned-number risks, and messaging requirements such as A2P 10DLC
        where applicable.
      </p>

      <h3>6.2 Agent Responsibilities</h3>
      <p>
        Agents must maintain accurate licensing and eligibility settings and may use Caller Data only for
        lawful, authorized business purposes within the scope of their Agency relationship and applicable
        consumer permissions.
      </p>

      <h3>6.3 Follow-Up Communications</h3>
      <p>
        A consumer&rsquo;s inbound call does not, by itself, establish blanket consent for every later
        call, text message, prerecorded message, artificial-voice communication, automated communication,
        or communication by another person or entity. Before initiating any follow-up communication, the
        Agency and Agent must independently determine and document the lawful basis for that
        communication, the scope of any consent, the identity of the entity authorized to contact the
        consumer, the permitted communication channels and purposes, applicable Do-Not-Call restrictions,
        and any revocation or suppression request.
      </p>
      <p>
        Inbound Select does not verify or warrant that any Caller Data may lawfully be used for outbound
        contact. Use of Platform data to call or text a consumer is solely at the user&rsquo;s risk and
        legal responsibility.
      </p>

      <h3>6.4 Call Recording</h3>
      <p>
        Call-recording laws are separate from telemarketing laws and may apply to inbound and outbound
        calls. Agencies are solely responsible for determining whether a call may be recorded, providing
        all legally required disclosures before recording begins, obtaining all required consents from
        every participant, configuring recording appropriately, and complying with the laws of every
        applicable jurisdiction. The fact that a consumer initiated a call does not eliminate
        recording-consent obligations.
      </p>
      <p>
        Inbound Select may provide recording controls, disclosures, logs, storage, or related features,
        but does not determine whether a disclosure or consent method satisfies applicable law. Agencies
        are responsible for testing their configuration and preserving evidence of compliance.
      </p>

      <h3>6.5 Platform Position</h3>
      <p>
        Inbound Select provides technology infrastructure only. We do not verify consumer consent, monitor
        every user communication, act as a law firm, provide legal advice, or assume responsibility for an
        Agency&rsquo;s compliance program.
      </p>

      <h2>7. Agency Marketplace</h2>

      <h3>7.1 Internal Nature of Agency Marketplace Listings</h3>
      <p>
        An Agency Marketplace Listing is supplied, controlled, and offered by the originating Agency only
        to eligible Agents registered within that same Agency organization. Inbound Select does not
        distribute an Agency Marketplace Listing to another Agency or to Agents outside the originating
        Agency organization. A purchase provides only the access and information expressly described in the
        listing. It does not independently create consumer consent, establish a legal right to contact the
        consumer, guarantee exclusivity, or guarantee that the consumer will answer, remain interested,
        qualify, or purchase insurance.
      </p>

      <h3>7.2 Originating Agency Duties</h3>
      <p>
        The listing Agency represents and warrants that it has the legal right to collect, use, disclose,
        and make available all information included in the listing; that the listing is accurate and not
        misleading; that the transfer is consistent with disclosures and permissions provided to the
        consumer; and that all applicable opt-outs, revocations, and suppression instructions are
        accurately reflected.
      </p>
      <p>
        The originating Agency must accurately describe any available consent information, including the
        source, date, scope, authorized party or parties, permitted products, and permitted communication
        channels. The originating Agency must not represent that consent exists when it has not been
        documented and must ensure that information made available through the Agency Marketplace may
        lawfully be shared with Agents operating under that Agency.
      </p>

      <h3>7.3 Purchasing Agent Duties</h3>
      <p>
        A purchasing Agent must independently verify a lawful basis before calling, texting, or otherwise
        contacting the consumer. Unless a listing expressly includes verified consent information that
        clearly covers the Agency, its Agents, the purpose, product, and communication method, the
        purchasing Agent must not assume that the original inbound call authorizes outbound contact.
      </p>
      <p>
        The purchasing Agent must honor all applicable Do-Not-Call, consent-revocation, suppression,
        licensing, and communication-channel restrictions and must maintain appropriate compliance
        records. The purchasing Agent may use the record only on behalf of the originating Agency and may
        not resell, transfer, export, or disclose it outside that Agency organization except as required by
        law.
      </p>

      <h3>7.4 Suppression and Revocation</h3>
      <p>
        The originating Agency and its Agents must promptly communicate and honor consumer opt-outs,
        consent revocations, deletion requests, and suppression instructions applicable to an Agency
        Marketplace record. Inbound Select may restrict, remove, or disable records where legal or
        compliance risk exists.
      </p>

      <h3>7.5 Agency Marketplace Disputes</h3>
      <p>
        Agency Marketplace purchases are final except where a listing materially misstates a promised
        attribute, such as state, product category, age band, exclusivity, availability of a promised
        record, or documented consent status. No refund is due merely because the consumer does not
        answer, is not interested, has already purchased elsewhere, does not qualify, withdraws consent, or
        does not result in a sale.
      </p>

      <h2>8. Acceptable Use</h2>
      <p>You must not:</p>
      <ul>
        <li>Use the Platform or Caller Data in violation of law, consumer permissions, or Agency instructions.</li>
        <li>Route or facilitate deceptive, fraudulent, abusive, or misleading calls or campaigns.</li>
        <li>Access another tenant&rsquo;s data or bypass access controls.</li>
        <li>Probe, scan, test, or disrupt the Platform without written authorization.</li>
        <li>Circumvent billing, routing, eligibility, suppression, or security logic.</li>
        <li>Resell, sublicense, or white-label the Platform except under a written agreement.</li>
        <li>Upload malware or use the Platform for emergency, public-safety, or life-safety communications.</li>
      </ul>
      <p>
        We may investigate activity and immediately suspend routing, Agency Marketplace access, or accounts
        where we reasonably believe continued use creates legal exposure, consumer harm, fraud, security
        risk, network abuse, or risk to other users.
      </p>

      <h2>9. Data, Privacy, and Customer Content</h2>
      <p>
        Our processing of personal information is described in the{' '}
        <button className="legal__link" onClick={() => onNavigate('privacy')}>Privacy Policy</button>. As
        between the parties, the Agency retains its rights in Agency-supplied Caller Data, recordings,
        connected advertising data, and customer content. Inbound Select owns the Platform, software,
        documentation, system design, and aggregated or de-identified operational information that does
        not identify a consumer or Customer.
      </p>
      <p>
        You represent that you have all rights and permissions necessary for Inbound Select to host,
        process, transmit, display, analyze, and make available your data as required to provide the
        Platform. You grant Inbound Select a limited license to do so for service delivery, security,
        billing, support, fraud prevention, legal compliance, and enforcement of these Terms.
      </p>

      <h2>10. Confidentiality</h2>
      <p>
        Each party may receive nonpublic business, technical, financial, pricing, security, or customer
        information from the other. The receiving party will use reasonable care to protect that
        information and will use it only to perform under these Terms. Confidentiality obligations do not
        apply to information that is public through no breach, already known without restriction,
        independently developed, or lawfully received from a third party. A party may disclose information
        when legally required after providing notice where permitted.
      </p>

      <h2>11. Intellectual Property</h2>
      <p>
        Inbound Select and its licensors own the Platform, software, designs, interfaces, documentation,
        trademarks, and related intellectual property. Subject to these Terms and payment of fees, we grant
        you a limited, non-exclusive, non-transferable, revocable right to use the Platform for internal
        business purposes during your subscription. Feedback may be used by us without restriction or
        obligation.
      </p>

      <h2>12. Suspension and Termination</h2>
      <p>
        Either party may terminate as stated in the applicable Order Form. Unless otherwise stated,
        cancellation takes effect at the end of the current paid subscription period and fees are not
        prorated. We may suspend or terminate immediately for nonpayment, material breach, legal or
        security risk, misuse, fraud, or extended inactivity.
      </p>
      <p>
        Upon termination, routing and Platform access may stop, unpaid fees become due, and data may be
        retained or deleted according to the{' '}
        <button className="legal__link" onClick={() => onNavigate('privacy')}>Privacy Policy</button> and{' '}
        <button className="legal__link" onClick={() => onNavigate('data-deletion')}>Data Deletion Instructions</button>.
        Wallet balances and Agency-Agent financial arrangements are handled according to the applicable
        payment structure and law.
      </p>

      <h2>13. Disclaimers</h2>
      <p className="legal__caps">
        THE PLATFORM IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo; TO THE MAXIMUM EXTENT
        PERMITTED BY LAW, INBOUND SELECT DISCLAIMS ALL EXPRESS, IMPLIED, AND STATUTORY WARRANTIES,
        INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT
        WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR COMPATIBLE WITH EVERY
        THIRD-PARTY SERVICE; THAT ANY CALL WILL CONNECT; THAT ANY RECORDING OR DISCLOSURE WILL SATISFY
        APPLICABLE LAW; THAT ANY MARKETPLACE LISTING MAY LAWFULLY BE USED FOR FOLLOW-UP; OR THAT ANY CALL
        OR OPPORTUNITY WILL RESULT IN A SALE.
      </p>

      <h2>14. Limitation of Liability</h2>
      <p className="legal__caps">
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, INBOUND SELECT WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL,
        SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, LOST REVENUE, LOST
        DATA, BUSINESS INTERRUPTION, LOSS OF GOODWILL, TELEMARKETING CLAIMS, RECORDING-CONSENT CLAIMS, OR
        MARKETPLACE FOLLOW-UP CLAIMS, EVEN IF ADVISED OF THE POSSIBILITY.
      </p>
      <p className="legal__caps">
        INBOUND SELECT&rsquo;S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THE PLATFORM OR THESE
        TERMS WILL NOT EXCEED THE FEES PAID BY THE CUSTOMER TO INBOUND SELECT DURING THE SIX MONTHS BEFORE
        THE EVENT GIVING RISE TO THE CLAIM. THESE LIMITS DO NOT APPLY WHERE PROHIBITED BY LAW.
      </p>

      <h2>15. Indemnification</h2>
      <p>
        You will defend, indemnify, and hold harmless Inbound Select, its affiliates, and their personnel
        from third-party claims, demands, investigations, penalties, damages, settlements, and reasonable
        costs arising from or relating to: your advertising, lead sources, consumer outreach, follow-up
        calls or texts, Agency Marketplace listings or purchases, alleged TCPA or telemarketing violations,
        Do-Not-Call violations, recording without required disclosure or consent, privacy allegations
        resulting from your conduct or instructions, inaccurate consent representations, insurance licensing
        violations, misuse of Caller Data, breach of these Terms, or violation of law.
      </p>
      <p>
        We will provide reasonable notice of a covered claim. You may control the defense with counsel
        reasonably acceptable to us, but you may not settle a claim that admits wrongdoing by Inbound
        Select, imposes obligations on us, or fails to provide a complete release without our written
        consent. We may participate with counsel of our choice at our expense.
      </p>

      <h2>16. Governing Law and Disputes</h2>
      <p>
        These Terms are governed by Michigan law, without regard to conflict-of-law principles. Except for
        qualifying small-claims matters or requests for temporary or emergency injunctive relief involving
        intellectual property, security, unauthorized access, or data misuse, disputes will be resolved by
        binding individual arbitration administered by the American Arbitration Association under its
        Commercial Arbitration Rules. The arbitration will be conducted by one arbitrator, remotely or in
        Ingham County, Michigan, unless the parties agree otherwise.
      </p>
      <p className="legal__caps">
        TO THE EXTENT PERMITTED BY LAW, EACH PARTY WAIVES THE RIGHT TO A JURY TRIAL AND TO PARTICIPATE IN A
        CLASS, COLLECTIVE, CONSOLIDATED, OR REPRESENTATIVE ACTION OR ARBITRATION.
      </p>

      <h2>17. Changes</h2>
      <p>
        We may update these Terms. We will provide at least 30 days&rsquo; notice of material changes by
        email, in-app notice, or posting on the Platform, unless a shorter period is required for legal,
        security, or third-party service reasons. Continued use after the effective date constitutes
        acceptance.
      </p>

      <h2>18. General</h2>
      <p>
        These Terms, the{' '}
        <button className="legal__link" onClick={() => onNavigate('privacy')}>Privacy Policy</button>, the{' '}
        <button className="legal__link" onClick={() => onNavigate('data-deletion')}>Data Deletion Instructions</button>,
        and any Order Form are the entire agreement concerning the Platform. If a provision is
        unenforceable, the remaining provisions remain effective. Failure to enforce a provision is not a
        waiver. You may not assign these Terms without our consent. We may assign them in connection with a
        merger, financing, reorganization, or sale of assets. Sections that by their nature should survive
        termination will survive, including payment, compliance, data, confidentiality, intellectual
        property, disclaimers, liability, indemnification, and disputes.
      </p>

      <h2>19. Contact</h2>
      <p>
        {LEGAL_ENTITY}<br />
        East Lansing, Michigan, United States<br />
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><br />
        Phone: <a href="tel:+17272482830">{PHONE}</a>
      </p>
    </>
  );
}

export default TermsOfServiceDoc;
