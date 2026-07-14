import PricingHero from './PricingHero';
import PricingProductOverview from './PricingProductOverview';
import PricingFAQ from './PricingFAQ';
import IndustrySolutions from './IndustrySolutions';
import Footer from './Footer';

function PricingPage({ onOpenWaitlist, onNavigate }) {
  return (
    <>
      <main>
        <PricingHero onOpenWaitlist={onOpenWaitlist} />
        <PricingProductOverview />
        <PricingFAQ />
        <IndustrySolutions onOpenWaitlist={onOpenWaitlist} />
      </main>
      <Footer onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
    </>
  );
}

export default PricingPage;
