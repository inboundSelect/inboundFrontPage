import Lede from '../components/Lede';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';
import { MARKETPLACE_SPLIT } from '../lib/site';
import {
  IconArrowRight, IconLock, IconTag, IconEye, IconCheck, IconClock,
  IconBuilding, IconUser, IconRefresh, IconPlay,
} from '../lib/icons';

/* The preview board shows the shape of a listing, not a price list. Prices are
 * set by each agency, so any number here would be one we invented. */

const SAMPLE = [
  { state: 'TX', product: 'Final expense', age: 'Today', message: 'Message left' },
  { state: 'FL', product: 'Medicare', age: 'Today', message: 'No message' },
  { state: 'OH', product: 'Final expense', age: 'This week', message: 'Message left' },
  { state: 'GA', product: 'Life', age: 'This week', message: 'No message' },
  { state: 'NC', product: 'Medicare', age: 'Today', message: 'Message left' },
  { state: 'AZ', product: 'Final expense', age: 'Earlier', message: 'No message' },
];

const FILTERS = ['All products', 'Final expense', 'Medicare', 'Life'];

const HOW = [
  {
    Icon: IconBuilding,
    title: 'An agency lists a call',
    text: 'A call nobody was free to take does not have to be a write-off. The agency puts it up at a price it chooses, and it appears on the board straight away.',
  },
  {
    Icon: IconEye,
    title: 'Agents look before they buy',
    text: 'The state, the product, how recent it is and whether the caller left a message are all shown up front. Nothing important is hidden behind the purchase.',
  },
  {
    Icon: IconUser,
    title: 'Details appear on purchase',
    text: 'The moment an agent buys, the contact details are released and they can ring straight away. Every purchase is dated and listed for both sides.',
  },
];

const FAQS = [
  {
    q: 'Who is allowed to use it?',
    a: 'Only agencies and agents who are already on InboundSelect. It is not open to the public, and there is no way to browse it without an account.',
  },
  {
    q: 'What can I see before I buy?',
    a: 'The state, the product, how old the lead is, and whether the caller left a message. The name and phone number appear only once the purchase goes through.',
  },
  {
    q: 'Who sets the prices?',
    a: 'The agency that listed the lead. We do not add anything on top of what they asked for — the price you see is the price you pay.',
  },
  {
    q: 'Can I buy more than one at a time?',
    a: 'Yes. Pick them off one by one, or select several and buy them together. Either way each purchase is listed separately in your history.',
  },
  {
    q: 'What if I cannot reach the person?',
    a: 'Purchases are final, and nobody can promise that someone will pick up. That is exactly why the age of the lead and whether they left a message are shown before you commit — read those carefully.',
  },
  {
    q: 'As an agency, what do we make on a sale?',
    a: `Your agency keeps ${MARKETPLACE_SPLIT.agency} of whatever you listed it for and we keep ${MARKETPLACE_SPLIT.platform}. If a lead never sells, nothing is charged at all.`,
  },
];

