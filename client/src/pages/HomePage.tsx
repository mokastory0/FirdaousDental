import { Link } from 'wouter';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Sparkles, Crown, Anchor, Smile, Braces, Baby, Heart, Stethoscope, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import equipmentImage from '@assets/generated_images/Modern_dental_equipment_technology_344d1782.png';

export default function HomePage() {
  const { t } = useLanguage();

  // todo: remove mock functionality
  const services = [
    {
      icon: Sparkles,
      title: 'Blanchiment Dentaire',
      description: 'Un sourire éclatant grâce à nos techniques professionnelles de blanchiment dentaire sûres et efficaces à Casablanca.',
      href: '/services/whitening',
    },
    {
      icon: Crown,
      title: 'Couronne et Bridge',
      description: 'Restauration dentaire de haute qualité avec des couronnes et bridges durables pour retrouver votre sourire.',
      href: '/services/crowns',
    },
    {
      icon: Anchor,
      title: 'Implantologie',
      description: 'Implants dentaires pour remplacer les dents manquantes avec des solutions permanentes et naturelles.',
      href: '/services/implants',
    },
    {
      icon: Smile,
      title: 'Prothèse Dentaire',
      description: 'Prothèses dentaires personnalisées, partielles ou complètes, pour restaurer votre fonction masticatoire.',
      href: '/services/dentures',
    },
    {
      icon: Braces,
      title: 'Orthodontie',
      description: 'Alignement dentaire avec Invisalign et appareils orthodontiques pour tous les âges à Casablanca.',
      href: '/services/orthodontics',
    },
    {
      icon: Baby,
      title: 'Pédodontie',
      description: 'Soins dentaires pédiatriques spécialisés pour les enfants dans un environnement rassurant.',
      href: '/services/pediatric',
    },
    {
      icon: Heart,
      title: 'Parodontologie',
      description: 'Traitement et prévention des maladies des gencives pour une santé bucco-dentaire optimale.',
      href: '/services/gum',
    },
    {
      icon: Stethoscope,
      title: 'Soins Généraux',
      description: 'Examens, détartrage, soins des caries dentaires, traitement des canaux et urgences dentaires.',
      href: '/services/general',
    },
  ];

  // todo: remove mock functionality
  const testimonials = [
    {
      name: 'Fatima Zahra',
      rating: 5,
      text: 'Excellent service! Dr. Moustaine est très professionnelle et attentionnée. Je recommande vivement pour le blanchiment dentaire.',
      service: 'Blanchiment dentaire',
    },
    {
      name: 'Ahmed El Mansouri',
      rating: 5,
      text: 'Une équipe formidable et un cabinet moderne. Mon implant dentaire a été un succès total. Merci!',
      service: 'Implantologie',
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Great experience! Professional staff and modern equipment. Highly recommend this dental clinic in Casablanca.',
      service: 'General Dentistry',
    },
  ];

  return (
    <div>
      <Hero />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button size="lg" variant="outline" className="gap-2" data-testid="link-all-services">
                Voir tous les services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Technologie Moderne et Équipement de Pointe
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Notre cabinet dentaire à Casablanca est équipé des dernières technologies pour vous offrir des soins dentaires de la plus haute qualité.
                </p>
                <ul className="space-y-2 ml-4">
                  <li>✓ Radiographie numérique pour un diagnostic précis</li>
                  <li>✓ Caméra intra-orale pour une visualisation en temps réel</li>
                  <li>✓ Stérilisation de pointe pour votre sécurité</li>
                  <li>✓ Équipements ergonomiques pour votre confort</li>
                </ul>
              </div>
              <Link href="/about">
                <Button size="lg" className="mt-6" data-testid="link-about-equipment">
                  En savoir plus
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={equipmentImage}
                alt="Équipement dentaire moderne"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos patients</h2>
            <p className="text-lg text-muted-foreground">
              4.8★ sur Google avec plus de 250 avis patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/testimonials">
              <Button size="lg" variant="outline" className="gap-2" data-testid="link-all-testimonials">
                Voir tous les avis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à prendre soin de votre sourire ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Prenez rendez-vous dès aujourd'hui et découvrez l'excellence des soins dentaires à Casablanca
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-book-footer">
                Prendre Rendez-vous
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              data-testid="button-call-footer"
            >
              +212 5XX-XXXXXX
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
