import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { Link } from 'wouter';
import { Phone, Calendar, Award, Users, Star, ChevronDown } from 'lucide-react';
import heroImage from '@assets/dentistback_1759836434776.jpg';
import googleMapsIcon from '@assets/googlemaps.png';

export default function Hero() {
  const { t, language } = useLanguage();
  const { localizePath } = useLocalizedPath();

  const handleBooking = () => {
    // Preserve GCLID for Google Ads conversion tracking
    const urlParams = new URLSearchParams(window.location.search);
    const gclid = urlParams.get('gclid');
    const baseUrl = 'https://dentisto.ma/index.php/rendez-vous/docteurs/kamal-amar-2108';
    const bookingUrl = gclid ? `${baseUrl}?gclid=${gclid}` : baseUrl;
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-4 md:pt-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 md:from-black/70 md:via-black/50 md:to-black/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16 text-center text-white">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4 md:mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
          <Award className="h-4 w-4 text-yellow-400" />
          <span className="text-sm font-semibold">{t('hero.badge')}</span>
        </div>

        {/* Main Heading with Animation */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          {t('hero.title')}
        </h1>
        
        <p className="text-lg md:text-2xl mb-6 font-medium drop-shadow-md animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          {t('hero.subtitle')}
        </p>
        
        <p className="text-sm md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed opacity-95 drop-shadow animate-in fade-in duration-700 delay-500">
          {t('hero.description')} <strong className="font-bold">{t('hero.languages')}</strong>.
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8 animate-in fade-in duration-700 delay-700">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg">
            <Star className="h-5 w-5 text-yellow-400" />
            <div className="text-left">
              <p className="text-2xl font-bold">5.0</p>
              <p className="text-xs opacity-75">{t('hero.stat.reviews')}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg">
            <Award className="h-5 w-5 text-primary" />
            <div className="text-left">
              <p className="text-base font-bold">{t('hero.stat.experience')}</p>
            </div>
          </div>
        </div>
        
        {/* Parking Info with Maps Button */}
        <div className="flex items-center justify-center gap-3 mb-6 text-sm md:text-base opacity-90 animate-in fade-in duration-700 delay-1000">
          <a
            href="https://maps.app.goo.gl/LBgGJ254TNFkzZe27"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-white hover:bg-white/95 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex-shrink-0"
            data-testid="button-hero-maps"
          >
            <img src={googleMapsIcon} alt="Google Maps" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
          </a>
          <span className="drop-shadow">{t('hero.parking')}</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 px-4 max-w-4xl mx-auto">
          {/* Booking Button - Primary CTA */}
          <button
            onClick={handleBooking}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full text-base font-bold shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 whitespace-nowrap [&>*]:pointer-events-none"
            data-testid="button-hero-booking"
          >
            <Calendar className="h-5 w-5 flex-shrink-0" />
            <span>{t('hero.cta.book')}</span>
          </button>

          {/* Call Button - Secondary CTA */}
          <a 
            href="tel:+212520960611" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-base font-semibold shadow-xl backdrop-blur-md border-2 border-white/30 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            data-testid="button-hero-phone"
          >
            <Phone className="h-5 w-5 flex-shrink-0" />
            <div className="flex flex-col items-start min-w-0">
              <span className="text-xs opacity-90">{t('hero.phone')}</span>
              <span className="font-bold text-sm" dir="ltr">+212 520-960611</span>
            </div>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 opacity-75" />
        </div>
      </div>
    </section>
  );
}
