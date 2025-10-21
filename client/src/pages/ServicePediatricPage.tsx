import { useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, Baby, Heart, Shield, Smile } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from '@/components/FAQItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { useSEO } from '@/hooks/useSEO';
import pediatricImage from '@assets/generated_images/Pediatric_dentistry_happy_child_aed6da30.png';

export default function ServicePediatricPage() {
  const { language, t } = useLanguage();
  const { localizePath } = useLocalizedPath();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: {
      fr: 'Dentisterie Pédiatrique à Casablanca | Dr. Firdaous MOUSTAINE',
      ar: 'طب أسنان الأطفال في الدار البيضاء | د. فردوس موستعين',
      en: 'Pediatric Dentistry in Casablanca | Dr. Firdaous MOUSTAINE'
    },
    description: {
      fr: 'Dentiste pédiatrique à Casablanca. Soins dentaires pour enfants dans un environnement bienveillant. Prévention, caries, fluor. Cabinet Dr. Firdaous MOUSTAINE.',
      ar: 'طبيب أسنان أطفال في الدار البيضاء. رعاية أسنان للأطفال في بيئة رعاية. وقاية، تسوس، فلور. عيادة د. فردوس موستعين.',
      en: 'Pediatric dentist in Casablanca. Dental care for children in a caring environment. Prevention, cavities, fluoride. Dr. Firdaous MOUSTAINE clinic.'
    },
    keywords: {
      fr: 'dentiste pédiatrique casablanca, dentiste enfant, soins dentaires enfants, pédodontie casablanca',
      ar: 'طبيب أسنان أطفال الدار البيضاء, طبيب أسنان للأطفال, رعاية أسنان الأطفال',
      en: 'pediatric dentist casablanca, children dentist, dental care children, pedodontics casablanca'
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Pediatric Dentistry",
      "description": "Professional pediatric dental services in Casablanca",
      "procedureType": "Pediatric Dentistry"
    }
  });

  const content = {
    fr: {
      title: 'Pédodontie - Dentiste pour Enfants',
      subtitle: 'Soins dentaires spécialisés pour les enfants dans un environnement rassurant',
      intro1: 'La pédodontie est la spécialité dentaire dédiée aux soins des enfants, de la naissance à l\'adolescence. Notre cabinet à Casablanca offre un environnement accueillant et rassurant pour que chaque visite soit une expérience positive pour votre enfant.',
      intro2: 'Dr. Firdaous MOUSTAINE adopte une approche douce et patiente, adaptée à chaque enfant. Nous prenons le temps d\'expliquer chaque étape avec des mots simples et rassurants pour créer une relation de confiance durable avec votre enfant.',
      section1Title: 'Dentisterie Pédiatrique à Casablanca',
      section1Text1: 'Notre approche pédiatrique combine expertise médicale et psychologie de l\'enfant. Chaque consultation est adaptée à l\'âge et au niveau de compréhension de votre enfant. Nous utilisons des techniques de communication ludiques et des explications adaptées pour transformer la visite chez le dentiste en un moment positif.',
      section1Text2: 'L\'environnement du cabinet est pensé pour rassurer les enfants : décoration colorée, jouets, récompenses après chaque visite. Notre équipe est formée spécifiquement pour gérer l\'anxiété infantile et créer une atmosphère détendue qui favorise la coopération de l\'enfant.',
      section2Title: 'Nos Services Pédiatriques',
      service1Title: 'Première visite et prévention',
      service1Text: 'Examen complet, nettoyage doux, application de fluor et conseils d\'hygiène adaptés à l\'âge de l\'enfant.',
      service2Title: 'Traitement des caries',
      service2Text: 'Soins des caries dentaires avec des techniques douces et sans douleur. Nous utilisons des méthodes adaptées pour minimiser l\'anxiété.',
      service3Title: 'Scellements dentaires',
      service3Text: 'Protection préventive des molaires pour éviter les caries. Procédure rapide et indolore pour protéger les dents de votre enfant.',
      service4Title: 'Urgences pédiatriques',
      service4Text: 'Prise en charge rapide des urgences : mal de dent, traumatisme dentaire, dent cassée. Nous sommes là pour soulager votre enfant.',
      section3Title: 'Conseils pour les parents',
      tip1Title: 'Quand commencer les visites ?',
      tip1Text: 'La première visite dentaire est recommandée vers l\'âge de 1 an, ou dès l\'apparition des premières dents. Cela permet de détecter précocement tout problème et d\'habituer l\'enfant à l\'environnement du cabinet.',
      tip2Title: 'Préparer votre enfant',
      tip2Text: 'Parlez positivement de la visite chez le dentiste. Évitez les mots comme "douleur" ou "piqûre". Lisez des livres sur le dentiste et jouez au dentiste à la maison pour familiariser votre enfant.',
      tip3Title: 'Hygiène dentaire quotidienne',
      tip3Text: 'Brossez les dents de votre enfant 2 fois par jour dès l\'apparition de la première dent. Utilisez une brosse à dents douce et une petite quantité de dentifrice fluoré adapté à son âge.',
      faq1Q: 'À quel âge doit-on emmener son enfant chez le dentiste ?',
      faq1A: 'Il est recommandé d\'emmener votre enfant pour sa première visite dentaire vers l\'âge de 1 an ou dès l\'apparition de sa première dent. Ces visites précoces permettent de prévenir les problèmes et de créer une routine positive.',
      faq2Q: 'Comment gérer l\'anxiété de mon enfant ?',
      faq2A: 'Notre équipe est formée pour rassurer les enfants anxieux. Nous utilisons des techniques de communication adaptées, prenons notre temps et créons un environnement accueillant. N\'hésitez pas à nous informer des craintes de votre enfant avant la visite.',
      faq3Q: 'Les caries sur les dents de lait doivent-elles être traitées ?',
      faq3A: 'Oui, absolument! Les caries sur les dents de lait peuvent causer de la douleur, des infections et affecter le développement des dents permanentes. Il est important de les traiter rapidement.',
      faq4Q: 'À quelle fréquence mon enfant doit-il consulter ?',
      faq4A: 'Nous recommandons une visite tous les 6 mois pour un contrôle et un nettoyage préventif. Ces visites régulières permettent de détecter et prévenir les problèmes dentaires.',
      ctaTitle: 'Prenez soin du sourire de votre enfant',
      ctaText: 'Réservez la première visite dentaire de votre enfant dès aujourd\'hui',
      ctaButton: 'Prendre Rendez-vous',
    },
    ar: {
      title: 'طب أسنان الأطفال - طبيب أسنان للأطفال',
      subtitle: 'رعاية أسنان متخصصة للأطفال في بيئة مطمئنة',
      intro1: 'طب أسنان الأطفال هو التخصص السني المخصص لرعاية الأطفال من الولادة حتى المراهقة. تقدم عيادتنا في الدار البيضاء بيئة ترحيبية ومطمئنة لجعل كل زيارة تجربة إيجابية لطفلك.',
      intro2: 'تتبنى الدكتورة فردوس موستعين نهجًا لطيفًا وصبورًا، مكيفًا مع كل طفل. نأخذ الوقت الكافي لشرح كل خطوة بكلمات بسيطة ومطمئنة لبناء علاقة ثقة دائمة مع طفلك.',
      section1Title: 'طب أسنان الأطفال في الدار البيضاء',
      section1Text1: 'يجمع نهجنا في طب الأطفال بين الخبرة الطبية وعلم نفس الطفل. كل استشارة مكيفة مع عمر ومستوى فهم طفلك. نستخدم تقنيات تواصل مرحة وتفسيرات مناسبة لتحويل زيارة طبيب الأسنان إلى لحظة إيجابية.',
      section1Text2: 'بيئة العيادة مصممة لطمأنة الأطفال: ديكور ملون، ألعاب، مكافآت بعد كل زيارة. فريقنا مدرب خصيصًا للتعامل مع قلق الأطفال وخلق جو مريح يعزز تعاون الطفل.',
      section2Title: 'خدماتنا للأطفال',
      service1Title: 'الزيارة الأولى والوقاية',
      service1Text: 'فحص كامل، تنظيف لطيف، تطبيق الفلورايد ونصائح نظافة مناسبة لعمر الطفل.',
      service2Title: 'علاج التسوس',
      service2Text: 'علاج تسوس الأسنان بتقنيات لطيفة وبدون ألم. نستخدم طرقًا مناسبة لتقليل القلق.',
      service3Title: 'سد الشقوق السنية',
      service3Text: 'حماية وقائية للأضراس لمنع التسوس. إجراء سريع وغير مؤلم لحماية أسنان طفلك.',
      service4Title: 'حالات الطوارئ للأطفال',
      service4Text: 'علاج سريع للطوارئ: ألم الأسنان، صدمة سنية، سن مكسور. نحن هنا لتخفيف معاناة طفلك.',
      section3Title: 'نصائح للآباء',
      tip1Title: 'متى تبدأ الزيارات؟',
      tip1Text: 'يُنصح بالزيارة الأولى لطبيب الأسنان حوالي سن ١ سنة، أو بمجرد ظهور الأسنان الأولى. يسمح هذا بالكشف المبكر عن أي مشكلة وتعويد الطفل على بيئة العيادة.',
      tip2Title: 'تحضير طفلك',
      tip2Text: 'تحدث بإيجابية عن زيارة طبيب الأسنان. تجنب كلمات مثل "ألم" أو "حقنة". اقرأ كتبًا عن طبيب الأسنان والعب دور طبيب الأسنان في المنزل لتعريف طفلك.',
      tip3Title: 'النظافة اليومية للأسنان',
      tip3Text: 'نظف أسنان طفلك مرتين يوميًا بمجرد ظهور السن الأول. استخدم فرشاة أسنان ناعمة وكمية صغيرة من معجون الأسنان المفلور المناسب لعمره.',
      faq1Q: 'في أي سن يجب أخذ الطفل لطبيب الأسنان؟',
      faq1A: 'يُنصح بأخذ طفلك لزيارته الأولى لطبيب الأسنان حوالي سن ١ سنة أو بمجرد ظهور سنه الأول. تسمح هذه الزيارات المبكرة بمنع المشاكل وإنشاء روتين إيجابي.',
      faq2Q: 'كيف أتعامل مع قلق طفلي؟',
      faq2A: 'فريقنا مدرب على طمأنة الأطفال القلقين. نستخدم تقنيات تواصل مناسبة، نأخذ وقتنا ونخلق بيئة ترحيبية. لا تتردد في إبلاغنا بمخاوف طفلك قبل الزيارة.',
      faq3Q: 'هل يجب علاج التسوس في الأسنان اللبنية؟',
      faq3A: 'نعم، بالتأكيد! يمكن أن يسبب التسوس في الأسنان اللبنية الألم والعدوى ويؤثر على نمو الأسنان الدائمة. من المهم علاجها بسرعة.',
      faq4Q: 'كم مرة يجب أن يزور طفلي طبيب الأسنان؟',
      faq4A: 'نوصي بزيارة كل ٦ أشهر للفحص والتنظيف الوقائي. تسمح هذه الزيارات المنتظمة بالكشف عن مشاكل الأسنان ومنعها.',
      ctaTitle: 'اعتن بابتسامة طفلك',
      ctaText: 'احجز أول زيارة لطفلك لطبيب الأسنان اليوم',
      ctaButton: 'احجز موعد',
    },
    en: {
      title: 'Pediatric Dentistry - Dentist for Children',
      subtitle: 'Specialized dental care for children in a reassuring environment',
      intro1: 'Pediatric dentistry is the dental specialty dedicated to caring for children, from birth to adolescence. Our clinic in Casablanca offers a welcoming and reassuring environment to make each visit a positive experience for your child.',
      intro2: 'Dr. Firdaous MOUSTAINE adopts a gentle and patient approach, adapted to each child. We take the time to explain each step with simple and reassuring words to create a lasting trust relationship with your child.',
      section1Title: 'Pediatric Dentistry in Casablanca',
      section1Text1: 'Our pediatric approach combines medical expertise and child psychology. Each consultation is adapted to your child\'s age and level of understanding. We use playful communication techniques and appropriate explanations to transform the dentist visit into a positive moment.',
      section1Text2: 'The clinic environment is designed to reassure children: colorful decoration, toys, rewards after each visit. Our team is specifically trained to manage childhood anxiety and create a relaxed atmosphere that promotes child cooperation.',
      section2Title: 'Our Pediatric Services',
      service1Title: 'First visit and prevention',
      service1Text: 'Complete examination, gentle cleaning, fluoride application and hygiene advice adapted to the child\'s age.',
      service2Title: 'Cavity treatment',
      service2Text: 'Dental cavity treatment with gentle and painless techniques. We use appropriate methods to minimize anxiety.',
      service3Title: 'Dental sealants',
      service3Text: 'Preventive protection of molars to prevent cavities. Quick and painless procedure to protect your child\'s teeth.',
      service4Title: 'Pediatric emergencies',
      service4Text: 'Quick handling of emergencies: toothache, dental trauma, broken tooth. We are here to relieve your child.',
      section3Title: 'Tips for Parents',
      tip1Title: 'When to start visits?',
      tip1Text: 'The first dental visit is recommended around age 1, or as soon as the first teeth appear. This allows early detection of any problem and gets the child used to the clinic environment.',
      tip2Title: 'Preparing your child',
      tip2Text: 'Talk positively about the dentist visit. Avoid words like "pain" or "shot". Read books about the dentist and play dentist at home to familiarize your child.',
      tip3Title: 'Daily dental hygiene',
      tip3Text: 'Brush your child\'s teeth twice a day as soon as the first tooth appears. Use a soft toothbrush and a small amount of fluoride toothpaste appropriate for their age.',
      faq1Q: 'At what age should you take your child to the dentist?',
      faq1A: 'It is recommended to take your child for their first dental visit around age 1 or as soon as their first tooth appears. These early visits help prevent problems and create a positive routine.',
      faq2Q: 'How to manage my child\'s anxiety?',
      faq2A: 'Our team is trained to reassure anxious children. We use appropriate communication techniques, take our time and create a welcoming environment. Don\'t hesitate to inform us of your child\'s fears before the visit.',
      faq3Q: 'Should cavities on baby teeth be treated?',
      faq3A: 'Yes, absolutely! Cavities on baby teeth can cause pain, infections and affect permanent tooth development. It is important to treat them quickly.',
      faq4Q: 'How often should my child visit?',
      faq4A: 'We recommend a visit every 6 months for a checkup and preventive cleaning. These regular visits allow early detection and prevention of dental problems.',
      ctaTitle: 'Take care of your child\'s smile',
      ctaText: 'Book your child\'s first dental visit today',
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
              <Baby className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{c.title}</h1>
          </div>
          <p className="text-xl text-muted-foreground">{c.subtitle}</p>
        </div>

        <div className="rounded-lg overflow-hidden mb-12">
          <img
            src={pediatricImage}
            alt={c.imageAlt}
            className="rounded-2xl shadow-2xl w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">{c.section1Title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{c.intro1}</p>
            <p className="text-muted-foreground leading-relaxed mb-4">{c.intro2}</p>
            <p className="text-muted-foreground leading-relaxed mb-4">{c.section1Text1}</p>
            <p className="text-muted-foreground leading-relaxed">{c.section1Text2}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">{c.section2Title}</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Smile className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">{c.service1Title}</div>
                      <p className="text-sm text-muted-foreground">{c.service1Text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">{c.service2Title}</div>
                      <p className="text-sm text-muted-foreground">{c.service2Text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">{c.service3Title}</div>
                      <p className="text-sm text-muted-foreground">{c.service3Text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Baby className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">{c.service4Title}</div>
                      <p className="text-sm text-muted-foreground">{c.service4Text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">{c.section3Title}</h2>
            <div className="space-y-4 bg-card p-6 rounded-lg">
              <div>
                <h3 className="font-semibold mb-2">{c.tip1Title}</h3>
                <p className="text-muted-foreground">{c.tip1Text}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{c.tip2Title}</h3>
                <p className="text-muted-foreground">{c.tip2Text}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{c.tip3Title}</h3>
                <p className="text-muted-foreground">{c.tip3Text}</p>
              </div>
            </div>
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
                <Button size="lg" variant="secondary" className="text-lg" data-testid="button-book-pediatric">
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
