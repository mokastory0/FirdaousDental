import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import logoImage from '@assets/ChatGPT Image Oct 15, 2025, 10_01_54 PM_1760562210918.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t, language } = useLanguage();
  const { localizePath } = useLocalizedPath();

  const doctorName = {
    fr: 'Dr. Firdaous MOUSTAINE',
    ar: 'د. فردوس موستين',
    en: 'Dr. Firdaous MOUSTAINE',
  };

  const navItems = [
    { path: '', label: t('nav.home') },
    { path: 'services', label: t('nav.services') },
    { path: 'about', label: t('nav.about') },
    { path: 'testimonials', label: t('nav.testimonials') },
    { path: 'faq', label: t('nav.faq') },
    { path: 'blog', label: t('nav.blog') },
    { path: 'contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => {
    const localizedPath = localizePath(path);
    return location === localizedPath;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-1">
          <Link href={localizePath('')} className="flex items-center gap-1.5 md:gap-3 flex-1 min-w-0 overflow-hidden" data-testid="link-home">
            <img 
              src={logoImage} 
              alt="Dr. Firdaous MOUSTAINE" 
              className="h-8 w-8 md:h-12 md:w-12 object-contain flex-shrink-0"
            />
            <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
              <div className="text-xs md:text-xl font-bold text-primary leading-tight truncate">{doctorName[language]}</div>
              <div className="hidden md:block text-xs text-muted-foreground">{t('nav.logo.subtitle')}</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} href={localizePath(item.path)}>
                <Button
                  variant={isActive(item.path) ? 'secondary' : 'ghost'}
                  size="sm"
                  data-testid={`link-${item.label.toLowerCase()}`}
                  className="hover-elevate"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button size="sm" className="gap-2" data-testid="button-call-header">
              <Phone className="h-4 w-4" />
              {t('cta.call')}
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-0.5 flex-shrink-0">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} href={localizePath(item.path)}>
                <Button
                  variant={isActive(item.path) ? 'secondary' : 'ghost'}
                  className="w-full justify-start hover-elevate"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
