import ServiceCard from '@/components/ServiceCard';
import { Sparkles, Crown, Anchor, Smile, Braces, Baby, Heart, Stethoscope } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesPage() {
  const { language, t } = useLanguage();

  const servicesData = {
    fr: [
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
    ],
    ar: [
      {
        icon: Sparkles,
        title: 'تبييض الأسنان',
        description: 'تقنيات تبييض أسنان مهنية في الدار البيضاء لابتسامة مشرقة. نتائج سريعة وآمنة.',
        href: '/services/whitening',
      },
      {
        icon: Crown,
        title: 'التيجان والجسور السنية',
        description: 'ترميم الأسنان التالفة أو المفقودة بتيجان وجسور عالية الجودة.',
        href: '/services/crowns',
      },
      {
        icon: Anchor,
        title: 'زراعة الأسنان',
        description: 'غرسات أسنان دائمة لتعويض الأسنان المفقودة. حل متين وجمالي.',
        href: '/services/implants',
      },
      {
        icon: Smile,
        title: 'أطقم الأسنان',
        description: 'أطقم أسنان جزئية أو كاملة مخصصة لاستعادة وظيفة المضغ.',
        href: '/services/dentures',
      },
      {
        icon: Braces,
        title: 'تقويم الأسنان',
        description: 'Invisalign وأجهزة تقويم للبالغين والمراهقين والأطفال. تقويم أسنان الدار البيضاء.',
        href: '/services/orthodontics',
      },
      {
        icon: Baby,
        title: 'طب أسنان الأطفال',
        description: 'رعاية أسنان أطفال متخصصة بنهج لطيف للأطفال.',
        href: '/services/pediatric',
      },
      {
        icon: Heart,
        title: 'أمراض اللثة',
        description: 'علاج أمراض اللثة والحفاظ على صحة اللثة.',
        href: '/services/gum',
      },
      {
        icon: Stethoscope,
        title: 'العناية بالأسنان العامة',
        description: 'فحوصات، إزالة الجير، علاج التسوس، قنوات الجذور وطوارئ الأسنان.',
        href: '/services/general',
      },
    ],
    en: [
      {
        icon: Sparkles,
        title: 'Teeth Whitening',
        description: 'Professional teeth whitening techniques in Casablanca for a bright smile. Fast and safe results.',
        href: '/services/whitening',
      },
      {
        icon: Crown,
        title: 'Crowns and Bridges',
        description: 'Restoration of damaged or missing teeth with high-quality crowns and bridges.',
        href: '/services/crowns',
      },
      {
        icon: Anchor,
        title: 'Dental Implants',
        description: 'Permanent dental implants to replace missing teeth. Durable and aesthetic solution.',
        href: '/services/implants',
      },
      {
        icon: Smile,
        title: 'Dental Dentures',
        description: 'Custom partial or complete dental dentures to restore your chewing function.',
        href: '/services/dentures',
      },
      {
        icon: Braces,
        title: 'Orthodontics',
        description: 'Invisalign and orthodontic appliances for adults, teenagers and children. Casablanca orthodontics.',
        href: '/services/orthodontics',
      },
      {
        icon: Baby,
        title: 'Pediatric Dentistry',
        description: 'Specialized pediatric dental care with a gentle approach for children.',
        href: '/services/pediatric',
      },
      {
        icon: Heart,
        title: 'Periodontics',
        description: 'Treatment of gum diseases and maintenance of periodontal health.',
        href: '/services/gum',
      },
      {
        icon: Stethoscope,
        title: 'General Dental Care',
        description: 'Examinations, scaling, cavity treatment, root canals and dental emergencies.',
        href: '/services/general',
      },
    ],
  };

  const pageContent = {
    fr: {
      title: 'Nos Services Dentaires',
      subtitle: 'Cabinet dentaire Dr. Firdaous MOUSTAINE à Casablanca offre une gamme complète de soins dentaires pour toute la famille. Des traitements préventifs aux interventions spécialisées, nous sommes là pour prendre soin de votre sourire.',
    },
    ar: {
      title: 'خدماتنا السنية',
      subtitle: 'عيادة الأسنان للدكتورة فردوس مستين في الدار البيضاء تقدم مجموعة كاملة من خدمات العناية بالأسنان لجميع أفراد العائلة. من العلاجات الوقائية إلى التدخلات المتخصصة، نحن هنا للعناية بابتسامتك.',
    },
    en: {
      title: 'Our Dental Services',
      subtitle: 'Dr. Firdaous MOUSTAINE\'s dental clinic in Casablanca offers a complete range of dental care for the whole family. From preventive treatments to specialized interventions, we are here to take care of your smile.',
    },
  };

  const services = servicesData[language];
  const content = pageContent[language];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {content.subtitle}
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
