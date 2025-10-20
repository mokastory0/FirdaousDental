export interface BlogArticle {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
  image?: string;
}

export interface BlogArticleEntry {
  fr: BlogArticle;
  ar: BlogArticle;
  en: BlogArticle;
}

export const blogArticles: Record<string, BlogArticleEntry> = {
  'prevenir-caries': {
    fr: {
      title: 'Prévenir les caries dentaires : conseils et traitements',
      excerpt: 'Découvrez les meilleures pratiques pour prévenir les caries et maintenir une bonne santé bucco-dentaire. Des conseils d\'experts pour toute la famille, incluant l\'importance du brossage et les visites régulières.',
      category: 'Prévention',
      date: '15 Jan 2025',
      readTime: '5 min',
      content: `Les caries dentaires sont l'un des problèmes de santé bucco-dentaire les plus courants, touchant des millions de personnes à travers le monde. Bien qu'elles puissent sembler inévitables, la vérité est que les caries sont largement évitables grâce à une bonne hygiène dentaire et des visites régulières chez le dentiste.

<h2>Comprendre les caries dentaires</h2>

<p>Une carie dentaire est une infection qui détruit progressivement l'émail et la dentine de la dent. Elle est causée par des bactéries présentes dans la bouche qui se nourrissent des sucres et produisent des acides qui attaquent l'émail.</p>

<p>Les facteurs de risque incluent une mauvaise hygiène bucco-dentaire, une alimentation riche en sucres, un manque de fluor, la sécheresse buccale, et certaines conditions médicales.</p>

<h2>Les 5 piliers de la prévention</h2>

<h3>1. Le brossage régulier</h3>

<p>Le brossage des dents est la pierre angulaire de la prévention des caries. Il est recommandé de se brosser les dents au moins deux fois par jour, pendant au moins deux minutes. Utilisez une brosse à dents à poils souples et un dentifrice fluoré.</p>

<h3>2. L'utilisation du fil dentaire</h3>

<p>Le fil dentaire est essentiel pour éliminer la plaque entre les dents. Utilisez-le au moins une fois par jour, de préférence avant le coucher.</p>

<h3>3. Une alimentation équilibrée</h3>

<p>Votre alimentation joue un rôle crucial. Limitez les sucres et glucides raffinés. Privilégiez les aliments riches en calcium et les fruits croquants qui stimulent la salive.</p>

<h3>4. Le fluor pour des dents fortes</h3>

<p>Le fluor renforce l'émail dentaire. Utilisez un dentifrice fluoré et consultez votre dentiste pour des traitements professionnels si nécessaire.</p>

<h3>5. Les visites régulières chez le dentiste</h3>

<p>Consultez votre dentiste tous les six mois pour un examen et un nettoyage professionnels. Ces visites permettent de détecter les caries à un stade précoce.</p>

<h2>Traitements préventifs professionnels</h2>

<p>Au-delà de l'hygiène à domicile, votre dentiste peut proposer des scellants dentaires et des applications de fluor professionnel pour renforcer vos dents.</p>

<h2>Conclusion</h2>

<p>La prévention des caries est à la portée de tous. En adoptant de bonnes habitudes d'hygiène et en consultant régulièrement votre dentiste, vous pouvez garder vos dents saines toute votre vie.</p>`,
    },
    ar: {
      title: 'الوقاية من تسوس الأسنان: نصائح وعلاجات',
      excerpt: 'اكتشف أفضل الممارسات للوقاية من التسوس والحفاظ على صحة الفم الجيدة. نصائح الخبراء لجميع أفراد الأسرة، بما في ذلك أهمية التنظيف بالفرشاة والزيارات المنتظمة.',
      category: 'الوقاية',
      date: '١٥ يناير ٢٠٢٥',
      readTime: '٥ دقائق',
      content: `تسوس الأسنان هو واحد من أكثر مشاكل صحة الفم شيوعًا، حيث يصيب ملايين الأشخاص في جميع أنحاء العالم. على الرغم من أنها قد تبدو حتمية، إلا أن الحقيقة هي أن التسوس يمكن الوقاية منه إلى حد كبير من خلال النظافة الجيدة والزيارات المنتظمة لطبيب الأسنان.

<h2>فهم تسوس الأسنان</h2>

<p>تسوس الأسنان هو عدوى تدمر تدريجياً مينا الأسنان والعاج. تحدث بسبب البكتيريا الموجودة في الفم التي تتغذى على السكريات وتنتج أحماضًا تهاجم المينا.</p>

<p>تشمل عوامل الخطر سوء نظافة الفم، نظام غذائي غني بالسكريات، نقص الفلورايد، جفاف الفم، وبعض الحالات الطبية.</p>

<h2>الركائز الخمس للوقاية</h2>

<h3>١. التنظيف المنتظم بالفرشاة</h3>

<p>تنظيف الأسنان بالفرشاة هو حجر الزاوية في الوقاية من التسوس. يُوصى بتنظيف الأسنان مرتين على الأقل يوميًا لمدة دقيقتين. استخدم فرشاة ذات شعيرات ناعمة ومعجون يحتوي على الفلورايد.</p>

<h3>٢. استخدام خيط الأسنان</h3>

<p>خيط الأسنان ضروري لإزالة البلاك بين الأسنان. استخدمه مرة واحدة على الأقل يوميًا، ويفضل قبل النوم.</p>

<h3>٣. نظام غذائي متوازن</h3>

<p>يلعب نظامك الغذائي دورًا حاسمًا. قلل من السكريات والكربوهيدرات المكررة. اختر الأطعمة الغنية بالكالسيوم والفواكه المقرمشة.</p>

<h3>٤. الفلورايد لأسنان قوية</h3>

<p>الفلورايد يقوي مينا الأسنان. استخدم معجونًا يحتوي على الفلورايد واستشر طبيب أسنانك للعلاجات المهنية.</p>

<h3>٥. الزيارات المنتظمة لطبيب الأسنان</h3>

<p>استشر طبيب أسنانك كل ستة أشهر لفحص وتنظيف مهني. تسمح هذه الزيارات باكتشاف التسوس في مرحلة مبكرة.</p>

<h2>العلاجات الوقائية المهنية</h2>

<p>بالإضافة إلى النظافة المنزلية، يمكن لطبيب أسنانك تقديم السدادات السنية وتطبيقات الفلورايد المهنية لتقوية أسنانك.</p>

<h2>الخلاصة</h2>

<p>الوقاية من تسوس الأسنان في متناول الجميع. من خلال اعتماد عادات جيدة لنظافة الفم واستشارة طبيب أسنانك بانتظام، يمكنك الحفاظ على أسنانك صحية طوال حياتك.</p>`,
    },
    en: {
      title: 'Preventing Dental Cavities: Tips and Treatments',
      excerpt: 'Discover the best practices for preventing cavities and maintaining good oral health. Expert advice for the whole family, including the importance of brushing and regular visits.',
      category: 'Prevention',
      date: 'Jan 15, 2025',
      readTime: '5 min',
      content: `Dental cavities are one of the most common oral health problems, affecting millions of people worldwide. While they may seem inevitable, the truth is that cavities are largely preventable through good dental hygiene and regular dentist visits.

<h2>Understanding Dental Cavities</h2>

<p>A dental cavity is an infection that progressively destroys tooth enamel and dentin. It's caused by bacteria in the mouth that feed on sugars and produce acids that attack enamel.</p>

<p>Risk factors include poor oral hygiene, a diet rich in sugars, lack of fluoride, dry mouth, and certain medical conditions.</p>

<h2>The 5 Pillars of Prevention</h2>

<h3>1. Regular Brushing</h3>

<p>Tooth brushing is the cornerstone of cavity prevention. Brush at least twice daily for two minutes using a soft-bristled brush and fluoride toothpaste.</p>

<h3>2. Using Dental Floss</h3>

<p>Dental floss is essential for removing plaque between teeth. Use it at least once daily, preferably before bed.</p>

<h3>3. A Balanced Diet</h3>

<p>Your diet plays a crucial role. Limit sugars and refined carbohydrates. Choose calcium-rich foods and crunchy fruits that stimulate saliva.</p>

<h3>4. Fluoride for Strong Teeth</h3>

<p>Fluoride strengthens tooth enamel. Use fluoride toothpaste and ask your dentist about professional treatments.</p>

<h3>5. Regular Dentist Visits</h3>

<p>See your dentist every six months for professional exams and cleaning. These visits allow early cavity detection.</p>

<h2>Professional Preventive Treatments</h2>

<p>Beyond home hygiene, your dentist can offer dental sealants and professional fluoride applications to strengthen your teeth.</p>

<h2>Conclusion</h2>

<p>Preventing cavities is within everyone's reach. By adopting good hygiene habits and seeing your dentist regularly, you can keep your teeth healthy for life.</p>`,
    },
  },
  'blanchiment-professionnel': {
    fr: {
      title: 'Blanchiment dentaire : méthodes professionnelles vs kits à domicile',
      excerpt: 'Comparaison approfondie entre le blanchiment dentaire professionnel au cabinet et les kits de blanchiment à domicile. Résultats, sécurité et efficacité analysés.',
      category: 'Esthétique',
      date: '10 Jan 2025',
      readTime: '7 min',
      image: '@assets/generated_images/Teeth_whitening_bright_smile_ca666386.png',
      content: `Le blanchiment dentaire est l'un des traitements esthétiques les plus demandés en dentisterie moderne. Un sourire éclatant améliore non seulement votre apparence, mais booste également votre confiance. Découvrez les différences entre les méthodes professionnelles et les kits à domicile.

<h2>Le blanchiment professionnel au cabinet</h2>

<p>Le blanchiment dentaire professionnel utilise des agents blanchissants concentrés activés par une lumière LED ou un laser. Cette méthode offre des résultats immédiats en une seule séance de 60 à 90 minutes. Le dentiste protège vos gencives et contrôle l'ensemble du processus pour des résultats sûrs et efficaces.</p>

<p>Les résultats peuvent éclaircir vos dents de 4 à 8 teintes dès la première séance. La sensibilité dentaire est minimisée grâce aux techniques professionnelles et aux gels désensibilisants.</p>

<h2>Les kits de blanchiment à domicile</h2>

<p>Les kits professionnels à domicile utilisent des gouttières sur mesure et un gel de peroxyde de carbamide. Vous les portez 30 minutes à 2 heures par jour pendant 1 à 2 semaines. Ces kits offrent des résultats progressifs et peuvent éclaircir de 2 à 5 teintes.</p>

<p>Les kits en vente libre ont des concentrations limitées et des gouttières universelles qui peuvent mal s'adapter. Sans supervision dentaire, ils peuvent endommager l'émail et provoquer des résultats inégaux.</p>

<h2>Comparaison des coûts et de la durabilité</h2>

<p>Le blanchiment professionnel coûte 3000-5000 dirhams avec des résultats durant 1 à 3 ans. Les kits professionnels à domicile coûtent 1500-2500 dirhams pour 6 mois à 1 an. Les kits en vente libre coûtent 200-800 dirhams pour des résultats temporaires de 2 à 6 mois.</p>

<h2>Conclusion</h2>

<p>Le blanchiment professionnel reste la méthode la plus sûre et efficace. Consultez Dr. Firdaous MOUSTAINE pour la meilleure option adaptée à vos besoins.</p>`,
    },
    ar: {
      title: 'تبييض الأسنان: الطرق المهنية مقابل مجموعات المنزل',
      excerpt: 'مقارنة شاملة بين تبييض الأسنان المهني في العيادة ومجموعات التبييض المنزلية. تحليل النتائج والسلامة والفعالية.',
      category: 'التجميل',
      date: '١٠ يناير ٢٠٢٥',
      readTime: '٧ دقائق',
      image: '@assets/generated_images/Teeth_whitening_bright_smile_ca666386.png',
      content: `تبييض الأسنان هو واحد من أكثر العلاجات التجميلية المطلوبة في طب الأسنان الحديث. الابتسامة المشرقة تحسن مظهرك وتعزز ثقتك. اكتشف الاختلافات بين الطرق المهنية ومجموعات المنزل.

<h2>التبييض المهني في العيادة</h2>

<p>يستخدم التبييض المهني عوامل تبييض مركزة يتم تنشيطها بضوء LED أو ليزر. توفر هذه الطريقة نتائج فورية في جلسة واحدة من ٦٠ إلى ٩٠ دقيقة. يحمي طبيب الأسنان لثتك ويتحكم في العملية بالكامل لنتائج آمنة وفعالة.</p>

<p>يمكن للنتائج تفتيح أسنانك من ٤ إلى ٨ درجات من الجلسة الأولى. يتم تقليل حساسية الأسنان بفضل التقنيات المهنية والمواد الهلامية المزيلة للحساسية.</p>

<h2>مجموعات التبييض المنزلية</h2>

<p>تستخدم المجموعات المهنية المنزلية قوالب مخصصة وجل بيروكسيد الكارباميد. ترتديها من ٣٠ دقيقة إلى ساعتين يوميًا لمدة أسبوع إلى أسبوعين. توفر نتائج تدريجية وتفتح من ٢ إلى ٥ درجات.</p>

<p>المجموعات المتاحة بدون وصفة لديها تركيزات محدودة وقوالب عالمية قد لا تتكيف جيدًا. بدون إشراف طبي، يمكن أن تتلف المينا وتنتج نتائج غير متساوية.</p>

<h2>مقارنة التكاليف والمتانة</h2>

<p>يكلف التبييض المهني ٣٠٠٠-٥٠٠٠ درهم مع نتائج تدوم ١-٣ سنوات. المجموعات المهنية المنزلية تكلف ١٥٠٠-٢٥٠٠ درهم لـ٦ أشهر إلى سنة. المجموعات المتاحة بدون وصفة تكلف ٢٠٠-٨٠٠ درهم لنتائج مؤقتة من ٢-٦ أشهر.</p>

<h2>الخلاصة</h2>

<p>يظل التبييض المهني الطريقة الأكثر أمانًا وفعالية. استشر الدكتورة فردوس موستعين لأفضل خيار يناسب احتياجاتك.</p>`,
    },
    en: {
      title: 'Teeth Whitening: Professional Methods vs Home Kits',
      excerpt: 'In-depth comparison between professional in-office teeth whitening and home whitening kits. Results, safety and effectiveness analyzed.',
      category: 'Aesthetics',
      date: 'Jan 10, 2025',
      readTime: '7 min',
      image: '@assets/generated_images/Teeth_whitening_bright_smile_ca666386.png',
      content: `Teeth whitening is one of the most requested aesthetic treatments in modern dentistry. A bright smile improves your appearance and boosts your confidence. Discover the differences between professional methods and home kits.

<h2>Professional In-Office Whitening</h2>

<p>Professional whitening uses concentrated whitening agents activated by LED light or laser. This method provides immediate results in a single 60 to 90-minute session. The dentist protects your gums and controls the entire process for safe and effective results.</p>

<p>Results can lighten your teeth by 4 to 8 shades from the first session. Tooth sensitivity is minimized thanks to professional techniques and desensitizing gels.</p>

<h2>Home Whitening Kits</h2>

<p>Professional home kits use custom trays and carbamide peroxide gel. You wear them 30 minutes to 2 hours daily for 1 to 2 weeks. These kits offer gradual results and can lighten by 2 to 5 shades.</p>

<p>Over-the-counter kits have limited concentrations and universal trays that may fit poorly. Without dental supervision, they can damage enamel and produce uneven results.</p>

<h2>Cost and Durability Comparison</h2>

<p>Professional whitening costs 3000-5000 dirhams with results lasting 1 to 3 years. Professional home kits cost 1500-2500 dirhams for 6 months to 1 year. Over-the-counter kits cost 200-800 dirhams for temporary results of 2 to 6 months.</p>

<h2>Conclusion</h2>

<p>Professional whitening remains the safest and most effective method. Consult Dr. Firdaous MOUSTAINE for the best option adapted to your needs.</p>`,
    },
  },
  'implants-vs-bridges': {
    fr: {
      title: 'Implants dentaires ou bridges : comment choisir ?',
      excerpt: 'Guide complet pour vous aider à choisir entre un implant dentaire et un bridge. Avantages, inconvénients, coûts et durabilité de chaque option expliqués par Dr. Moustaine.',
      category: 'Implantologie',
      date: '5 Jan 2025',
      readTime: '8 min',
      image: '@assets/generated_images/Dental_implants_and_restorations_a69aa831.png',
      content: `Deux solutions principales s'offrent à vous pour remplacer des dents manquantes : les implants dentaires et les bridges. Chacune présente des avantages qu'il est essentiel de comprendre.

<h2>L'implant dentaire : une solution moderne</h2>

<p>Un implant est une racine artificielle en titane insérée dans l'os. Il stimule l'os de la mâchoire et ne nécessite aucune modification des dents adjacentes. Durabilité exceptionnelle de plus de 20 ans avec un taux de succès de 95-98%.</p>

<h2>Le bridge dentaire : une solution éprouvée</h2>

<p>Un bridge s'appuie sur les dents adjacentes qui doivent être taillées. Traitement plus rapide (2-3 semaines) et coût initial moins élevé. Efficace pour tous types de malpositions.</p>

<h2>Comparaison détaillée</h2>

<p>Implants: durent 20+ ans, préservent l'os, coûtent 15000-20000 MAD par dent. Bridges: durent 10-15 ans, résorption osseuse progressive, coûtent 8000-15000 MAD pour 3 unités.</p>

<h2>Conclusion</h2>

<p>Au cabinet du Dr. Firdaous MOUSTAINE, nous évaluons votre cas pour recommander la meilleure solution adaptée à vos besoins.</p>`,
    },
    ar: {
      title: 'زراعة الأسنان أم الجسور: كيف تختار؟',
      excerpt: 'دليل شامل لمساعدتك في الاختيار بين زراعة الأسنان والجسر. المزايا والعيوب والتكاليف والمتانة لكل خيار تشرحها الدكتورة موستعين.',
      category: 'زراعة الأسنان',
      date: '٥ يناير ٢٠٢٥',
      readTime: '٨ دقائق',
      image: '@assets/generated_images/Dental_implants_and_restorations_a69aa831.png',
      content: `هناك حلان رئيسيان لاستبدال الأسنان المفقودة: الزراعة والجسور. لكل منهما مزايا يجب فهمها.

<h2>زراعة الأسنان: حل حديث</h2>

<p>الزراعة هي جذر اصطناعي من التيتانيوم يُدرج في العظم. تحفز عظم الفك ولا تتطلب تعديل الأسنان المجاورة. متانة استثنائية أكثر من ٢٠ عامًا بمعدل نجاح ٩٥-٩٨٪.</p>

<h2>الجسر السني: حل مُثبت</h2>

<p>الجسر يستند على الأسنان المجاورة التي يجب نحتها. علاج أسرع (٢-٣ أسابيع) وتكلفة أولية أقل. فعال لجميع أنواع سوء الموضع.</p>

<h2>مقارنة تفصيلية</h2>

<p>الزراعة: تدوم ٢٠+ عامًا، تحافظ على العظم، تكلف ١٥٠٠٠-٢٠٠٠٠ درهم لكل سن. الجسور: تدوم ١٠-١٥ عامًا، امتصاص عظمي تدريجي، تكلف ٨٠٠٠-١٥٠٠٠ درهم لـ٣ وحدات.</p>

<h2>الخلاصة</h2>

<p>في عيادة الدكتورة فردوس موستعين، نقيّم حالتك للتوصية بأفضل حل يناسب احتياجاتك.</p>`,
    },
    en: {
      title: 'Dental Implants or Bridges: How to Choose?',
      excerpt: 'Complete guide to help you choose between a dental implant and a bridge. Advantages, disadvantages, costs and durability of each option explained by Dr. Moustaine.',
      category: 'Implantology',
      date: 'Jan 5, 2025',
      readTime: '8 min',
      image: '@assets/generated_images/Dental_implants_and_restorations_a69aa831.png',
      content: `Two main solutions are available for replacing missing teeth: dental implants and bridges. Each has advantages that are essential to understand.

<h2>Dental Implant: A Modern Solution</h2>

<p>An implant is an artificial titanium root inserted into the bone. It stimulates the jawbone and requires no modification of adjacent teeth. Exceptional durability of 20+ years with a 95-98% success rate.</p>

<h2>Dental Bridge: A Proven Solution</h2>

<p>A bridge relies on adjacent teeth that must be filed down. Faster treatment (2-3 weeks) and lower initial cost. Effective for all types of malocclusions.</p>

<h2>Detailed Comparison</h2>

<p>Implants: last 20+ years, preserve bone, cost 15000-20000 MAD per tooth. Bridges: last 10-15 years, progressive bone resorption, cost 8000-15000 MAD for 3 units.</p>

<h2>Conclusion</h2>

<p>At Dr. Firdaous MOUSTAINE's clinic, we evaluate your case to recommend the best solution adapted to your needs.</p>`,
    },
  },
  'premiere-visite-enfant': {
    fr: {
      title: 'Première visite chez le dentiste : préparer votre enfant',
      excerpt: 'Conseils pratiques pour une première visite dentaire réussie. Comment rassurer votre enfant et créer une expérience positive qui durera toute sa vie.',
      category: 'Pédodontie',
      date: '28 Déc 2024',
      readTime: '6 min',
      image: '@assets/generated_images/Pediatric_dentistry_happy_child_aed6da30.png',
      content: `La première visite dentaire influence toute la relation future avec les soins dentaires. Une expérience positive crée une base solide pour une bonne santé bucco-dentaire à vie.

<h2>Quand planifier la première visite ?</h2>

<p>Première visite vers 1 an ou dans les 6 mois suivant l'apparition de la première dent. Cette visite précoce permet d'identifier tout problème potentiel et de familiariser l'enfant avec le cabinet.</p>

<h2>Préparer votre enfant</h2>

<p>Parlez avec enthousiasme. Expliquez que le dentiste aide à garder les dents propres. Utilisez des livres pour enfants et jouez au dentiste à la maison. Évitez les mots négatifs comme "douleur" ou "piqûre".</p>

<h2>Ce qui se passe lors de la première visite</h2>

<p>Visite courte et douce avec comptage des dents, vérification de l'alignement, examen des gencives. Nettoyage adapté à l'âge. Discussion sur l'alimentation et l'hygiène.</p>

<h2>Conclusion</h2>

<p>Au cabinet du Dr. Firdaous MOUSTAINE, nous créons un environnement rassurant pour les enfants. Notre approche douce transforme chaque visite en aventure positive.</p>`,
    },
    ar: {
      title: 'أول زيارة لطبيب الأسنان: تحضير طفلك',
      excerpt: 'نصائح عملية لزيارة أولى ناجحة لطبيب الأسنان. كيفية طمأنة طفلك وخلق تجربة إيجابية تدوم مدى الحياة.',
      category: 'طب أسنان الأطفال',
      date: '٢٨ ديسمبر ٢٠٢٤',
      readTime: '٦ دقائق',
      image: '@assets/generated_images/Pediatric_dentistry_happy_child_aed6da30.png',
      content: `أول زيارة لطبيب الأسنان تؤثر على العلاقة المستقبلية بأكملها مع رعاية الأسنان. التجربة الإيجابية تخلق أساسًا متينًا لصحة الفم مدى الحياة.

<h2>متى تخطط للزيارة الأولى؟</h2>

<p>أول زيارة حوالي سن سنة أو في غضون ٦ أشهر من ظهور السن الأول. تسمح بتحديد أي مشاكل محتملة وتعريف الطفل بالعيادة.</p>

<h2>تحضير طفلك</h2>

<p>تحدث بحماس. اشرح أن طبيب الأسنان يساعد في الحفاظ على الأسنان نظيفة. استخدم كتب الأطفال والعب دور طبيب الأسنان في المنزل. تجنب الكلمات السلبية مثل "ألم" أو "حقنة".</p>

<h2>ما يحدث في الزيارة الأولى</h2>

<p>زيارة قصيرة ولطيفة مع عد الأسنان، التحقق من المحاذاة، فحص اللثة. تنظيف مناسب للعمر. مناقشة التغذية والنظافة.</p>

<h2>الخلاصة</h2>

<p>في عيادة الدكتورة فردوس موستعين، نخلق بيئة مطمئنة للأطفال. نهجنا اللطيف يحول كل زيارة إلى مغامرة إيجابية.</p>`,
    },
    en: {
      title: 'First Dentist Visit: Preparing Your Child',
      excerpt: 'Practical tips for a successful first dental visit. How to reassure your child and create a positive experience that will last a lifetime.',
      category: 'Pediatric Dentistry',
      date: 'Dec 28, 2024',
      readTime: '6 min',
      image: '@assets/generated_images/Pediatric_dentistry_happy_child_aed6da30.png',
      content: `The first dental visit influences the entire future relationship with dental care. A positive experience creates a solid foundation for lifelong good oral health.

<h2>When to Plan the First Visit?</h2>

<p>First visit around age 1 or within 6 months of the first tooth appearing. This early visit allows identifying any potential problems and familiarizing the child with the clinic.</p>

<h2>Preparing Your Child</h2>

<p>Talk with enthusiasm. Explain that the dentist helps keep teeth clean. Use children's books and play dentist at home. Avoid negative words like "pain" or "shot".</p>

<h2>What Happens During the First Visit</h2>

<p>Short and gentle visit with tooth counting, checking alignment, examining gums. Age-appropriate cleaning. Discussion about nutrition and hygiene.</p>

<h2>Conclusion</h2>

<p>At Dr. Firdaous MOUSTAINE's clinic, we create a reassuring environment for children. Our gentle approach transforms each visit into a positive adventure.</p>`,
    },
  },
  'hygiene-bucco-dentaire': {
    fr: {
      title: 'Les 5 règles d\'or de l\'hygiène bucco-dentaire',
      excerpt: 'Les bases essentielles pour maintenir des dents et des gencives en bonne santé. Techniques de brossage, utilisation du fil dentaire et autres habitudes importantes.',
      category: 'Prévention',
      date: '20 Déc 2024',
      readTime: '4 min',
      content: `Une bonne hygiène bucco-dentaire est essentielle pour des dents et gencives saines. Voici les 5 règles d'or à suivre.

<h2>Règle 1 : Brossage deux fois par jour</h2>

<p>Brossez minimum 2 fois par jour, 2 minutes. Utilisez une brosse à poils souples et des mouvements circulaires doux. N'oubliez pas votre langue et changez de brosse tous les 3 mois.</p>

<h2>Règle 2 : Fil dentaire quotidien</h2>

<p>Le fil élimine 40% de plaque inaccessible à la brosse. Utilisez-le une fois par jour, le soir avant coucher. Formez un "C" autour de chaque dent.</p>

<h2>Règle 3 : Limitez sucre et acides</h2>

<p>Le sucre nourrit les bactéries. Limitez boissons sucrées, bonbons, pâtisseries. Attendez 30 minutes avant de brosser après aliments acides.</p>

<h2>Règle 4 : Visites régulières</h2>

<p>Consultez tous les 6 mois pour examen et détartrage. La prévention est plus facile et moins coûteuse que le traitement.</p>

<h2>Règle 5 : Dentifrice fluoré</h2>

<p>Le fluor renforce l'émail. Utilisez un dentifrice à 1350-1500 ppm de fluor. Un bain de bouche complète la routine.</p>

<h2>Conclusion</h2>

<p>Ces règles garantissent une bouche saine. Consultez Dr. Firdaous MOUSTAINE pour un suivi personnalisé.</p>`,
    },
    ar: {
      title: 'القواعد الذهبية الخمس لنظافة الفم',
      excerpt: 'الأساسيات الضرورية للحفاظ على أسنان ولثة صحية. تقنيات التنظيف بالفرشاة واستخدام خيط الأسنان وعادات مهمة أخرى.',
      category: 'الوقاية',
      date: '٢٠ ديسمبر ٢٠٢٤',
      readTime: '٤ دقائق',
      content: `النظافة الجيدة للفم ضرورية لأسنان ولثة صحية. إليك القواعد الذهبية الخمس.

<h2>القاعدة ١: التنظيف مرتين يومياً</h2>

<p>نظف مرتين على الأقل يوميًا، دقيقتين. استخدم فرشاة بشعيرات ناعمة وحركات دائرية لطيفة. لا تنس لسانك وغير الفرشاة كل ٣ أشهر.</p>

<h2>القاعدة ٢: خيط الأسنان يومياً</h2>

<p>الخيط يزيل ٤٠٪ من البلاك غير المتاح للفرشاة. استخدمه مرة يوميًا، مساءً قبل النوم. كون "C" حول كل سن.</p>

<h2>القاعدة ٣: قلل السكر والأحماض</h2>

<p>السكر يغذي البكتيريا. قلل المشروبات السكرية والحلوى والمعجنات. انتظر ٣٠ دقيقة قبل التنظيف بعد الأطعمة الحمضية.</p>

<h2>القاعدة ٤: زيارات منتظمة</h2>

<p>استشر كل ٦ أشهر للفحص وإزالة الجير. الوقاية أسهل وأقل تكلفة من العلاج.</p>

<h2>القاعدة ٥: معجون بالفلورايد</h2>

<p>الفلورايد يقوي المينا. استخدم معجونًا بـ١٣٥٠-١٥٠٠ جزء في المليون من الفلورايد. غسول الفم يكمل الروتين.</p>

<h2>الخلاصة</h2>

<p>هذه القواعد تضمن فمًا صحيًا. استشر الدكتورة فردوس موستعين للمتابعة الشخصية.</p>`,
    },
    en: {
      title: 'The 5 Golden Rules of Oral Hygiene',
      excerpt: 'Essential basics for maintaining healthy teeth and gums. Brushing techniques, flossing and other important habits.',
      category: 'Prevention',
      date: 'Dec 20, 2024',
      readTime: '4 min',
      content: `Good oral hygiene is essential for healthy teeth and gums. Here are the 5 golden rules to follow.

<h2>Rule 1: Brush twice daily</h2>

<p>Brush at least twice daily for 2 minutes. Use a soft-bristled brush and gentle circular motions. Don't forget your tongue and change brush every 3 months.</p>

<h2>Rule 2: Floss daily</h2>

<p>Floss removes 40% of plaque unreachable by brush. Use once daily, evening before bed. Form a "C" around each tooth.</p>

<h2>Rule 3: Limit sugar and acids</h2>

<p>Sugar feeds bacteria. Limit sugary drinks, candy, pastries. Wait 30 minutes before brushing after acidic foods.</p>

<h2>Rule 4: Regular visits</h2>

<p>See dentist every 6 months for exam and scaling. Prevention is easier and less expensive than treatment.</p>

<h2>Rule 5: Fluoride toothpaste</h2>

<p>Fluoride strengthens enamel. Use toothpaste with 1350-1500 ppm fluoride. Mouthwash completes the routine.</p>

<h2>Conclusion</h2>

<p>These rules guarantee a healthy mouth. Consult Dr. Firdaous MOUSTAINE for personalized follow-up.</p>`,
    },
  },
  'orthodontie-adulte': {
    fr: {
      title: 'Orthodontie pour adultes : il n\'est jamais trop tard',
      excerpt: 'L\'orthodontie n\'est pas réservée aux enfants! Découvrez les options modernes comme Invisalign pour corriger l\'alignement dentaire à l\'âge adulte.',
      category: 'Orthodontie',
      date: '15 Déc 2024',
      readTime: '6 min',
      content: `L'orthodontie n'est plus réservée aux adolescents. De plus en plus d'adultes obtiennent le sourire dont ils rêvent grâce aux technologies modernes comme Invisalign.

<h2>Pourquoi l'orthodontie adulte ?</h2>

<p>Dents mal alignées causent problèmes de mastication, usure prématurée, tension des mâchoires. Un sourire harmonieux booste la confiance. L'orthodontie améliore aussi l'hygiène bucco-dentaire.</p>

<h2>Options de traitement</h2>

<p>Invisalign utilise gouttières transparentes amovibles, pratiquement invisibles. Appareils linguaux totalement invisibles. Bagues esthétiques en céramique. Bagues métalliques traditionnelles économiques.</p>

<h2>Invisalign : solution privilégiée</h2>

<p>Gouttières quasi-invisibles, amovibles, confortables. Traitement 12-18 mois, port 20-22h par jour. Résultats prévisibles avec simulation 3D. Traite chevauchements, espaces, sur/sous occlusion.</p>

<h2>Déroulement du traitement</h2>

<p>Consultation avec examen complet, radiographies, photos. Scan 3D pour gouttières sur mesure. Traitement actif 12-24 mois. Phase de contention permanente pour maintenir résultats.</p>

<h2>Conclusion</h2>

<p>Il n'est jamais trop tard pour obtenir le sourire que vous méritez. Au cabinet du Dr. Firdaous MOUSTAINE, nous vous accompagnons avec expertise.</p>`,
    },
    ar: {
      title: 'تقويم الأسنان للبالغين: لم يفت الأوان بعد',
      excerpt: 'تقويم الأسنان ليس للأطفال فقط! اكتشف الخيارات الحديثة مثل إنفزلاين لتصحيح محاذاة الأسنان في سن البلوغ.',
      category: 'تقويم الأسنان',
      date: '١٥ ديسمبر ٢٠٢٤',
      readTime: '٦ دقائق',
      content: `تقويم الأسنان لم يعد مقتصرًا على المراهقين. المزيد من البالغين يحصلون على الابتسامة التي يحلمون بها بفضل التقنيات الحديثة مثل إنفزلاين.

<h2>لماذا تقويم الأسنان للبالغين؟</h2>

<p>الأسنان غير المحاذاة تسبب مشاكل في المضغ، التآكل المبكر، ضغط الفكين. الابتسامة المتناسقة تعزز الثقة. يحسن التقويم أيضًا نظافة الفم.</p>

<h2>خيارات العلاج</h2>

<p>إنفزلاين يستخدم قوالب شفافة قابلة للإزالة، غير مرئية عمليًا. أقواس لسانية غير مرئية تمامًا. أقواس جمالية من السيراميك. أقواس معدنية تقليدية اقتصادية.</p>

<h2>إنفزلاين: الحل المفضل</h2>

<p>قوالب شبه غير مرئية، قابلة للإزالة، مريحة. علاج ١٢-١٨ شهرًا، ارتداء ٢٠-٢٢ ساعة يوميًا. نتائج متوقعة بمحاكاة ثلاثية الأبعاد. يعالج التداخل، الفراغات، العضة الزائدة/الناقصة.</p>

<h2>سير العلاج</h2>

<p>استشارة مع فحص كامل، أشعة، صور. مسح ثلاثي الأبعاد لقوالب مخصصة. علاج نشط ١٢-٢٤ شهرًا. مرحلة تثبيت دائمة للحفاظ على النتائج.</p>

<h2>الخلاصة</h2>

<p>لم يفت الأوان للحصول على الابتسامة التي تستحقها. في عيادة الدكتورة فردوس موستعين، نرافقك بخبرة.</p>`,
    },
    en: {
      title: 'Orthodontics for Adults: It\'s Never Too Late',
      excerpt: 'Orthodontics isn\'t just for children! Discover modern options like Invisalign to correct dental alignment in adulthood.',
      category: 'Orthodontics',
      date: 'Dec 15, 2024',
      readTime: '6 min',
      content: `Orthodontics is no longer reserved for teenagers. More and more adults get the smile they dream of thanks to modern technologies like Invisalign.

<h2>Why Adult Orthodontics?</h2>

<p>Misaligned teeth cause chewing problems, premature wear, jaw tension. A harmonious smile boosts confidence. Orthodontics also improves oral hygiene.</p>

<h2>Treatment Options</h2>

<p>Invisalign uses transparent removable trays, practically invisible. Lingual braces totally invisible. Aesthetic ceramic braces. Traditional economical metal braces.</p>

<h2>Invisalign: Preferred Solution</h2>

<p>Quasi-invisible trays, removable, comfortable. Treatment 12-18 months, wear 20-22h daily. Predictable results with 3D simulation. Treats crowding, spacing, over/underbite.</p>

<h2>Treatment Process</h2>

<p>Consultation with complete exam, X-rays, photos. 3D scan for custom trays. Active treatment 12-24 months. Permanent retention phase to maintain results.</p>

<h2>Conclusion</h2>

<p>It's never too late to get the smile you deserve. At Dr. Firdaous MOUSTAINE's clinic, we accompany you with expertise.</p>`,
    },
  },
};
