import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { translations, Language } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useLocation();
  const [language, setLanguageState] = useState<Language>('fr');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('language', lang);

    // Update URL to include language prefix
    const currentPath = location.replace(/^\/(en|ar|fr)/, '') || '/';
    setLocation(`/${lang}${currentPath}`);
  };

  useEffect(() => {
    // Extract language from URL
    const pathParts = location.split('/').filter(Boolean);
    const urlLang = pathParts[0];
    
    if (urlLang && ['fr', 'ar', 'en'].includes(urlLang)) {
      // Valid language in URL - always sync state, document, and localStorage
      const newLang = urlLang as Language;
      setLanguageState(newLang);
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
      localStorage.setItem('language', newLang);
    } else {
      // No valid language in URL, redirect to saved or default language
      const saved = localStorage.getItem('language') as Language | null;
      const defaultLang = (saved && ['fr', 'ar', 'en'].includes(saved)) ? saved : 'fr';
      
      // Strip invalid locale prefix if present
      const cleanPath = urlLang && !['fr', 'ar', 'en'].includes(urlLang)
        ? '/' + pathParts.slice(1).join('/')
        : location || '/';
      
      setLocation(`/${defaultLang}${cleanPath === '/' ? '' : cleanPath}`);
    }
  }, [location]);

  const t = (key: string): string => {
    const langTranslations = translations[language] as Record<string, string>;
    return langTranslations[key] || key;
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
