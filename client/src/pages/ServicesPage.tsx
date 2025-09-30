import ServiceCard from '@/components/ServiceCard';
import { Sparkles, Crown, Anchor, Smile, Braces, Baby, Heart, Stethoscope } from 'lucide-react';

export default function ServicesPage() {
  // todo: remove mock functionality
  const services = [
    {
      icon: Sparkles,
      title: 'Blanchiment Dentaire',
      description: 'Techniques professionnelles de blanchiment dentaire à Casablanca pour un sourire éclatant. Résultats rapides et sûrs.',
      href: '/services/whitening',
    },
    {
      icon: Crown,
      title: 'Couronne et Bridge Dentaires',
      description: 'Restauration de dents endommagées ou manquantes avec des couronnes et bridges de haute qualité.',
      href: '/services/crowns',
    },
    {
      icon: Anchor,
      title: 'Implantologie',
      description: 'Implants dentaires permanents pour remplacer les dents manquantes. Solution durable et esthétique.',
      href: '/services/implants',
    },
    {
      icon: Smile,
      title: 'Prothèse Dentaire',
      description: 'Prothèses dentaires partielles ou complètes sur mesure pour restaurer votre fonction masticatoire.',
      href: '/services/dentures',
    },
    {
      icon: Braces,
      title: 'Orthodontie',
      description: 'Invisalign et appareils orthodontiques pour adultes, adolescents et enfants. Orthodontie Casablanca.',
      href: '/services/orthodontics',
    },
    {
      icon: Baby,
      title: 'Pédodontie',
      description: 'Soins dentaires pédiatriques spécialisés avec une approche douce pour les enfants.',
      href: '/services/pediatric',
    },
    {
      icon: Heart,
      title: 'Parodontologie',
      description: 'Traitement des maladies des gencives et maintien de la santé parodontale.',
      href: '/services/gum',
    },
    {
      icon: Stethoscope,
      title: 'Soins Dentaires Généraux',
      description: 'Examens, détartrage, traitement des caries dentaires, canaux radiculaires et urgences dentaires.',
      href: '/services/general',
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services Dentaires</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cabinet dentaire Dr. Firdaous MOUSTAINE à Casablanca offre une gamme complète de soins dentaires
            pour toute la famille. Des traitements préventifs aux interventions spécialisées, nous sommes
            là pour prendre soin de votre sourire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
