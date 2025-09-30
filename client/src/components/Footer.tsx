import { Link } from 'wouter';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

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
              <li><Link href="/services/whitening" className="hover:text-primary transition-colors">Blanchiment Dentaire</Link></li>
              <li><Link href="/services/implants" className="hover:text-primary transition-colors">Implantologie</Link></li>
              <li><Link href="/services/orthodontics" className="hover:text-primary transition-colors">Orthodontie</Link></li>
              <li><Link href="/services/pediatric" className="hover:text-primary transition-colors">Pédodontie</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+212 5XX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contact@dentiste-casa.ma</span>
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
              <li className="text-xs pt-2">Dimanche: Fermé</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Cabinet Dentaire Dr. Firdaous MOUSTAINE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
