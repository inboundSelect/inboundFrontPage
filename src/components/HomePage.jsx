import Hero from './Hero';
import ProductOverview from './ProductOverview';
import HomeLiveDemo from './HomeLiveDemo';
import MarketingHub from './MarketingHub';
import GoogleIntegration from './GoogleIntegration';
import IndustrySolutions from './IndustrySolutions';
import EnterpriseSecurity from './EnterpriseSecurity';
import PricingSection from './PricingSection';
import CtaBand from './CtaBand';

function HomePage({ onOpenWaitlist, onNavigate }) {
  return (
    <main id="main">
      <Hero onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
      <ProductOverview />
      <HomeLiveDemo onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
      <MarketingHub onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
      <GoogleIntegration />
      <IndustrySolutions onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
      <EnterpriseSecurity onNavigate={onNavigate} />
      <PricingSection onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
      <CtaBand
        title="Two beta spots."
        titleAccent="No platform fee."
        sub="We're onboarding a small number of agencies before public launch — waived platform fees, usage-only billing, and direct access to our team."
        onPrimary={onOpenWaitlist}
        secondaryLabel="Book a Demo"
        onSecondary={() => onNavigate('/contact')}
      />
    </main>
  );
}

export default HomePage;
