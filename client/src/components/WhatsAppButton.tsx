import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WhatsAppButton() {
  const { language } = useLanguage();

  const messages = {
    fr: 'Bonjour, je souhaiterais prendre rendez-vous...',
    ar: 'مرحبا، أود حجز موعد...',
    en: 'Hello, I would like to book an appointment...',
  };

  const handleWhatsAppClick = () => {
    const phone = '212520960611';
    const message = encodeURIComponent(messages[language]);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <Button
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20BA5A] text-white z-50 animate-pulse"
      onClick={handleWhatsAppClick}
      data-testid="button-whatsapp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}