function MarketplacePage({ onNavigate, onOpenModal }) {
  return (
    <>
      <section className="pagehero">
        <div className="shell">
          <p className="eyebrow eyebrow--center">Members only</p>
          <h1 className="pagehero__title">
            The calls nobody could get to, <em>put back to work.</em>
          </h1>
          <p className="pagehero__text">
            Agencies list the calls their team could not take. Agents buy the ones that
            suit their book. What used to be a write-off becomes something for both sides.
          </p>
          <div className="btn-row pagehero__actions">
            <button className="btn btn--primary btn--lg" onClick={() => onOpenModal('agent')}>
              Get Agent Access
              <IconArrowRight size={17} />
            </button>
            <button className="btn btn--ghost btn--lg" onClick={() => onOpenModal('agency')}>
              List as an agency
            </button>
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────────────────── */}
      <section className="section section--tight">
        <div className="shell">
          <Lede
            eyebrow="How it works"
            title="Listed, looked at, bought"
            text="Three steps, and no negotiating with anyone in between."
          />
          <div className="grid grid--3 mt-xl">
            {HOW.map((c, i) => (
              <article key={c.title} className={`card card--hover reveal d${i + 1}`}>
                <span className="card__icon"><c.Icon size={20} /></span>
                <h3 className="card__title">{c.title}</h3>
                <p className="card__text">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Preview board ──────────────────────────────────────────────── */}
      <section className="section section--tint">
        <div className="shell">
          <Lede
            eyebrow="A look inside"
            title="What agents see when they open it"
            text="Filter by product, by the states you are licensed in, and by how recent the lead is. Prices are whatever the listing agency asked for."
          />

          <div className="board mt-xl reveal">
            <div className="board__bar" aria-hidden="true">
              {FILTERS.map((f, i) => (
                <span key={f} className={`board__chip${i === 0 ? ' board__chip--on' : ''}`}>{f}</span>
              ))}
            </div>

            <div className="board__grid" aria-hidden="true">
              {SAMPLE.map((l, i) => (
                <article key={i} className="lead">
                  <div className="lead__top">
                    <span className="lead__state">{l.state}</span>
                    <span className="lead__product">{l.product}</span>
                  </div>
                  <div className="lead__meta">
                    <span>
                      <span className="lead__meta-k">Received</span>
                      <span className="lead__meta-v">{l.age}</span>
                    </span>
                    <span>
                      <span className="lead__meta-k">Voicemail</span>
                      <span className="lead__meta-v">{l.message}</span>
                    </span>
                  </div>
                  <div className="lead__foot">
                    <span className="lead__price">Price set by the agency</span>
                    <span className="btn btn--ghost btn--sm">Buy</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="board__veil">
              <div className="board__veil-card">
                <span className="board__veil-ic"><IconLock size={21} /></span>
                <h3 className="card__title" style={{ marginBottom: 0 }}>Open to members only</h3>
                <p className="card__text">
                  The marketplace is only available to agencies and agents on
                  InboundSelect. This is a layout preview — the listings above are
                  examples, not real leads.
                </p>
                <div className="btn-row btn-row--center">
                  <button className="btn btn--primary btn--sm" onClick={() => onOpenModal('agent')}>
                    Get access
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Both sides ─────────────────────────────────────────────────── */}
      <section className="section">
        <div className="shell">
          <Lede
            eyebrow="Both sides win"
            title="Good for the agency that listed it. Good for the agent who takes it."
          />

          <div className="audience mt-xl">
            <article className="aud aud--dark reveal d1">
              <span className="aud__ic"><IconBuilding size={22} /></span>
              <p className="aud__tag">If you are an agency</p>
              <h3 className="aud__title">Earn from the calls you could not answer.</h3>
              <div className="checks">
                {[
                  'Put a price on it yourself, per lead',
                  'Newer leads and ones with a message can carry a higher price',
                  `Keep ${MARKETPLACE_SPLIT.agency} of every sale`,
                  'Nothing sells, nothing is charged',
                ].map((t) => (
                  <p key={t} className="checks__item">
                    <span className="checks__mark"><IconCheck size={13} /></span>
                    <span>{t}</span>
                  </p>
                ))}
              </div>
              <div className="aud__foot">
                <button className="btn btn--onink" onClick={() => onNavigate('agencies')}>
                  For Agencies
                  <IconArrowRight size={16} />
                </button>
              </div>
            </article>

            <article className="aud reveal d2">
              <span className="aud__ic"><IconUser size={22} /></span>
              <p className="aud__tag">If you are an agent</p>
              <h3 className="aud__title">Something to work when the phone is quiet.</h3>
              <div className="checks">
                {[
                  'Buy only what matches your licences',
                  'See how recent it is before you spend anything',
                  'Buy one, or several at once',
                  'Contact details the moment you buy',
                ].map((t) => (
                  <p key={t} className="checks__item">
                    <span className="checks__mark"><IconCheck size={13} /></span>
                    <span>{t}</span>
                  </p>
                ))}
              </div>
              <div className="aud__foot">
                <button className="btn btn--ghost" onClick={() => onNavigate('agents')}>
                  For Agents
                  <IconArrowRight size={16} />
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Fair dealing ───────────────────────────────────────────────── */}
      <section className="section section--tint">
        <div className="shell">
          <div className="grid grid--4">
            {[
              { Icon: IconEye, title: 'Nothing hidden', text: 'Everything that decides whether a lead is worth buying is shown before you buy it.' },
              { Icon: IconTag, title: 'No mark-up', text: 'You pay what the agency asked for. We never add anything to the listed price.' },
              { Icon: IconClock, title: 'Age shown plainly', text: 'How long ago the call came in is on the card, in plain words.' },
              { Icon: IconRefresh, title: 'Both sides keep records', text: 'Every sale and purchase is dated and listed for the agency and the agent.' },
            ].map((c, i) => (
              <article key={c.title} className={`card card--tint reveal d${(i % 4) + 1}`}>
                <span className="card__icon"><c.Icon size={19} /></span>
                <h3 className="card__title">{c.title}</h3>
                <p className="card__text">{c.text}</p>
              </article>
            ))}
          </div>

          <div className="statement mt-xl reveal">
            <span className="card__icon" style={{ marginInline: 'auto' }}><IconPlay size={20} /></span>
            <p className="statement__text">
              A lead where the caller left a message is worth more than one where they did not.
              <b> So the platform says which is which, and lets the price follow.</b>
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="shell shell--narrow">
          <Lede eyebrow="Questions" title="Before your first listing or purchase" />
          <div className="mt-xl reveal"><Faq items={FAQS} /></div>
        </div>
      </section>

      <CtaBand
        title="Open the marketplace"
        text="It is only available to agencies and agents on the platform. Tell us which one you are and we will get you set up."
        onOpenModal={onOpenModal}
        onNavigate={onNavigate}
      />
    </>
  );
}

export default MarketplacePage;
