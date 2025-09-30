import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const phone = '212XXXXXXXXX';
    const message = encodeURIComponent('Bonjour, je souhaiterais prendre rendez-vous...');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Informations de Contact</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Adresse</div>
                      <p className="text-muted-foreground">
                        Cabinet Dentaire Dr. Firdaous MOUSTAINE<br />
                        Casablanca, Maroc
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold mb-1">Téléphone</div>
                      <p className="text-muted-foreground mb-2">+212 5XX-XXXXXX</p>
                      <Button size="sm" variant="outline" data-testid="button-call">
                        Appeler maintenant
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-[#25D366]" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold mb-1">WhatsApp</div>
                      <p className="text-muted-foreground mb-2">Réservez rapidement via WhatsApp</p>
                      <Button
                        size="sm"
                        className="bg-[#25D366] hover:bg-[#20BA5A]"
                        onClick={handleWhatsAppClick}
                        data-testid="button-whatsapp-contact"
                      >
                        Envoyer un message
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <p className="text-muted-foreground">contact@dentiste-casa.ma</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Horaires d'ouverture</div>
                      <ul className="text-muted-foreground space-y-1">
                        <li>Lundi - Vendredi: 9h00 - 18h00</li>
                        <li>Samedi: 9h00 - 13h00</li>
                        <li className="text-sm">Dimanche: Fermé</li>
                      </ul>
                      <p className="text-sm text-primary mt-2">Urgences acceptées sur rendez-vous</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Formulaire de Contact</h2>
            <ContactForm />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Notre Emplacement</h2>
          <div className="rounded-lg overflow-hidden border h-96 bg-muted flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-2" />
              <p>Google Maps sera intégré ici</p>
              <p className="text-sm">Cabinet Dentaire Dr. Firdaous MOUSTAINE, Casablanca</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
