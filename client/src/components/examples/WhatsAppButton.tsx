import WhatsAppButton from '../WhatsAppButton';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function WhatsAppButtonExample() {
  return (
    <LanguageProvider>
      <div className="relative h-64">
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}
