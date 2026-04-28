import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import IndustrySolutions from './IndustrySolutions';
import Footer from './Footer';

function ContactPage({ onOpenWaitlist }) {
  return (
    <>
      <main>
        <ContactHero onOpenWaitlist={onOpenWaitlist} />
        <ContactForm onOpenWaitlist={onOpenWaitlist} />
        <ContactMap onOpenWaitlist={onOpenWaitlist} />
        <IndustrySolutions onOpenWaitlist={onOpenWaitlist} />
      </main>
      <Footer onOpenWaitlist={onOpenWaitlist} />
    </>
  );
}

export default ContactPage;
