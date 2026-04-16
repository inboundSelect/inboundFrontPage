import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const personas = [
  {
    id: 'agency',
    tag: 'For Agency Owners',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="10" width="22" height="15" rx="3" />
        <path d="M9 10V7a5 5 0 0 1 10 0v3" />
        <circle cx="14" cy="18" r="2" fill="currentColor" stroke="none" opacity="0.6" />
      </svg>
    ),
    headline: 'Give your team inbound calls to work.',
    bullets: [
      'Configure routing rules and pricing from one dashboard',
      'Approve agents, define state coverage, set your margins',
      'Distribute live calls from your existing lead sources',
      'Track performance by agent, product, and source',
    ],
    cta: 'See Agency Features',
    ctaPage: 'features',
    dark: true,
  },
  {
    id: 'agent',
    tag: 'For Independent Agents',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="9" r="4" />
        <path d="M6 24c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        <path d="M20 14l3 3-3 3" opacity="0.5" />
      </svg>
    ),
    headline: 'Enter the queue. Receive live calls.',
    bullets: [
      'Set your licensed states and availability in minutes',
      'Fund your wallet and go live immediately',
      'Accept live alerts and get bridged to the prospect instantly',
      'Browse the marketplace between calls for extra leads',
    ],
    cta: 'See Agent Features',
    ctaPage: 'role',
    dark: false,
  },
];

function IndustrySolutions({ onOpenWaitlist, onNavigate }) {
  const sectionRef  = useRef(null);
  const headerRef   = useRef(null);
  const card0Ref    = useRef(null);
  const card1Ref    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Header block fades + slides up ──────────────────────
      gsap.from(headerRef.current, {
        y: 44,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 82%',
          once: true,
        },
      });

      // ── Cards slide in from opposite sides ──────────────────
      const cardRefs = [card0Ref.current, card1Ref.current];
      const origins  = [-80, 80]; // left card from left, right card from right

      cardRefs.forEach((card, i) => {
        gsap.from(card, {
          x: origins[i],
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          delay: i * 0.12,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true,
          },
        });
      });

      // ── Card hover: lift + glow ─────────────────────────────
      cardRefs.forEach((card) => {
        const enter = () => gsap.to(card, { y: -8, scale: 1.018, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
        const leave = () => gsap.to(card, { y: 0,  scale: 1,     duration: 0.4,  ease: 'power2.inOut', overwrite: 'auto' });
        card.addEventListener('mouseenter', enter);
        card.addEventListener('mouseleave', leave);
        card._gsapCleanup = () => {
          card.removeEventListener('mouseenter', enter);
          card.removeEventListener('mouseleave', leave);
        };
      });

    }, sectionRef);

    return () => {
      ctx.revert();
      [card0Ref, card1Ref].forEach(r => r.current?._gsapCleanup?.());
    };
  }, []);

  const cardRefs = [card0Ref, card1Ref];

  return (
    <section className="who-for" ref={sectionRef}>
      <div className="container">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="who-for__header" ref={headerRef}>
          <div className="section__label-tag">WHO IT'S BUILT FOR</div>
          <h2 className="who-for__heading">One platform. Two ways to use it.</h2>
          <p className="who-for__sub">
            Whether you run a team of agents or work your own book, the problem is the same. Leads come in and the follow-up system can't keep up. InboundSelect fixes the routing, not the marketing.
          </p>
        </div>

        {/* ── Cards ──────────────────────────────────────────── */}
        <div className="who-for__cards">
          {personas.map((p, i) => (
            <div
              key={p.id}
              ref={cardRefs[i]}
              className={`who-card${p.dark ? ' who-card--dark' : ''}`}
            >
              <div className="who-card__icon">{p.icon}</div>
              <span className="who-card__tag">{p.tag}</span>
              <h3 className="who-card__headline">{p.headline}</h3>

              <ul className="who-card__bullets">
                {p.bullets.map((b) => (
                  <li key={b} className="who-card__bullet">
                    <span className="who-card__check">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <button
                className={`who-card__cta${p.dark ? ' who-card__cta--light' : ' who-card__cta--dark'}`}
                onClick={() => onNavigate ? onNavigate(p.ctaPage) : onOpenWaitlist()}
              >
                {p.cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default IndustrySolutions;
