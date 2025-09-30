import FAQItem from '../FAQItem';
import { Accordion } from '@/components/ui/accordion';

export default function FAQItemExample() {
  return (
    <div className="p-4 max-w-2xl">
      <Accordion type="single" collapsible>
        <FAQItem
          value="item-1"
          question="Comment prendre rendez-vous ?"
          answer="Vous pouvez prendre rendez-vous par téléphone, WhatsApp, ou via notre formulaire en ligne. Nous vous confirmerons votre rendez-vous dans les plus brefs délais."
        />
        <FAQItem
          value="item-2"
          question="Acceptez-vous les urgences dentaires ?"
          answer="Oui, nous acceptons les urgences dentaires. Contactez-nous immédiatement et nous ferons notre possible pour vous recevoir le jour même."
        />
      </Accordion>
    </div>
  );
}
