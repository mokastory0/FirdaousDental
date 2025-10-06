import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, Sparkles } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from '@/components/FAQItem';
import { useLanguage } from '@/contexts/LanguageContext';
import teethWhiteningImage from '@assets/generated_images/Teeth_whitening_bright_smile_ca666386.png';

export default function ServiceWhiteningPage() {
  const { language, t } = useLanguage();

  const content = {
    fr: {
      title: 'Blanchiment Dentaire à Casablanca',
      subtitle: 'Un sourire éclatant avec nos techniques professionnelles',
      intro1: 'Le blanchiment dentaire est un traitement esthétique professionnel qui permet d\'éclaircir la couleur naturelle de vos dents de plusieurs teintes. Au cabinet du Dr. Firdaous MOUSTAINE à Casablanca, nous utilisons des techniques sûres et efficaces pour vous offrir un sourire plus blanc et plus lumineux en toute sécurité.',
      intro2: 'Le traitement agit sur les taches et la décoloration causées par le café, le thé, le tabac, le vin rouge et le vieillissement naturel des dents. Contrairement aux produits en vente libre, notre blanchiment professionnel offre des résultats visibles, rapides et durables, supervisés par un professionnel de santé.',
      section1Title: 'Pourquoi choisir le blanchiment professionnel ?',
      section1Text1: 'Le blanchiment dentaire professionnel est la méthode la plus sûre et la plus efficace pour éclaircir vos dents. Les produits que nous utilisons contiennent une concentration de peroxyde d\'hydrogène ou de carbamide bien supérieure aux kits à domicile, permettant des résultats spectaculaires en une seule séance. Notre équipement moderne avec lampe LED accélère le processus tout en protégeant vos gencives.',
      section1Text2: 'Les avantages du blanchiment professionnel incluent : résultats visibles immédiatement (dents plus blanches de 2 à 8 teintes), sécurité garantie avec protection des gencives et de l\'émail, durée prolongée (6 mois à 2 ans selon l\'hygiène), supervision médicale pour éviter les complications, et personnalisation du traitement selon vos besoins et la sensibilité de vos dents.',
      section2Title: 'Types de blanchiment disponibles',
      section2Text1: 'Nous proposons plusieurs options de blanchiment adaptées à vos besoins. Le blanchiment au fauteuil est réalisé en cabinet en une séance d\'environ 60-90 minutes. Nous appliquons un gel blanchissant hautement concentré sur vos dents, puis activons le produit avec une lampe LED spéciale. C\'est la méthode la plus rapide avec des résultats immédiats et spectaculaires.',
      section2Text2: 'Le blanchiment ambulatoire consiste à porter des gouttières personnalisées remplies de gel blanchissant chez vous pendant quelques heures par jour ou la nuit, généralement pendant 2 semaines. Cette méthode douce est idéale pour les dents sensibles et offre d\'excellents résultats progressifs. Pour un effet optimal, nous recommandons souvent une combinaison des deux méthodes.',
      section3Title: 'Déroulement du traitement',
      step1Title: 'Consultation initiale',
      step1Text: 'Examen dentaire complet pour vérifier que vos dents et gencives sont en bonne santé. Détermination de la couleur actuelle de vos dents et discussion de vos objectifs de blanchiment.',
      step2Title: 'Préparation',
      step2Text: 'Nettoyage professionnel pour éliminer le tartre et la plaque. Protection des gencives et des lèvres avec un écarteur et un gel protecteur.',
      step3Title: 'Application du gel',
      step3Text: 'Application précise du gel blanchissant sur les dents. Activation avec la lampe LED pendant 15-20 minutes. Répétition du processus 2-3 fois selon les besoins.',
      step4Title: 'Résultat final',
      step4Text: 'Rinçage et évaluation du résultat. Conseils pour maintenir votre sourire blanc. Possibilité de gouttières à domicile pour prolonger l\'effet.',
      section4Title: 'Soins après blanchiment',
      careText1: 'Pour maintenir votre sourire éclatant le plus longtemps possible, suivez ces recommandations : les premières 48 heures, évitez les aliments et boissons colorants (café, thé, vin rouge, sodas foncés, betteraves, sauce tomate, curry), ne fumez pas, préférez les aliments blancs ou clairs (poulet, poisson, riz, pâtes, produits laitiers), utilisez une paille pour les boissons colorées si nécessaire, et brossez vos dents après chaque repas.',
      careText2: 'À long terme, maintenez une excellente hygiène bucco-dentaire avec brossage 2 fois par jour et fil dentaire quotidien, limitez la consommation d\'aliments colorants, rincez votre bouche après avoir consommé des boissons colorées, consultez votre dentiste tous les 6 mois pour un détartrage, et envisagez des retouches de blanchiment tous les 12-24 mois selon vos habitudes.',
      faq1Q: 'Le blanchiment est-il sans danger pour mes dents ?',
      faq1A: 'Oui, le blanchiment professionnel supervisé par un dentiste est totalement sûr. Les produits que nous utilisons sont approuvés et n\'endommagent pas l\'émail lorsqu\'ils sont appliqués correctement. Une sensibilité temporaire peut survenir mais disparaît rapidement.',
      faq2Q: 'Combien de temps durent les résultats ?',
      faq2A: 'Les résultats durent généralement de 6 mois à 2 ans, selon vos habitudes. Si vous évitez le tabac et limitez les aliments colorants, votre sourire restera blanc plus longtemps. Des retouches périodiques permettent de maintenir l\'éclat.',
      faq3Q: 'Tout le monde peut-il faire un blanchiment ?',
      faq3A: 'Le blanchiment est déconseillé aux femmes enceintes ou allaitantes, aux personnes avec des caries non traitées, des maladies de gencives actives, ou une sensibilité dentaire sévère. Une consultation préalable permet de déterminer si vous êtes un bon candidat.',
      faq4Q: 'Le blanchiment fonctionne-t-il sur toutes les dents ?',
      faq4A: 'Le blanchiment est plus efficace sur les dents naturelles jaunies. Il ne fonctionne pas sur les couronnes, facettes ou plombages. Si vous avez des restaurations visibles, nous discuterons des options pour harmoniser la couleur de votre sourire.',
      ctaTitle: 'Obtenez un sourire éclatant dès aujourd\'hui',
      ctaText: 'Consultation gratuite pour votre blanchiment dentaire à Casablanca',
      ctaButton: 'Prendre Rendez-vous',
    },
    ar: {
      title: 'تبييض الأسنان في الدار البيضاء',
      subtitle: 'ابتسامة مشرقة بتقنياتنا المهنية',
      intro1: 'تبييض الأسنان هو علاج تجميلي محترف يسمح بتفتيح اللون الطبيعي لأسنانك بعدة درجات. في عيادة الدكتورة فردوس مستين بالدار البيضاء، نستخدم تقنيات آمنة وفعالة لنقدم لك ابتسامة أكثر بياضًا وإشراقًا بكل أمان.',
      intro2: 'يعمل العلاج على البقع والتلون الناجم عن القهوة والشاي والتبغ والنبيذ الأحمر والشيخوخة الطبيعية للأسنان. على عكس المنتجات المتاحة بدون وصفة طبية، يقدم تبييضنا المهني نتائج مرئية وسريعة ودائمة، تحت إشراف متخصص صحي.',
      section1Title: 'لماذا تختار التبييض المهني؟',
      section1Text1: 'تبييض الأسنان المهني هو الطريقة الأكثر أمانًا وفعالية لتفتيح أسنانك. المنتجات التي نستخدمها تحتوي على تركيز من بيروكسيد الهيدروجين أو الكارباميد أعلى بكثير من أدوات التبييض المنزلية، مما يسمح بنتائج مذهلة في جلسة واحدة. معداتنا الحديثة مع مصباح LED تسرع العملية مع حماية لثتك.',
      section1Text2: 'تشمل مزايا التبييض المهني: نتائج مرئية فورًا (أسنان أكثر بياضًا بـ٢-٨ درجات)، أمان مضمون مع حماية اللثة والمينا، مدة طويلة (٦ أشهر إلى سنتين حسب النظافة)، إشراف طبي لتجنب المضاعفات، وتخصيص العلاج حسب احتياجاتك وحساسية أسنانك.',
      section2Title: 'أنواع التبييض المتاحة',
      section2Text1: 'نقدم عدة خيارات تبييض مناسبة لاحتياجاتك. التبييض في العيادة يتم في جلسة واحدة حوالي ٦٠-٩٠ دقيقة. نطبق جل تبييض مركز للغاية على أسنانك، ثم نفعل المنتج بمصباح LED خاص. إنها الطريقة الأسرع بنتائج فورية ومذهلة.',
      section2Text2: 'التبييض المنزلي يتكون من ارتداء قوالب مخصصة مملوءة بجل التبييض في المنزل لبضع ساعات يوميًا أو ليلاً، عمومًا لمدة أسبوعين. هذه الطريقة اللطيفة مثالية للأسنان الحساسة وتوفر نتائج تدريجية ممتازة. للحصول على أفضل تأثير، غالبًا ما نوصي بمزيج من الطريقتين.',
      section3Title: 'مراحل العلاج',
      step1Title: 'الاستشارة الأولية',
      step1Text: 'فحص أسنان كامل للتحقق من أن أسنانك ولثتك بصحة جيدة. تحديد اللون الحالي لأسنانك ومناقشة أهداف التبييض.',
      step2Title: 'التحضير',
      step2Text: 'تنظيف مهني لإزالة الجير والبلاك. حماية اللثة والشفاه بمباعد وجل واقي.',
      step3Title: 'تطبيق الجل',
      step3Text: 'تطبيق دقيق لجل التبييض على الأسنان. التفعيل بمصباح LED لمدة ١٥-٢٠ دقيقة. تكرار العملية ٢-٣ مرات حسب الحاجة.',
      step4Title: 'النتيجة النهائية',
      step4Text: 'الشطف وتقييم النتيجة. نصائح للحفاظ على ابتسامتك البيضاء. إمكانية قوالب منزلية لإطالة التأثير.',
      section4Title: 'العناية بعد التبييض',
      careText1: 'للحفاظ على ابتسامتك المشرقة أطول فترة ممكنة، اتبع هذه التوصيات: خلال أول ٤٨ ساعة، تجنب الأطعمة والمشروبات الملونة (قهوة، شاي، نبيذ أحمر، مشروبات غازية داكنة، شمندر، صلصة طماطم، كاري)، لا تدخن، فضل الأطعمة البيضاء أو الفاتحة (دجاج، سمك، أرز، معكرونة، منتجات ألبان)، استخدم ماصة للمشروبات الملونة إذا لزم الأمر، ونظف أسنانك بعد كل وجبة.',
      careText2: 'على المدى الطويل، حافظ على نظافة فموية ممتازة بالتنظيف مرتين يوميًا وخيط أسنان يومي، قلل من استهلاك الأطعمة الملونة، اشطف فمك بعد تناول المشروبات الملونة، استشر طبيب أسنانك كل ٦ أشهر لإزالة الجير، وفكر في لمسات تبييض كل ١٢-٢٤ شهرًا حسب عاداتك.',
      faq1Q: 'هل التبييض آمن لأسناني؟',
      faq1A: 'نعم، التبييض المهني تحت إشراف طبيب أسنان آمن تمامًا. المنتجات التي نستخدمها معتمدة ولا تتلف المينا عند تطبيقها بشكل صحيح. قد تحدث حساسية مؤقتة لكنها تختفي بسرعة.',
      faq2Q: 'كم تدوم النتائج؟',
      faq2A: 'تدوم النتائج عمومًا من ٦ أشهر إلى سنتين، حسب عاداتك. إذا تجنبت التبغ وقللت من الأطعمة الملونة، ستبقى ابتسامتك بيضاء لفترة أطول. لمسات دورية تسمح بالحفاظ على الإشراق.',
      faq3Q: 'هل يمكن للجميع إجراء التبييض؟',
      faq3A: 'التبييض غير موصى به للنساء الحوامل أو المرضعات، الأشخاص الذين لديهم تسوس غير معالج، أمراض لثة نشطة، أو حساسية أسنان شديدة. تسمح الاستشارة المسبقة بتحديد ما إذا كنت مرشحًا جيدًا.',
      faq4Q: 'هل يعمل التبييض على جميع الأسنان؟',
      faq4A: 'التبييض أكثر فعالية على الأسنان الطبيعية المصفرة. لا يعمل على التيجان أو القشور أو الحشوات. إذا كان لديك ترميمات مرئية، سنناقش الخيارات لتوحيد لون ابتسامتك.',
      ctaTitle: 'احصل على ابتسامة مشرقة اليوم',
      ctaText: 'استشارة مجانية لتبييض أسنانك في الدار البيضاء',
      ctaButton: 'احجز موعد',
    },
    en: {
      title: 'Teeth Whitening in Casablanca',
      subtitle: 'A bright smile with our professional techniques',
      intro1: 'Teeth whitening is a professional aesthetic treatment that allows you to lighten the natural color of your teeth by several shades. At Dr. Firdaous MOUSTAINE\'s clinic in Casablanca, we use safe and effective techniques to offer you a whiter and brighter smile with complete safety.',
      intro2: 'The treatment works on stains and discoloration caused by coffee, tea, tobacco, red wine and natural aging of teeth. Unlike over-the-counter products, our professional whitening offers visible, rapid and lasting results, supervised by a health professional.',
      section1Title: 'Why Choose Professional Whitening?',
      section1Text1: 'Professional teeth whitening is the safest and most effective method to lighten your teeth. The products we use contain a concentration of hydrogen peroxide or carbamide much higher than home kits, allowing spectacular results in a single session. Our modern equipment with LED lamp accelerates the process while protecting your gums.',
      section1Text2: 'Advantages of professional whitening include: immediately visible results (teeth 2-8 shades whiter), guaranteed safety with gum and enamel protection, extended duration (6 months to 2 years depending on hygiene), medical supervision to avoid complications, and treatment customization according to your needs and tooth sensitivity.',
      section2Title: 'Available Whitening Types',
      section2Text1: 'We offer several whitening options suited to your needs. In-office whitening is performed in the clinic in a single session of about 60-90 minutes. We apply a highly concentrated whitening gel to your teeth, then activate the product with a special LED lamp. It\'s the fastest method with immediate and spectacular results.',
      section2Text2: 'Take-home whitening involves wearing custom trays filled with whitening gel at home for a few hours daily or overnight, generally for 2 weeks. This gentle method is ideal for sensitive teeth and offers excellent progressive results. For optimal effect, we often recommend a combination of both methods.',
      section3Title: 'Treatment Process',
      step1Title: 'Initial consultation',
      step1Text: 'Complete dental examination to verify that your teeth and gums are healthy. Determination of current tooth color and discussion of your whitening goals.',
      step2Title: 'Preparation',
      step2Text: 'Professional cleaning to remove tartar and plaque. Protection of gums and lips with a retractor and protective gel.',
      step3Title: 'Gel application',
      step3Text: 'Precise application of whitening gel on teeth. Activation with LED lamp for 15-20 minutes. Process repeated 2-3 times as needed.',
      step4Title: 'Final result',
      step4Text: 'Rinsing and result evaluation. Tips to maintain your white smile. Possibility of home trays to prolong the effect.',
      section4Title: 'Post-Whitening Care',
      careText1: 'To maintain your bright smile as long as possible, follow these recommendations: the first 48 hours, avoid coloring foods and drinks (coffee, tea, red wine, dark sodas, beets, tomato sauce, curry), don\'t smoke, prefer white or light foods (chicken, fish, rice, pasta, dairy products), use a straw for colored drinks if necessary, and brush your teeth after each meal.',
      careText2: 'Long-term, maintain excellent oral hygiene with brushing twice daily and daily flossing, limit consumption of coloring foods, rinse your mouth after consuming colored drinks, see your dentist every 6 months for scaling, and consider whitening touch-ups every 12-24 months depending on your habits.',
      faq1Q: 'Is whitening safe for my teeth?',
      faq1A: 'Yes, professional whitening supervised by a dentist is completely safe. The products we use are approved and don\'t damage enamel when applied correctly. Temporary sensitivity may occur but disappears quickly.',
      faq2Q: 'How long do results last?',
      faq2A: 'Results generally last 6 months to 2 years, depending on your habits. If you avoid tobacco and limit coloring foods, your smile will stay white longer. Periodic touch-ups help maintain brightness.',
      faq3Q: 'Can everyone have whitening?',
      faq3A: 'Whitening is not recommended for pregnant or breastfeeding women, people with untreated cavities, active gum disease, or severe tooth sensitivity. A preliminary consultation determines if you\'re a good candidate.',
      faq4Q: 'Does whitening work on all teeth?',
      faq4A: 'Whitening is most effective on yellowed natural teeth. It doesn\'t work on crowns, veneers or fillings. If you have visible restorations, we\'ll discuss options to harmonize your smile color.',
      ctaTitle: 'Get a bright smile today',
      ctaText: 'Free consultation for your teeth whitening in Casablanca',
      ctaButton: 'Book Appointment',
    },
  };

  const c = content[language];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link href="/services">
          <Button variant="ghost" className="mb-6 gap-2" data-testid="link-back-services">
            <ChevronLeft className="h-4 w-4" />
            {t('cta.backToServices')}
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{c.title}</h1>
          </div>
          <p className="text-xl text-muted-foreground">{c.subtitle}</p>
        </div>

        <div className="rounded-lg overflow-hidden mb-12">
          <img src={teethWhiteningImage} alt={c.title} className="w-full h-96 object-cover" />
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
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg" data-testid="button-book-whitening">
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
