import FeaturesHero from './FeaturesHero';
import KeyFeaturesBenefits from './KeyFeaturesBenefits';
import FeaturesProductOverview from './FeaturesProductOverview';
import MarketingHub from './MarketingHub';
import FeaturesEnterpriseSecurity from './FeaturesEnterpriseSecurity';
import PricingSection from './PricingSection';
import AgencyLaunchpad from './AgencyLaunchpad';
import CtaBand from './CtaBand';

function FeaturesPage({ onOpenWaitlist, onNavigate }) {
  return (
    <main id="main">
      <FeaturesHero onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
      <KeyFeaturesBenefits />
      <FeaturesProductOverview />
      <AgencyLaunchpad />
      <MarketingHub onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
      <FeaturesEnterpriseSecurity onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
      <PricingSection onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
      <CtaBand
        title="Bring your team and your marketing."
        titleAccent="We run the rest."
        sub="Routing, billing, marketplace, and reporting — set up once and distribute live calls across your whole operation."
        onPrimary={onOpenWaitlist}
        secondaryLabel="Book a Demo"
        onSecondary={() => onNavigate('/contact')}
      />
    </main>
  );
}

export default FeaturesPage;
