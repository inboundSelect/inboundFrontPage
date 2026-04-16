import FeaturesHero from './FeaturesHero';
import KeyFeaturesBenefits from './KeyFeaturesBenefits';
import FeaturesProductOverview from './FeaturesProductOverview';
import MarketingHub from './MarketingHub';
import FeaturesEnterpriseSecurity from './FeaturesEnterpriseSecurity';
import PricingSection from './PricingSection';
import WhyErphoria from './WhyErphoria';
import FeaturesCTA from './FeaturesCTA';

function FeaturesPage({ onOpenWaitlist }) {
  return (
    <main>
      <FeaturesHero onOpenWaitlist={onOpenWaitlist} />
      <KeyFeaturesBenefits />
      <FeaturesProductOverview />
      <MarketingHub onOpenWaitlist={onOpenWaitlist} />
      <FeaturesEnterpriseSecurity onOpenWaitlist={onOpenWaitlist} />
      <PricingSection onOpenWaitlist={onOpenWaitlist} />
      <WhyErphoria />
      <FeaturesCTA onOpenWaitlist={onOpenWaitlist} />
    </main>
  );
}

export default FeaturesPage;
