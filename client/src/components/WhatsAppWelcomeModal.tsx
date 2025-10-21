import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
// Using optimized WebP logo from public/images
const logoImage = '/images/dr-firdaous-logo.webp';
const logoImage2x = '/images/dr-firdaous-logo@2x.webp';

export default function WhatsAppWelcomeModal() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const content = {
    fr: {
      title: 'Bienvenue! 👋',
      description: 'Comment pouvons-nous vous aider?',
      subtitle: 'Réponse rapide via WhatsApp',
      whatsappButton: 'Discuter sur WhatsApp',
      alternativeText: 'Ou appelez-nous:',
      phone: '+212 520-960611',
      dontShowAgain: 'Ne plus afficher ce message',
    },
    ar: {
      title: 'مرحباً! 👋',
      description: 'كيف يمكننا مساعدتك؟',
      subtitle: 'رد سريع عبر واتساب',
      whatsappButton: 'تحدث على واتساب',
      alternativeText: 'أو اتصل بنا:',
      phone: '+212 520-960611',
      dontShowAgain: 'لا تظهر هذه الرسالة مرة أخرى',
    },
    en: {
      title: 'Welcome! 👋',
      description: 'How can we help you?',
      subtitle: 'Quick response via WhatsApp',
      whatsappButton: 'Chat on WhatsApp',
      alternativeText: 'Or call us:',
      phone: '+212 520-960611',
      dontShowAgain: "Don't show this message again",
    },
  };

  const c = content[language];

  useEffect(() => {
    // Check if user has dismissed the modal before
    const hasSeenModal = localStorage.getItem('whatsapp-modal-dismissed');
    
    if (!hasSeenModal) {
      // Show modal after 4 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleWhatsAppClick = () => {
    const phone = '212665477745';
    const messages = {
      fr: 'Bonjour, je souhaiterais prendre rendez-vous...',
      ar: 'مرحبا، أود حجز موعد...',
      en: 'Hello, I would like to book an appointment...',
    };
    const message = encodeURIComponent(messages[language]);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    handleClose();
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+212520960611';
    handleClose();
  };

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('whatsapp-modal-dismissed', 'true');
    }
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent 
        className="sm:max-w-md"
        data-testid="modal-whatsapp-welcome"
      >
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          data-testid="modal-whatsapp-welcome-close"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader className="text-center space-y-3">
          <div className="flex justify-center mb-2">
            <img 
              src={logoImage} 
              alt="Dr. Firdaous MOUSTAINE" 
              className="h-16 w-16 object-contain"
            />
          </div>
          <DialogTitle className="text-2xl font-bold text-center">
            {c.title}
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            {c.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              {c.subtitle}
            </p>
            
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2 text-base font-semibold py-6"
              data-testid="modal-whatsapp-welcome-button"
            >
              <MessageCircle className="h-5 w-5" />
              {c.whatsappButton}
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {c.alternativeText}
              </span>
            </div>
          </div>

          <Button
            onClick={handleCallClick}
            variant="outline"
            size="lg"
            className="w-full gap-2 text-base py-6"
            data-testid="modal-whatsapp-welcome-call"
          >
            <span dir="ltr">{c.phone}</span>
          </Button>

          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="dont-show"
              checked={dontShowAgain}
              onCheckedChange={(checked) => setDontShowAgain(checked as boolean)}
              data-testid="modal-whatsapp-welcome-checkbox"
            />
            <label
              htmlFor="dont-show"
              className="text-sm text-muted-foreground cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {c.dontShowAgain}
            </label>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
