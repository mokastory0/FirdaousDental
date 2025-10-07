import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, AlignJustify } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from '@/components/FAQItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import orthodonticsImage from '@assets/stock_images/orthodontic_braces_i_c9d6fe24.jpg';

export default function ServiceOrthodonticsPage() {
  const { language, t } = useLanguage();
  const { localizePath } = useLocalizedPath();

  const content = {
    fr: {
      title: 'Orthodontie à Casablanca',
      subtitle: 'Alignez vos dents pour un sourire harmonieux',
      intro1: 'L\'orthodontie est la spécialité dentaire qui corrige les malpositions dentaires et les anomalies de croissance des mâchoires. Au cabinet du Dr. Firdaous MOUSTAINE à Casablanca, nous proposons des solutions orthodontiques modernes et discrètes pour tous les âges, des enfants aux adultes.',
      intro2: 'Que vous souffriez de dents mal alignées, d\'un encombrement dentaire, d\'espaces entre les dents, ou de problèmes d\'occlusion, nous avons la solution adaptée. Nos traitements orthodontiques améliorent non seulement l\'esthétique de votre sourire, mais aussi votre santé bucco-dentaire et votre fonction masticatoire.',
      section1Title: 'Pourquoi l\'orthodontie ?',
      section1Text1: 'Un bon alignement dentaire est essentiel pour plusieurs raisons. Des dents bien alignées sont plus faciles à nettoyer, réduisant le risque de caries et de maladies des gencives. Une occlusion correcte prévient l\'usure prématurée des dents, les douleurs à la mâchoire et les problèmes de l\'articulation temporo-mandibulaire (ATM). Enfin, un sourire harmonieux améliore votre confiance en vous et votre qualité de vie.',
      section1Text2: 'Les problèmes orthodontiques courants incluent : l\'encombrement dentaire (dents chevauchées), les espaces entre les dents (diastème), la malocclusion (mauvais emboîtement des dents), le surplomb (dents du haut trop avancées), le prognathisme (mâchoire inférieure avancée), et la béance (espace entre les dents du haut et du bas quand la bouche est fermée).',
      section2Title: 'Solutions orthodontiques modernes',
      section2Text1: 'Nous proposons plusieurs options de traitement orthodontique adaptées à vos besoins et votre style de vie. Les appareils fixes (bagues métalliques ou céramiques) sont la solution la plus efficace pour les cas complexes. Les gouttières transparentes (type Invisalign) sont une option discrète et amovible pour les adultes. Les appareils amovibles conviennent pour certains cas légers, particulièrement chez les enfants.',
      section2Text2: 'Les appareils fixes modernes sont plus petits et plus confortables qu\'avant. Les bagues céramiques sont quasi invisibles, s\'harmonisant avec la couleur de vos dents. Les gouttières transparentes sont pratiquement invisibles et peuvent être retirées pour manger et se brosser les dents, offrant un maximum de confort et de discrétion.',
      section3Title: 'Déroulement du traitement',
      step1Title: 'Consultation et diagnostic',
      step1Text: 'Examen clinique complet, radiographies, photos et empreintes. Analyse de votre cas et présentation du plan de traitement personnalisé avec la durée estimée.',
      step2Title: 'Pose de l\'appareil',
      step2Text: 'Installation de l\'appareil orthodontique choisi (bagues ou première série de gouttières). Instructions d\'utilisation et d\'hygiène. Rendez-vous de suivi programmés.',
      step3Title: 'Suivi et ajustements',
      step3Text: 'Visites régulières tous les 4-6 semaines pour activer l\'appareil, surveiller les progrès et effectuer les ajustements nécessaires. Changement de gouttières toutes les 1-2 semaines.',
      step4Title: 'Fin du traitement et contention',
      step4Text: 'Retrait de l\'appareil une fois les objectifs atteints. Pose d\'un appareil de contention pour maintenir les résultats. Suivi régulier pour garantir la stabilité.',
      section4Title: 'Soins pendant le traitement',
      careText1: 'Une excellente hygiène bucco-dentaire est cruciale pendant le traitement orthodontique. Brossez vos dents après chaque repas pendant au moins 3 minutes, utilisez une brosse à dents souple ou une brosse orthodontique spéciale, passez du fil dentaire quotidiennement avec un enfile-fil, utilisez un bain de bouche fluoré, évitez les aliments durs, collants ou très sucrés qui peuvent endommager l\'appareil, et portez votre appareil amovible ou vos gouttières comme prescrit (minimum 22h par jour).',
      careText2: 'La durée du traitement varie selon la complexité du cas, généralement de 12 à 24 mois. Le respect des instructions et des rendez-vous est essentiel pour obtenir les meilleurs résultats dans les délais prévus. Après le traitement, l\'appareil de contention doit être porté religieusement pour éviter que les dents ne reprennent leur position initiale.',
      faq1Q: 'À quel âge peut-on commencer un traitement orthodontique ?',
      faq1A: 'Il n\'y a pas d\'âge limite ! Chez les enfants, un dépistage précoce vers 7-8 ans permet d\'identifier les problèmes. Le traitement actif commence généralement vers 11-14 ans. Les adultes peuvent aussi bénéficier de l\'orthodontie, avec des options discrètes comme les gouttières transparentes.',
      faq2Q: 'Le traitement orthodontique est-il douloureux ?',
      faq2A: 'La pose de l\'appareil est indolore. Vous pouvez ressentir une gêne et une sensibilité dentaire pendant 2-3 jours après la pose et après chaque activation, facilement gérable avec des antalgiques. C\'est un inconfort temporaire qui s\'estompe rapidement.',
      faq3Q: 'Combien de temps dure le traitement ?',
      faq3A: 'La durée moyenne est de 12 à 24 mois, mais cela varie selon la complexité du cas. Les cas simples peuvent être résolus en 6-12 mois, tandis que les cas complexes peuvent nécessiter 24-36 mois. Votre orthodontiste vous donnera une estimation lors de la consultation.',
      faq4Q: 'Puis-je manger normalement avec un appareil ?',
      faq4A: 'Oui, mais avec quelques précautions. Évitez les aliments très durs (bonbons, glace, noix), très collants (caramels, chewing-gum) et à croquer (pommes entières, épis de maïs). Coupez les aliments en petits morceaux. Avec les gouttières amovibles, vous pouvez manger normalement en les retirant.',
      ctaTitle: 'Obtenez le sourire que vous avez toujours voulu',
      ctaText: 'Consultation orthodontique gratuite à Casablanca',
      ctaButton: 'Prendre Rendez-vous',
    },
    ar: {
      title: 'تقويم الأسنان في الدار البيضاء',
      subtitle: 'رتب أسنانك لابتسامة متناسقة',
      intro1: 'تقويم الأسنان هو التخصص السني الذي يصحح سوء وضع الأسنان وتشوهات نمو الفكين. في عيادة الدكتورة فردوس مستين بالدار البيضاء، نقدم حلول تقويم أسنان حديثة وسرية لجميع الأعمار، من الأطفال إلى البالغين.',
      intro2: 'سواء كنت تعاني من أسنان غير متراصة، أو ازدحام سني، أو فراغات بين الأسنان، أو مشاكل إطباق، لدينا الحل المناسب. علاجات تقويم الأسنان لدينا تحسن ليس فقط جمالية ابتسامتك، بل أيضًا صحة فمك ووظيفة المضغ.',
      section1Title: 'لماذا تقويم الأسنان؟',
      section1Text1: 'الترصيف السني الجيد ضروري لعدة أسباب. الأسنان المتراصة جيدًا أسهل في التنظيف، مما يقلل من خطر التسوس وأمراض اللثة. الإطباق الصحيح يمنع التآكل المبكر للأسنان وآلام الفك ومشاكل المفصل الفكي الصدغي. أخيرًا، الابتسامة المتناسقة تحسن ثقتك بنفسك وجودة حياتك.',
      section1Text2: 'تشمل المشاكل التقويمية الشائعة: الازدحام السني (أسنان متداخلة)، الفراغات بين الأسنان (الفلج)، سوء الإطباق، البروز (أسنان علوية بارزة جدًا)، تقدم الفك السفلي، والعضة المفتوحة (فراغ بين الأسنان العلوية والسفلية عند إغلاق الفم).',
      section2Title: 'حلول تقويم أسنان حديثة',
      section2Text1: 'نقدم عدة خيارات لعلاج تقويم الأسنان تناسب احتياجاتك وأسلوب حياتك. الأجهزة الثابتة (الأقواس المعدنية أو الخزفية) هي الحل الأكثر فعالية للحالات المعقدة. القوالب الشفافة (نوع Invisalign) خيار سري وقابل للإزالة للبالغين. الأجهزة القابلة للإزالة مناسبة لبعض الحالات الخفيفة، خاصة عند الأطفال.',
      section2Text2: 'الأجهزة الثابتة الحديثة أصغر وأكثر راحة من قبل. الأقواس الخزفية شبه مرئية، تتناسق مع لون أسنانك. القوالب الشفافة غير مرئية تقريبًا ويمكن إزالتها للأكل وتنظيف الأسنان، مما يوفر أقصى راحة وسرية.',
      section3Title: 'مراحل العلاج',
      step1Title: 'الاستشارة والتشخيص',
      step1Text: 'فحص سريري كامل، أشعة، صور وطبعات. تحليل حالتك وعرض خطة العلاج المخصصة مع المدة المقدرة.',
      step2Title: 'وضع الجهاز',
      step2Text: 'تركيب جهاز التقويم المختار (أقواس أو أول مجموعة من القوالب). تعليمات الاستخدام والنظافة. مواعيد المتابعة المبرمجة.',
      step3Title: 'المتابعة والتعديلات',
      step3Text: 'زيارات منتظمة كل ٤-٦ أسابيع لتفعيل الجهاز ومراقبة التقدم وإجراء التعديلات اللازمة. تغيير القوالب كل ١-٢ أسبوع.',
      step4Title: 'نهاية العلاج والتثبيت',
      step4Text: 'إزالة الجهاز عند تحقيق الأهداف. وضع جهاز تثبيت للحفاظ على النتائج. متابعة منتظمة لضمان الاستقرار.',
      section4Title: 'العناية أثناء العلاج',
      careText1: 'النظافة الفموية الممتازة حاسمة أثناء علاج التقويم. نظف أسنانك بعد كل وجبة لمدة ٣ دقائق على الأقل، استخدم فرشاة أسنان ناعمة أو فرشاة تقويم خاصة، مرر خيط الأسنان يوميًا بخيط تمرير، استخدم غسول فم يحتوي على الفلورايد، تجنب الأطعمة الصلبة أو اللزجة أو السكرية جدًا التي يمكن أن تتلف الجهاز، وارتد جهازك القابل للإزالة أو قوالبك كما هو موصوف (٢٢ ساعة يوميًا كحد أدنى).',
      careText2: 'تختلف مدة العلاج حسب تعقيد الحالة، عمومًا من ١٢ إلى ٢٤ شهرًا. احترام التعليمات والمواعيد ضروري للحصول على أفضل النتائج في الوقت المحدد. بعد العلاج، يجب ارتداء جهاز التثبيت بانتظام لمنع الأسنان من العودة لوضعها الأصلي.',
      faq1Q: 'في أي عمر يمكن البدء بعلاج التقويم؟',
      faq1A: 'لا يوجد حد للعمر! عند الأطفال، الكشف المبكر حوالي ٧-٨ سنوات يسمح بتحديد المشاكل. يبدأ العلاج الفعلي عمومًا حوالي ١١-١٤ سنة. يمكن للبالغين أيضًا الاستفادة من التقويم، مع خيارات سرية مثل القوالب الشفافة.',
      faq2Q: 'هل علاج التقويم مؤلم؟',
      faq2A: 'وضع الجهاز غير مؤلم. قد تشعر بانزعاج وحساسية سنية لمدة ٢-٣ أيام بعد الوضع وبعد كل تفعيل، يُدار بسهولة بالمسكنات. إنه انزعاج مؤقت يختفي بسرعة.',
      faq3Q: 'كم يستغرق العلاج؟',
      faq3A: 'المدة المتوسطة من ١٢ إلى ٢٤ شهرًا، لكن هذا يختلف حسب تعقيد الحالة. يمكن حل الحالات البسيطة في ٦-١٢ شهرًا، بينما قد تحتاج الحالات المعقدة ٢٤-٣٦ شهرًا. سيعطيك أخصائي التقويم تقديرًا أثناء الاستشارة.',
      faq4Q: 'هل يمكنني الأكل بشكل طبيعي مع الجهاز؟',
      faq4A: 'نعم، لكن مع بعض الاحتياطات. تجنب الأطعمة الصلبة جدًا (حلوى، ثلج، مكسرات)، اللزجة جدًا (كراميل، علكة) والقضم (تفاح كامل، ذرة بالكوز). قطع الأطعمة إلى قطع صغيرة. مع القوالب القابلة للإزالة، يمكنك الأكل بشكل طبيعي بإزالتها.',
      ctaTitle: 'احصل على الابتسامة التي طالما أردتها',
      ctaText: 'استشارة تقويم مجانية في الدار البيضاء',
      ctaButton: 'احجز موعد',
    },
    en: {
      title: 'Orthodontics in Casablanca',
      subtitle: 'Align your teeth for a harmonious smile',
      intro1: 'Orthodontics is the dental specialty that corrects dental malpositions and jaw growth anomalies. At Dr. Firdaous MOUSTAINE\'s clinic in Casablanca, we offer modern and discreet orthodontic solutions for all ages, from children to adults.',
      intro2: 'Whether you suffer from misaligned teeth, dental crowding, gaps between teeth, or bite problems, we have the right solution. Our orthodontic treatments improve not only your smile\'s aesthetics but also your oral health and chewing function.',
      section1Title: 'Why Orthodontics?',
      section1Text1: 'Good dental alignment is essential for several reasons. Well-aligned teeth are easier to clean, reducing the risk of cavities and gum disease. Correct occlusion prevents premature tooth wear, jaw pain, and temporomandibular joint (TMJ) problems. Finally, a harmonious smile improves your self-confidence and quality of life.',
      section1Text2: 'Common orthodontic problems include: dental crowding (overlapping teeth), gaps between teeth (diastema), malocclusion (poor bite), overjet (upper teeth too far forward), prognathism (lower jaw advanced), and open bite (space between upper and lower teeth when mouth is closed).',
      section2Title: 'Modern Orthodontic Solutions',
      section2Text1: 'We offer several orthodontic treatment options suited to your needs and lifestyle. Fixed appliances (metal or ceramic braces) are the most effective solution for complex cases. Clear aligners (Invisalign type) are a discreet and removable option for adults. Removable appliances are suitable for some mild cases, particularly in children.',
      section2Text2: 'Modern fixed appliances are smaller and more comfortable than before. Ceramic braces are nearly invisible, matching your tooth color. Clear aligners are virtually invisible and can be removed for eating and brushing, offering maximum comfort and discretion.',
      section3Title: 'Treatment Process',
      step1Title: 'Consultation and diagnosis',
      step1Text: 'Complete clinical examination, X-rays, photos and impressions. Analysis of your case and presentation of personalized treatment plan with estimated duration.',
      step2Title: 'Appliance placement',
      step2Text: 'Installation of chosen orthodontic appliance (braces or first set of aligners). Usage and hygiene instructions. Follow-up appointments scheduled.',
      step3Title: 'Follow-up and adjustments',
      step3Text: 'Regular visits every 4-6 weeks to activate appliance, monitor progress and make necessary adjustments. Aligner changes every 1-2 weeks.',
      step4Title: 'End of treatment and retention',
      step4Text: 'Appliance removal once objectives are achieved. Placement of retention appliance to maintain results. Regular follow-up to ensure stability.',
      section4Title: 'Care During Treatment',
      careText1: 'Excellent oral hygiene is crucial during orthodontic treatment. Brush your teeth after each meal for at least 3 minutes, use a soft toothbrush or special orthodontic brush, use dental floss daily with a floss threader, use fluoride mouthwash, avoid hard, sticky or very sweet foods that can damage the appliance, and wear your removable appliance or aligners as prescribed (minimum 22 hours per day).',
      careText2: 'Treatment duration varies according to case complexity, generally 12 to 24 months. Compliance with instructions and appointments is essential to achieve the best results within the expected timeframe. After treatment, the retention appliance must be worn religiously to prevent teeth from returning to their initial position.',
      faq1Q: 'At what age can you start orthodontic treatment?',
      faq1A: 'There\'s no age limit! In children, early screening around 7-8 years allows problem identification. Active treatment usually starts around 11-14 years. Adults can also benefit from orthodontics, with discreet options like clear aligners.',
      faq2Q: 'Is orthodontic treatment painful?',
      faq2A: 'Appliance placement is painless. You may experience discomfort and tooth sensitivity for 2-3 days after placement and after each activation, easily manageable with pain relievers. It\'s temporary discomfort that quickly fades.',
      faq3Q: 'How long does treatment take?',
      faq3A: 'Average duration is 12 to 24 months, but this varies according to case complexity. Simple cases can be resolved in 6-12 months, while complex cases may require 24-36 months. Your orthodontist will give you an estimate during consultation.',
      faq4Q: 'Can I eat normally with an appliance?',
      faq4A: 'Yes, but with some precautions. Avoid very hard foods (candy, ice, nuts), very sticky foods (caramels, gum) and biting foods (whole apples, corn on the cob). Cut foods into small pieces. With removable aligners, you can eat normally by removing them.',
      ctaTitle: 'Get the smile you\'ve always wanted',
      ctaText: 'Free orthodontic consultation in Casablanca',
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
              <AlignJustify className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{c.title}</h1>
          </div>
          <p className="text-xl text-muted-foreground">{c.subtitle}</p>
        </div>

        <div className="rounded-lg overflow-hidden mb-12">
          <img src={orthodonticsImage} alt={c.title} className="w-full h-96 object-cover" />
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
                <Button size="lg" variant="secondary" className="text-lg" data-testid="button-book-orthodontics">
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
