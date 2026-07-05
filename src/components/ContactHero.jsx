function ContactHero({ onOpenWaitlist, onNavigate }) {
  return (
    <section className="page-hero page-hero--center">
      <div className="aurora" aria-hidden="true" />
      <div className="dot-grid" aria-hidden="true" />
      <div className="container page-hero__inner page-hero__inner--center">
        <p className="eyebrow animate-down">Get in touch</p>
        <h1 className="page-hero__title animate-down delay-1">
          Talk to us before you{' '}
          <span className="hero__heading-gradient">commit to anything.</span>
        </h1>
        <p className="page-hero__sub animate-down delay-2">
          Whether you want to see the platform in action, ask how it fits your operation, or apply for a
          beta spot — this is the right place to start.
        </p>
        <div className="page-hero__btns animate-down delay-3">
          <button className="btn btn--fill btn--lg" onClick={onOpenWaitlist}>Apply for Beta Access</button>
          <button className="btn btn--stroke btn--lg" onClick={() => (onNavigate ? onNavigate('/how-it-works') : onOpenWaitlist())}>See How It Works</button>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
