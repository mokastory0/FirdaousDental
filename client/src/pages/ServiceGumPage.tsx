import { useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, Heart } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from '@/components/FAQItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { useSEO } from '@/hooks/useSEO';
import gumImage from '@assets/stock_images/gum_disease_treatmen_60d08cb9.jpg';

export default function ServiceGumPage() {
  const { language, t } = useLanguage();
  const { localizePath } = useLocalizedPath();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: {
      fr: 'Parodontologie à Casablanca | Soins des Gencives | Dr. Firdaous MOUSTAINE',
      ar: 'علاج اللثة في الدار البيضاء | د. فردوس موستعين',
      en: 'Periodontics in Casablanca | Gum Care | Dr. Firdaous MOUSTAINE'
    },
    description: {
      fr: 'Parodontologie à Casablanca. Traitement des maladies des gencives, gingivite, parodontite. Détartrage, curetage. Cabinet Dr. Firdaous MOUSTAINE.',
      ar: 'علاج اللثة في الدار البيضاء. علاج أمراض اللثة، التهاب اللثة. إزالة الجير، كشط. عيادة د. فردوس موستعين.',
      en: 'Periodontics in Casablanca. Treatment of gum diseases, gingivitis, periodontitis. Scaling, curettage. Dr. Firdaous MOUSTAINE clinic.'
    },
    keywords: {
      fr: 'parodontologie casablanca, maladie des gencives, gingivite, parodontite, détartrage casablanca',
      ar: 'علاج اللثة الدار البيضاء, أمراض اللثة, التهاب اللثة, إزالة الجير',
      en: 'periodontics casablanca, gum disease, gingivitis, periodontitis, scaling casablanca'
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Periodontics",
      "description": "Professional periodontal services in Casablanca",
      "procedureType": "Periodontics"
    }
  });

  const content = {
    fr: {
      title: 'Traitement des Gencives à Casablanca',
      subtitle: 'Parodontologie - Santé des gencives et de l\'os',
      intro1: 'Les maladies des gencives (parodontales) sont parmi les problèmes bucco-dentaires les plus courants mais souvent négligés. Au cabinet du Dr. Firdaous MOUSTAINE à Casablanca, nous proposons des traitements parodontaux avancés pour prévenir, traiter et guérir les maladies des gencives, protégeant ainsi vos dents et votre santé générale.',
      intro2: 'La parodontie traite les maladies qui affectent les tissus de soutien des dents : gencives, os alvéolaire et ligament parodontal. Un diagnostic précoce et un traitement approprié peuvent sauver vos dents et prévenir des complications graves pour votre santé.',
      section1Title: 'Les maladies parodontales',
      section1Text1: 'Les maladies parodontales se développent en deux stades. La gingivite est le stade initial : inflammation des gencives causée par l\'accumulation de plaque bactérienne. Les symptômes incluent gencives rouges, gonflées et qui saignent au brossage. Heureusement, la gingivite est réversible avec un bon traitement. La parodontite est le stade avancé : infection qui détruit progressivement l\'os et les tissus de soutien des dents, pouvant mener à leur perte.',
      section1Text2: 'Les signes d\'alerte incluent : saignement des gencives au brossage ou spontané, gencives gonflées, rouges ou sensibles, mauvaise haleine persistante, déchaussement des dents (dents qui semblent plus longues), mobilité dentaire, espaces qui apparaissent entre les dents, et changement dans l\'occlusion. N\'ignorez jamais ces signes - consultez rapidement pour éviter la progression de la maladie.',
      section2Title: 'Traitements parodontaux',
      section2Text1: 'Nous proposons une gamme complète de traitements adaptés à chaque stade de la maladie. Le détartrage et surfaçage radiculaire (nettoyage en profondeur) élimine le tartre et les bactéries sous les gencives et lisse les racines pour favoriser la réattache gingivale. Le traitement au laser offre une alternative moins invasive pour éliminer les bactéries et stimuler la guérison. La chirurgie parodontale peut être nécessaire dans les cas avancés pour nettoyer en profondeur et régénérer l\'os perdu.',
      section2Text2: 'La maintenance parodontale est cruciale après le traitement. Des visites régulières tous les 3-4 mois permettent de contrôler la maladie et prévenir les récidives. Un bon brossage, l\'utilisation du fil dentaire et un suivi régulier sont essentiels pour maintenir des gencives saines à long terme.',
      section3Title: 'Processus de traitement',
      step1Title: 'Examen et diagnostic',
      step1Text: 'Examen parodontal complet avec sondage des poches gingivales, radiographies pour évaluer la perte osseuse, et établissement du plan de traitement personnalisé.',
      step2Title: 'Traitement initial',
      step2Text: 'Détartrage et surfaçage radiculaire sous anesthésie locale. Nettoyage professionnel pour éliminer le tartre et les bactéries. Instructions d\'hygiène personnalisées.',
      step3Title: 'Réévaluation',
      step3Text: 'Évaluation des résultats après 4-6 semaines. Mesure de l\'amélioration des poches gingivales. Décision sur la nécessité d\'un traitement complémentaire.',
      step4Title: 'Maintenance',
      step4Text: 'Visites de contrôle régulières tous les 3-4 mois. Nettoyage professionnel et surveillance. Prévention des récidives par une bonne hygiène à domicile.',
      section4Title: 'Prévention et soins',
      careText1: 'La prévention des maladies parodontales repose sur une excellente hygiène bucco-dentaire. Brossez vos dents 2 fois par jour pendant 2-3 minutes avec une brosse souple et un dentifrice fluoré, utilisez du fil dentaire quotidiennement pour éliminer la plaque entre les dents, complétez avec un bain de bouche antibactérien si recommandé, ne fumez pas - le tabac est un facteur de risque majeur, adoptez une alimentation équilibrée riche en vitamines C et D, et consultez votre dentiste tous les 6 mois pour un détartrage professionnel.',
      careText2: 'Les maladies parodontales sont liées à des problèmes de santé généraux comme le diabète, les maladies cardiovasculaires et les complications de grossesse. Prendre soin de vos gencives, c\'est prendre soin de votre santé globale. Un traitement précoce peut sauver vos dents et améliorer votre qualité de vie.',
      faq1Q: 'Pourquoi mes gencives saignent-elles ?',
      faq1A: 'Le saignement des gencives est généralement le signe d\'une gingivite (inflammation des gencives) causée par l\'accumulation de plaque bactérienne. Ce n\'est pas normal et nécessite un traitement. Un détartrage professionnel et une amélioration de l\'hygiène bucco-dentaire résolvent généralement le problème.',
      faq2Q: 'Les maladies des gencives sont-elles graves ?',
      faq2A: 'Oui, si elles ne sont pas traitées. La parodontite avancée peut entraîner la perte de dents et est liée à des problèmes de santé généraux comme les maladies cardiaques et le diabète. Heureusement, un diagnostic précoce et un traitement approprié peuvent arrêter la progression et sauver vos dents.',
      faq3Q: 'Le traitement est-il douloureux ?',
      faq3A: 'Le traitement se fait sous anesthésie locale, vous ne ressentez donc aucune douleur pendant l\'intervention. Après le traitement, une sensibilité temporaire est possible pendant quelques jours, facilement gérable avec des antalgiques et une bonne hygiène.',
      faq4Q: 'Comment prévenir les problèmes de gencives ?',
      faq4A: 'La prévention repose sur une excellente hygiène : brossage 2 fois par jour, fil dentaire quotidien, détartrage professionnel tous les 6 mois, arrêt du tabac et alimentation équilibrée. Consultez dès les premiers signes (saignement, gencives rouges) pour un traitement précoce.',
      ctaTitle: 'Protégez vos dents en soignant vos gencives',
      ctaText: 'Consultation parodontale complète à Casablanca',
      ctaButton: 'Prendre Rendez-vous',
    },
    ar: {
      title: 'علاج اللثة في الدار البيضاء',
      subtitle: 'أمراض اللثة - صحة اللثة والعظام',
      intro1: 'أمراض اللثة (أمراض دواعم السن) هي من بين المشاكل الفموية الأكثر شيوعًا ولكن غالبًا ما يتم تجاهلها. في عيادة الدكتورة فردوس موستعين بالدار البيضاء، نقدم علاجات متقدمة لأمراض اللثة للوقاية والعلاج والشفاء من أمراض اللثة، وبالتالي حماية أسنانك وصحتك العامة.',
      intro2: 'يعالج طب اللثة الأمراض التي تصيب الأنسجة الداعمة للأسنان: اللثة، العظم السنخي، والرباط اللثوي. التشخيص المبكر والعلاج المناسب يمكن أن ينقذ أسنانك ويمنع مضاعفات خطيرة لصحتك.',
      section1Title: 'أمراض دواعم السن',
      section1Text1: 'تتطور أمراض اللثة على مرحلتين. التهاب اللثة هو المرحلة الأولى: التهاب اللثة الناجم عن تراكم البلاك البكتيري. تشمل الأعراض لثة حمراء ومتورمة ونزيف عند التنظيف. لحسن الحظ، التهاب اللثة قابل للعكس مع العلاج الجيد. التهاب دواعم السن هو المرحلة المتقدمة: عدوى تدمر تدريجيًا العظام والأنسجة الداعمة للأسنان، مما قد يؤدي لفقدانها.',
      section1Text2: 'تشمل علامات التحذير: نزيف اللثة عند التنظيف أو تلقائيًا، لثة منتفخة أو حمراء أو حساسة، رائحة فم كريهة مستمرة، تراجع اللثة (أسنان تبدو أطول)، حركة الأسنان، فراغات تظهر بين الأسنان، وتغيير في الإطباق. لا تتجاهل أبدًا هذه العلامات - استشر بسرعة لتجنب تقدم المرض.',
      section2Title: 'علاجات اللثة',
      section2Text1: 'نقدم مجموعة كاملة من العلاجات مناسبة لكل مرحلة من المرض. إزالة الجير وكشط الجذور (التنظيف العميق) يزيل الجير والبكتيريا تحت اللثة ويملس الجذور لتعزيز إعادة الالتصاق اللثوي. العلاج بالليزر يوفر بديلًا أقل توغلًا للقضاء على البكتيريا وتحفيز الشفاء. قد تكون الجراحة اللثوية ضرورية في الحالات المتقدمة للتنظيف العميق وتجديد العظم المفقود.',
      section2Text2: 'صيانة اللثة حاسمة بعد العلاج. تسمح الزيارات المنتظمة كل ٣-٤ أشهر بالتحكم في المرض ومنع الانتكاسات. التنظيف الجيد واستخدام خيط الأسنان والمتابعة المنتظمة ضرورية للحفاظ على لثة صحية على المدى الطويل.',
      section3Title: 'عملية العلاج',
      step1Title: 'الفحص والتشخيص',
      step1Text: 'فحص كامل للثة مع قياس جيوب اللثة، أشعة لتقييم فقدان العظام، ووضع خطة علاج مخصصة.',
      step2Title: 'العلاج الأولي',
      step2Text: 'إزالة الجير وكشط الجذور تحت التخدير الموضعي. تنظيف احترافي لإزالة الجير والبكتيريا. تعليمات نظافة مخصصة.',
      step3Title: 'إعادة التقييم',
      step3Text: 'تقييم النتائج بعد ٤-٦ أسابيع. قياس تحسن جيوب اللثة. القرار بشأن الحاجة لعلاج إضافي.',
      step4Title: 'الصيانة',
      step4Text: 'زيارات مراقبة منتظمة كل ٣-٤ أشهر. تنظيف احترافي ومراقبة. الوقاية من الانتكاسات بنظافة جيدة في المنزل.',
      section4Title: 'الوقاية والعناية',
      careText1: 'تعتمد الوقاية من أمراض اللثة على نظافة فموية ممتازة. نظف أسنانك مرتين يوميًا لمدة ٢-٣ دقائق بفرشاة ناعمة ومعجون يحتوي على الفلورايد، استخدم خيط الأسنان يوميًا لإزالة البلاك بين الأسنان، أكمل بغسول فم مضاد للبكتيريا إذا أُوصي به، لا تدخن - التبغ عامل خطر رئيسي، اتبع نظامًا غذائيًا متوازنًا غنيًا بفيتامينات C و D، واستشر طبيب أسنانك كل ٦ أشهر لإزالة الجير المهنية.',
      careText2: 'أمراض اللثة مرتبطة بمشاكل صحية عامة مثل السكري وأمراض القلب ومضاعفات الحمل. العناية بلثتك هي العناية بصحتك العامة. العلاج المبكر يمكن أن ينقذ أسنانك ويحسن جودة حياتك.',
      faq1Q: 'لماذا تنزف لثتي؟',
      faq1A: 'نزيف اللثة عمومًا علامة على التهاب اللثة الناجم عن تراكم البلاك البكتيري. هذا ليس طبيعيًا ويحتاج علاجًا. إزالة الجير المهنية وتحسين نظافة الفم تحل المشكلة عمومًا.',
      faq2Q: 'هل أمراض اللثة خطيرة؟',
      faq2A: 'نعم، إذا لم تُعالج. التهاب دواعم السن المتقدم يمكن أن يؤدي لفقدان الأسنان ومرتبط بمشاكل صحية عامة مثل أمراض القلب والسكري. لحسن الحظ، التشخيص المبكر والعلاج المناسب يمكن أن يوقف التقدم وينقذ أسنانك.',
      faq3Q: 'هل العلاج مؤلم؟',
      faq3A: 'يتم العلاج تحت التخدير الموضعي، لذلك لا تشعر بأي ألم أثناء التدخل. بعد العلاج، قد تكون هناك حساسية مؤقتة لبضعة أيام، يمكن إدارتها بسهولة بالمسكنات والنظافة الجيدة.',
      faq4Q: 'كيف أمنع مشاكل اللثة؟',
      faq4A: 'تعتمد الوقاية على نظافة ممتازة: تنظيف مرتين يوميًا، خيط أسنان يومي، إزالة جير مهنية كل ٦ أشهر، الإقلاع عن التدخين ونظام غذائي متوازن. استشر عند أول العلامات (نزيف، لثة حمراء) للعلاج المبكر.',
      ctaTitle: 'احم أسنانك بعلاج لثتك',
      ctaText: 'استشارة كاملة للثة في الدار البيضاء',
      ctaButton: 'احجز موعد',
    },
    en: {
      title: 'Gum Treatment in Casablanca',
      subtitle: 'Periodontics - Gum and bone health',
      intro1: 'Gum diseases (periodontal) are among the most common oral health problems but often neglected. At Dr. Firdaous MOUSTAINE\'s clinic in Casablanca, we offer advanced periodontal treatments to prevent, treat and cure gum diseases, protecting your teeth and overall health.',
      intro2: 'Periodontics treats diseases affecting tooth support tissues: gums, alveolar bone and periodontal ligament. Early diagnosis and appropriate treatment can save your teeth and prevent serious health complications.',
      section1Title: 'Periodontal Diseases',
      section1Text1: 'Periodontal diseases develop in two stages. Gingivitis is the initial stage: gum inflammation caused by plaque buildup. Symptoms include red, swollen gums that bleed when brushing. Fortunately, gingivitis is reversible with good treatment. Periodontitis is the advanced stage: infection that progressively destroys bone and tooth support tissues, potentially leading to tooth loss.',
      section1Text2: 'Warning signs include: bleeding gums when brushing or spontaneously, swollen, red or sensitive gums, persistent bad breath, gum recession (teeth appearing longer), tooth mobility, spaces appearing between teeth, and changes in bite. Never ignore these signs - consult quickly to avoid disease progression.',
      section2Title: 'Periodontal Treatments',
      section2Text1: 'We offer a complete range of treatments adapted to each disease stage. Scaling and root planing (deep cleaning) removes tartar and bacteria under gums and smooths roots to promote gingival reattachment. Laser treatment offers a less invasive alternative to eliminate bacteria and stimulate healing. Periodontal surgery may be necessary in advanced cases for deep cleaning and regenerating lost bone.',
      section2Text2: 'Periodontal maintenance is crucial after treatment. Regular visits every 3-4 months help control the disease and prevent recurrence. Good brushing, flossing and regular follow-up are essential for maintaining healthy gums long-term.',
      section3Title: 'Treatment Process',
      step1Title: 'Examination and diagnosis',
      step1Text: 'Complete periodontal examination with gingival pocket probing, X-rays to assess bone loss, and establishment of personalized treatment plan.',
      step2Title: 'Initial treatment',
      step2Text: 'Scaling and root planing under local anesthesia. Professional cleaning to remove tartar and bacteria. Personalized hygiene instructions.',
      step3Title: 'Re-evaluation',
      step3Text: 'Results evaluation after 4-6 weeks. Measurement of gingival pocket improvement. Decision on need for additional treatment.',
      step4Title: 'Maintenance',
      step4Text: 'Regular check-up visits every 3-4 months. Professional cleaning and monitoring. Prevention of recurrence through good home hygiene.',
      section4Title: 'Prevention and Care',
      careText1: 'Prevention of periodontal diseases relies on excellent oral hygiene. Brush your teeth twice daily for 2-3 minutes with a soft brush and fluoride toothpaste, use dental floss daily to remove plaque between teeth, complete with antibacterial mouthwash if recommended, don\'t smoke - tobacco is a major risk factor, adopt a balanced diet rich in vitamins C and D, and see your dentist every 6 months for professional scaling.',
      careText2: 'Periodontal diseases are linked to general health problems like diabetes, cardiovascular diseases and pregnancy complications. Taking care of your gums means taking care of your overall health. Early treatment can save your teeth and improve your quality of life.',
      faq1Q: 'Why do my gums bleed?',
      faq1A: 'Gum bleeding is generally a sign of gingivitis (gum inflammation) caused by plaque buildup. This is not normal and requires treatment. Professional scaling and improved oral hygiene usually resolve the problem.',
      faq2Q: 'Are gum diseases serious?',
      faq2A: 'Yes, if untreated. Advanced periodontitis can lead to tooth loss and is linked to general health problems like heart disease and diabetes. Fortunately, early diagnosis and appropriate treatment can stop progression and save your teeth.',
      faq3Q: 'Is treatment painful?',
      faq3A: 'Treatment is done under local anesthesia, so you feel no pain during the procedure. After treatment, temporary sensitivity is possible for a few days, easily manageable with pain relievers and good hygiene.',
      faq4Q: 'How to prevent gum problems?',
      faq4A: 'Prevention relies on excellent hygiene: brushing twice daily, daily flossing, professional scaling every 6 months, smoking cessation and balanced diet. Consult at first signs (bleeding, red gums) for early treatment.',
      ctaTitle: 'Protect your teeth by caring for your gums',
      ctaText: 'Complete periodontal consultation in Casablanca',
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
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{c.title}</h1>
          </div>
          <p className="text-xl text-muted-foreground">{c.subtitle}</p>
        </div>

        <div className="rounded-lg overflow-hidden mb-12">
          <img src={gumImage} alt={c.title} className="w-full h-96 object-cover" loading="lazy" />
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
              <p className="text-lg mb-8 ">{c.ctaText}</p>
              <Link href={localizePath('contact')}>
                <Button size="lg" variant="secondary" className="text-lg" data-testid="button-book-gum">
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
