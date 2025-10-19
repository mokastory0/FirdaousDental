import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, Crown, Clock, Shield, Star } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from '@/components/FAQItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import crownImage from '@assets/stock_images/dental_crown_and_bri_75e42c38.jpg';

export default function ServiceCrownsPage() {
  const { language, t } = useLanguage();
  const { localizePath } = useLocalizedPath();

  const content = {
    fr: {
      title: 'Couronne et Bridge Dentaires à Casablanca',
      subtitle: 'Restauration dentaire de haute qualité pour un sourire complet',
      intro1: 'Les couronnes et bridges dentaires sont des solutions de restauration dentaire éprouvées qui permettent de réparer ou remplacer des dents endommagées ou manquantes. Au cabinet du Dr. Firdaous MOUSTAINE à Casablanca, nous utilisons des matériaux de dernière génération et des techniques avancées pour vous offrir des restaurations durables, esthétiques et fonctionnelles.',
      intro2: 'Une couronne dentaire est une prothèse fixe qui recouvre entièrement une dent abîmée, fragilisée ou dévitalisée. Elle protège la dent tout en restaurant sa forme, sa fonction et son esthétique. Le bridge dentaire, quant à lui, est une solution qui permet de remplacer une ou plusieurs dents manquantes en s\'appuyant sur les dents adjacentes.',
      section1Title: 'Qu\'est-ce qu\'une couronne dentaire ?',
      section1Text1: 'La couronne dentaire est une prothèse en forme de dent qui recouvre complètement la partie visible d\'une dent naturelle. Elle est indiquée dans plusieurs situations : dent cassée ou fissurée, dent très cariée ayant perdu une grande partie de sa structure, dent dévitalisée fragilisée, ou simplement pour améliorer l\'esthétique d\'une dent décolorée ou mal formée.',
      section1Text2: 'Nous proposons différents types de couronnes dentaires à Casablanca : couronnes en céramique pour un résultat ultra-esthétique, couronnes céramo-métalliques alliant résistance et esthétique, et couronnes en zircone offrant une excellente biocompatibilité. Le choix du matériau dépend de la localisation de la dent, de vos besoins esthétiques et fonctionnels, et de votre budget.',
      section2Title: 'Le Bridge Dentaire : Remplacer les Dents Manquantes',
      section2Text1: 'Le bridge dentaire est une prothèse fixe qui comble l\'espace laissé par une ou plusieurs dents manquantes. Il est constitué de dents artificielles (pontiques) maintenues en place par des couronnes fixées sur les dents adjacentes (dents piliers). Cette solution évite le déplacement des dents voisines et restaure votre fonction masticatoire.',
      section2Text2: 'Le bridge présente de nombreux avantages : solution fixe et stable, résultat esthétique naturel, restauration complète de la fonction masticatoire, prévention du déplacement dentaire, et durée de vie de 10 à 15 ans avec un bon entretien. C\'est une excellente alternative aux implants dentaires dans certaines situations.',
      section3Title: 'Déroulement du traitement',
      step1Title: 'Consultation et diagnostic',
      step1Text: 'Examen complet de vos dents, radiographies, discussion de vos besoins et présentation du plan de traitement. Nous prenons le temps d\'expliquer chaque étape.',
      step2Title: 'Préparation de la dent',
      step2Text: 'Réduction de la dent sous anesthésie locale pour permettre la pose de la couronne. Prise d\'empreintes précises pour la fabrication au laboratoire.',
      step3Title: 'Pose de la couronne provisoire',
      step3Text: 'Installation d\'une couronne temporaire pour protéger la dent et maintenir l\'esthétique pendant la fabrication de la couronne définitive (7-10 jours).',
      step4Title: 'Pose de la couronne définitive',
      step4Text: 'Retrait de la couronne provisoire, essayage, ajustements si nécessaire, et scellement de la couronne définitive. Vérification de l\'occlusion et du confort.',
      section4Title: 'Soins et entretien',
      careText1: 'La durée de vie de votre couronne ou bridge dépend de votre hygiène bucco-dentaire et de vos habitudes. Pour maximiser leur longévité, suivez ces recommandations : brossez vos dents 2 fois par jour avec une brosse souple et un dentifrice fluoré, utilisez du fil dentaire quotidiennement en passant délicatement sous le bridge, évitez de croquer des aliments très durs (glace, bonbons durs, noyaux), ne grignotez pas vos ongles ou stylos, et consultez votre dentiste tous les 6 mois pour un contrôle.',
      careText2: 'Avec un bon entretien, une couronne dentaire peut durer 10 à 15 ans, voire plus. Le bridge dentaire a une durée de vie similaire. Des visites régulières permettent de détecter rapidement tout problème et de prolonger la vie de vos restaurations.',
      faq1Q: 'Est-ce douloureux de poser une couronne dentaire ?',
      faq1A: 'La pose d\'une couronne dentaire se fait sous anesthésie locale, vous ne ressentez donc aucune douleur pendant l\'intervention. Vous pourriez ressentir une légère sensibilité pendant quelques jours après la pose, facilement gérable avec des antalgiques si nécessaire.',
      faq2Q: 'Combien de temps dure le traitement ?',
      faq2A: 'Le traitement complet nécessite généralement 2 à 3 rendez-vous sur une période de 2 à 3 semaines. La première séance pour la préparation et l\'empreinte, puis la pose de la couronne définitive une fois qu\'elle est fabriquée au laboratoire.',
      faq3Q: 'Quelle est la différence entre couronne et bridge ?',
      faq3A: 'Une couronne recouvre une seule dent existante pour la protéger et la restaurer. Un bridge remplace une ou plusieurs dents manquantes en s\'appuyant sur les dents adjacentes qui reçoivent des couronnes.',
      faq4Q: 'La couronne se voit-elle ?',
      faq4A: 'Nos couronnes en céramique sont fabriquées pour être parfaitement esthétiques et s\'harmoniser avec vos dents naturelles. Personne ne pourra voir que vous portez une couronne, même de très près.',
      ctaTitle: 'Restaurez votre sourire avec des couronnes de qualité',
      ctaText: 'Prenez rendez-vous pour une consultation personnalisée à Casablanca',
      ctaButton: 'Prendre Rendez-vous',
    },
    ar: {
      title: 'التيجان والجسور السنية في الدار البيضاء',
      subtitle: 'ترميم الأسنان عالي الجودة لابتسامة كاملة',
      intro1: 'التيجان والجسور السنية هي حلول ترميم أسنان مثبتة تسمح بإصلاح أو استبدال الأسنان التالفة أو المفقودة. في عيادة الدكتورة فردوس مستين بالدار البيضاء، نستخدم أحدث المواد والتقنيات المتقدمة لنقدم لك ترميمات متينة وجمالية ووظيفية.',
      intro2: 'التاج السني هو تركيبة ثابتة تغطي السن التالف أو الضعيف أو المعالج بالحشو العصبي بالكامل. يحمي السن مع استعادة شكله ووظيفته وجماليته. أما الجسر السني، فهو حل يسمح باستبدال سن أو عدة أسنان مفقودة بالاستناد على الأسنان المجاورة.',
      section1Title: 'ما هو التاج السني؟',
      section1Text1: 'التاج السني هو تركيبة على شكل سن تغطي الجزء المرئي من السن الطبيعي بالكامل. يُستخدم في عدة حالات: سن مكسور أو متشقق، سن متسوس فقد جزءًا كبيرًا من بنيته، سن معالج عصبيًا أصبح ضعيفًا، أو ببساطة لتحسين مظهر سن متغير اللون أو مشوه.',
      section1Text2: 'نقدم أنواعًا مختلفة من التيجان السنية في الدار البيضاء: تيجان من السيراميك لنتيجة جمالية فائقة، تيجان سيراميك-معدنية تجمع بين المتانة والجمال، وتيجان الزركونيا التي توفر توافقًا حيويًا ممتازًا. يعتمد اختيار المادة على موقع السن واحتياجاتك الجمالية والوظيفية وميزانيتك.',
      section2Title: 'الجسر السني: تعويض الأسنان المفقودة',
      section2Text1: 'الجسر السني هو تركيبة ثابتة تملأ الفراغ الذي تتركه سن أو عدة أسنان مفقودة. يتكون من أسنان اصطناعية (الجسور) تُثبت في مكانها بواسطة تيجان مثبتة على الأسنان المجاورة (الأسنان الداعمة). يمنع هذا الحل حركة الأسنان المجاورة ويستعيد وظيفة المضغ.',
      section2Text2: 'للجسر السني مزايا عديدة: حل ثابت ومستقر، نتيجة جمالية طبيعية، استعادة كاملة لوظيفة المضغ، منع حركة الأسنان، وعمر افتراضي من ١٠ إلى ١٥ سنة مع العناية الجيدة. إنه بديل ممتاز لزراعة الأسنان في بعض الحالات.',
      section3Title: 'مراحل العلاج',
      step1Title: 'الاستشارة والتشخيص',
      step1Text: 'فحص كامل للأسنان، أشعة سينية، مناقشة احتياجاتك وعرض خطة العلاج. نأخذ الوقت الكافي لشرح كل مرحلة.',
      step2Title: 'تحضير السن',
      step2Text: 'تقليل حجم السن تحت التخدير الموضعي للسماح بوضع التاج. أخذ طبعات دقيقة للتصنيع في المختبر.',
      step3Title: 'وضع التاج المؤقت',
      step3Text: 'تركيب تاج مؤقت لحماية السن والحفاظ على المظهر الجمالي أثناء تصنيع التاج النهائي (٧-١٠ أيام).',
      step4Title: 'وضع التاج النهائي',
      step4Text: 'إزالة التاج المؤقت، التجربة، التعديلات إن لزم الأمر، وتثبيت التاج النهائي. التحقق من الإطباق والراحة.',
      section4Title: 'العناية والصيانة',
      careText1: 'يعتمد عمر التاج أو الجسر السني على نظافة فمك وعاداتك. لتحقيق أقصى قدر من الطول العمري، اتبع هذه التوصيات: اغسل أسنانك مرتين يوميًا بفرشاة ناعمة ومعجون يحتوي على الفلورايد، استخدم خيط الأسنان يوميًا مع المرور بلطف تحت الجسر، تجنب قضم الأطعمة الصلبة جدًا (الثلج، الحلوى الصلبة، النوى)، لا تقضم أظافرك أو الأقلام، واستشر طبيب أسنانك كل ٦ أشهر للفحص.',
      careText2: 'مع العناية الجيدة، يمكن أن يدوم التاج السني من ١٠ إلى ١٥ سنة أو أكثر. للجسر السني عمر افتراضي مماثل. تسمح الزيارات المنتظمة باكتشاف أي مشكلة بسرعة وإطالة عمر الترميمات.',
      faq1Q: 'هل وضع التاج السني مؤلم؟',
      faq1A: 'يتم وضع التاج السني تحت التخدير الموضعي، لذلك لا تشعر بأي ألم أثناء العملية. قد تشعر بحساسية طفيفة لبضعة أيام بعد الوضع، يمكن التحكم فيها بسهولة بمسكنات الألم إذا لزم الأمر.',
      faq2Q: 'كم يستغرق العلاج؟',
      faq2A: 'يتطلب العلاج الكامل عمومًا من ٢ إلى ٣ جلسات على مدى ٢ إلى ٣ أسابيع. الجلسة الأولى للتحضير والطبعة، ثم وضع التاج النهائي بمجرد تصنيعه في المختبر.',
      faq3Q: 'ما الفرق بين التاج والجسر؟',
      faq3A: 'التاج يغطي سنًا واحدًا موجودًا لحمايته وترميمه. الجسر يستبدل سنًا أو عدة أسنان مفقودة بالاستناد على الأسنان المجاورة التي تتلقى تيجانًا.',
      faq4Q: 'هل يظهر التاج؟',
      faq4A: 'تيجاننا من السيراميك مصنوعة لتكون جمالية تمامًا ومتناسقة مع أسنانك الطبيعية. لن يتمكن أحد من رؤية أنك ترتدي تاجًا، حتى عن قرب.',
      ctaTitle: 'استعد ابتسامتك بتيجان عالية الجودة',
      ctaText: 'احجز موعدًا لاستشارة شخصية في الدار البيضاء',
      ctaButton: 'احجز موعد',
    },
    en: {
      title: 'Dental Crowns and Bridges in Casablanca',
      subtitle: 'High-quality dental restoration for a complete smile',
      intro1: 'Dental crowns and bridges are proven dental restoration solutions that repair or replace damaged or missing teeth. At Dr. Firdaous MOUSTAINE\'s clinic in Casablanca, we use state-of-the-art materials and advanced techniques to provide durable, aesthetic, and functional restorations.',
      intro2: 'A dental crown is a fixed prosthesis that completely covers a damaged, weakened, or root canal treated tooth. It protects the tooth while restoring its shape, function, and aesthetics. A dental bridge, on the other hand, is a solution that replaces one or more missing teeth by relying on adjacent teeth.',
      section1Title: 'What is a Dental Crown?',
      section1Text1: 'A dental crown is a tooth-shaped prosthesis that completely covers the visible part of a natural tooth. It is indicated in several situations: broken or cracked tooth, heavily decayed tooth that has lost a large part of its structure, weakened root canal treated tooth, or simply to improve the aesthetics of a discolored or malformed tooth.',
      section1Text2: 'We offer different types of dental crowns in Casablanca: ceramic crowns for ultra-aesthetic results, porcelain-fused-to-metal crowns combining strength and aesthetics, and zirconia crowns offering excellent biocompatibility. The choice of material depends on tooth location, your aesthetic and functional needs, and your budget.',
      section2Title: 'Dental Bridge: Replacing Missing Teeth',
      section2Text1: 'A dental bridge is a fixed prosthesis that fills the space left by one or more missing teeth. It consists of artificial teeth (pontics) held in place by crowns fixed on adjacent teeth (abutment teeth). This solution prevents movement of neighboring teeth and restores your chewing function.',
      section2Text2: 'The bridge has many advantages: fixed and stable solution, natural aesthetic result, complete restoration of chewing function, prevention of tooth movement, and lifespan of 10 to 15 years with good maintenance. It\'s an excellent alternative to dental implants in certain situations.',
      section3Title: 'Treatment Process',
      step1Title: 'Consultation and diagnosis',
      step1Text: 'Complete examination of your teeth, X-rays, discussion of your needs and presentation of the treatment plan. We take time to explain each step.',
      step2Title: 'Tooth preparation',
      step2Text: 'Reduction of the tooth under local anesthesia to allow crown placement. Taking precise impressions for laboratory fabrication.',
      step3Title: 'Temporary crown placement',
      step3Text: 'Installation of a temporary crown to protect the tooth and maintain aesthetics during fabrication of the final crown (7-10 days).',
      step4Title: 'Final crown placement',
      step4Text: 'Removal of temporary crown, fitting, adjustments if necessary, and cementation of the final crown. Checking occlusion and comfort.',
      section4Title: 'Care and Maintenance',
      careText1: 'The lifespan of your crown or bridge depends on your oral hygiene and habits. To maximize longevity, follow these recommendations: brush your teeth twice daily with a soft brush and fluoride toothpaste, use dental floss daily passing gently under the bridge, avoid biting very hard foods (ice, hard candy, pits), don\'t bite your nails or pens, and see your dentist every 6 months for a checkup.',
      careText2: 'With good care, a dental crown can last 10 to 15 years or more. The dental bridge has a similar lifespan. Regular visits allow early detection of any problems and extend the life of your restorations.',
      faq1Q: 'Is getting a dental crown painful?',
      faq1A: 'Dental crown placement is done under local anesthesia, so you feel no pain during the procedure. You might experience slight sensitivity for a few days after placement, easily manageable with pain relievers if needed.',
      faq2Q: 'How long does treatment take?',
      faq2A: 'Complete treatment generally requires 2 to 3 appointments over 2 to 3 weeks. The first session for preparation and impression, then placement of the final crown once it\'s fabricated in the laboratory.',
      faq3Q: 'What\'s the difference between a crown and a bridge?',
      faq3A: 'A crown covers a single existing tooth to protect and restore it. A bridge replaces one or more missing teeth by relying on adjacent teeth that receive crowns.',
      faq4Q: 'Is the crown visible?',
      faq4A: 'Our ceramic crowns are crafted to be perfectly aesthetic and blend with your natural teeth. No one will be able to see you\'re wearing a crown, even up close.',
      ctaTitle: 'Restore your smile with quality crowns',
      ctaText: 'Book an appointment for a personalized consultation in Casablanca',
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
              <Crown className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{c.title}</h1>
          </div>
          <p className="text-xl text-muted-foreground">{c.subtitle}</p>
        </div>

        <div className="rounded-lg overflow-hidden mb-12">
          <img src={crownImage} alt={c.title} className="w-full h-96 object-cover" loading="lazy" />
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
                <Button size="lg" variant="secondary" className="text-lg" data-testid="button-book-crowns">
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
