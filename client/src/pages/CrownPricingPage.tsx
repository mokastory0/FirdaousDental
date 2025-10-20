import { useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, Crown, CheckCircle2, Info, DollarSign, Calendar } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from '@/components/FAQItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { useSEO } from '@/hooks/useSEO';

export default function CrownPricingPage() {
  const { language } = useLanguage();
  const { localizePath } = useLocalizedPath();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO Configuration
  useSEO({
    title: {
      fr: 'Prix d\'une Couronne Dentaire à Casablanca | 3000-5000 DH',
      ar: 'سعر التاج السني في الدار البيضاء | 3000-5000 درهم',
      en: 'Dental Crown Price in Casablanca | 3000-5000 MAD'
    },
    description: {
      fr: 'Prix couronne dentaire Casablanca: 3000-5000 DH. Guide complet des tarifs par matériau (céramique, zircone). Bridge 9000-16000 DH. Devis gratuit. Dr. Firdaous MOUSTAINE.',
      ar: 'سعر تاج الأسنان في الدار البيضاء: 3000-5000 درهم. دليل كامل للأسعار حسب المادة (سيراميك، زركونيا). جسر 9000-16000 درهم. عرض مجاني.',
      en: 'Dental crown price Casablanca: 3000-5000 MAD. Complete pricing guide by material (ceramic, zirconia). Bridge 9000-16000 MAD. Free quote. Dr. Firdaous MOUSTAINE.'
    },
    keywords: {
      fr: 'prix couronne dentaire casablanca, combien coute une couronne, prix bridge dentaire, couronne céramique prix, couronne zircone prix',
      ar: 'سعر تاج الأسنان الدار البيضاء, كم يكلف التاج, سعر جسر الأسنان, سعر تاج سيراميك',
      en: 'dental crown price casablanca, how much crown cost, bridge price, ceramic crown price, zirconia crown price'
    },
    ogImage: 'https://couronnedentaire.ma/og-crown.jpg',
    schema: {
      "@context": "https://schema.org",
      "@type": "Offer",
      "name": "Dental Crown",
      "price": "3000-5000",
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
      title: 'Prix d\'une Couronne Dentaire à Casablanca',
      subtitle: 'Guide complet des tarifs 2025',
      priceRange: '3000 - 5000 DH',
      priceLabel: 'Fourchette de prix',
      intro: 'Le prix d\'une couronne dentaire est l\'une des questions les plus fréquentes. Chez Dr. Firdaous MOUSTAINE à Casablanca, nous croyons en la transparence totale. Une couronne coûte généralement entre 3000 DH et 5000 DH selon le matériau. Ce guide vous explique tous les facteurs qui influencent ce prix.',
      section1: 'Prix par Type de Couronne',
      crownTypes: [
        { name: 'Couronne Céramo-Métallique', price: '3000 - 3500 DH', features: ['Alliage métal + céramique', 'Excellente résistance', 'Bon rapport qualité-prix', 'Idéale pour molaires'] },
        { name: 'Couronne en Céramique Pure', price: '4000 - 4500 DH', features: ['100% céramique', 'Esthétique supérieure', 'Translucidité naturelle', 'Parfaite pour dents visibles'] },
        { name: 'Couronne en Zircone', price: '4500 - 5000 DH', features: ['Matériau high-tech', 'Résistance maximale', 'Biocompatibilité optimale', 'Durabilité exceptionnelle'] }
      ],
      section2: 'Prix des Bridges Dentaires',
      bridgeTypes: [
        { name: 'Bridge 3 éléments (1 dent)', price: '9000 - 12000 DH' },
        { name: 'Bridge 4 éléments (2 dents)', price: '12000 - 16000 DH' },
        { name: 'Bridge complet', price: 'Sur devis personnalisé' }
      ],
      section3: 'Facteurs Influençant le Prix',
      factors: [
        { title: 'Matériau Choisi', desc: 'La céramique pure et la zircone offrent une esthétique supérieure mais coûtent plus cher.' },
        { title: 'Localisation de la Dent', desc: 'Les dents antérieures nécessitent souvent des matériaux plus esthétiques.' },
        { title: 'Complexité du Cas', desc: 'Traitements préalables (dévitalisation, reconstruction) augmentent le coût.' },
        { title: 'Qualité du Laboratoire', desc: 'Nous travaillons avec des laboratoires utilisant des technologies CAD/CAM de pointe.' },
        { title: 'Expérience du Praticien', desc: 'Une expertise confirmée assure un résultat optimal et une durabilité maximale.' }
      ],
      section4: 'Ce qui est Inclus dans le Prix',
      included: ['Consultation et diagnostic complet', 'Radiographies nécessaires', 'Préparation de la dent sous anesthésie', 'Prise d\'empreintes', 'Couronne provisoire', 'Fabrication en laboratoire', 'Pose et ajustements', 'Contrôle post-pose', 'Garantie'],
      section5: 'Durée de Vie et Rentabilité',
      lifespan: 'Une couronne de qualité dure 10 à 15 ans minimum. Pour une couronne à 4000 DH durant 12 ans, cela représente 333 DH/an, soit moins de 28 DH/mois.',
      faqTitle: 'Questions Fréquentes',
      faqs: [
        { q: 'Pourquoi les couronnes en zircone sont-elles plus chères ?', a: 'La zircone est un matériau high-tech offrant une résistance exceptionnelle. Sa fabrication nécessite des équipements CAD/CAM sophistiqués.' },
        { q: 'Le prix inclut-il la dévitalisation ?', a: 'Non, le traitement de canal est facturé séparément si nécessaire. Nous vous informons toujours de tous les coûts avant de commencer.' },
        { q: 'Y a-t-il des frais cachés ?', a: 'Absolument pas. Nous pratiquons une transparence totale. Le devis inclut tous les frais. Aucune surprise.' },
        { q: 'Puis-je obtenir un devis gratuit ?', a: 'Oui, la consultation initiale avec examen et devis détaillé est gratuite.' },
        { q: 'Les mutuelles remboursent-elles ?', a: 'Certaines mutuelles au Maroc proposent des remboursements partiels. Nous fournissons tous les documents nécessaires.' }
      ],
      comparison: 'Casablanca vs Autres Villes',
      comparisonText: 'Les prix à Casablanca sont comparables à Rabat et Marrakech. Dans les villes plus petites, les tarifs peuvent être 10-15% moins chers, mais l\'accès aux technologies de pointe est limité.',
      ctaTitle: 'Obtenez Votre Devis Gratuit',
      ctaText: 'Chaque cas est unique. Prenez rendez-vous pour une consultation gratuite.',
      ctaButton: 'Consultation Gratuite',
      backButton: 'Retour aux Couronnes'
    },
    ar: {
      title: 'سعر التاج السني في الدار البيضاء',
      subtitle: 'دليل شامل للأسعار 2025',
      priceRange: '3000 - 5000 درهم',
      priceLabel: 'نطاق الأسعار',
      intro: 'سعر التاج السني هو أحد الأسئلة الأكثر شيوعًا. في عيادة الدكتورة فردوس موستعين، نؤمن بالشفافية الكاملة. يتراوح السعر بين 3000 و 5000 درهم حسب المادة.',
      section1: 'السعر حسب نوع التاج',
      crownTypes: [
        { name: 'تاج سيراميك-معدني', price: '3000 - 3500 درهم', features: ['سبيكة معدنية + سيراميك', 'مقاومة ممتازة', 'سعر جيد', 'مثالي للأضراس'] },
        { name: 'تاج سيراميك نقي', price: '4000 - 4500 درهم', features: ['100٪ سيراميك', 'جمالية فائقة', 'شفافية طبيعية', 'مثالي للأسنان المرئية'] },
        { name: 'تاج زركونيا', price: '4500 - 5000 درهم', features: ['مادة تقنية عالية', 'مقاومة قصوى', 'توافق حيوي مثالي', 'متانة استثنائية'] }
      ],
      section2: 'أسعار الجسور السنية',
      bridgeTypes: [
        { name: 'جسر 3 عناصر (سن واحد)', price: '9000 - 12000 درهم' },
        { name: 'جسر 4 عناصر (سنان)', price: '12000 - 16000 درهم' },
        { name: 'جسر كامل', price: 'عرض مخصص' }
      ],
      section3: 'العوامل المؤثرة على السعر',
      factors: [
        { title: 'المادة المختارة', desc: 'السيراميك النقي والزركونيا توفر جمالية فائقة لكن تكلفتها أعلى.' },
        { title: 'موقع السن', desc: 'الأسنان الأمامية غالبًا ما تتطلب مواد أكثر جمالية.' },
        { title: 'تعقيد الحالة', desc: 'العلاجات المسبقة الضرورية تزيد التكلفة الإجمالية.' },
        { title: 'جودة المختبر', desc: 'نعمل مع مختبرات تستخدم تقنيات CAD/CAM المتطورة.' },
        { title: 'خبرة الممارس', desc: 'الخبرة المؤكدة تضمن نتيجة مثالية ومتانة قصوى.' }
      ],
      section4: 'ما هو مشمول في السعر',
      included: ['استشارة وتشخيص كامل', 'الأشعة اللازمة', 'تحضير السن تحت التخدير', 'أخذ الطبعات', 'تاج مؤقت', 'التصنيع في مختبر', 'التركيب والتعديلات', 'فحص ما بعد التركيب', 'ضمان'],
      section5: 'العمر الافتراضي والربحية',
      lifespan: 'يدوم التاج الجيد من 10 إلى 15 سنة. لتاج بـ 4000 درهم يدوم 12 سنة، هذا يمثل 333 درهم/سنة، أي أقل من 28 درهم/شهر.',
      faqTitle: 'أسئلة شائعة',
      faqs: [
        { q: 'لماذا تيجان الزركونيا أغلى؟', a: 'الزركونيا مادة تقنية عالية توفر مقاومة استثنائية. يتطلب تصنيعها معدات CAD/CAM متطورة.' },
        { q: 'هل يشمل السعر علاج العصب؟', a: 'لا، علاج قناة الجذر يُفوتر بشكل منفصل. نبلغك دائمًا بجميع التكاليف قبل بدء العلاج.' },
        { q: 'هل هناك رسوم خفية؟', a: 'مطلقًا. نمارس الشفافية الكاملة. العرض يشمل جميع الرسوم. لا مفاجآت.' },
        { q: 'هل يمكنني الحصول على عرض مجاني؟', a: 'نعم، الاستشارة الأولية مع الفحص والعرض التفصيلي مجانية.' },
        { q: 'هل تسدد التأمينات الصحية؟', a: 'بعض التأمينات في المغرب تقدم تسديدات جزئية. نوفر جميع المستندات اللازمة.' }
      ],
      comparison: 'الدار البيضاء مقابل مدن أخرى',
      comparisonText: 'الأسعار في الدار البيضاء قابلة للمقارنة مع الرباط ومراكش. في المدن الأصغر، قد تكون الأسعار أقل بـ 10-15٪.',
      ctaTitle: 'احصل على عرضك المجاني',
      ctaText: 'كل حالة فريدة. احجز موعدًا لاستشارة مجانية.',
      ctaButton: 'استشارة مجانية',
      backButton: 'العودة إلى التيجان'
    },
    en: {
      title: 'Dental Crown Price in Casablanca',
      subtitle: 'Complete 2025 Pricing Guide',
      priceRange: '3000 - 5000 MAD',
      priceLabel: 'Price Range',
      intro: 'The price of a dental crown is one of the most frequent questions. At Dr. Firdaous MOUSTAINE\'s clinic, we believe in complete transparency. A crown generally costs between 3000 MAD and 5000 MAD depending on the material.',
      section1: 'Price by Crown Type',
      crownTypes: [
        { name: 'Porcelain-Fused-to-Metal', price: '3000 - 3500 MAD', features: ['Metal alloy + ceramic', 'Excellent strength', 'Good value', 'Ideal for molars'] },
        { name: 'All-Ceramic Crown', price: '4000 - 4500 MAD', features: ['100% ceramic', 'Superior aesthetics', 'Natural translucency', 'Perfect for visible teeth'] },
        { name: 'Zirconia Crown', price: '4500 - 5000 MAD', features: ['High-tech material', 'Maximum strength', 'Optimal biocompatibility', 'Exceptional durability'] }
      ],
      section2: 'Dental Bridge Prices',
      bridgeTypes: [
        { name: '3-Unit Bridge (1 tooth)', price: '9000 - 12000 MAD' },
        { name: '4-Unit Bridge (2 teeth)', price: '12000 - 16000 MAD' },
        { name: 'Full Bridge', price: 'Custom quote' }
      ],
      section3: 'Factors Influencing Price',
      factors: [
        { title: 'Material Choice', desc: 'All-ceramic and zirconia offer superior aesthetics but cost more.' },
        { title: 'Tooth Location', desc: 'Front teeth often require more aesthetic materials.' },
        { title: 'Case Complexity', desc: 'Necessary preliminary treatments increase overall cost.' },
        { title: 'Laboratory Quality', desc: 'We work with laboratories using cutting-edge CAD/CAM technologies.' },
        { title: 'Practitioner Experience', desc: 'Confirmed expertise ensures optimal results and maximum durability.' }
      ],
      section4: 'What\'s Included in the Price',
      included: ['Complete consultation', 'Necessary X-rays', 'Tooth preparation', 'Impressions', 'Temporary crown', 'Laboratory fabrication', 'Placement & adjustments', 'Post-placement checkup', 'Warranty'],
      section5: 'Lifespan and Cost-Effectiveness',
      lifespan: 'A quality crown lasts 10 to 15 years minimum. For a 4000 MAD crown lasting 12 years, this represents 333 MAD/year, less than 28 MAD/month.',
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'Why are zirconia crowns more expensive?', a: 'Zirconia is a high-tech material offering exceptional strength. Its fabrication requires sophisticated CAD/CAM equipment.' },
        { q: 'Does the price include root canal?', a: 'No, root canal treatment is billed separately if necessary. We always inform you of all costs before starting.' },
        { q: 'Are there hidden fees?', a: 'Absolutely not. We practice complete transparency. The quote includes all fees. No surprises.' },
        { q: 'Can I get a free quote?', a: 'Yes, the initial consultation with examination and detailed quote is free.' },
        { q: 'Do insurance companies reimburse?', a: 'Some insurance companies in Morocco offer partial reimbursements. We provide all necessary documents.' }
      ],
      comparison: 'Casablanca vs Other Cities',
      comparisonText: 'Prices in Casablanca are comparable to Rabat and Marrakech. In smaller cities, rates may be 10-15% cheaper, but access to cutting-edge technologies is limited.',
      ctaTitle: 'Get Your Free Quote',
      ctaText: 'Every case is unique. Book an appointment for a free consultation.',
      ctaButton: 'Free Consultation',
      backButton: 'Back to Crowns'
    }
  };

  const c = content[language];

  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link href={localizePath('services/crowns')}>
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
              <Crown className="h-6 w-6 text-primary" />
              {c.section1}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {c.crownTypes.map((type, i) => (
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

          <section className="bg-muted/30 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{c.section2}</h2>
            <div className="space-y-4">
              {c.bridgeTypes.map((type, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-background rounded-lg border">
                  <span className="font-semibold">{type.name}</span>
                  <span className="text-lg font-bold text-primary">{type.price}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <Info className="h-6 w-6 text-primary" />
              {c.section3}
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{c.section4}</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{c.section5}</h2>
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2">
              <CardContent className="pt-6">
                <p className="text-base md:text-lg leading-relaxed">{c.lifespan}</p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{c.comparison}</h2>
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
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.ctaTitle}</h2>
              <p className="text-lg mb-8 opacity-90">{c.ctaText}</p>
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
