import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

export default function FAQItem({ question, answer, value }: FAQItemProps) {
  return (
    <AccordionItem value={value} data-testid={`faq-item-${value}`}>
      <AccordionTrigger className="text-left hover:no-underline">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground leading-relaxed">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}
