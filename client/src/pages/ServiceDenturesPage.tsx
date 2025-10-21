import { useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, Smile } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from '@/components/FAQItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { useSEO } from '@/hooks/useSEO';
import denturesImage from '@assets/stock_images/dentures_prosthetic__8598c3a9.jpg';

export default function ServiceDenturesPage() {
  const { language, t } = useLanguage();
  const { localizePath } = useLocalizedPath();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: {
      fr: 'Prothèses Dentaires à Casablanca | Dr. Firdaous MOUSTAINE',
      ar: 'أطقم الأسنان في الدار البيضاء | د. فردوس موستعين',
      en: 'Dental Prostheses in Casablanca | Dr. Firdaous MOUSTAINE'
    },
    description: {
      fr: 'Prothèses dentaires à Casablanca. Prothèses complètes et partielles personnalisées. Restaurez votre sourire et fonction masticatoire. Cabinet Dr. Firdaous MOUSTAINE.',
      ar: 'أطقم الأسنان في الدار البيضاء. أطقم كاملة وجزئية مخصصة. استعد ابتسامتك ووظيفة المضغ. عيادة د. فردوس موستعين.',
      en: 'Dental prostheses in Casablanca. Complete and partial custom dentures. Restore your smile and chewing function. Dr. Firdaous MOUSTAINE clinic.'
    },
    keywords: {
      fr: 'prothèse dentaire casablanca, dentier, prothèse complète, prothèse partielle, dentiste casablanca',
      ar: 'طقم أسنان الدار البيضاء, أطقم الأسنان, طقم كامل, طقم جزئي',
      en: 'dental prosthesis casablanca, dentures, complete denture, partial denture, dentist casablanca'
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dental Prostheses",
      "description": "Professional dental prosthesis services in Casablanca",
      "procedureType": "Prosthodontics"
    }
  });

  const content = {
    fr: {
      title: 'Prothèses Dentaires à Casablanca',
      subtitle: 'Solutions complètes pour remplacer toutes vos dents',
      intro1: 'Les prothèses dentaires sont des dispositifs amovibles ou fixes conçus pour remplacer plusieurs dents manquantes ou la totalité de la dentition. Au cabinet du Dr. Firdaous MOUSTAINE à Casablanca, nous proposons des prothèses modernes, confortables et esthétiques qui restaurent votre sourire et votre qualité de vie.',
      intro2: 'Qu\'il s\'agisse de prothèses complètes, partielles, amovibles ou fixées sur implants, nous utilisons des matériaux de haute qualité et des techniques avancées pour vous offrir des solutions durables et naturelles. Nos prothèses sont fabriquées sur mesure pour s\'adapter parfaitement à votre bouche.',
      section1Title: 'Types de prothèses dentaires',
      section1Text1: 'Il existe plusieurs types de prothèses dentaires adaptées à différentes situations. La prothèse complète amovible (dentier) remplace toutes les dents d\'une mâchoire et repose sur les gencives. La prothèse partielle amovible remplace plusieurs dents manquantes et se fixe aux dents naturelles restantes par des crochets. La prothèse fixe sur implants offre une stabilité maximale grâce à des implants dentaires.',
      section1Text2: 'Chaque type de prothèse a ses avantages. Les prothèses amovibles sont une solution économique et non invasive, faciles à nettoyer et à entretenir. Les prothèses fixées sur implants offrent une stabilité supérieure, un confort maximal, et restaurent jusqu\'à 80% de la force masticatoire. Le choix dépend de votre situation clinique, de vos besoins et de votre budget.',
      section2Title: 'Avantages des prothèses modernes',
      section2Text1: 'Les prothèses dentaires modernes ont considérablement évolué. Elles sont fabriquées avec des matériaux de haute technologie qui imitent parfaitement l\'aspect des dents et gencives naturelles. Les prothèses en résine acrylique offrent une excellente esthétique, tandis que les prothèses avec base en métal sont plus résistantes et durables.',
      section2Text2: 'Nos prothèses restaurent non seulement votre sourire, mais aussi votre fonction masticatoire, votre élocution et votre confiance en vous. Elles préviennent l\'affaissement du visage causé par la perte de dents, soutiennent les lèvres et les joues, et vous permettent de manger et parler normalement. Avec une bonne adaptation, vous oublierez que vous portez une prothèse.',
      section3Title: 'Processus de fabrication',
      step1Title: 'Consultation et planification',
      step1Text: 'Examen complet de votre bouche, prise d\'empreintes préliminaires, et discussion de vos besoins et attentes. Nous déterminons le type de prothèse le plus adapté à votre cas.',
      step2Title: 'Empreintes de précision',
      step2Text: 'Prise d\'empreintes détaillées de vos mâchoires et enregistrement de votre occlusion (façon dont vos dents se rencontrent). Ces informations sont essentielles pour une prothèse confortable.',
      step3Title: 'Essayage et ajustements',
      step3Text: 'Essayage de la prothèse en cire pour vérifier l\'esthétique, la phonétique et le confort. Ajustements de la forme, de la couleur et de la position des dents selon vos préférences.',
      step4Title: 'Livraison de la prothèse',
      step4Text: 'Pose de la prothèse définitive, instructions d\'utilisation et d\'entretien, et ajustements finaux pour un confort optimal. Période d\'adaptation avec suivi régulier.',
      section4Title: 'Soins et entretien',
      careText1: 'Pour prolonger la durée de vie de votre prothèse et maintenir une bonne santé bucco-dentaire, suivez ces recommandations : retirez et rincez votre prothèse après chaque repas, brossez-la quotidiennement avec une brosse spéciale et un produit non abrasif, laissez-la tremper dans une solution de nettoyage spécifique la nuit, rincez-la toujours avant de la remettre en bouche, nettoyez vos gencives et votre langue avec une brosse douce, et ne dormez pas avec votre prothèse pour laisser vos gencives se reposer.',
      careText2: 'Une prothèse bien entretenue peut durer 5 à 10 ans. Consultez votre dentiste tous les 6 mois pour vérifier l\'adaptation de votre prothèse, car la forme de vos gencives change avec le temps. Des ajustements réguliers garantissent un confort optimal et préviennent les irritations.',
      faq1Q: 'Combien de temps faut-il pour s\'habituer à une prothèse ?',
      faq1A: 'La période d\'adaptation varie selon les personnes, généralement 2 à 4 semaines. Au début, la prothèse peut sembler volumineuse ou étrange, et vous pouvez avoir du mal à manger ou parler. C\'est tout à fait normal. Avec le temps et la pratique, vous vous y habituerez complètement.',
      faq2Q: 'Puis-je manger normalement avec une prothèse ?',
      faq2A: 'Oui, mais commencez par des aliments mous et coupés en petits morceaux. Mâchez lentement et des deux côtés en même temps pour stabiliser la prothèse. Évitez les aliments très durs, collants ou fibreux au début. Progressivement, vous pourrez manger la plupart des aliments.',
      faq3Q: 'Ma prothèse sera-t-elle visible ?',
      faq3A: 'Non ! Les prothèses modernes sont conçues pour être très discrètes. Nous choisissons la forme, la taille et la couleur des dents pour qu\'elles paraissent naturelles. La plupart des gens ne pourront pas dire que vous portez une prothèse.',
      faq4Q: 'Combien de temps dure une prothèse dentaire ?',
      faq4A: 'Une prothèse bien entretenue dure généralement 5 à 10 ans. Au fil du temps, elle peut nécessiter des rebasages (ajustements de la base) en raison des changements dans la forme de vos gencives. Après cette période, un remplacement complet est souvent recommandé.',
      ctaTitle: 'Retrouvez un sourire complet et fonctionnel',
      ctaText: 'Consultation gratuite pour vos prothèses dentaires à Casablanca',
      ctaButton: 'Prendre Rendez-vous',
    },
    ar: {
      title: 'أطقم الأسنان في الدار البيضاء',
      subtitle: 'حلول كاملة لتعويض جميع أسنانك',
      intro1: 'أطقم الأسنان هي أجهزة قابلة للإزالة أو ثابتة مصممة لتعويض عدة أسنان مفقودة أو جميع الأسنان. في عيادة الدكتورة فردوس موستعين بالدار البيضاء، نقدم أطقم أسنان حديثة ومريحة وجمالية تستعيد ابتسامتك وجودة حياتك.',
      intro2: 'سواء كانت أطقم كاملة أو جزئية أو قابلة للإزالة أو مثبتة على الغرسات، نستخدم مواد عالية الجودة وتقنيات متقدمة لنقدم لك حلولًا متينة وطبيعية. أطقم أسناننا مصنوعة حسب الطلب لتتناسب تمامًا مع فمك.',
      section1Title: 'أنواع أطقم الأسنان',
      section1Text1: 'هناك عدة أنواع من أطقم الأسنان مناسبة لحالات مختلفة. الطقم الكامل القابل للإزالة (طقم الأسنان) يعوض جميع أسنان الفك ويرتكز على اللثة. الطقم الجزئي القابل للإزالة يعوض عدة أسنان مفقودة ويثبت على الأسنان الطبيعية المتبقية بواسطة خطافات. الطقم الثابت على الغرسات يوفر ثباتًا أقصى بفضل زراعة الأسنان.',
      section1Text2: 'كل نوع من أطقم الأسنان له مزاياه. الأطقم القابلة للإزالة حل اقتصادي وغير جراحي، سهلة التنظيف والصيانة. الأطقم المثبتة على الغرسات توفر ثباتًا فائقًا وراحة قصوى وتستعيد حتى ٨٠٪ من قوة المضغ. يعتمد الاختيار على وضعك السريري واحتياجاتك وميزانيتك.',
      section2Title: 'فوائد الأطقم الحديثة',
      section2Text1: 'تطورت أطقم الأسنان الحديثة بشكل كبير. مصنوعة من مواد تقنية عالية تحاكي تمامًا مظهر الأسنان واللثة الطبيعية. أطقم الراتنج الأكريليك توفر جمالية ممتازة، بينما الأطقم ذات القاعدة المعدنية أكثر مقاومة ودوامًا.',
      section2Text2: 'أطقمنا لا تستعيد ابتسامتك فحسب، بل أيضًا وظيفة المضغ والنطق والثقة بالنفس. تمنع ترهل الوجه الناجم عن فقدان الأسنان، تدعم الشفاه والخدين، وتسمح لك بالأكل والتحدث بشكل طبيعي. مع التكيف الجيد، ستنسى أنك ترتدي طقمًا.',
      section3Title: 'عملية التصنيع',
      step1Title: 'الاستشارة والتخطيط',
      step1Text: 'فحص كامل لفمك، أخذ طبعات أولية، ومناقشة احتياجاتك وتوقعاتك. نحدد نوع الطقم الأنسب لحالتك.',
      step2Title: 'طبعات دقيقة',
      step2Text: 'أخذ طبعات مفصلة لفكيك وتسجيل إطباقك (طريقة التقاء أسنانك). هذه المعلومات ضرورية لطقم مريح.',
      step3Title: 'التجربة والتعديلات',
      step3Text: 'تجربة الطقم الشمعي للتحقق من الجمالية والنطق والراحة. تعديلات الشكل واللون وموضع الأسنان حسب تفضيلاتك.',
      step4Title: 'تسليم الطقم',
      step4Text: 'وضع الطقم النهائي، تعليمات الاستخدام والصيانة، والتعديلات النهائية للراحة المثلى. فترة تكيف مع متابعة منتظمة.',
      section4Title: 'العناية والصيانة',
      careText1: 'لإطالة عمر طقمك والحفاظ على صحة فموية جيدة، اتبع هذه التوصيات: أزل واشطف طقمك بعد كل وجبة، نظفه يوميًا بفرشاة خاصة ومنتج غير كاشط، اتركه منقوعًا في محلول تنظيف محدد ليلاً، اشطفه دائمًا قبل إعادته للفم، نظف لثتك ولسانك بفرشاة ناعمة، ولا تنم بطقمك لإراحة لثتك.',
      careText2: 'يمكن أن يدوم الطقم المحفوظ جيدًا من ٥ إلى ١٠ سنوات. استشر طبيب أسنانك كل ٦ أشهر للتحقق من ملاءمة طقمك، لأن شكل لثتك يتغير مع الوقت. تضمن التعديلات المنتظمة راحة مثلى وتمنع التهيجات.',
      faq1Q: 'كم من الوقت يستغرق التعود على الطقم؟',
      faq1A: 'تختلف فترة التكيف حسب الأشخاص، عمومًا من ٢ إلى ٤ أسابيع. في البداية، قد يبدو الطقم ضخمًا أو غريبًا، وقد تجد صعوبة في الأكل أو التحدث. هذا طبيعي تمامًا. مع الوقت والممارسة، ستعتاد عليه تمامًا.',
      faq2Q: 'هل يمكنني الأكل بشكل طبيعي مع الطقم؟',
      faq2A: 'نعم، لكن ابدأ بأطعمة طرية ومقطعة إلى قطع صغيرة. امضغ ببطء ومن الجانبين في نفس الوقت لتثبيت الطقم. تجنب الأطعمة الصلبة جدًا أو اللزجة أو الليفية في البداية. تدريجيًا، ستتمكن من تناول معظم الأطعمة.',
      faq3Q: 'هل سيظهر طقمي؟',
      faq3A: 'لا! الأطقم الحديثة مصممة لتكون سرية جدًا. نختار شكل وحجم ولون الأسنان لتبدو طبيعية. معظم الناس لن يتمكنوا من معرفة أنك ترتدي طقمًا.',
      faq4Q: 'كم يدوم طقم الأسنان؟',
      faq4A: 'يدوم الطقم المحفوظ جيدًا عمومًا من ٥ إلى ١٠ سنوات. مع مرور الوقت، قد يحتاج إلى إعادة تبطين (تعديلات القاعدة) بسبب تغيرات شكل لثتك. بعد هذه الفترة، غالبًا ما يُوصى باستبدال كامل.',
      ctaTitle: 'استعد ابتسامة كاملة ووظيفية',
      ctaText: 'استشارة مجانية لأطقم أسنانك في الدار البيضاء',
      ctaButton: 'احجز موعد',
    },
    en: {
      title: 'Dental Dentures in Casablanca',
      subtitle: 'Complete solutions to replace all your teeth',
      intro1: 'Dental dentures are removable or fixed devices designed to replace multiple missing teeth or the entire dentition. At Dr. Firdaous MOUSTAINE\'s clinic in Casablanca, we offer modern, comfortable, and aesthetic dentures that restore your smile and quality of life.',
      intro2: 'Whether complete dentures, partial, removable, or fixed on implants, we use high-quality materials and advanced techniques to provide durable and natural solutions. Our dentures are custom-made to fit your mouth perfectly.',
      section1Title: 'Types of Dental Dentures',
      section1Text1: 'There are several types of dental dentures suitable for different situations. The complete removable denture (denture) replaces all teeth in a jaw and rests on the gums. The partial removable denture replaces several missing teeth and attaches to remaining natural teeth with clasps. The fixed denture on implants offers maximum stability thanks to dental implants.',
      section1Text2: 'Each type of denture has its advantages. Removable dentures are an economical and non-invasive solution, easy to clean and maintain. Dentures fixed on implants offer superior stability, maximum comfort, and restore up to 80% of chewing strength. The choice depends on your clinical situation, needs, and budget.',
      section2Title: 'Benefits of Modern Dentures',
      section2Text1: 'Modern dental dentures have evolved considerably. They are made with high-tech materials that perfectly mimic the appearance of natural teeth and gums. Acrylic resin dentures offer excellent aesthetics, while dentures with a metal base are more resistant and durable.',
      section2Text2: 'Our dentures not only restore your smile but also your chewing function, speech, and self-confidence. They prevent facial sagging caused by tooth loss, support lips and cheeks, and allow you to eat and speak normally. With good adaptation, you\'ll forget you\'re wearing a denture.',
      section3Title: 'Manufacturing Process',
      step1Title: 'Consultation and planning',
      step1Text: 'Complete examination of your mouth, preliminary impressions, and discussion of your needs and expectations. We determine the type of denture most suitable for your case.',
      step2Title: 'Precision impressions',
      step2Text: 'Taking detailed impressions of your jaws and recording your occlusion (how your teeth meet). This information is essential for a comfortable denture.',
      step3Title: 'Try-in and adjustments',
      step3Text: 'Try-in of wax denture to check aesthetics, phonetics, and comfort. Adjustments to shape, color, and position of teeth according to your preferences.',
      step4Title: 'Denture delivery',
      step4Text: 'Placement of final denture, usage and maintenance instructions, and final adjustments for optimal comfort. Adaptation period with regular follow-up.',
      section4Title: 'Care and Maintenance',
      careText1: 'To extend the life of your denture and maintain good oral health, follow these recommendations: remove and rinse your denture after each meal, brush it daily with a special brush and non-abrasive product, soak it in a specific cleaning solution overnight, always rinse it before putting it back in your mouth, clean your gums and tongue with a soft brush, and don\'t sleep with your denture to let your gums rest.',
      careText2: 'A well-maintained denture can last 5 to 10 years. See your dentist every 6 months to check your denture fit, as the shape of your gums changes over time. Regular adjustments ensure optimal comfort and prevent irritation.',
      faq1Q: 'How long does it take to get used to a denture?',
      faq1A: 'The adaptation period varies by person, generally 2 to 4 weeks. At first, the denture may seem bulky or strange, and you may have difficulty eating or speaking. This is completely normal. With time and practice, you\'ll get completely used to it.',
      faq2Q: 'Can I eat normally with a denture?',
      faq2A: 'Yes, but start with soft foods cut into small pieces. Chew slowly and on both sides at the same time to stabilize the denture. Avoid very hard, sticky, or fibrous foods at first. Gradually, you\'ll be able to eat most foods.',
      faq3Q: 'Will my denture be visible?',
      faq3A: 'No! Modern dentures are designed to be very discreet. We choose the shape, size, and color of teeth to look natural. Most people won\'t be able to tell you\'re wearing a denture.',
      faq4Q: 'How long does a dental denture last?',
      faq4A: 'A well-maintained denture generally lasts 5 to 10 years. Over time, it may require relining (base adjustments) due to changes in gum shape. After this period, complete replacement is often recommended.',
      ctaTitle: 'Get a complete and functional smile',
      ctaText: 'Free consultation for your dental dentures in Casablanca',
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
              <Smile className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{c.title}</h1>
          </div>
          <p className="text-xl text-muted-foreground">{c.subtitle}</p>
        </div>

        <div className="rounded-lg overflow-hidden mb-12">
          <img src={denturesImage} alt={c.title} className="w-full h-96 object-cover" loading="lazy" />
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
                <Button size="lg" variant="secondary" className="text-lg" data-testid="button-book-dentures">
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
