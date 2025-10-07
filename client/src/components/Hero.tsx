import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { Link } from 'wouter';
import heroImage from '@assets/dentistback_1759836434776.jpg';

export default function Hero() {
  const { t } = useLanguage();
  const { localizePath } = useLocalizedPath();

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
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
        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed opacity-95 drop-shadow">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link href={localizePath('contact')}>
            <Button size="lg" className="text-lg px-8" data-testid="button-cta-primary">
              {t('hero.cta.primary')}
            </Button>
          </Link>
          <Link href={localizePath('services')}>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-background/20 backdrop-blur-sm border-white/30 text-white hover:bg-background/30"
              data-testid="button-cta-secondary"
            >
              {t('hero.cta.secondary')}
            </Button>
          </Link>
        </div>

        <div className="inline-block px-6 py-3 bg-background/20 backdrop-blur-md rounded-lg border border-white/20">
          <p className="text-sm md:text-base font-medium">{t('hero.rating')}</p>
        </div>
      </div>
    </section>
  );
}
