import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import IndustrySolutions from './IndustrySolutions';

function ContactPage({ onOpenWaitlist, onNavigate }) {
  return (
    <main id="main">
      <ContactHero onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
      <ContactForm onOpenWaitlist={onOpenWaitlist} />
      <ContactMap onOpenWaitlist={onOpenWaitlist} />
      <IndustrySolutions onOpenWaitlist={onOpenWaitlist} onNavigate={onNavigate} />
    </main>
  );
}

export default ContactPage;
