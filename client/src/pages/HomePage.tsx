import { Link } from 'wouter';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Sparkles, Crown, Anchor, Smile, Braces, Baby, Heart, Stethoscope, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import equipmentImage from '@assets/generated_images/Modern_dental_equipment_technology_344d1782.png';

export default function HomePage() {
  const { language, t } = useLanguage();
  const { localizePath } = useLocalizedPath();

  const servicesData = {
    fr: [
      {
        icon: Sparkles,
        title: 'Blanchiment Dentaire',
        description: 'Un sourire éclatant grâce à nos techniques professionnelles de blanchiment dentaire sûres et efficaces à Casablanca.',
        href: 'services/whitening',
      },
      {
        icon: Crown,
        title: 'Couronne et Bridge',
        description: 'Restauration dentaire de haute qualité avec des couronnes et bridges durables pour retrouver votre sourire.',
        href: 'services/crowns',
      },
      {
        icon: Anchor,
        title: 'Implantologie',
        description: 'Implants dentaires pour remplacer les dents manquantes avec des solutions permanentes et naturelles.',
        href: 'services/implants',
      },
      {
        icon: Smile,
        title: 'Prothèse Dentaire',
        description: 'Prothèses dentaires personnalisées, partielles ou complètes, pour restaurer votre fonction masticatoire.',
        href: 'services/dentures',
      },
      {
        icon: Braces,
        title: 'Orthodontie',
        description: 'Alignement dentaire avec Invisalign et appareils orthodontiques pour tous les âges à Casablanca.',
        href: 'services/orthodontics',
      },
      {
        icon: Baby,
        title: 'Pédodontie',
        description: 'Soins dentaires pédiatriques spécialisés pour les enfants dans un environnement rassurant.',
        href: 'services/pediatric',
      },
      {
        icon: Heart,
        title: 'Parodontologie',
        description: 'Traitement et prévention des maladies des gencives pour une santé bucco-dentaire optimale.',
        href: 'services/gum',
      },
      {
        icon: Stethoscope,
        title: 'Soins Généraux',
        description: 'Examens, détartrage, soins des caries dentaires, traitement des canaux et urgences dentaires.',
        href: 'services/general',
      },
    ],
    ar: [
      {
        icon: Sparkles,
        title: 'تبييض الأسنان',
        description: 'ابتسامة مشرقة بفضل تقنياتنا المهنية لتبييض الأسنان الآمنة والفعالة في الدار البيضاء.',
        href: 'services/whitening',
      },
      {
        icon: Crown,
        title: 'التيجان والجسور',
        description: 'ترميم أسنان عالي الجودة بتيجان وجسور متينة لاستعادة ابتسامتك.',
        href: 'services/crowns',
      },
      {
        icon: Anchor,
        title: 'زراعة الأسنان',
        description: 'غرسات أسنان لتعويض الأسنان المفقودة بحلول دائمة وطبيعية.',
        href: 'services/implants',
      },
      {
        icon: Smile,
        title: 'أطقم الأسنان',
        description: 'أطقم أسنان مخصصة، جزئية أو كاملة، لاستعادة وظيفة المضغ.',
        href: 'services/dentures',
      },
      {
        icon: Braces,
        title: 'تقويم الأسنان',
        description: 'محاذاة الأسنان مع Invisalign وأجهزة تقويم لجميع الأعمار في الدار البيضاء.',
        href: 'services/orthodontics',
      },
      {
        icon: Baby,
        title: 'طب أسنان الأطفال',
        description: 'رعاية أسنان أطفال متخصصة في بيئة مريحة.',
        href: 'services/pediatric',
      },
      {
        icon: Heart,
        title: 'أمراض اللثة',
        description: 'علاج والوقاية من أمراض اللثة لصحة فموية مثلى.',
        href: 'services/gum',
      },
      {
        icon: Stethoscope,
        title: 'العناية العامة',
        description: 'فحوصات، إزالة الجير، علاج التسوس، علاج القنوات وطوارئ الأسنان.',
        href: 'services/general',
      },
    ],
    en: [
      {
        icon: Sparkles,
        title: 'Teeth Whitening',
        description: 'A bright smile thanks to our safe and effective professional teeth whitening techniques in Casablanca.',
        href: 'services/whitening',
      },
      {
        icon: Crown,
        title: 'Crowns and Bridges',
        description: 'High-quality dental restoration with durable crowns and bridges to restore your smile.',
        href: 'services/crowns',
      },
      {
        icon: Anchor,
        title: 'Dental Implants',
        description: 'Dental implants to replace missing teeth with permanent and natural solutions.',
        href: 'services/implants',
      },
      {
        icon: Smile,
        title: 'Dental Dentures',
        description: 'Custom partial or complete dental dentures to restore your chewing function.',
        href: 'services/dentures',
      },
      {
        icon: Braces,
        title: 'Orthodontics',
        description: 'Dental alignment with Invisalign and orthodontic appliances for all ages in Casablanca.',
        href: 'services/orthodontics',
      },
      {
        icon: Baby,
        title: 'Pediatric Dentistry',
        description: 'Specialized pediatric dental care for children in a reassuring environment.',
        href: 'services/pediatric',
      },
      {
        icon: Heart,
        title: 'Periodontics',
        description: 'Treatment and prevention of gum diseases for optimal oral health.',
        href: 'services/gum',
      },
      {
        icon: Stethoscope,
        title: 'General Care',
        description: 'Examinations, scaling, cavity care, root canal treatment and dental emergencies.',
        href: 'services/general',
      },
    ],
  };

  const pageContent = {
    fr: {
      viewAllServices: 'Voir tous les services',
      equipmentTitle: 'Technologie Moderne et Équipement de Pointe',
      equipmentText: 'Notre cabinet dentaire à Casablanca est équipé des dernières technologies pour vous offrir des soins dentaires de la plus haute qualité.',
      equipmentFeature1: '✓ Radiographie numérique pour un diagnostic précis',
      equipmentFeature2: '✓ Caméra intra-orale pour une visualisation en temps réel',
      equipmentFeature3: '✓ Stérilisation de pointe pour votre sécurité',
      equipmentFeature4: '✓ Équipements ergonomiques pour votre confort',
      learnMore: 'En savoir plus',
      testimonialsTitle: 'Ce que disent nos patients',
      testimonialsSubtitle: '5.0★ sur Google avec plus de 250 avis patients',
      viewAllTestimonials: 'Voir tous les avis',
      ctaTitle: 'Prêt à prendre soin de votre sourire ?',
      ctaSubtitle: 'Prenez rendez-vous dès aujourd\'hui et découvrez l\'excellence des soins dentaires à Casablanca',
      ctaButton: 'Prendre Rendez-vous',
    },
    ar: {
      viewAllServices: 'عرض جميع الخدمات',
      equipmentTitle: 'تكنولوجيا حديثة ومعدات متطورة',
      equipmentText: 'عيادتنا السنية في الدار البيضاء مجهزة بأحدث التقنيات لنقدم لك رعاية أسنان بأعلى جودة.',
      equipmentFeature1: '✓ تصوير رقمي بالأشعة للتشخيص الدقيق',
      equipmentFeature2: '✓ كاميرا داخل الفم للمعاينة الفورية',
      equipmentFeature3: '✓ تعقيم متطور لسلامتك',
      equipmentFeature4: '✓ معدات مريحة لراحتك',
      learnMore: 'اعرف المزيد',
      testimonialsTitle: 'ماذا يقول مرضانا',
      testimonialsSubtitle: '٥٫٠★ على جوجل مع أكثر من ٢٥٠ تقييم',
      viewAllTestimonials: 'عرض جميع التقييمات',
      ctaTitle: 'جاهز للعناية بابتسامتك؟',
      ctaSubtitle: 'احجز موعدًا اليوم واكتشف التميز في العناية بالأسنان بالدار البيضاء',
      ctaButton: 'احجز موعد',
    },
    en: {
      viewAllServices: 'View all services',
      equipmentTitle: 'Modern Technology and Advanced Equipment',
      equipmentText: 'Our dental clinic in Casablanca is equipped with the latest technologies to offer you the highest quality dental care.',
      equipmentFeature1: '✓ Digital radiography for accurate diagnosis',
      equipmentFeature2: '✓ Intraoral camera for real-time visualization',
      equipmentFeature3: '✓ Advanced sterilization for your safety',
      equipmentFeature4: '✓ Ergonomic equipment for your comfort',
      learnMore: 'Learn more',
      testimonialsTitle: 'What our patients say',
      testimonialsSubtitle: '5.0★ on Google with over 250 patient reviews',
      viewAllTestimonials: 'View all reviews',
      ctaTitle: 'Ready to take care of your smile?',
      ctaSubtitle: 'Book an appointment today and discover excellence in dental care in Casablanca',
      ctaButton: 'Book Appointment',
    },
  };

  const services = servicesData[language];
  const content = pageContent[language];

  const testimonials = [
    {
      name: language === 'fr' ? 'Mohamed AMAR' : language === 'ar' ? 'محمد عمر' : 'Mohamed AMAR',
      rating: 5,
      text: language === 'fr' 
        ? 'Détartrage sans douleur. Première fois dans ma vie ou je reçois un détartrage sans douleur. Dr Firdaouise a appliqué le détartrage et soins sans douleur et dans le comfort. Recommende vivement.'
        : language === 'ar'
        ? 'إزالة الجير بدون ألم. المرة الأولى في حياتي التي أتلقى فيها إزالة الجير بدون ألم. طبقت الدكتورة فردوس إزالة الجير والعناية بدون ألم وبراحة تامة. أوصي بشدة.'
        : 'Painless scaling. First time in my life I received painless scaling. Dr. Firdaous applied scaling and care without pain and in comfort. Highly recommend.',
      service: language === 'fr' ? 'Détartrage' : language === 'ar' ? 'إزالة الجير' : 'Dental Scaling',
    },
    {
      name: 'Ihab Eddine',
      rating: 5,
      text: language === 'fr'
        ? 'Je tiens à remercier et recommander vivement Dr. Ferdaous. Elle est très professionnelle, attentionnée et met immédiatement à l\'aise. C\'est une dentiste passionnée qui prend vraiment le temps pour ses patients.'
        : language === 'ar'
        ? 'أود أن أشكر وأوصي بشدة بالدكتورة فردوس. إنها محترفة جداً، مهتمة، وتجعلك تشعر بالراحة على الفور. إنها طبيبة أسنان شغوفة تأخذ الوقت حقاً لمرضاها.'
        : 'I would like to thank and highly recommend Dr. Ferdaous. She is very professional, attentive, and immediately puts you at ease. She is a passionate dentist who truly takes the time for her patients.',
      service: language === 'fr' ? 'Soins généraux' : language === 'ar' ? 'العناية العامة' : 'General Care',
    },
    {
      name: 'Sharon Taylor',
      rating: 5,
      text: language === 'fr'
        ? 'Excellente dentiste. Parle anglais. Soins sans douleur pour ma carie dentaire.'
        : language === 'ar'
        ? 'طبيبة أسنان ممتازة. تتحدث الإنجليزية. رعاية بدون ألم لتسوس أسناني.'
        : 'Great Dentist. Can speak English. Painless care for my tooth decay.',
      service: language === 'fr' ? 'Traitement de carie' : language === 'ar' ? 'علاج التسوس' : 'Cavity Treatment',
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
            <Link href={localizePath('services')}>
              <Button size="lg" variant="outline" className="gap-2" data-testid="link-all-services">
                {content.viewAllServices}
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
                {content.equipmentTitle}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{content.equipmentText}</p>
                <ul className="space-y-2 ml-4">
                  <li>{content.equipmentFeature1}</li>
                  <li>{content.equipmentFeature2}</li>
                  <li>{content.equipmentFeature3}</li>
                  <li>{content.equipmentFeature4}</li>
                </ul>
              </div>
              <Link href={localizePath('about')}>
                <Button size="lg" className="mt-6" data-testid="link-about-equipment">
                  {content.learnMore}
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={equipmentImage}
                alt={content.equipmentTitle}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.testimonialsTitle}</h2>
            <p className="text-lg text-muted-foreground">
              {content.testimonialsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>

          <div className="text-center">
            <Link href={localizePath('testimonials')}>
              <Button size="lg" variant="outline" className="gap-2" data-testid="link-all-testimonials">
                {content.viewAllTestimonials}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.ctaTitle}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {content.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={localizePath('contact')}>
              <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-book-footer">
                {content.ctaButton}
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              data-testid="button-call-footer"
            >
              <span dir="ltr">+212 665 477 745</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
