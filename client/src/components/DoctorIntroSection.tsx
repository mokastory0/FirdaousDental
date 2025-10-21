import { Award, GraduationCap, Heart, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
// Using optimized responsive WebP images from public/images
const doctorImageSm = '/images/dr-firdaous-portrait-sm.webp';
const doctorImageMd = '/images/dr-firdaous-portrait-md.webp';
const doctorImageLg = '/images/dr-firdaous-portrait-lg.webp';

export default function DoctorIntroSection() {
  const { language } = useLanguage();

  const content = {
    fr: {
      badge: 'Votre Dentiste',
      name: 'Dr. Firdaous MOUSTAINE',
      title: 'Chirurgien-Dentiste',
      subtitle: 'Spécialiste en Soins Dentaires Modernes',
      intro: 'Avec une grande expérience, je m\'engage à vous offrir des soins dentaires de qualité dans un environnement moderne, confortable et rassurant. Votre sourire et votre bien-être sont ma priorité.',
      highlights: [
        {
          icon: GraduationCap,
          title: 'Formation Continue',
          text: 'Diplômée et formée aux dernières techniques',
        },
        {
          icon: Heart,
          title: 'Soins Sans Douleur',
          text: 'Approche douce et technologies modernes',
        },
        {
          icon: Users,
          title: 'Patients Satisfaits',
          text: 'En confiance et ravis',
        },
        {
          icon: Award,
          title: 'Excellence',
          text: 'Équipement de pointe et stérilisation certifiée',
        },
      ],
      trustText: 'Rejoignez nos patients satisfaits',
    },
    ar: {
      badge: 'طبيبة أسنانك',
      name: 'د. فردوس موستعين',
      title: 'جراحة الأسنان',
      subtitle: 'متخصصة في رعاية الأسنان الحديثة',
      intro: 'مع خبرة كبيرة، أنا ملتزمة بتقديم رعاية أسنان عالية الجودة في بيئة حديثة ومريحة ومطمئنة. ابتسامتك ورفاهيتك هما أولويتي.',
      highlights: [
        {
          icon: GraduationCap,
          title: 'التدريب المستمر',
          text: 'متخرجة ومدربة على أحدث التقنيات',
        },
        {
          icon: Heart,
          title: 'رعاية بدون ألم',
          text: 'نهج لطيف وتقنيات حديثة',
        },
        {
          icon: Users,
          title: 'مرضى راضون',
          text: 'واثقون وسعداء',
        },
        {
          icon: Award,
          title: 'التميز',
          text: 'معدات متطورة وتعقيم معتمد',
        },
      ],
      trustText: 'انضم إلى مرضانا الراضين',
    },
    en: {
      badge: 'Your Dentist',
      name: 'Dr. Firdaous MOUSTAINE',
      title: 'Dental Surgeon',
      subtitle: 'Specialist in Modern Dental Care',
      intro: 'With great experience, I am committed to providing you with quality dental care in a modern, comfortable, and reassuring environment. Your smile and well-being are my priority.',
      highlights: [
        {
          icon: GraduationCap,
          title: 'Continuing Education',
          text: 'Graduated and trained in latest techniques',
        },
        {
          icon: Heart,
          title: 'Painless Care',
          text: 'Gentle approach and modern technologies',
        },
        {
          icon: Users,
          title: 'Satisfied Patients',
          text: 'Confident and delighted',
        },
        {
          icon: Award,
          title: 'Excellence',
          text: 'State-of-the-art equipment and certified sterilization',
        },
      ],
      trustText: 'Join our satisfied patients',
    },
  };

  const c = content[language];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Image Section - Left on Desktop, Top on Mobile */}
          <div className="order-1 lg:order-1" data-aos="fade-right">
            <div className="relative">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full shadow-lg font-semibold text-sm">
                  <Award className="h-4 w-4" />
                  <span>{c.badge}</span>
                </div>
              </div>

              {/* Image Container with Modern Frame */}
              <div className="relative mt-8 lg:mt-0">
                {/* Decorative Border */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl" />
                
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={doctorImageMd}
                    srcSet={`${doctorImageSm} 400w, ${doctorImageMd} 600w, ${doctorImageLg} 800w`}
                    sizes="(max-width: 640px) 400px, (max-width: 1024px) 600px, 800px"
                    alt={c.name}
                    className="w-full h-auto object-cover aspect-[3/4] md:aspect-[4/5]"
                    width="600"
                    height="800"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-1">{c.name}</h3>
                    <p className="text-sm md:text-base">{c.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Right on Desktop, Bottom on Mobile */}
          <div className="order-2 lg:order-2" data-aos="fade-left">
            <div className="space-y-6">
              {/* Title */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {c.subtitle}
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>

              {/* Introduction */}
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                {c.intro}
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {c.highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm mb-1">{highlight.title}</h4>
                        <p className="text-xs text-foreground/70 leading-relaxed">{highlight.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust Indicator */}
              <div className="flex items-center gap-2 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-white flex items-center justify-center"
                    >
                      <Heart className="h-5 w-5 text-primary fill-primary" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  {c.trustText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
