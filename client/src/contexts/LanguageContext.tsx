import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  fr: {
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.testimonials': 'Avis',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'cta.book': 'Prendre Rendez-vous',
    'cta.call': 'Appeler',
    'cta.whatsapp': 'WhatsApp',
    'hero.title': 'Votre sourire, notre priorité',
    'hero.subtitle': 'Cabinet Dentaire Moderne à Casablanca',
    'hero.description': 'Découvrez des soins dentaires d\'exception avec les dernières technologies. Dr. Firdaous MOUSTAINE et son équipe vous accueillent dans un environnement moderne et chaleureux.',
    'hero.cta.primary': 'Prendre Rendez-vous',
    'hero.cta.secondary': 'Nos Services',
    'hero.rating': '4.8★ sur Google | 250+ avis patients',
    'services.title': 'Nos Services',
    'services.subtitle': 'Des soins dentaires complets pour toute la famille',
    'about.title': 'Dr. Firdaous MOUSTAINE',
    'about.subtitle': 'Dentiste experte à Casablanca',
    'footer.address': 'Cabinet Dentaire Dr. Firdaous MOUSTAINE, Casablanca, Maroc',
    'footer.phone': 'Téléphone',
    'footer.email': 'Email',
    'footer.hours': 'Horaires',
    'footer.hours.mon-fri': 'Lun-Ven: 9h00 - 18h00',
    'footer.hours.sat': 'Sam: 9h00 - 13h00',
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Prenez rendez-vous ou posez vos questions',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.about': 'من نحن',
    'nav.testimonials': 'آراء المرضى',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'cta.book': 'احجز موعد',
    'cta.call': 'اتصل',
    'cta.whatsapp': 'واتساب',
    'hero.title': 'ابتسامتك، أولويتنا',
    'hero.subtitle': 'عيادة أسنان حديثة في الدار البيضاء',
    'hero.description': 'اكتشف رعاية أسنان استثنائية بأحدث التقنيات. الدكتورة فردوس مستين وفريقها يرحبون بكم في بيئة حديثة ودافئة.',
    'hero.cta.primary': 'احجز موعد',
    'hero.cta.secondary': 'خدماتنا',
    'hero.rating': '4.8★ على جوجل | أكثر من 250 مراجعة',
    'services.title': 'خدماتنا',
    'services.subtitle': 'رعاية أسنان شاملة لجميع أفراد الأسرة',
    'about.title': 'د. فردوس مستين',
    'about.subtitle': 'طبيبة أسنان خبيرة في الدار البيضاء',
    'footer.address': 'عيادة د. فردوس مستين، الدار البيضاء، المغرب',
    'footer.phone': 'الهاتف',
    'footer.email': 'البريد الإلكتروني',
    'footer.hours': 'ساعات العمل',
    'footer.hours.mon-fri': 'الإثنين-الجمعة: 9:00 - 18:00',
    'footer.hours.sat': 'السبت: 9:00 - 13:00',
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'احجز موعد أو اطرح أسئلتك',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'cta.book': 'Book Appointment',
    'cta.call': 'Call',
    'cta.whatsapp': 'WhatsApp',
    'hero.title': 'Your smile, our priority',
    'hero.subtitle': 'Modern Dental Clinic in Casablanca',
    'hero.description': 'Discover exceptional dental care with the latest technologies. Dr. Firdaous MOUSTAINE and her team welcome you in a modern and warm environment.',
    'hero.cta.primary': 'Book Appointment',
    'hero.cta.secondary': 'Our Services',
    'hero.rating': '4.8★ on Google | 250+ patient reviews',
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive dental care for the whole family',
    'about.title': 'Dr. Firdaous MOUSTAINE',
    'about.subtitle': 'Expert Dentist in Casablanca',
    'footer.address': 'Cabinet Dentaire Dr. Firdaous MOUSTAINE, Casablanca, Morocco',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.hours': 'Office Hours',
    'footer.hours.mon-fri': 'Mon-Fri: 9:00 AM - 6:00 PM',
    'footer.hours.sat': 'Sat: 9:00 AM - 1:00 PM',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Book an appointment or ask your questions',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null;
    if (saved && ['fr', 'ar', 'en'].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div className={language === 'ar' ? 'font-[Cairo]' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
