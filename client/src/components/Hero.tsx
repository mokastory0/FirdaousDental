import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { Link } from 'wouter';
import { CarFront, Phone } from 'lucide-react';
import heroImage from '@assets/dentistback_1759836434776.jpg';

export default function Hero() {
  const { t, language } = useLanguage();
  const { localizePath } = useLocalizedPath();

  return (
    <section className="relative min-h-screen md:min-h-[70vh] md:h-[70vh] flex items-center justify-center overflow-hidden pt-[var(--header-height)] md:pt-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-2 font-medium drop-shadow-md">
          {t('hero.subtitle')}
        </p>
        <p className="text-base md:text-lg mb-4 max-w-2xl mx-auto leading-relaxed opacity-95 drop-shadow">
          {t('hero.description')} <strong className="font-bold">{t('hero.languages')}</strong>.
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-6 text-sm md:text-base opacity-90">
          <CarFront className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
          <span className="drop-shadow">{t('hero.parking')}</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6">
          <a 
            href="tel:+212520960611" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary/90 hover:bg-primary text-white rounded-full text-lg md:text-xl font-semibold shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            data-testid="button-hero-phone"
          >
            <Phone className="h-5 w-5 md:h-6 md:w-6 animate-pulse" />
            <div className="flex flex-col items-start">
              <span className="text-xs md:text-sm opacity-90">{t('hero.phone')}</span>
              <span className="font-bold" dir="ltr">+212 520-960611</span>
            </div>
          </a>

          <div className="inline-block px-6 py-3 bg-background/20 backdrop-blur-md rounded-lg border border-white/20">
            <p className="text-sm md:text-base font-medium">{t('hero.rating')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
