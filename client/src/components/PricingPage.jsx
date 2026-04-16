import PricingHero from './PricingHero';
import PricingProductOverview from './PricingProductOverview';
import PricingFAQ from './PricingFAQ';
import IndustrySolutions from './IndustrySolutions';
import Footer from './Footer';

function PricingPage({ onOpenWaitlist }) {
  return (
    <>
      <main>
        <PricingHero onOpenWaitlist={onOpenWaitlist} />
        <PricingProductOverview />
        <PricingFAQ />
        <IndustrySolutions onOpenWaitlist={onOpenWaitlist} />
      </main>
      <Footer onOpenWaitlist={onOpenWaitlist} />
    </>
  );
}

export default PricingPage;
