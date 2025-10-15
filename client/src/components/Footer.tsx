import { Link } from 'wouter';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

export default function Footer() {
  const { language, t } = useLanguage();
  const { localizePath } = useLocalizedPath();

  const services = {
    fr: [
      { href: 'services/whitening', label: 'Blanchiment Dentaire' },
      { href: 'services/implants', label: 'Implantologie' },
      { href: 'services/orthodontics', label: 'Orthodontie' },
      { href: 'services/pediatric', label: 'Pédodontie' },
    ],
    ar: [
      { href: 'services/whitening', label: 'تبييض الأسنان' },
      { href: 'services/implants', label: 'زراعة الأسنان' },
      { href: 'services/orthodontics', label: 'تقويم الأسنان' },
      { href: 'services/pediatric', label: 'طب أسنان الأطفال' },
    ],
    en: [
      { href: 'services/whitening', label: 'Teeth Whitening' },
      { href: 'services/implants', label: 'Dental Implants' },
      { href: 'services/orthodontics', label: 'Orthodontics' },
      { href: 'services/pediatric', label: 'Pediatric Dentistry' },
    ],
  };

  const copyright = {
    fr: '© 2025 Cabinet Dentaire Dr. Firdaous MOUSTAINE. Tous droits réservés.',
    ar: '© ٢٠٢٥ عيادة الأسنان للدكتورة فردوس مستين. جميع الحقوق محفوظة.',
    en: '© 2025 Dr. Firdaous MOUSTAINE Dental Clinic. All rights reserved.',
  };

  const contactLabel = {
    fr: 'Contact',
    ar: 'اتصل بنا',
    en: 'Contact',
  };

  const sundayClosed = {
    fr: 'Dimanche: Fermé',
    ar: 'الأحد: مغلق',
    en: 'Sunday: Closed',
  };

  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Dr. Firdaous MOUSTAINE</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('nav.services')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {services[language].map((service) => (
                <li key={service.href}>
                  <Link href={localizePath(service.href)} className="hover:text-primary transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{contactLabel[language]}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span dir="ltr">+212 520-960611</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span dir="ltr">moustainefirdaous@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {t('footer.hours')}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t('footer.hours.mon-fri')}</li>
              <li>{t('footer.hours.sat')}</li>
              <li className="text-xs pt-2">{sundayClosed[language]}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>{copyright[language]}</p>
        </div>
      </div>
    </footer>
  );
}
