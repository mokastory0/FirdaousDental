import TestimonialCard from '@/components/TestimonialCard';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TestimonialsPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: 'Avis de nos Patients',
      subtitle: 'Découvrez ce que nos patients disent de leur expérience',
      rating: '5★ avis sur Google',
      button: 'Voir tous les avis sur Google',
    },
    ar: {
      title: 'آراء مرضانا',
      subtitle: 'اكتشف ما يقوله مرضانا عن تجربتهم',
      rating: '٥★ تقييمات على جوجل',
      button: 'عرض جميع التقييمات على جوجل',
    },
    en: {
      title: 'Patient Reviews',
      subtitle: 'Discover what our patients say about their experience',
      rating: '5★ reviews on Google',
      button: 'View all reviews on Google',
    },
  };

  const testimonials = {
    fr: [
      {
        name: 'Mohamed AMAR',
        rating: 5,
        text: 'Détartrage sans douleur. Première fois dans ma vie ou je reçois un détartrage sans douleur. J\'ai évité de faire le détartrage pendant 8 ans car c\'était douloureux avec les autres dentistes. Dr Firdaouise a appliqué le détartrage et soins sans douleur et dans le comfort. Recommende vivement. J\'ai refait un autre traitement pour une carie et même l\'injection de l\'anesthésie locale était sans douleur. Une première également pour moi.',
        service: 'Détartrage',
      },
      {
        name: 'Ihab Eddine',
        rating: 5,
        text: 'Je tiens à remercier et recommander vivement Dr. Ferdaous. Elle est très professionnelle, attentionnée et met immédiatement à l\'aise. Ses soins sont de grande qualité et réalisés avec beaucoup de douceur et de sérieux. C\'est une dentiste passionnée qui prend vraiment le temps pour ses patients. Je recommande Dr. Ferdaous sans hésitation à toute personne recherchant des soins dentaires de qualité.',
        service: 'Soins généraux',
      },
      {
        name: 'Elarbi Jadiri',
        rating: 5,
        text: 'Très belle surprise !!!! Un cabinet dentaire que je recommande vivement. Un plan de traitement efficace et une doctoresse qui assure l\'excellence en asepsie et professionnalisme. Docteur Firdaous est exceptionnellement humaine et surtout NON MATÉRIALISTE.',
        service: 'Consultation',
      },
      {
        name: 'Jihane ZI',
        rating: 5,
        text: 'Un accueil chaleureux, Dr. Firdaous est douce, compétente et à l\'écoute du patient. Je recommande à 1000%',
        service: 'Consultation',
      },
      {
        name: 'Sharon Taylor',
        rating: 5,
        text: 'Excellente dentiste. Parle anglais. Soins sans douleur pour ma carie dentaire.',
        service: 'Traitement de carie',
      },
    ],
    ar: [
      {
        name: 'محمد عمر',
        rating: 5,
        text: 'إزالة الجير بدون ألم. المرة الأولى في حياتي التي أتلقى فيها إزالة الجير بدون ألم. تجنبت إزالة الجير لمدة 8 سنوات لأنها كانت مؤلمة مع أطباء الأسنان الآخرين. طبقت الدكتورة فردوس إزالة الجير والعناية بدون ألم وبراحة تامة. أوصي بشدة. أعدت علاجاً آخر لتسوس وحتى حقنة التخدير الموضعي كانت بدون ألم. المرة الأولى بالنسبة لي أيضاً.',
        service: 'إزالة الجير',
      },
      {
        name: 'إيهاب الدين',
        rating: 5,
        text: 'أود أن أشكر وأوصي بشدة بالدكتورة فردوس. إنها محترفة جداً، مهتمة، وتجعلك تشعر بالراحة على الفور. رعايتها ذات جودة عالية وتُجرى بلطف شديد وجدية. إنها طبيبة أسنان شغوفة تأخذ الوقت حقاً لمرضاها. أوصي بالدكتورة فردوس دون تردد لأي شخص يبحث عن رعاية أسنان عالية الجودة.',
        service: 'العناية العامة',
      },
      {
        name: 'العربي جديري',
        rating: 5,
        text: 'مفاجأة رائعة جداً!!!! عيادة أسنان أوصي بها بشدة. خطة علاج فعالة وطبيبة تضمن التميز في التعقيم والاحترافية. الدكتورة فردوس إنسانة استثنائية وقبل كل شيء غير مادية.',
        service: 'استشارة',
      },
      {
        name: 'جيهان زي',
        rating: 5,
        text: 'استقبال حار، الدكتورة فردوس لطيفة وكفؤة ومنصتة للمريض. أوصي بنسبة 1000%',
        service: 'استشارة',
      },
      {
        name: 'شارون تايلور',
        rating: 5,
        text: 'طبيبة أسنان ممتازة. تتحدث الإنجليزية. رعاية بدون ألم لتسوس أسناني.',
        service: 'علاج التسوس',
      },
    ],
    en: [
      {
        name: 'Mohamed AMAR',
        rating: 5,
        text: 'Painless scaling. First time in my life I received painless scaling. I avoided scaling for 8 years because it was painful with other dentists. Dr. Firdaous applied scaling and care without pain and in comfort. Highly recommend. I had another treatment for a cavity and even the local anesthesia injection was painless. A first for me as well.',
        service: 'Dental Scaling',
      },
      {
        name: 'Ihab Eddine',
        rating: 5,
        text: 'I would like to thank and highly recommend Dr. Ferdaous. She is very professional, attentive, and immediately puts you at ease. Her care is of high quality and carried out with great gentleness and seriousness. She is a passionate dentist who truly takes the time for her patients. I recommend Dr. Ferdaous without hesitation to anyone looking for quality dental care.',
        service: 'General Care',
      },
      {
        name: 'Elarbi Jadiri',
        rating: 5,
        text: 'Very nice surprise!!!! A dental practice that I highly recommend. An effective treatment plan and a doctor who ensures excellence in asepsis and professionalism. Doctor Firdaous is exceptionally human and above all NON-MATERIALISTIC.',
        service: 'Consultation',
      },
      {
        name: 'Jihane ZI',
        rating: 5,
        text: 'A warm welcome, Dr. Firdaous is gentle, competent and attentive to the patient. I recommend 1000%',
        service: 'Consultation',
      },
      {
        name: 'Sharon Taylor',
        rating: 5,
        text: 'Great Dentist. Can speak English. Painless care for my tooth decay.',
        service: 'Cavity Treatment',
      },
    ],
  };

  const c = content[language];
  const t = testimonials[language];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{c.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">
            {c.subtitle}
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-lg border">
            <span className="text-muted-foreground">{c.rating}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open('https://www.google.com/maps', '_blank')}
            data-testid="button-google-reviews"
          >
            {c.button}
          </Button>
        </div>
      </div>
    </div>
  );
}
