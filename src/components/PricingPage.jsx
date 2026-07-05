import PricingHero from './PricingHero';
import PricingProductOverview from './PricingProductOverview';
import PricingFAQ from './PricingFAQ';
import IndustrySolutions from './IndustrySolutions';
import CtaBand from './CtaBand';

function PricingPage({ onOpenWaitlist, onNavigate }) {
  return (
    <main id="main">
      <PricingHero onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
      <PricingProductOverview />
      <PricingFAQ />
      <IndustrySolutions onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
      <CtaBand
        title="Not sure which plan fits?"
        titleAccent="Let's map it out."
        sub="Platform fees are waived during beta. Apply for access or book a demo and we'll confirm the right setup for your team."
        onPrimary={onOpenWaitlist}
        secondaryLabel="Book a Demo"
        onSecondary={() => onNavigate('/contact')}
      />
    </main>
  );
}

export default PricingPage;
