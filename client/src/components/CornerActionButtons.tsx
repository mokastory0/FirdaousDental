import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface CornerActionButtonsProps {
  onWhatsAppClick?: () => void;
}

export default function CornerActionButtons({ onWhatsAppClick }: CornerActionButtonsProps) {
  const { language } = useLanguage();

  const content = {
    fr: {
      whatsapp: 'WhatsApp',
      call: 'Appeler',
      book: 'Prendre Rendez-Vous',
    },
    ar: {
      whatsapp: 'واتساب',
      call: 'اتصل',
      book: 'احجز موعد',
    },
    en: {
      whatsapp: 'WhatsApp',
      call: 'Call',
      book: 'Book Appointment',
    },
  };

  const c = content[language];

  const handleWhatsApp = () => {
    if (onWhatsAppClick) {
      // Open chat widget
      onWhatsAppClick();
    } else {
      // Fallback: direct WhatsApp link
      const phone = '212665477745';
      const messages = {
        fr: 'Bonjour, je souhaiterais prendre rendez-vous...',
        ar: 'مرحبا، أود حجز موعد...',
        en: 'Hello, I would like to book an appointment...',
      };
      const message = encodeURIComponent(messages[language]);
      window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    }
  };

  const handleCall = () => {
    // Small delay to allow GTM tracking to fire before navigation
    setTimeout(() => {
      window.location.href = 'tel:+212520960611';
    }, 300);
  };

  const handleBook = () => {
    // Preserve GCLID and other UTM parameters for Google Ads tracking
    const urlParams = new URLSearchParams(window.location.search);
    const gclid = urlParams.get('gclid');
    const baseUrl = 'https://dentisto.ma/index.php/rendez-vous/docteurs/kamal-amar-2108';
    const bookingUrl = gclid ? `${baseUrl}?gclid=${gclid}` : baseUrl;
    window.open(bookingUrl, '_blank');
  };

  return (
    <>
      {/* Mobile Bottom Bar - Modern 3-Button Layout */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl">
        <div className="flex items-center justify-between gap-2 px-3 py-3 max-w-full">
          {/* Call Button */}
          <Button
            onClick={handleCall}
            size="icon"
            className="h-[56px] w-[56px] flex-shrink-0 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20BA5A] text-white transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label={c.call}
            data-testid="cta-call-mobile"
          >
            <Phone className="h-5 w-5" />
          </Button>

          {/* Booking Button - Center, Prominent */}
          <Button
            onClick={handleBook}
            className="h-[56px] px-4 flex-1 rounded-full shadow-xl bg-[#EF4444] hover:bg-[#DC2626] text-white transition-all duration-300 hover:scale-105 active:scale-95 gap-2 font-bold text-sm [&>*]:pointer-events-none"
            aria-label={c.book}
            data-testid="cta-book-mobile"
          >
            <Calendar className="h-4 w-4" />
            <span className="truncate">{c.book}</span>
          </Button>

          {/* WhatsApp Button */}
          <Button
            onClick={handleWhatsApp}
            size="icon"
            className="h-[56px] w-[56px] flex-shrink-0 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20BA5A] text-white transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label={c.whatsapp}
            data-testid="cta-whatsapp-mobile"
          >
            <MessageCircle className="h-5 w-5 fill-current" />
          </Button>
        </div>
      </div>

      {/* Desktop Layout - Fixed Floating Buttons */}
      <div className="hidden md:block pointer-events-none">
        {/* Call Button - Bottom Left */}
        <div className="fixed bottom-6 left-6 z-[9999] pointer-events-auto">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleCall}
                size="icon"
                className="h-16 w-16 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label={c.call}
                data-testid="cta-call-fixed"
              >
                <Phone className="h-7 w-7" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" className="text-sm font-medium">
              {c.call}
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Booking Button - Bottom Center */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] pointer-events-auto">
          <Button
            onClick={handleBook}
            className="h-16 px-6 rounded-full shadow-2xl bg-[#EF4444] hover:bg-[#DC2626] text-white transition-all duration-300 hover:scale-105 active:scale-95 gap-2 font-bold text-base [&>*]:pointer-events-none"
            aria-label={c.book}
            data-testid="cta-book-floating"
          >
            <Calendar className="h-5 w-5" />
            <span>{c.book}</span>
          </Button>
        </div>

        {/* WhatsApp Button - Bottom Right with Label */}
        <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 pointer-events-auto">
          <span className="bg-[#25D366] text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
            {c.whatsapp}
          </span>
          <Button
            onClick={handleWhatsApp}
            size="icon"
            className="h-16 w-16 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label={c.whatsapp}
            data-testid="cta-whatsapp-fixed"
          >
            <MessageCircle className="h-7 w-7 fill-current" />
          </Button>
        </div>
      </div>
    </>
  );
}
