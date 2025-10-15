import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { language, t } = useLanguage();

  const content = {
    fr: {
      contactInfoTitle: 'Informations de Contact',
      addressLabel: 'Adresse',
      address: 'Cabinet Dentaire Dr. Firdaous MOUSTAINE\nImmeuble 3, étage 2, Numéro 7\nRésidence Nadia\n13 Bd Brahim Roudani\nCasablanca 20390, Morocco',
      phoneLabel: 'Téléphone',
      callNow: 'Appeler maintenant',
      whatsappLabel: 'WhatsApp',
      whatsappText: 'Réservez rapidement via WhatsApp',
      whatsappButton: 'Envoyer un message',
      emailLabel: 'Email',
      hoursLabel: 'Horaires d\'ouverture',
      hours1: 'Lundi - Vendredi: 9h00 - 18h00',
      hours2: 'Samedi: 9h00 - 13h00',
      hours3: 'Dimanche: Fermé',
      emergencyText: 'Urgences acceptées sur rendez-vous',
      bookingLabel: 'Prendre Rendez-vous',
      bookingText: 'Réservez votre consultation en ligne',
      bookingButton: 'Réserver maintenant',
      formTitle: 'Formulaire de Contact',
      mapTitle: 'Notre Emplacement',
      viewOnMaps: 'Voir sur Google Maps',
    },
    ar: {
      contactInfoTitle: 'معلومات الاتصال',
      addressLabel: 'العنوان',
      address: 'عيادة الأسنان للدكتورة فردوس مستين\nالعمارة ٣، الطابق ٢، رقم ٧\nإقامة نادية\n١٣ شارع إبراهيم الروداني\nالدار البيضاء ٢٠٣٩٠، المغرب',
      phoneLabel: 'الهاتف',
      callNow: 'اتصل الآن',
      whatsappLabel: 'واتساب',
      whatsappText: 'احجز بسرعة عبر واتساب',
      whatsappButton: 'أرسل رسالة',
      emailLabel: 'البريد الإلكتروني',
      hoursLabel: 'ساعات العمل',
      hours1: 'الإثنين - الجمعة: ٩:٠٠ - ١٨:٠٠',
      hours2: 'السبت: ٩:٠٠ - ١٣:٠٠',
      hours3: 'الأحد: مغلق',
      emergencyText: 'الطوارئ تقبل بموعد',
      bookingLabel: 'حجز موعد',
      bookingText: 'احجز استشارتك عبر الإنترنت',
      bookingButton: 'احجز الآن',
      formTitle: 'نموذج الاتصال',
      mapTitle: 'موقعنا',
      viewOnMaps: 'عرض على خرائط جوجل',
    },
    en: {
      contactInfoTitle: 'Contact Information',
      addressLabel: 'Address',
      address: 'Dr. Firdaous MOUSTAINE Dental Clinic\nBuilding 3, 2nd Floor, Nb 7\nRésidence Nadia\n13 Bd Brahim Roudani\nCasablanca 20390, Morocco',
      phoneLabel: 'Phone',
      callNow: 'Call now',
      whatsappLabel: 'WhatsApp',
      whatsappText: 'Book quickly via WhatsApp',
      whatsappButton: 'Send message',
      emailLabel: 'Email',
      hoursLabel: 'Opening Hours',
      hours1: 'Monday - Friday: 9:00 AM - 6:00 PM',
      hours2: 'Saturday: 9:00 AM - 1:00 PM',
      hours3: 'Sunday: Closed',
      emergencyText: 'Emergencies accepted by appointment',
      bookingLabel: 'Book Appointment',
      bookingText: 'Schedule your consultation online',
      bookingButton: 'Book now',
      formTitle: 'Contact Form',
      mapTitle: 'Our Location',
      viewOnMaps: 'View on Google Maps',
    },
  };

  const c = content[language];

  const handleWhatsAppClick = () => {
    const phone = '212520960611';
    const message = encodeURIComponent(
      language === 'fr'
        ? 'Bonjour, je souhaiterais prendre rendez-vous...'
        : language === 'ar'
        ? 'مرحباً، أود حجز موعد...'
        : 'Hello, I would like to book an appointment...'
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleBookingClick = () => {
    window.open('https://dentisto.ma/index.php/rendez-vous/docteurs/kamal-amar-2108', '_blank');
  };

  const handleMapsClick = () => {
    window.open('https://maps.app.goo.gl/LBgGJ254TNFkzZe27', '_blank');
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
            <h2 className="text-2xl font-bold mb-6">{c.contactInfoTitle}</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold mb-1">{c.addressLabel}</div>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {c.address}
                      </p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="mt-3"
                        onClick={handleMapsClick}
                        data-testid="button-view-maps"
                      >
                        {c.viewOnMaps}
                      </Button>
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
                      <div className="font-semibold mb-1">{c.phoneLabel}</div>
                      <p className="text-muted-foreground mb-2" dir="ltr">+212 520-960611</p>
                      <a href="tel:+212520960611">
                        <Button size="sm" variant="outline" data-testid="button-call">
                          {c.callNow}
                        </Button>
                      </a>
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
                      <div className="font-semibold mb-1">{c.whatsappLabel}</div>
                      <p className="text-muted-foreground mb-2">{c.whatsappText}</p>
                      <Button
                        size="sm"
                        className="bg-[#25D366] hover:bg-[#20BA5A]"
                        onClick={handleWhatsAppClick}
                        data-testid="button-whatsapp-contact"
                      >
                        {c.whatsappButton}
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
                      <div className="font-semibold mb-1">{c.emailLabel}</div>
                      <p className="text-muted-foreground" dir="ltr">moustainefirdaous@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold mb-1">{c.bookingLabel}</div>
                      <p className="text-muted-foreground mb-2">{c.bookingText}</p>
                      <Button
                        size="sm"
                        onClick={handleBookingClick}
                        data-testid="button-book-online"
                      >
                        {c.bookingButton}
                      </Button>
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
                      <div className="font-semibold mb-1">{c.hoursLabel}</div>
                      <ul className="text-muted-foreground space-y-1">
                        <li>{c.hours1}</li>
                        <li>{c.hours2}</li>
                        <li className="text-sm">{c.hours3}</li>
                      </ul>
                      <p className="text-sm text-primary mt-2">{c.emergencyText}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">{c.formTitle}</h2>
            <ContactForm />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">{c.mapTitle}</h2>
          <div className="rounded-lg overflow-hidden border h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8739462857573!2d-7.628289!3d33.589167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd49b3c1e1fb%3A0x7e3e3e3e3e3e3e3e!2s13%20Bd%20Brahim%20Roudani%2C%20Casablanca%2020390!5e0!3m2!1sen!2sma!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={c.mapTitle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
