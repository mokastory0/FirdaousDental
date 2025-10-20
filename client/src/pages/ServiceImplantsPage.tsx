import { useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, Anchor, Shield, Clock, Star } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from '@/components/FAQItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { useSEO } from '@/hooks/useSEO';
import implantImage from '@assets/stock_images/dental_implant_surge_a393fe8d.jpg';

export default function ServiceImplantsPage() {
  const { language, t } = useLanguage();
  const { localizePath } = useLocalizedPath();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: {
      fr: 'Implants Dentaires à Casablanca | Dr. Firdaous MOUSTAINE',
      ar: 'زراعة الأسنان في الدار البيضاء | د. فردوس موستعين',
      en: 'Dental Implants in Casablanca | Dr. Firdaous MOUSTAINE'
    },
    description: {
      fr: 'Implants dentaires à Casablanca. Solution permanente pour remplacer les dents manquantes. Taux de succès 95-98%. Consultation gratuite. Cabinet Dr. Firdaous MOUSTAINE.',
      ar: 'زراعة الأسنان في الدار البيضاء. حل دائم لاستبدال الأسنان المفقودة. معدل نجاح 95-98٪. استشارة مجانية. عيادة د. فردوس موستعين.',
      en: 'Dental implants in Casablanca. Permanent solution for missing teeth. 95-98% success rate. Free consultation. Dr. Firdaous MOUSTAINE clinic.'
    },
    keywords: {
      fr: 'implant dentaire casablanca, implantologie, remplacer dent manquante, implant titane, dentiste casablanca',
      ar: 'زراعة الأسنان الدار البيضاء, زرع الأسنان, استبدال الأسنان المفقودة',
      en: 'dental implant casablanca, implantology, replace missing tooth, titanium implant, dentist casablanca'
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dental Implants",
      "description": "Professional dental implant services in Casablanca",
      "procedureType": "Implantology"
    }
  });

  const content = {
    fr: {
      title: 'Implants Dentaires à Casablanca',
      subtitle: 'Solution permanente pour remplacer vos dents manquantes',
      intro1: 'L\'implantologie dentaire représente la solution la plus avancée et durable pour remplacer une ou plusieurs dents manquantes. Au cabinet du Dr. Firdaous MOUSTAINE à Casablanca, nous utilisons des implants de dernière génération pour vous offrir des résultats naturels, confortables et permanents.',
      intro2: 'Un implant dentaire est une racine artificielle en titane biocompatible qui est insérée dans l\'os de la mâchoire. Il sert de support solide pour une couronne, un bridge ou une prothèse dentaire. Cette solution révolutionnaire offre la stabilité, le confort et l\'esthétique des dents naturelles.',
      section1Title: 'Qu\'est-ce qu\'un implant dentaire ?',
      section1Text1: 'L\'implant dentaire est une vis en titane qui remplace la racine d\'une dent manquante. Le titane est un matériau biocompatible qui s\'intègre naturellement à l\'os de la mâchoire par un processus appelé ostéointégration. Une fois l\'implant intégré, il peut supporter une restauration dentaire (couronne, bridge ou prothèse) pendant des décennies.',
      section1Text2: 'Les implants dentaires offrent de nombreux avantages par rapport aux solutions traditionnelles : ils préservent l\'os de la mâchoire en stimulant sa croissance, ne nécessitent pas de modifier les dents adjacentes saines, offrent une solution permanente avec un taux de succès de 95-98%, restaurent complètement la fonction masticatoire, et procurent un résultat esthétique indiscernable des dents naturelles.',
      section2Title: 'Indications et avantages',
      section2Text1: 'Les implants dentaires sont indiqués dans de nombreuses situations : remplacement d\'une seule dent manquante sans toucher aux dents voisines, remplacement de plusieurs dents avec un bridge sur implants, stabilisation d\'une prothèse complète amovible, ou restauration complète de la mâchoire avec une prothèse fixe sur implants (All-on-4 ou All-on-6).',
      section2Text2: 'Contrairement au bridge traditionnel qui nécessite de tailler les dents adjacentes, l\'implant est une solution autonome qui préserve vos dents naturelles. C\'est également plus confortable qu\'une prothèse amovible et élimine les problèmes de stabilité et de glissement. L\'implant dentaire est la solution qui se rapproche le plus d\'une dent naturelle.',
      section3Title: 'Déroulement du traitement',
      step1Title: 'Consultation et planification',
      step1Text: 'Examen clinique complet, scanner 3D de la mâchoire pour évaluer la qualité et la quantité d\'os disponible. Planification numérique précise de la position optimale des implants.',
      step2Title: 'Pose de l\'implant',
      step2Text: 'Intervention chirurgicale sous anesthésie locale (ou sédation si souhaité). Insertion précise de l\'implant dans l\'os. Durée : 30-60 minutes par implant. Procédure peu invasive avec récupération rapide.',
      step3Title: 'Période d\'ostéointégration',
      step3Text: 'Période de cicatrisation de 3 à 6 mois pendant laquelle l\'implant fusionne avec l\'os. Une solution provisoire peut être fournie pour l\'esthétique si nécessaire.',
      step4Title: 'Pose de la couronne définitive',
      step4Text: 'Une fois l\'implant intégré, pose d\'un pilier (abutment) puis de la couronne définitive sur mesure. Résultat final : une dent fonctionnelle et esthétique impossible à distinguer d\'une vraie dent.',
      section4Title: 'Soins post-opératoires',
      careText1: 'Après la pose de l\'implant, suivez ces recommandations : appliquez de la glace pendant les premières 24h pour réduire le gonflement, prenez les médicaments prescrits (antibiotiques et antalgiques), mangez des aliments mous et tièdes pendant quelques jours, évitez de fumer car cela compromet la cicatrisation, maintenez une excellente hygiène bucco-dentaire en nettoyant délicatement la zone, et évitez les efforts physiques intenses pendant 48h.',
      careText2: 'Avec une bonne hygiène et des visites régulières chez votre dentiste, les implants dentaires peuvent durer toute une vie. Le taux de succès à long terme est de 95-98%. Brossez vos dents et vos implants comme des dents naturelles, utilisez du fil dentaire quotidiennement, et consultez votre dentiste tous les 6 mois.',
      faq1Q: 'Est-ce que tout le monde peut avoir des implants dentaires ?',
      faq1A: 'La plupart des adultes en bonne santé avec une quantité d\'os suffisante peuvent recevoir des implants. Une consultation permet d\'évaluer votre cas. Dans certains cas, une greffe osseuse peut être nécessaire avant la pose d\'implants.',
      faq2Q: 'La pose d\'un implant est-elle douloureuse ?',
      faq2A: 'L\'intervention se fait sous anesthésie locale, vous ne ressentez donc aucune douleur pendant la pose. Après l\'intervention, un léger inconfort est possible pendant 2-3 jours, facilement géré avec des antalgiques. La plupart des patients rapportent moins de douleur qu\'avec une extraction dentaire.',
      faq3Q: 'Combien de temps dure un implant dentaire ?',
      faq3A: 'Avec une bonne hygiène et un entretien régulier, un implant dentaire peut durer toute une vie. Les études montrent des taux de succès de 95-98% après 10 ans. La couronne sur l\'implant peut nécessiter un remplacement après 10-15 ans.',
      faq4Q: 'Puis-je manger normalement avec des implants ?',
      faq4A: 'Oui ! Une fois l\'implant complètement intégré et la couronne posée, vous pouvez manger tout ce que vous voulez. Les implants restaurent 100% de votre force de mastication, contrairement aux prothèses amovibles.',
      ctaTitle: 'Retrouvez un sourire complet avec les implants dentaires',
      ctaText: 'Consultation gratuite pour évaluer votre cas à Casablanca',
      ctaButton: 'Prendre Rendez-vous',
    },
    ar: {
      title: 'زراعة الأسنان في الدار البيضاء',
      subtitle: 'حل دائم لتعويض أسنانك المفقودة',
      intro1: 'تمثل زراعة الأسنان الحل الأكثر تقدمًا ودوامًا لتعويض سن واحد أو عدة أسنان مفقودة. في عيادة الدكتورة فردوس موستعين بالدار البيضاء، نستخدم أحدث الغرسات لنقدم لك نتائج طبيعية ومريحة ودائمة.',
      intro2: 'الغرسة السنية هي جذر اصطناعي من التيتانيوم المتوافق حيويًا يُدرج في عظم الفك. تعمل كدعامة قوية للتاج أو الجسر أو طقم الأسنان. يوفر هذا الحل الثوري الثبات والراحة والجمال للأسنان الطبيعية.',
      section1Title: 'ما هي زراعة الأسنان؟',
      section1Text1: 'الغرسة السنية هي برغي من التيتانيوم يحل محل جذر السن المفقود. التيتانيوم مادة متوافقة حيويًا تندمج بشكل طبيعي مع عظم الفك من خلال عملية تسمى التكامل العظمي. بمجرد دمج الغرسة، يمكنها دعم ترميم الأسنان (تاج، جسر أو طقم) لعقود.',
      section1Text2: 'توفر زراعة الأسنان مزايا عديدة مقارنة بالحلول التقليدية: تحافظ على عظم الفك بتحفيز نموه، لا تتطلب تعديل الأسنان المجاورة السليمة، توفر حلًا دائمًا بمعدل نجاح ٩٥-٩٨٪، تستعيد وظيفة المضغ بالكامل، وتوفر نتيجة جمالية لا يمكن تمييزها عن الأسنان الطبيعية.',
      section2Title: 'دواعي الاستعمال والفوائد',
      section2Text1: 'تُستخدم زراعة الأسنان في حالات عديدة: تعويض سن واحد مفقود دون المساس بالأسنان المجاورة، تعويض عدة أسنان بجسر على الغرسات، تثبيت طقم أسنان كامل متحرك، أو استعادة كاملة للفك بطقم ثابت على الغرسات (All-on-4 أو All-on-6).',
      section2Text2: 'على عكس الجسر التقليدي الذي يتطلب نحت الأسنان المجاورة، الغرسة حل مستقل يحافظ على أسنانك الطبيعية. إنها أيضًا أكثر راحة من طقم الأسنان المتحرك وتزيل مشاكل الثبات والانزلاق. زراعة الأسنان هي الحل الأقرب إلى السن الطبيعي.',
      section3Title: 'مراحل العلاج',
      step1Title: 'الاستشارة والتخطيط',
      step1Text: 'فحص سريري كامل، مسح ثلاثي الأبعاد للفك لتقييم جودة وكمية العظم المتاح. تخطيط رقمي دقيق لموضع الغرسات الأمثل.',
      step2Title: 'وضع الغرسة',
      step2Text: 'تدخل جراحي تحت التخدير الموضعي (أو التخدير إذا رغبت). إدراج دقيق للغرسة في العظم. المدة: ٣٠-٦٠ دقيقة لكل غرسة. إجراء طفيف التوغل مع تعافي سريع.',
      step3Title: 'فترة التكامل العظمي',
      step3Text: 'فترة شفاء من ٣ إلى ٦ أشهر تندمج خلالها الغرسة مع العظم. يمكن توفير حل مؤقت للجمالية إذا لزم الأمر.',
      step4Title: 'وضع التاج النهائي',
      step4Text: 'بمجرد دمج الغرسة، وضع دعامة ثم التاج النهائي المخصص. النتيجة النهائية: سن وظيفي وجمالي يستحيل تمييزه عن السن الحقيقي.',
      section4Title: 'العناية بعد العملية',
      careText1: 'بعد وضع الغرسة، اتبع هذه التوصيات: ضع الثلج خلال أول ٢٤ ساعة لتقليل التورم، تناول الأدوية الموصوفة (المضادات الحيوية والمسكنات)، تناول أطعمة طرية ودافئة لبضعة أيام، تجنب التدخين لأنه يعرض الشفاء للخطر، حافظ على نظافة فموية ممتازة بتنظيف المنطقة بلطف، وتجنب المجهود البدني المكثف لمدة ٤٨ ساعة.',
      careText2: 'مع النظافة الجيدة والزيارات المنتظمة لطبيب الأسنان، يمكن أن تدوم زراعة الأسنان مدى الحياة. معدل النجاح طويل الأمد هو ٩٥-٩٨٪. نظف أسنانك وغرساتك كأسنان طبيعية، استخدم خيط الأسنان يوميًا، واستشر طبيب أسنانك كل ٦ أشهر.',
      faq1Q: 'هل يمكن للجميع الحصول على زراعة الأسنان؟',
      faq1A: 'معظم البالغين الأصحاء الذين لديهم كمية كافية من العظام يمكنهم تلقي الغرسات. تسمح الاستشارة بتقييم حالتك. في بعض الحالات، قد تكون هناك حاجة لطعم عظمي قبل وضع الغرسات.',
      faq2Q: 'هل وضع الغرسة مؤلم؟',
      faq2A: 'يتم التدخل تحت التخدير الموضعي، لذلك لا تشعر بأي ألم أثناء الوضع. بعد التدخل، قد يكون هناك انزعاج طفيف لمدة ٢-٣ أيام، يُدار بسهولة بالمسكنات. يبلغ معظم المرضى عن ألم أقل من خلع الأسنان.',
      faq3Q: 'كم تدوم زراعة الأسنان؟',
      faq3A: 'مع النظافة الجيدة والصيانة المنتظمة، يمكن أن تدوم زراعة الأسنان مدى الحياة. تظهر الدراسات معدلات نجاح ٩٥-٩٨٪ بعد ١٠ سنوات. قد يحتاج التاج على الغرسة إلى استبدال بعد ١٠-١٥ سنة.',
      faq4Q: 'هل يمكنني الأكل بشكل طبيعي مع الغرسات؟',
      faq4A: 'نعم! بمجرد دمج الغرسة بالكامل ووضع التاج، يمكنك تناول كل ما تريد. تستعيد الغرسات ١٠٠٪ من قوة المضغ، على عكس أطقم الأسنان المتحركة.',
      ctaTitle: 'استعد ابتسامة كاملة بزراعة الأسنان',
      ctaText: 'استشارة مجانية لتقييم حالتك في الدار البيضاء',
      ctaButton: 'احجز موعد',
    },
    en: {
      title: 'Dental Implants in Casablanca',
      subtitle: 'Permanent solution to replace your missing teeth',
      intro1: 'Dental implantology represents the most advanced and durable solution for replacing one or more missing teeth. At Dr. Firdaous MOUSTAINE\'s clinic in Casablanca, we use state-of-the-art implants to provide natural, comfortable, and permanent results.',
      intro2: 'A dental implant is an artificial root made of biocompatible titanium that is inserted into the jawbone. It serves as a solid support for a crown, bridge, or dental prosthesis. This revolutionary solution offers the stability, comfort, and aesthetics of natural teeth.',
      section1Title: 'What is a Dental Implant?',
      section1Text1: 'A dental implant is a titanium screw that replaces the root of a missing tooth. Titanium is a biocompatible material that naturally integrates with the jawbone through a process called osseointegration. Once the implant is integrated, it can support a dental restoration (crown, bridge, or prosthesis) for decades.',
      section1Text2: 'Dental implants offer many advantages over traditional solutions: they preserve jawbone by stimulating its growth, don\'t require modifying adjacent healthy teeth, offer a permanent solution with a 95-98% success rate, completely restore chewing function, and provide an aesthetic result indistinguishable from natural teeth.',
      section2Title: 'Indications and Benefits',
      section2Text1: 'Dental implants are indicated in many situations: replacing a single missing tooth without affecting neighboring teeth, replacing multiple teeth with an implant-supported bridge, stabilizing a removable complete denture, or complete jaw restoration with a fixed implant-supported prosthesis (All-on-4 or All-on-6).',
      section2Text2: 'Unlike the traditional bridge that requires filing down adjacent teeth, the implant is an autonomous solution that preserves your natural teeth. It\'s also more comfortable than a removable denture and eliminates stability and slipping problems. The dental implant is the solution closest to a natural tooth.',
      section3Title: 'Treatment Process',
      step1Title: 'Consultation and planning',
      step1Text: 'Complete clinical examination, 3D jaw scan to assess available bone quality and quantity. Precise digital planning of optimal implant positions.',
      step2Title: 'Implant placement',
      step2Text: 'Surgical procedure under local anesthesia (or sedation if desired). Precise insertion of implant into bone. Duration: 30-60 minutes per implant. Minimally invasive procedure with quick recovery.',
      step3Title: 'Osseointegration period',
      step3Text: 'Healing period of 3 to 6 months during which the implant fuses with the bone. A temporary solution can be provided for aesthetics if needed.',
      step4Title: 'Final crown placement',
      step4Text: 'Once the implant is integrated, placement of an abutment then the custom final crown. Final result: a functional and aesthetic tooth impossible to distinguish from a real tooth.',
      section4Title: 'Post-operative Care',
      careText1: 'After implant placement, follow these recommendations: apply ice for the first 24 hours to reduce swelling, take prescribed medications (antibiotics and pain relievers), eat soft, warm foods for a few days, avoid smoking as it compromises healing, maintain excellent oral hygiene by gently cleaning the area, and avoid intense physical effort for 48 hours.',
      careText2: 'With good hygiene and regular dental visits, dental implants can last a lifetime. The long-term success rate is 95-98%. Brush your teeth and implants like natural teeth, use dental floss daily, and see your dentist every 6 months.',
      faq1Q: 'Can everyone get dental implants?',
      faq1A: 'Most healthy adults with sufficient bone quantity can receive implants. A consultation evaluates your case. In some cases, bone grafting may be necessary before implant placement.',
      faq2Q: 'Is implant placement painful?',
      faq2A: 'The procedure is done under local anesthesia, so you feel no pain during placement. After the procedure, slight discomfort is possible for 2-3 days, easily managed with pain relievers. Most patients report less pain than with tooth extraction.',
      faq3Q: 'How long does a dental implant last?',
      faq3A: 'With good hygiene and regular maintenance, a dental implant can last a lifetime. Studies show 95-98% success rates after 10 years. The crown on the implant may need replacement after 10-15 years.',
      faq4Q: 'Can I eat normally with implants?',
      faq4A: 'Yes! Once the implant is fully integrated and the crown placed, you can eat whatever you want. Implants restore 100% of your chewing strength, unlike removable dentures.',
      ctaTitle: 'Get a complete smile with dental implants',
      ctaText: 'Free consultation to evaluate your case in Casablanca',
      ctaButton: 'Book Appointment',
    },
  };

  const c = content[language];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link href={localizePath('services')}>
          <Button variant="ghost" className="mb-6 gap-2" data-testid="link-back-services">
            <ChevronLeft className="h-4 w-4" />
            {t('cta.backToServices')}
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Anchor className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{c.title}</h1>
          </div>
          <p className="text-xl text-muted-foreground">{c.subtitle}</p>
        </div>

        <div className="rounded-lg overflow-hidden mb-12">
          <img src={implantImage} alt={c.title} className="w-full h-96 object-cover" loading="lazy" />
        </div>

        <div className="space-y-12">
          <section>
            <p className="text-muted-foreground leading-relaxed mb-4">{c.intro1}</p>
            <p className="text-muted-foreground leading-relaxed">{c.intro2}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">{c.section1Title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{c.section1Text1}</p>
            <p className="text-muted-foreground leading-relaxed">{c.section1Text2}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">{c.section2Title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{c.section2Text1}</p>
            <p className="text-muted-foreground leading-relaxed">{c.section2Text2}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">{c.section3Title}</h2>
            <div className="space-y-4">
              {[
                { title: c.step1Title, text: c.step1Text },
                { title: c.step2Title, text: c.step2Text },
                { title: c.step3Title, text: c.step3Text },
                { title: c.step4Title, text: c.step4Text },
              ].map((step, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary">
                        {language === 'ar' ? ['١', '٢', '٣', '٤'][i] : i + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">{c.section4Title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{c.careText1}</p>
            <p className="text-muted-foreground leading-relaxed">{c.careText2}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              <FAQItem value="faq-1" question={c.faq1Q} answer={c.faq1A} />
              <FAQItem value="faq-2" question={c.faq2Q} answer={c.faq2A} />
              <FAQItem value="faq-3" question={c.faq3Q} answer={c.faq3A} />
              <FAQItem value="faq-4" question={c.faq4Q} answer={c.faq4A} />
            </Accordion>
          </section>

          <section className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">{c.ctaTitle}</h2>
              <p className="text-lg mb-8 opacity-90">{c.ctaText}</p>
              <Link href={localizePath('contact')}>
                <Button size="lg" variant="secondary" className="text-lg" data-testid="button-book-implants">
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
