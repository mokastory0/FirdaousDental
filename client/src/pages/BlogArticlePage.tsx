import { Link, useRoute } from 'wouter';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Calendar, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import teethWhiteningImage from '@assets/generated_images/Teeth_whitening_bright_smile_ca666386.png';
import implantImage from '@assets/generated_images/Dental_implants_and_restorations_a69aa831.png';
import pediatricImage from '@assets/generated_images/Pediatric_dentistry_happy_child_aed6da30.png';

export default function BlogArticlePage() {
  const { language } = useLanguage();
  const [, params] = useRoute('/blog/:id');
  const articleId = params?.id;

  const blogArticles: Record<string, any> = {
    'prevenir-caries': {
      fr: {
        title: 'Prévenir les caries dentaires : conseils et traitements',
        category: 'Prévention',
        date: '15 Jan 2025',
        readTime: '5 min',
        content: `Les caries dentaires sont l'un des problèmes de santé bucco-dentaire les plus courants, touchant des millions de personnes à travers le monde. Bien qu'elles puissent sembler inévitables, la vérité est que les caries sont largement évitables grâce à une bonne hygiène dentaire et des visites régulières chez le dentiste. Dans cet article, nous explorerons les meilleures pratiques pour prévenir les caries et maintenir un sourire sain.

## Comprendre les caries dentaires

Une carie dentaire est une infection qui détruit progressivement l'émail et la dentine de la dent. Elle est causée par des bactéries présentes dans la bouche qui se nourrissent des sucres et produisent des acides qui attaquent l'émail. Si elle n'est pas traitée, la carie peut progresser jusqu'à atteindre le nerf de la dent, causant une douleur intense et nécessitant un traitement de canal ou même une extraction.

Les facteurs de risque incluent une mauvaise hygiène bucco-dentaire, une alimentation riche en sucres et en glucides, un manque de fluor, la sécheresse buccale, et certaines conditions médicales. Comprendre ces facteurs est la première étape pour prévenir efficacement les caries.

## Les 5 piliers de la prévention

### 1. Le brossage régulier

Le brossage des dents est la pierre angulaire de la prévention des caries. Il est recommandé de se brosser les dents au moins deux fois par jour, pendant au moins deux minutes à chaque fois. Utilisez une brosse à dents à poils souples et un dentifrice fluoré. La technique est importante : brossez en effectuant des mouvements circulaires doux, en inclinant la brosse à 45 degrés par rapport aux gencives.

N'oubliez pas de brosser toutes les surfaces de vos dents - l'avant, l'arrière et les surfaces de mastication. Remplacez votre brosse à dents tous les trois mois ou dès que les poils commencent à s'user.

### 2. L'utilisation du fil dentaire

Le fil dentaire est essentiel pour éliminer la plaque et les particules alimentaires entre les dents, là où votre brosse à dents ne peut pas atteindre. Utilisez le fil dentaire au moins une fois par jour, de préférence avant le coucher. Passez délicatement le fil entre chaque dent en formant un "C" autour de la dent et en le glissant doucement sous la ligne des gencives.

### 3. Une alimentation équilibrée

Votre alimentation joue un rôle crucial dans la prévention des caries. Limitez votre consommation de sucres et de glucides raffinés, qui nourrissent les bactéries responsables des caries. Évitez les boissons sucrées et les grignotages fréquents entre les repas. Privilégiez les aliments riches en calcium comme le lait, le fromage et les yaourts, ainsi que les fruits et légumes croquants qui stimulent la production de salive.

### 4. Le fluor pour des dents fortes

Le fluor renforce l'émail dentaire et aide à prévenir les caries. Utilisez un dentifrice fluoré et, si votre eau n'est pas fluorée, demandez à votre dentiste des suppléments de fluor ou des traitements professionnels. Le fluor peut même inverser les premiers stades de la carie en reminéralisant l'émail endommagé.

### 5. Les visites régulières chez le dentiste

Consultez votre dentiste tous les six mois pour un examen et un nettoyage professionnels. Ces visites permettent de détecter les caries à un stade précoce, quand elles sont plus faciles et moins coûteuses à traiter. Le détartrage professionnel élimine la plaque et le tartre que le brossage ne peut pas enlever.

## Traitements préventifs professionnels

Au-delà de l'hygiène à domicile, votre dentiste peut proposer plusieurs traitements préventifs. Les scellants dentaires sont des revêtements protecteurs appliqués sur les surfaces de mastication des molaires pour prévenir les caries. Les applications de fluor professionnel renforcent l'émail. Pour les enfants, les vernis fluorés peuvent être particulièrement bénéfiques.

## Conclusion

La prévention des caries dentaires est à la portée de tous. En adoptant de bonnes habitudes d'hygiène bucco-dentaire, en maintenant une alimentation équilibrée et en consultant régulièrement votre dentiste, vous pouvez garder vos dents saines toute votre vie. N'oubliez pas : prévenir est toujours plus facile et moins coûteux que traiter. Prenez soin de vos dents dès aujourd'hui !`,
      },
      ar: {
        title: 'الوقاية من تسوس الأسنان: نصائح وعلاجات',
        category: 'الوقاية',
        date: '١٥ يناير ٢٠٢٥',
        readTime: '٥ دقائق',
        content: `تسوس الأسنان هو واحد من أكثر مشاكل صحة الفم شيوعًا، حيث يصيب ملايين الأشخاص في جميع أنحاء العالم. على الرغم من أنها قد تبدو حتمية، إلا أن الحقيقة هي أن التسوس يمكن الوقاية منه إلى حد كبير من خلال النظافة الجيدة للفم والزيارات المنتظمة لطبيب الأسنان. في هذا المقال، سنستكشف أفضل الممارسات للوقاية من التسوس والحفاظ على ابتسامة صحية.

## فهم تسوس الأسنان

تسوس الأسنان هو عدوى تدمر تدريجياً مينا الأسنان والعاج. تحدث بسبب البكتيريا الموجودة في الفم التي تتغذى على السكريات وتنتج أحماضًا تهاجم المينا. إذا لم تُعالج، يمكن أن يتقدم التسوس حتى يصل إلى عصب السن، مسببًا ألمًا شديدًا ويتطلب علاج العصب أو حتى الخلع.

تشمل عوامل الخطر سوء نظافة الفم، نظام غذائي غني بالسكريات والكربوهيدرات، نقص الفلورايد، جفاف الفم، وبعض الحالات الطبية. فهم هذه العوامل هو الخطوة الأولى للوقاية الفعالة من التسوس.

## الركائز الخمس للوقاية

### ١. التنظيف المنتظم بالفرشاة

تنظيف الأسنان بالفرشاة هو حجر الزاوية في الوقاية من التسوس. يُوصى بتنظيف الأسنان مرتين على الأقل يوميًا، لمدة دقيقتين في كل مرة. استخدم فرشاة أسنان ذات شعيرات ناعمة ومعجون أسنان يحتوي على الفلورايد. التقنية مهمة: نظف بحركات دائرية لطيفة، مع إمالة الفرشاة بزاوية ٤٥ درجة تجاه اللثة.

لا تنس تنظيف جميع أسطح أسنانك - الأمامية والخلفية وأسطح المضغ. استبدل فرشاة أسنانك كل ثلاثة أشهر أو بمجرد أن تبدأ الشعيرات في التآكل.

### ٢. استخدام خيط الأسنان

خيط الأسنان ضروري لإزالة البلاك وجزيئات الطعام بين الأسنان، حيث لا يمكن لفرشاة أسنانك الوصول. استخدم خيط الأسنان مرة واحدة على الأقل يوميًا، ويفضل قبل النوم. مرر الخيط بلطف بين كل سن مكونًا شكل "C" حول السن وانزلقه بلطف تحت خط اللثة.

### ٣. نظام غذائي متوازن

يلعب نظامك الغذائي دورًا حاسمًا في الوقاية من التسوس. قلل من استهلاك السكريات والكربوهيدرات المكررة، التي تغذي البكتيريا المسؤولة عن التسوس. تجنب المشروبات السكرية والوجبات الخفيفة المتكررة بين الوجبات. اختر الأطعمة الغنية بالكالسيوم مثل الحليب والجبن والزبادي، بالإضافة إلى الفواكه والخضروات المقرمشة التي تحفز إنتاج اللعاب.

### ٤. الفلورايد لأسنان قوية

الفلورايد يقوي مينا الأسنان ويساعد في الوقاية من التسوس. استخدم معجون أسنان يحتوي على الفلورايد، وإذا لم يكن ماءك محتويًا على الفلورايد، اطلب من طبيب أسنانك مكملات الفلورايد أو العلاجات المهنية. يمكن للفلورايد حتى عكس المراحل الأولى من التسوس من خلال إعادة تمعدن المينا التالفة.

### ٥. الزيارات المنتظمة لطبيب الأسنان

استشر طبيب أسنانك كل ستة أشهر لفحص وتنظيف مهني. تسمح هذه الزيارات باكتشاف التسوس في مرحلة مبكرة، عندما يكون علاجها أسهل وأقل تكلفة. إزالة الجير المهنية تزيل البلاك والجير الذي لا يمكن للتنظيف بالفرشاة إزالته.

## العلاجات الوقائية المهنية

بالإضافة إلى النظافة المنزلية، يمكن لطبيب أسنانك تقديم عدة علاجات وقائية. السدادات السنية هي طبقات واقية توضع على أسطح المضغ للأضراس للوقاية من التسوس. تطبيقات الفلورايد المهنية تقوي المينا. بالنسبة للأطفال، يمكن أن تكون ورنيشات الفلورايد مفيدة بشكل خاص.

## الخلاصة

الوقاية من تسوس الأسنان في متناول الجميع. من خلال اعتماد عادات جيدة لنظافة الفم، والحفاظ على نظام غذائي متوازن، واستشارة طبيب أسنانك بانتظام، يمكنك الحفاظ على أسنانك صحية طوال حياتك. لا تنس: الوقاية دائمًا أسهل وأقل تكلفة من العلاج. اعتن بأسنانك اليوم!`,
      },
      en: {
        title: 'Preventing Dental Cavities: Tips and Treatments',
        category: 'Prevention',
        date: 'Jan 15, 2025',
        readTime: '5 min',
        content: `Dental cavities are one of the most common oral health problems, affecting millions of people worldwide. While they may seem inevitable, the truth is that cavities are largely preventable through good dental hygiene and regular dentist visits. In this article, we'll explore the best practices for preventing cavities and maintaining a healthy smile.

## Understanding Dental Cavities

A dental cavity is an infection that progressively destroys tooth enamel and dentin. It's caused by bacteria in the mouth that feed on sugars and produce acids that attack enamel. If left untreated, the cavity can progress until it reaches the tooth nerve, causing intense pain and requiring root canal treatment or even extraction.

Risk factors include poor oral hygiene, a diet rich in sugars and carbohydrates, lack of fluoride, dry mouth, and certain medical conditions. Understanding these factors is the first step to effectively preventing cavities.

## The 5 Pillars of Prevention

### 1. Regular Brushing

Tooth brushing is the cornerstone of cavity prevention. It's recommended to brush your teeth at least twice a day for at least two minutes each time. Use a soft-bristled toothbrush and fluoride toothpaste. Technique matters: brush using gentle circular motions, angling the brush at 45 degrees to the gums.

Don't forget to brush all surfaces of your teeth - front, back, and chewing surfaces. Replace your toothbrush every three months or as soon as the bristles start to wear.

### 2. Using Dental Floss

Dental floss is essential for removing plaque and food particles between teeth, where your toothbrush can't reach. Use dental floss at least once daily, preferably before bed. Gently pass the floss between each tooth forming a "C" shape around the tooth and sliding it gently under the gum line.

### 3. A Balanced Diet

Your diet plays a crucial role in cavity prevention. Limit your consumption of sugars and refined carbohydrates, which feed cavity-causing bacteria. Avoid sugary drinks and frequent snacking between meals. Choose calcium-rich foods like milk, cheese and yogurt, as well as crunchy fruits and vegetables that stimulate saliva production.

### 4. Fluoride for Strong Teeth

Fluoride strengthens tooth enamel and helps prevent cavities. Use fluoride toothpaste and, if your water isn't fluoridated, ask your dentist for fluoride supplements or professional treatments. Fluoride can even reverse early stages of decay by remineralizing damaged enamel.

### 5. Regular Dentist Visits

See your dentist every six months for a professional exam and cleaning. These visits allow cavity detection at an early stage, when they're easier and less expensive to treat. Professional scaling removes plaque and tartar that brushing can't remove.

## Professional Preventive Treatments

Beyond home hygiene, your dentist can offer several preventive treatments. Dental sealants are protective coatings applied to the chewing surfaces of molars to prevent cavities. Professional fluoride applications strengthen enamel. For children, fluoride varnishes can be particularly beneficial.

## Conclusion

Preventing dental cavities is within everyone's reach. By adopting good oral hygiene habits, maintaining a balanced diet, and seeing your dentist regularly, you can keep your teeth healthy throughout your life. Remember: prevention is always easier and less expensive than treatment. Take care of your teeth today!`,
      },
    },
  };

  const article = articleId && blogArticles[articleId] ? blogArticles[articleId][language] : null;

  if (!article) {
    return (
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
          <Link href="/blog">
            <Button>Retour au blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6 gap-2" data-testid="link-back-blog">
            <ChevronLeft className="h-4 w-4" />
            {language === 'ar' ? 'العودة للمدونة' : language === 'fr' ? 'Retour au blog' : 'Back to blog'}
          </Button>
        </Link>

        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div className="mb-8">
            <span className="text-primary font-semibold">{article.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">{article.title}</h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          <div 
            className="whitespace-pre-wrap leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>').replace(/##/g, '<h2 className="text-3xl font-bold mt-8 mb-4">').replace(/<h2/g, '</p><h2').replace(/<\/h2>/g, '</h2><p>').replace(/###/g, '<h3 className="text-2xl font-semibold mt-6 mb-3">').replace(/<h3/g, '</p><h3').replace(/<\/h3>/g, '</h3><p>') }}
          />
        </article>

        <div className="mt-12 pt-8 border-t">
          <div className="bg-primary/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'احجز استشارتك' : language === 'fr' ? 'Prenez rendez-vous' : 'Book Your Consultation'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'ar' 
                ? 'هل لديك أسئلة حول صحة أسنانك؟ احجز موعدًا للاستشارة مع الدكتورة فردوس مستين.'
                : language === 'fr'
                ? 'Vous avez des questions sur votre santé dentaire ? Prenez rendez-vous pour une consultation avec Dr. Firdaous MOUSTAINE.'
                : 'Have questions about your dental health? Book an appointment for a consultation with Dr. Firdaous MOUSTAINE.'}
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-book-consultation">
                {language === 'ar' ? 'احجز موعد' : language === 'fr' ? 'Prendre Rendez-vous' : 'Book Appointment'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
