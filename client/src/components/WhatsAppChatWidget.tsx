import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import logoImage from '@assets/ChatGPT Image Oct 15, 2025, 10_01_54 PM_1760562210918.png';

export interface WhatsAppChatWidgetRef {
  open: () => void;
  toggle: () => void;
  close: () => void;
}

const WhatsAppChatWidget = forwardRef<WhatsAppChatWidgetRef>((props, ref) => {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsVisible(true);
      setIsExpanded(true);
    },
    toggle: () => {
      if (isExpanded) {
        setIsExpanded(false);
      } else {
        setIsVisible(true);
        setIsExpanded(true);
      }
    },
    close: () => {
      setIsExpanded(false);
    }
  }));

  const content = {
    fr: {
      greeting: 'Une question? Discutons!',
      title: 'Cabinet Dentaire Dr. Firdaous MOUSTAINE',
      message: 'Bonjour 👋\n\nComment puis-je vous aider?',
      whatsappButton: 'Commencer le chat',
      callButton: 'Ou appelez-nous:',
      phone: '+212 520-960611',
      closeTooltip: 'Fermer',
      online: 'En ligne',
    },
    ar: {
      greeting: 'سؤال؟ دعنا نتحدث!',
      title: 'عيادة الأسنان د. فردوس مستين',
      message: 'مرحباً 👋\n\nكيف يمكنني مساعدتك؟',
      whatsappButton: 'ابدأ المحادثة',
      callButton: 'أو اتصل بنا:',
      phone: '+212 520-960611',
      closeTooltip: 'إغلاق',
      online: 'متصل',
    },
    en: {
      greeting: 'Question? Let\'s chat!',
      title: 'Dr. Firdaous MOUSTAINE Dental Clinic',
      message: 'Hello 👋\n\nHow can I help you?',
      whatsappButton: 'Start chat',
      callButton: 'Or call us:',
      phone: '+212 520-960611',
      closeTooltip: 'Close',
      online: 'Online',
    },
  };

  const c = content[language];

  useEffect(() => {
    // Check if widget has been dismissed in this session
    const dismissed = sessionStorage.getItem('chat-widget-dismissed');
    
    if (!dismissed && !hasShown) {
      // Show widget after user scrolls a bit or after 8 seconds
      const handleScroll = () => {
        if (window.scrollY > 300 && !isVisible) {
          setIsVisible(true);
          setHasShown(true);
          window.removeEventListener('scroll', handleScroll);
        }
      };

      const timer = setTimeout(() => {
        if (!isVisible) {
          setIsVisible(true);
          setHasShown(true);
        }
      }, 8000);

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
      };
    }
  }, [hasShown, isVisible]);

  const handleWhatsApp = () => {
    const phone = '212665477745';
    const messages = {
      fr: 'Bonjour, je souhaiterais prendre rendez-vous...',
      ar: 'مرحبا، أود حجز موعد...',
      en: 'Hello, I would like to book an appointment...',
    };
    const message = encodeURIComponent(messages[language]);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+212520960611';
  };

  const handleClose = () => {
    setIsExpanded(false);
    setIsVisible(false);
    sessionStorage.setItem('chat-widget-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-24 md:bottom-28 right-6 z-40"
      data-testid="chat-widget-container"
    >
      {/* Expanded Chat Card - Simple Popup Style */}
      {isExpanded && (
        <div 
          className="fixed bottom-[88px] md:bottom-28 right-4 md:right-6 w-[calc(100vw-2rem)] max-w-sm md:w-96 max-h-[calc(100vh-180px)] md:max-h-[600px] bg-[#ECE5DD] border border-border rounded-2xl shadow-2xl overflow-y-auto animate-in slide-in-from-bottom-4 duration-300 z-50"
          data-testid="chat-widget-expanded"
        >
          {/* Header - WhatsApp Dark Green - Sticky */}
          <div className="sticky top-0 bg-[#075E54] text-white p-4 flex items-center justify-between z-10 shadow-md">
            <h3 className="font-semibold text-sm pr-8">{c.title}</h3>
            <button
              onClick={handleClose}
              className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-white/10 rounded-full p-2 transition-colors"
              aria-label={c.closeTooltip}
              data-testid="chat-widget-close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Message Body */}
          <div className="p-6 space-y-4">
            {/* Message Bubble - Light Green (Sent Message Style) */}
            <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none p-4 shadow-sm relative ml-auto max-w-[85%]">
              <div className="absolute -right-2 top-0 w-0 h-0 border-t-[10px] border-t-[#DCF8C6] border-l-[10px] border-l-transparent" />
              <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-line">
                {c.message}
              </p>
            </div>

            {/* WhatsApp Button */}
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2 font-semibold shadow-md"
              data-testid="chat-widget-whatsapp"
            >
              <MessageCircle className="h-5 w-5 fill-current" />
              {c.whatsappButton}
            </Button>

            {/* Divider with "Or" */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-400" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#ECE5DD] px-2 text-gray-600">
                  {c.callButton}
                </span>
              </div>
            </div>

            {/* Call Button */}
            <Button
              onClick={handleCall}
              variant="outline"
              size="lg"
              className="w-full gap-2 font-semibold bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
              data-testid="chat-widget-call"
            >
              <Phone className="h-5 w-5" />
              <span dir="ltr">{c.phone}</span>
            </Button>

            {/* Online Status */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-600 dark:text-gray-400">
              <span className="h-2 w-2 bg-[#25D366] rounded-full animate-pulse" />
              <span>{c.online}</span>
            </div>
          </div>
        </div>
      )}

      {/* Collapsed Chat Button - Hidden (controlled by bottom button) */}
      {!isExpanded && isVisible && (
        <button
          onClick={() => setIsExpanded(true)}
          className="hidden group bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl px-5 py-3.5 items-center gap-3 transition-all duration-300 hover:scale-105 animate-in slide-in-from-right-4"
          data-testid="chat-widget-button"
        >
          <div className="relative">
            <MessageCircle className="h-6 w-6 fill-current" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-white rounded-full border-2 border-[#25D366] animate-pulse" />
          </div>
          <span className="font-semibold text-sm md:text-base">{c.greeting}</span>
        </button>
      )}
    </div>
  );
});

WhatsAppChatWidget.displayName = 'WhatsAppChatWidget';

export default WhatsAppChatWidget;
