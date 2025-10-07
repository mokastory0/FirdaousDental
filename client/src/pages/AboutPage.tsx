import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Calendar, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import doctorImage from '@assets/generated_images/Female_dentist_professional_portrait_0f9ebea2.png';
import equipmentImage from '@assets/generated_images/Modern_dental_equipment_technology_344d1782.png';

export default function AboutPage() {
  const { language, t } = useLanguage();

  const content = {
    fr: {
      section1Title: 'Une Expertise au Service de Votre Sourire',
      section1Para1: 'Dr. Firdaous MOUSTAINE est une dentiste expérimentée et passionnée, exerçant à Casablanca. Avec plus de 15 ans d\'expérience, elle s\'est spécialisée dans les soins dentaires complets, de la dentisterie esthétique aux traitements complexes.',
      section1Para2: 'Diplômée de la Faculté de Médecine Dentaire de Casablanca, Dr. MOUSTAINE continue de se former aux dernières techniques et technologies pour offrir à ses patients les meilleurs soins possibles.',
      section1Para3: 'Sa philosophie ? Allier expertise technique et approche humaine pour créer une expérience de soins dentaires positive et sans stress pour tous ses patients.',
      stat1: 'Années d\'expérience',
      stat2: 'Patients traités',
      stat3: 'Note Google',
      stat4: 'Satisfaction',
      section2Title: 'Équipement Moderne',
      section2Intro: 'Notre cabinet à Casablanca est équipé des dernières technologies pour vous garantir des soins dentaires de qualité supérieure dans un environnement confortable et sécurisé.',
      equipment1Title: 'Radiographie numérique',
      equipment1Desc: 'Diagnostic précis avec 90% moins de radiation',
      equipment2Title: 'Caméra intra-orale',
      equipment2Desc: 'Visualisation en temps réel de vos dents',
      equipment3Title: 'Système de stérilisation avancé',
      equipment3Desc: 'Hygiène et sécurité maximales',
      equipment4Title: 'Fauteuils ergonomiques',
      equipment4Desc: 'Confort optimal pendant vos soins',
      commitmentTitle: 'Notre Engagement',
      commitmentText: 'Nous nous engageons à fournir des soins dentaires d\'excellence dans une atmosphère chaleureuse et accueillante. Chaque patient est unique, et nous adaptons nos traitements à vos besoins spécifiques pour vous garantir les meilleurs résultats possibles.',
    },
    ar: {
      section1Title: 'خبرة في خدمة ابتسامتك',
      section1Para1: 'الدكتورة فردوس مستين طبيبة أسنان ذات خبرة وشغف، تمارس في الدار البيضاء. مع أكثر من ١٥ عامًا من الخبرة، تخصصت في العناية الشاملة بالأسنان، من طب الأسنان التجميلي إلى العلاجات المعقدة.',
      section1Para2: 'خريجة كلية طب الأسنان بالدار البيضاء، تواصل الدكتورة مستين التدريب على أحدث التقنيات والتكنولوجيا لتقديم أفضل رعاية ممكنة لمرضاها.',
      section1Para3: 'فلسفتها؟ الجمع بين الخبرة التقنية والنهج الإنساني لخلق تجربة رعاية أسنان إيجابية وخالية من التوتر لجميع مرضاها.',
      stat1: 'سنوات الخبرة',
      stat2: 'المرضى المعالجون',
      stat3: 'تقييم جوجل',
      stat4: 'الرضا',
      section2Title: 'معدات حديثة',
      section2Intro: 'عيادتنا في الدار البيضاء مجهزة بأحدث التقنيات لضمان رعاية أسنان عالية الجودة في بيئة مريحة وآمنة.',
      equipment1Title: 'التصوير الشعاعي الرقمي',
      equipment1Desc: 'تشخيص دقيق مع أقل بنسبة ٩٠٪ من الإشعاع',
      equipment2Title: 'كاميرا داخل الفم',
      equipment2Desc: 'رؤية أسنانك في الوقت الفعلي',
      equipment3Title: 'نظام تعقيم متطور',
      equipment3Desc: 'أقصى درجات النظافة والأمان',
      equipment4Title: 'كراسي مريحة',
      equipment4Desc: 'راحة مثلى أثناء العلاج',
      commitmentTitle: 'التزامنا',
      commitmentText: 'نلتزم بتقديم رعاية أسنان متميزة في جو دافئ ومرحب. كل مريض فريد من نوعه، ونكيف علاجاتنا وفقًا لاحتياجاتك الخاصة لضمان أفضل النتائج الممكنة.',
    },
    en: {
      section1Title: 'Expertise at the Service of Your Smile',
      section1Para1: 'Dr. Firdaous MOUSTAINE is an experienced and passionate dentist practicing in Casablanca. With over 15 years of experience, she has specialized in comprehensive dental care, from cosmetic dentistry to complex treatments.',
      section1Para2: 'A graduate of the Faculty of Dental Medicine in Casablanca, Dr. MOUSTAINE continues to train in the latest techniques and technologies to offer her patients the best possible care.',
      section1Para3: 'Her philosophy? Combining technical expertise with a human approach to create a positive and stress-free dental care experience for all her patients.',
      stat1: 'Years of experience',
      stat2: 'Patients treated',
      stat3: 'Google rating',
      stat4: 'Satisfaction',
      section2Title: 'Modern Equipment',
      section2Intro: 'Our clinic in Casablanca is equipped with the latest technologies to guarantee you superior quality dental care in a comfortable and safe environment.',
      equipment1Title: 'Digital radiography',
      equipment1Desc: 'Accurate diagnosis with 90% less radiation',
      equipment2Title: 'Intraoral camera',
      equipment2Desc: 'Real-time visualization of your teeth',
      equipment3Title: 'Advanced sterilization system',
      equipment3Desc: 'Maximum hygiene and safety',
      equipment4Title: 'Ergonomic chairs',
      equipment4Desc: 'Optimal comfort during your treatment',
      commitmentTitle: 'Our Commitment',
      commitmentText: 'We are committed to providing excellent dental care in a warm and welcoming atmosphere. Every patient is unique, and we adapt our treatments to your specific needs to guarantee you the best possible results.',
    },
  };

  const c = content[language];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-lg text-muted-foreground">{t('about.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="rounded-lg overflow-hidden">
            <img
              src={doctorImage}
              alt="Dr. Firdaous MOUSTAINE"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">{c.section1Title}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{c.section1Para1}</p>
                <p>{c.section1Para2}</p>
                <p>{c.section1Para3}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold" dir="ltr">15+</div>
                  <div className="text-sm text-muted-foreground">{c.stat1}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold" dir="ltr">1000+</div>
                  <div className="text-sm text-muted-foreground">{c.stat2}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold" dir="ltr">4.8★</div>
                  <div className="text-sm text-muted-foreground">{c.stat3}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold" dir="ltr">100%</div>
                  <div className="text-sm text-muted-foreground">{c.stat4}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{c.section2Title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src={equipmentImage}
                alt={c.section2Title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {c.section2Intro}
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{c.equipment1Title}</div>
                    <div className="text-sm text-muted-foreground">{c.equipment1Desc}</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{c.equipment2Title}</div>
                    <div className="text-sm text-muted-foreground">{c.equipment2Desc}</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{c.equipment3Title}</div>
                    <div className="text-sm text-muted-foreground">{c.equipment3Desc}</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{c.equipment4Title}</div>
                    <div className="text-sm text-muted-foreground">{c.equipment4Desc}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{c.commitmentTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {c.commitmentText}
          </p>
        </div>
      </div>
    </div>
  );
}
