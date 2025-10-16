import { Phone, MessageCircle, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function FloatingCTABar() {
  const { language } = useLanguage();

  const content = {
    fr: {
      call: 'Appeler',
      whatsapp: 'WhatsApp',
      maps: 'Maps',
      book: 'Prendre Rdv',
    },
    ar: {
      call: 'اتصل',
      whatsapp: 'واتساب',
      maps: 'خرائط',
      book: 'احجز',
    },
    en: {
      call: 'Call',
      whatsapp: 'WhatsApp',
      maps: 'Maps',
      book: 'Book',
    },
  };

  const c = content[language];

  const handleCall = () => {
    window.location.href = 'tel:+212520960611';
  };

  const handleWhatsApp = () => {
    const phone = '212665477745';
    const message = encodeURIComponent(
      language === 'fr'
        ? 'Bonjour, je souhaiterais prendre rendez-vous...'
        : language === 'ar'
        ? 'مرحباً، أود حجز موعد...'
        : 'Hello, I would like to book an appointment...'
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleMaps = () => {
    window.open('https://maps.app.goo.gl/LBgGJ254TNFkzZe27', '_blank');
  };

  const handleBook = () => {
    window.open('https://dentisto.ma/index.php/rendez-vous/docteurs/kamal-amar-2108', '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:max-w-2xl md:px-4">
      <div className="bg-primary text-primary-foreground shadow-2xl md:rounded-2xl border-t md:border border-primary/20">
        <div className="grid grid-cols-4 gap-0 md:gap-2 p-2">
          <Button
            onClick={handleCall}
            variant="ghost"
            className="flex-col h-auto py-3 px-2 gap-1 text-primary-foreground hover:bg-primary-foreground/20 hover-elevate active-elevate-2"
            data-testid="cta-call"
          >
            <Phone className="h-5 w-5" />
            <span className="text-xs font-medium">{c.call}</span>
          </Button>

          <Button
            onClick={handleWhatsApp}
            variant="ghost"
            className="flex-col h-auto py-3 px-2 gap-1 text-primary-foreground hover:bg-primary-foreground/20 hover-elevate active-elevate-2"
            data-testid="cta-whatsapp"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs font-medium">{c.whatsapp}</span>
          </Button>

          <Button
            onClick={handleMaps}
            variant="ghost"
            className="flex-col h-auto py-3 px-2 gap-1 text-primary-foreground hover:bg-primary-foreground/20 hover-elevate active-elevate-2"
            data-testid="cta-maps"
          >
            <MapPin className="h-5 w-5" />
            <span className="text-xs font-medium">{c.maps}</span>
          </Button>

          <Button
            onClick={handleBook}
            variant="ghost"
            className="flex-col h-auto py-3 px-2 gap-1 text-primary-foreground hover:bg-primary-foreground/20 hover-elevate active-elevate-2"
            data-testid="cta-book"
          >
            <Calendar className="h-5 w-5" />
            <span className="text-xs font-medium">{c.book}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
