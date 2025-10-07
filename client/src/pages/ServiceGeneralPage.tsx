import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, Stethoscope } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from '@/components/FAQItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import generalImage from '@assets/stock_images/general_dental_check_ef0946c1.jpg';

export default function ServiceGeneralPage() {
  const { language, t } = useLanguage();
  const { localizePath } = useLocalizedPath();

  const content = {
    fr: {
      title: 'Dentisterie Générale à Casablanca',
      subtitle: 'Soins dentaires complets pour toute la famille',
      intro1: 'La dentisterie générale constitue la base de votre santé bucco-dentaire. Au cabinet du Dr. Firdaous MOUSTAINE à Casablanca, nous offrons une gamme complète de soins dentaires préventifs et curatifs pour maintenir votre sourire en excellente santé. De l\'examen de routine au traitement des caries, nous prenons soin de toute votre famille.',
      intro2: 'Notre approche préventive vise à détecter et traiter les problèmes dentaires avant qu\'ils ne deviennent sérieux. Des visites régulières et des soins appropriés vous permettent d\'éviter des traitements complexes et coûteux, tout en conservant vos dents naturelles le plus longtemps possible.',
      section1Title: 'Examens et prévention',
      section1Text1: 'L\'examen dentaire de routine est essentiel pour maintenir une bonne santé bucco-dentaire. Nous recommandons une visite tous les 6 mois pour un contrôle complet. Lors de votre visite, nous effectuons un examen clinique minutieux de vos dents, gencives et muqueuses, prenons des radiographies si nécessaire pour détecter les caries invisibles à l\'œil nu, réalisons un détartrage professionnel pour éliminer la plaque et le tartre, appliquons du fluor pour renforcer l\'émail, et vous donnons des conseils personnalisés d\'hygiène bucco-dentaire.',
      section1Text2: 'La prévention est la clé d\'une bonne santé dentaire. Un nettoyage professionnel régulier élimine la plaque et le tartre que le brossage ne peut pas atteindre, prévenant ainsi les caries, les maladies des gencives et la mauvaise haleine. Les examens réguliers permettent de détecter les problèmes précocement, quand ils sont plus faciles et moins coûteux à traiter.',
      section2Title: 'Traitement des caries',
      section2Text1: 'La carie dentaire est l\'une des maladies les plus courantes. C\'est une infection qui détruit progressivement l\'émail et la dentine. Si elle n\'est pas traitée, elle peut atteindre le nerf et causer une douleur intense nécessitant un traitement de canal. Heureusement, les caries détectées tôt sont faciles à traiter avec un simple plombage (obturation).',
      section2Text2: 'Nous utilisons des matériaux modernes de haute qualité pour restaurer vos dents : les composites (résine) de couleur naturelle qui s\'harmonisent parfaitement avec vos dents, invisibles et durables, les inlays/onlays en céramique pour les cavités plus importantes, offrant une résistance maximale, et les couronnes dentaires pour les dents très abîmées. Tous nos traitements se font sous anesthésie locale pour votre confort total.',
      section3Title: 'Nos services de dentisterie générale',
      step1Title: 'Examen complet et nettoyage',
      step1Text: 'Contrôle approfondi, détartrage professionnel, polissage des dents, application de fluor et conseils de prévention personnalisés. Recommandé tous les 6 mois.',
      step2Title: 'Traitement des caries',
      step2Text: 'Élimination de la carie et restauration de la dent avec des matériaux esthétiques et durables. Intervention indolore sous anesthésie locale.',
      step3Title: 'Soins d\'urgence',
      step3Text: 'Prise en charge rapide des urgences dentaires : douleurs, abcès, dents cassées, infections. Soulagement immédiat et traitement définitif.',
      step4Title: 'Extractions dentaires',
      step4Text: 'Extraction de dents non conservables, dents de sagesse incluses, et dents temporaires. Procédure sûre et confortable sous anesthésie.',
      section4Title: 'Conseils pour une bonne santé dentaire',
      careText1: 'Maintenir une excellente hygiène bucco-dentaire à domicile est essentiel. Brossez vos dents 2 fois par jour pendant au moins 2 minutes avec une brosse à dents souple et un dentifrice fluoré, utilisez du fil dentaire quotidiennement pour nettoyer entre les dents où la brosse ne peut pas atteindre, complétez avec un bain de bouche fluoré si recommandé, remplacez votre brosse à dents tous les 3 mois, limitez les aliments sucrés et acides qui favorisent les caries, buvez beaucoup d\'eau, surtout après les repas, et évitez le tabac qui cause des maladies des gencives et des dents.',
      careText2: 'Ne négligez jamais vos visites de contrôle régulières. Même si vous n\'avez pas de douleur ou de problème apparent, un examen professionnel peut détecter des problèmes à un stade précoce. La prévention coûte toujours moins cher que le traitement. Prenez soin de vos dents, elles vous serviront toute votre vie !',
      faq1Q: 'À quelle fréquence dois-je consulter le dentiste ?',
      faq1A: 'Nous recommandons une visite tous les 6 mois pour un examen et un nettoyage professionnel. Si vous avez des problèmes de gencives ou un risque élevé de caries, des visites plus fréquentes (tous les 3-4 mois) peuvent être recommandées.',
      faq2Q: 'Le détartrage abîme-t-il les dents ?',
      faq2A: 'Non, absolument pas ! Le détartrage professionnel élimine le tartre durci qui ne peut pas être enlevé par le brossage. C\'est un soin essentiel qui protège vos dents et vos gencives. Sans détartrage régulier, le tartre s\'accumule et cause des maladies des gencives.',
      faq3Q: 'Pourquoi ai-je besoin de radiographies ?',
      faq3A: 'Les radiographies permettent de voir ce qui est invisible à l\'œil nu : caries entre les dents, problèmes sous les obturations existantes, infections à la racine des dents, perte osseuse autour des dents. Elles sont essentielles pour un diagnostic complet et précis.',
      faq4Q: 'Comment prévenir les caries ?',
      faq4A: 'La prévention des caries repose sur trois piliers : excellente hygiène (brossage 2 fois par jour et fil dentaire), alimentation équilibrée limitant les sucres, et visites régulières chez le dentiste pour un nettoyage professionnel et l\'application de fluor.',
      ctaTitle: 'Prenez soin de votre santé dentaire',
      ctaText: 'Examen complet et nettoyage professionnel à Casablanca',
      ctaButton: 'Prendre Rendez-vous',
    },
    ar: {
      title: 'طب الأسنان العام في الدار البيضاء',
      subtitle: 'عناية أسنان كاملة لجميع أفراد العائلة',
      intro1: 'يشكل طب الأسنان العام أساس صحة فمك. في عيادة الدكتورة فردوس مستين بالدار البيضاء، نقدم مجموعة كاملة من خدمات العناية بالأسنان الوقائية والعلاجية للحفاظ على ابتسامتك في صحة ممتازة. من الفحص الروتيني إلى علاج التسوس، نعتني بجميع أفراد عائلتك.',
      intro2: 'نهجنا الوقائي يهدف لاكتشاف ومعالجة مشاكل الأسنان قبل أن تصبح خطيرة. الزيارات المنتظمة والعناية المناسبة تسمح لك بتجنب العلاجات المعقدة والمكلفة، مع الحفاظ على أسنانك الطبيعية أطول فترة ممكنة.',
      section1Title: 'الفحوصات والوقاية',
      section1Text1: 'فحص الأسنان الروتيني ضروري للحفاظ على صحة فموية جيدة. نوصي بزيارة كل ٦ أشهر لفحص كامل. خلال زيارتك، نجري فحصًا سريريًا دقيقًا لأسنانك ولثتك وأغشيتك المخاطية، نأخذ أشعة إذا لزم الأمر لكشف التسوس غير المرئي بالعين المجردة، نقوم بإزالة الجير المهنية لإزالة البلاك والجير، نطبق الفلورايد لتقوية المينا، ونقدم لك نصائح مخصصة لنظافة الفم.',
      section1Text2: 'الوقاية مفتاح صحة الأسنان الجيدة. التنظيف المهني المنتظم يزيل البلاك والجير الذي لا يمكن للتنظيف بالفرشاة الوصول إليه، مما يمنع التسوس وأمراض اللثة ورائحة الفم الكريهة. الفحوصات المنتظمة تسمح باكتشاف المشاكل مبكرًا، عندما تكون أسهل وأقل تكلفة في العلاج.',
      section2Title: 'علاج التسوس',
      section2Text1: 'تسوس الأسنان من أكثر الأمراض شيوعًا. إنها عدوى تدمر تدريجيًا المينا والعاج. إذا لم تُعالج، يمكن أن تصل للعصب وتسبب ألمًا شديدًا يتطلب علاج العصب. لحسن الحظ، التسوس المكتشف مبكرًا سهل العلاج بحشوة بسيطة.',
      section2Text2: 'نستخدم مواد حديثة عالية الجودة لترميم أسنانك: مركبات (راتنج) بلون طبيعي تتناسق تمامًا مع أسنانك، غير مرئية ومتينة، حشوات/طبقات سيراميك للتجاويف الأكبر، توفر مقاومة قصوى، وتيجان الأسنان للأسنان التالفة جدًا. جميع علاجاتنا تتم تحت التخدير الموضعي لراحتك الكاملة.',
      section3Title: 'خدمات طب الأسنان العام لدينا',
      step1Title: 'فحص كامل وتنظيف',
      step1Text: 'فحص شامل، إزالة جير مهنية، تلميع الأسنان، تطبيق الفلورايد ونصائح وقاية مخصصة. موصى به كل ٦ أشهر.',
      step2Title: 'علاج التسوس',
      step2Text: 'إزالة التسوس وترميم السن بمواد جمالية ومتينة. تدخل غير مؤلم تحت التخدير الموضعي.',
      step3Title: 'رعاية الطوارئ',
      step3Text: 'معالجة سريعة لطوارئ الأسنان: آلام، خراجات، أسنان مكسورة، عدوى. راحة فورية وعلاج نهائي.',
      step4Title: 'خلع الأسنان',
      step4Text: 'خلع الأسنان غير القابلة للحفاظ عليها، أسنان الحكمة المنحشرة، والأسنان المؤقتة. إجراء آمن ومريح تحت التخدير.',
      section4Title: 'نصائح لصحة أسنان جيدة',
      careText1: 'الحفاظ على نظافة فموية ممتازة في المنزل ضروري. نظف أسنانك مرتين يوميًا لمدة دقيقتين على الأقل بفرشاة أسنان ناعمة ومعجون يحتوي على الفلورايد، استخدم خيط الأسنان يوميًا للتنظيف بين الأسنان حيث لا تصل الفرشاة، أكمل بغسول فم يحتوي على الفلورايد إذا أُوصي به، استبدل فرشاة أسنانك كل ٣ أشهر، قلل من الأطعمة السكرية والحمضية التي تعزز التسوس، اشرب الكثير من الماء، خاصة بعد الوجبات، وتجنب التبغ الذي يسبب أمراض اللثة والأسنان.',
      careText2: 'لا تهمل أبدًا زيارات الفحص المنتظمة. حتى لو لم يكن لديك ألم أو مشكلة ظاهرة، يمكن للفحص المهني اكتشاف مشاكل في مرحلة مبكرة. الوقاية دائمًا أرخص من العلاج. اعتن بأسنانك، ستخدمك طوال حياتك!',
      faq1Q: 'كم مرة يجب أن أستشير طبيب الأسنان؟',
      faq1A: 'نوصي بزيارة كل ٦ أشهر لفحص وتنظيف مهني. إذا كان لديك مشاكل لثة أو خطر عالٍ للتسوس، قد يُوصى بزيارات أكثر تواترًا (كل ٣-٤ أشهر).',
      faq2Q: 'هل إزالة الجير تضر الأسنان؟',
      faq2A: 'لا، بالتأكيد لا! إزالة الجير المهنية تزيل الجير المتصلب الذي لا يمكن إزالته بالفرشاة. إنها عناية أساسية تحمي أسنانك ولثتك. بدون إزالة الجير المنتظمة، يتراكم الجير ويسبب أمراض اللثة.',
      faq3Q: 'لماذا أحتاج أشعة؟',
      faq3A: 'تسمح الأشعة برؤية ما هو غير مرئي بالعين المجردة: تسوس بين الأسنان، مشاكل تحت الحشوات الموجودة، عدوى في جذور الأسنان، فقدان عظم حول الأسنان. إنها ضرورية لتشخيص كامل ودقيق.',
      faq4Q: 'كيف أمنع التسوس؟',
      faq4A: 'تعتمد الوقاية من التسوس على ثلاثة أركان: نظافة ممتازة (تنظيف مرتين يوميًا وخيط أسنان)، نظام غذائي متوازن يحد من السكريات، وزيارات منتظمة لطبيب الأسنان للتنظيف المهني وتطبيق الفلورايد.',
      ctaTitle: 'اعتن بصحة أسنانك',
      ctaText: 'فحص كامل وتنظيف مهني في الدار البيضاء',
      ctaButton: 'احجز موعد',
    },
    en: {
      title: 'General Dentistry in Casablanca',
      subtitle: 'Complete dental care for the whole family',
      intro1: 'General dentistry forms the foundation of your oral health. At Dr. Firdaous MOUSTAINE\'s clinic in Casablanca, we offer a complete range of preventive and curative dental care to keep your smile in excellent health. From routine exams to cavity treatment, we care for your entire family.',
      intro2: 'Our preventive approach aims to detect and treat dental problems before they become serious. Regular visits and appropriate care allow you to avoid complex and costly treatments while keeping your natural teeth as long as possible.',
      section1Title: 'Examinations and Prevention',
      section1Text1: 'Routine dental examination is essential for maintaining good oral health. We recommend a visit every 6 months for a complete checkup. During your visit, we perform a thorough clinical examination of your teeth, gums and mucous membranes, take X-rays if necessary to detect cavities invisible to the naked eye, perform professional scaling to remove plaque and tartar, apply fluoride to strengthen enamel, and give you personalized oral hygiene advice.',
      section1Text2: 'Prevention is the key to good dental health. Regular professional cleaning removes plaque and tartar that brushing cannot reach, thus preventing cavities, gum disease and bad breath. Regular exams allow early problem detection when they are easier and less expensive to treat.',
      section2Title: 'Cavity Treatment',
      section2Text1: 'Dental cavity is one of the most common diseases. It\'s an infection that progressively destroys enamel and dentin. If untreated, it can reach the nerve and cause intense pain requiring root canal treatment. Fortunately, cavities detected early are easy to treat with a simple filling.',
      section2Text2: 'We use modern high-quality materials to restore your teeth: composite (resin) in natural color that blends perfectly with your teeth, invisible and durable, ceramic inlays/onlays for larger cavities, offering maximum resistance, and dental crowns for severely damaged teeth. All our treatments are done under local anesthesia for your complete comfort.',
      section3Title: 'Our General Dentistry Services',
      step1Title: 'Complete exam and cleaning',
      step1Text: 'Thorough checkup, professional scaling, teeth polishing, fluoride application and personalized prevention advice. Recommended every 6 months.',
      step2Title: 'Cavity treatment',
      step2Text: 'Cavity removal and tooth restoration with aesthetic and durable materials. Painless procedure under local anesthesia.',
      step3Title: 'Emergency care',
      step3Text: 'Rapid management of dental emergencies: pain, abscesses, broken teeth, infections. Immediate relief and definitive treatment.',
      step4Title: 'Tooth extractions',
      step4Text: 'Extraction of non-salvageable teeth, impacted wisdom teeth, and temporary teeth. Safe and comfortable procedure under anesthesia.',
      section4Title: 'Tips for Good Dental Health',
      careText1: 'Maintaining excellent oral hygiene at home is essential. Brush your teeth twice daily for at least 2 minutes with a soft toothbrush and fluoride toothpaste, use dental floss daily to clean between teeth where the brush cannot reach, complete with fluoride mouthwash if recommended, replace your toothbrush every 3 months, limit sweet and acidic foods that promote cavities, drink plenty of water, especially after meals, and avoid tobacco which causes gum and tooth diseases.',
      careText2: 'Never neglect your regular checkup visits. Even if you have no pain or apparent problem, a professional examination can detect problems at an early stage. Prevention always costs less than treatment. Take care of your teeth, they will serve you for life!',
      faq1Q: 'How often should I see the dentist?',
      faq1A: 'We recommend a visit every 6 months for an exam and professional cleaning. If you have gum problems or high cavity risk, more frequent visits (every 3-4 months) may be recommended.',
      faq2Q: 'Does scaling damage teeth?',
      faq2A: 'No, absolutely not! Professional scaling removes hardened tartar that cannot be removed by brushing. It\'s essential care that protects your teeth and gums. Without regular scaling, tartar accumulates and causes gum disease.',
      faq3Q: 'Why do I need X-rays?',
      faq3A: 'X-rays allow us to see what\'s invisible to the naked eye: cavities between teeth, problems under existing fillings, infections at tooth roots, bone loss around teeth. They are essential for complete and accurate diagnosis.',
      faq4Q: 'How to prevent cavities?',
      faq4A: 'Cavity prevention relies on three pillars: excellent hygiene (brushing twice daily and flossing), balanced diet limiting sugars, and regular dentist visits for professional cleaning and fluoride application.',
      ctaTitle: 'Take care of your dental health',
      ctaText: 'Complete exam and professional cleaning in Casablanca',
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
              <Stethoscope className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{c.title}</h1>
          </div>
          <p className="text-xl text-muted-foreground">{c.subtitle}</p>
        </div>

        <div className="rounded-lg overflow-hidden mb-12">
          <img src={generalImage} alt={c.title} className="w-full h-96 object-cover" />
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
                <Button size="lg" variant="secondary" className="text-lg" data-testid="button-book-general">
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
