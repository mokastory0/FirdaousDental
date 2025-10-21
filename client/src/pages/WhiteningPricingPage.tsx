import { useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, Sparkles, CheckCircle2, Info, DollarSign, Calendar } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from '@/components/FAQItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { useSEO } from '@/hooks/useSEO';

export default function WhiteningPricingPage() {
  const { language } = useLanguage();
  const { localizePath } = useLocalizedPath();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO Configuration
  useSEO({
    title: {
      fr: 'Prix d\'un Blanchiment Dentaire à Casablanca | 3000-4500 DH',
      ar: 'سعر تبييض الأسنان في الدار البيضاء | 3000-4500 درهم',
      en: 'Teeth Whitening Price in Casablanca | 3000-4500 MAD'
    },
    description: {
      fr: 'Prix blanchiment dentaire Casablanca: 3000-4500 DH. Guide complet des tarifs LED, laser, combiné. Résultats immédiats. Devis gratuit. Dr. Firdaous MOUSTAINE.',
      ar: 'سعر تبييض الأسنان في الدار البيضاء: 3000-4500 درهم. دليل كامل لأسعار LED، ليزر، مركب. نتائج فورية. عرض مجاني.',
      en: 'Teeth whitening price Casablanca: 3000-4500 MAD. Complete pricing guide LED, laser, combined. Immediate results. Free quote. Dr. Firdaous MOUSTAINE.'
    },
    keywords: {
      fr: 'prix blanchiment dentaire casablanca, combien coute un blanchiment, blanchiment laser prix, blanchiment LED prix',
      ar: 'سعر تبييض الأسنان الدار البيضاء, كم يكلف التبييض, سعر تبييض بالليزر',
      en: 'teeth whitening price casablanca, how much whitening cost, laser whitening price, LED whitening price'
    },
    ogImage: 'https://couronnedentaire.ma/og-whitening.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "Offer",
      "name": "Teeth Whitening",
      "price": "3000-4500",
      "priceCurrency": "MAD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Dentist",
        "name": "Dr. Firdaous MOUSTAINE"
      }
    }
  });

  const content = {
    fr: {
      title: 'Prix d\'un Blanchiment Dentaire à Casablanca',
      subtitle: 'Guide complet des tarifs 2025',
      priceRange: '3000 - 4500 DH',
      priceLabel: 'Fourchette de prix',
      intro: 'Le prix d\'un blanchiment dentaire est une question fréquente. Chez Dr. Firdaous MOUSTAINE à Casablanca, nous croyons en la transparence totale. Un blanchiment dentaire professionnel coûte généralement entre 3000 DH et 4500 DH selon la technique utilisée. Ce guide vous explique tous les facteurs qui influencent ce prix.',
      
      section1: 'Prix par Type de Blanchiment',
      whiteningTypes: [
        {
          name: 'Blanchiment au Fauteuil (LED)',
          price: '3000 - 3500 DH',
          features: ['Séance unique en cabinet', 'Résultats immédiats', 'Technologie LED avancée', 'Durée: 60-90 minutes']
        },
        {
          name: 'Blanchiment Laser',
          price: '3500 - 4000 DH',
          features: ['Technologie laser de pointe', 'Résultats optimaux', 'Blanchiment jusqu\'à 8 teintes', 'Séance unique']
        },
        {
          name: 'Blanchiment Combiné',
          price: '4000 - 4500 DH',
          features: ['Cabinet + gouttières à domicile', 'Résultats durables', 'Suivi personnalisé', 'Meilleure efficacité']
        }
      ],
      
      section2: 'Qu\'est-ce qui Influence le Prix ?',
      factors: [
        {
          title: 'Technique Utilisée',
          desc: 'Le blanchiment laser est plus coûteux que le blanchiment LED en raison de la technologie avancée et des résultats supérieurs.'
        },
        {
          title: 'État Initial des Dents',
          desc: 'Des dents très tachées peuvent nécessiter plusieurs séances ou une technique plus puissante, augmentant le coût.'
        },
        {
          title: 'Produits Utilisés',
          desc: 'Nous utilisons des gels de blanchiment professionnels de haute qualité, plus efficaces et sûrs que les produits en vente libre.'
        },
        {
          title: 'Équipement',
          desc: 'Les lampes LED et lasers de dernière génération garantissent des résultats optimaux et une sécurité maximale.'
        },
        {
          title: 'Expertise du Praticien',
          desc: 'Un dentiste expérimenté assure un blanchiment uniforme, protège vos gencives et minimise la sensibilité.'
        }
      ],
      
      section3: 'Ce qui est Inclus dans le Prix',
      included: [
        'Consultation et examen dentaire',
        'Nettoyage professionnel préalable',
        'Protection des gencives',
        'Application du gel de blanchiment',
        'Activation LED ou Laser',
        'Contrôle de la teinte',
        'Conseils post-blanchiment',
        'Gouttières personnalisées (option combinée)',
        'Suivi après traitement'
      ],
      
      section4: 'Durée des Résultats',
      lifespan: 'Un blanchiment professionnel dure généralement 1 à 3 ans selon vos habitudes. Pour un blanchiment à 3500 DH durant 2 ans, cela représente 1750 DH/an, soit environ 146 DH/mois pour un sourire éclatant.',
      
      section5: 'Blanchiment Professionnel vs Produits en Vente Libre',
      comparison: 'Les kits de blanchiment en vente libre coûtent 200-500 DH mais offrent des résultats limités (2-3 teintes maximum) et peuvent endommager l\'émail. Le blanchiment professionnel coûte plus cher mais garantit des résultats spectaculaires (5-8 teintes), une sécurité totale et une durabilité supérieure.',
      
      faqTitle: 'Questions Fréquentes sur les Prix',
      faqs: [
        {
          q: 'Pourquoi le blanchiment laser est-il plus cher ?',
          a: 'Le laser offre une activation plus puissante du gel de blanchiment, permettant des résultats supérieurs en une seule séance. L\'équipement laser est également plus coûteux et nécessite une expertise spécialisée.'
        },
        {
          q: 'Le prix inclut-il le nettoyage dentaire ?',
          a: 'Oui, un détartrage et nettoyage professionnel sont toujours effectués avant le blanchiment pour garantir des résultats optimaux. C\'est inclus dans le prix.'
        },
        {
          q: 'Y a-t-il des frais supplémentaires ?',
          a: 'Non, le prix annoncé inclut tout : consultation, nettoyage, blanchiment et suivi. Si des séances supplémentaires sont nécessaires, nous vous en informons à l\'avance.'
        },
        {
          q: 'Puis-je obtenir un devis gratuit ?',
          a: 'Oui, la consultation initiale avec examen et devis personnalisé est gratuite. Nous évaluons la couleur actuelle de vos dents et vous proposons la meilleure option.'
        },
        {
          q: 'Proposez-vous des facilités de paiement ?',
          a: 'Oui, nous proposons plusieurs options de paiement pour rendre le blanchiment accessible. Discutez-en lors de votre consultation.'
        }
      ],
      
      section6: 'Casablanca vs Autres Villes',
      comparisonText: 'Les prix à Casablanca sont comparables à Rabat et Marrakech. Dans les villes plus petites, les tarifs peuvent être 15-20% moins chers, mais l\'accès aux technologies laser de pointe est limité.',
      
      ctaTitle: 'Obtenez Votre Devis Gratuit',
      ctaText: 'Chaque sourire est unique. Prenez rendez-vous pour une consultation gratuite et découvrez votre potentiel de blanchiment.',
      ctaButton: 'Consultation Gratuite',
      backButton: 'Retour au Blanchiment'
    },
    
    ar: {
      title: 'سعر تبييض الأسنان في الدار البيضاء',
      subtitle: 'دليل شامل للأسعار 2025',
      priceRange: '3000 - 4500 درهم',
      priceLabel: 'نطاق الأسعار',
      intro: 'سعر تبييض الأسنان هو سؤال شائع. في عيادة الدكتورة فردوس موستعين، نؤمن بالشفافية الكاملة. يتراوح سعر التبييض الاحترافي بين 3000 و 4500 درهم حسب التقنية المستخدمة.',
      
      section1: 'السعر حسب نوع التبييض',
      whiteningTypes: [
        {
          name: 'تبييض في العيادة (LED)',
          price: '3000 - 3500 درهم',
          features: ['جلسة واحدة في العيادة', 'نتائج فورية', 'تقنية LED متطورة', 'المدة: 60-90 دقيقة']
        },
        {
          name: 'تبييض بالليزر',
          price: '3500 - 4000 درهم',
          features: ['تقنية ليزر متطورة', 'نتائج مثالية', 'تبييض حتى 8 درجات', 'جلسة واحدة']
        },
        {
          name: 'تبييض مركب',
          price: '4000 - 4500 درهم',
          features: ['عيادة + قوالب منزلية', 'نتائج دائمة', 'متابعة شخصية', 'فعالية أفضل']
        }
      ],
      
      section2: 'ما الذي يؤثر على السعر؟',
      factors: [
        {
          title: 'التقنية المستخدمة',
          desc: 'تبييض الليزر أغلى من تبييض LED بسبب التكنولوجيا المتقدمة والنتائج الفائقة.'
        },
        {
          title: 'الحالة الأولية للأسنان',
          desc: 'الأسنان شديدة التصبغ قد تحتاج عدة جلسات أو تقنية أقوى، مما يزيد التكلفة.'
        },
        {
          title: 'المنتجات المستخدمة',
          desc: 'نستخدم جل تبييض احترافي عالي الجودة، أكثر فعالية وأمانًا من المنتجات المتاحة بدون وصفة.'
        },
        {
          title: 'المعدات',
          desc: 'مصابيح LED وليزر من أحدث جيل تضمن نتائج مثالية وأمان أقصى.'
        },
        {
          title: 'خبرة الممارس',
          desc: 'طبيب أسنان ذو خبرة يضمن تبييضًا موحدًا، يحمي اللثة ويقلل الحساسية.'
        }
      ],
      
      section3: 'ما هو مشمول في السعر',
      included: [
        'استشارة وفحص الأسنان',
        'تنظيف احترافي مسبق',
        'حماية اللثة',
        'تطبيق جل التبييض',
        'تفعيل LED أو الليزر',
        'مراقبة الدرجة',
        'نصائح ما بعد التبييض',
        'قوالب مخصصة (خيار مركب)',
        'متابعة بعد العلاج'
      ],
      
      section4: 'مدة النتائج',
      lifespan: 'يدوم التبييض الاحترافي عمومًا من 1 إلى 3 سنوات حسب عاداتك. لتبييض بـ 3500 درهم يدوم سنتين، هذا يمثل 1750 درهم/سنة، أي حوالي 146 درهم/شهر لابتسامة مشرقة.',
      
      section5: 'تبييض احترافي مقابل منتجات بدون وصفة',
      comparison: 'تكلف مجموعات التبييض المتاحة بدون وصفة 200-500 درهم لكنها تقدم نتائج محدودة (2-3 درجات كحد أقصى) وقد تضر المينا. التبييض الاحترافي أغلى لكنه يضمن نتائج مذهلة (5-8 درجات)، أمان كامل ومتانة فائقة.',
      
      faqTitle: 'أسئلة شائعة حول الأسعار',
      faqs: [
        {
          q: 'لماذا تبييض الليزر أغلى؟',
          a: 'الليزر يوفر تفعيلًا أقوى لجل التبييض، مما يسمح بنتائج فائقة في جلسة واحدة. معدات الليزر أيضًا أغلى وتتطلب خبرة متخصصة.'
        },
        {
          q: 'هل يشمل السعر تنظيف الأسنان؟',
          a: 'نعم، يتم دائمًا إجراء إزالة الجير والتنظيف الاحترافي قبل التبييض لضمان نتائج مثالية. هذا مشمول في السعر.'
        },
        {
          q: 'هل هناك رسوم إضافية؟',
          a: 'لا، السعر المعلن يشمل كل شيء: الاستشارة، التنظيف، التبييض والمتابعة. إذا كانت هناك حاجة لجلسات إضافية، نبلغك مسبقًا.'
        },
        {
          q: 'هل يمكنني الحصول على عرض مجاني؟',
          a: 'نعم، الاستشارة الأولية مع الفحص والعرض المخصص مجانية. نقيم اللون الحالي لأسنانك ونقترح أفضل خيار.'
        },
        {
          q: 'هل تقدمون تسهيلات دفع؟',
          a: 'نعم، نقدم عدة خيارات دفع لجعل التبييض في متناول الجميع. ناقش ذلك أثناء استشارتك.'
        }
      ],
      
      section6: 'الدار البيضاء مقابل مدن أخرى',
      comparisonText: 'الأسعار في الدار البيضاء قابلة للمقارنة مع الرباط ومراكش. في المدن الأصغر، قد تكون الأسعار أقل بـ 15-20٪، لكن الوصول لتقنيات الليزر المتطورة محدود.',
      
      ctaTitle: 'احصل على عرضك المجاني',
      ctaText: 'كل ابتسامة فريدة. احجز موعدًا لاستشارة مجانية واكتشف إمكانات التبييض لديك.',
      ctaButton: 'استشارة مجانية',
      backButton: 'العودة إلى التبييض'
    },
    
    en: {
      title: 'Teeth Whitening Price in Casablanca',
      subtitle: 'Complete 2025 Pricing Guide',
      priceRange: '3000 - 4500 MAD',
      priceLabel: 'Price Range',
      intro: 'The price of teeth whitening is a frequent question. At Dr. Firdaous MOUSTAINE\'s clinic, we believe in complete transparency. Professional teeth whitening generally costs between 3000 MAD and 4500 MAD depending on the technique used.',
      
      section1: 'Price by Whitening Type',
      whiteningTypes: [
        {
          name: 'In-Office Whitening (LED)',
          price: '3000 - 3500 MAD',
          features: ['Single office session', 'Immediate results', 'Advanced LED technology', 'Duration: 60-90 minutes']
        },
        {
          name: 'Laser Whitening',
          price: '3500 - 4000 MAD',
          features: ['Cutting-edge laser technology', 'Optimal results', 'Whitening up to 8 shades', 'Single session']
        },
        {
          name: 'Combined Whitening',
          price: '4000 - 4500 MAD',
          features: ['Office + home trays', 'Long-lasting results', 'Personalized follow-up', 'Best effectiveness']
        }
      ],
      
      section2: 'What Influences the Price?',
      factors: [
        {
          title: 'Technique Used',
          desc: 'Laser whitening is more expensive than LED whitening due to advanced technology and superior results.'
        },
        {
          title: 'Initial Tooth Condition',
          desc: 'Heavily stained teeth may require multiple sessions or a more powerful technique, increasing cost.'
        },
        {
          title: 'Products Used',
          desc: 'We use high-quality professional whitening gels, more effective and safer than over-the-counter products.'
        },
        {
          title: 'Equipment',
          desc: 'Latest generation LED lamps and lasers ensure optimal results and maximum safety.'
        },
        {
          title: 'Practitioner Expertise',
          desc: 'An experienced dentist ensures uniform whitening, protects your gums and minimizes sensitivity.'
        }
      ],
      
      section3: 'What\'s Included in the Price',
      included: [
        'Consultation and dental examination',
        'Professional cleaning beforehand',
        'Gum protection',
        'Whitening gel application',
        'LED or Laser activation',
        'Shade monitoring',
        'Post-whitening advice',
        'Custom trays (combined option)',
        'Post-treatment follow-up'
      ],
      
      section4: 'Results Duration',
      lifespan: 'Professional whitening generally lasts 1 to 3 years depending on your habits. For whitening at 3500 MAD lasting 2 years, this represents 1750 MAD/year, about 146 MAD/month for a bright smile.',
      
      section5: 'Professional vs Over-the-Counter Products',
      comparison: 'Over-the-counter whitening kits cost 200-500 MAD but offer limited results (2-3 shades maximum) and can damage enamel. Professional whitening costs more but guarantees spectacular results (5-8 shades), complete safety and superior durability.',
      
      faqTitle: 'Frequently Asked Questions About Prices',
      faqs: [
        {
          q: 'Why is laser whitening more expensive?',
          a: 'Laser offers more powerful activation of the whitening gel, allowing superior results in a single session. Laser equipment is also more expensive and requires specialized expertise.'
        },
        {
          q: 'Does the price include dental cleaning?',
          a: 'Yes, scaling and professional cleaning are always performed before whitening to ensure optimal results. This is included in the price.'
        },
        {
          q: 'Are there additional fees?',
          a: 'No, the stated price includes everything: consultation, cleaning, whitening and follow-up. If additional sessions are needed, we inform you in advance.'
        },
        {
          q: 'Can I get a free quote?',
          a: 'Yes, the initial consultation with examination and personalized quote is free. We assess your teeth\'s current color and propose the best option.'
        },
        {
          q: 'Do you offer payment plans?',
          a: 'Yes, we offer several payment options to make whitening accessible. Discuss this during your consultation.'
        }
      ],
      
      section6: 'Casablanca vs Other Cities',
      comparisonText: 'Prices in Casablanca are comparable to Rabat and Marrakech. In smaller cities, rates may be 15-20% cheaper, but access to cutting-edge laser technologies is limited.',
      
      ctaTitle: 'Get Your Free Quote',
      ctaText: 'Every smile is unique. Book an appointment for a free consultation and discover your whitening potential.',
      ctaButton: 'Free Consultation',
      backButton: 'Back to Whitening'
    }
  };

  const c = content[language];

  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link href={localizePath('services/whitening')}>
          <Button variant="ghost" className="mb-6 gap-2">
            <ChevronLeft className="h-4 w-4" />
            {c.backButton}
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-7 w-7 text-primary" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold">{c.title}</h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground">{c.subtitle}</p>
            </div>
            
            <Card className="md:w-64 border-2 border-primary/20 shadow-lg">
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">{c.priceLabel}</p>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{c.priceRange}</p>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-primary" />
              {c.section1}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {c.whiteningTypes.map((type, i) => (
                <Card key={i} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">{type.name}</h3>
                    <p className="text-2xl font-bold text-primary mb-4">{type.price}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <Info className="h-6 w-6 text-primary" />
              {c.section2}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {c.factors.map((factor, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2 text-primary">{factor.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{factor.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border-2 border-primary/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{c.section3}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {c.included.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{c.section4}</h2>
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2">
              <CardContent className="pt-6">
                <p className="text-base md:text-lg leading-relaxed">{c.lifespan}</p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{c.section5}</h2>
            <p className="text-muted-foreground leading-relaxed">{c.comparison}</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{c.section6}</h2>
            <p className="text-muted-foreground leading-relaxed">{c.comparisonText}</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{c.faqTitle}</h2>
            <Accordion type="single" collapsible className="w-full">
              {c.faqs.map((faq, i) => (
                <FAQItem key={i} value={`faq-${i}`} question={faq.q} answer={faq.a} />
              ))}
            </Accordion>
          </section>

          <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto">
              <Calendar className="h-12 w-12 mx-auto mb-4 " />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.ctaTitle}</h2>
              <p className="text-lg mb-8 ">{c.ctaText}</p>
              <Link href={localizePath('contact')}>
                <Button size="lg" variant="secondary" className="text-lg font-bold shadow-xl hover:scale-105 transition-transform">
                  {c.ctaButton}
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
