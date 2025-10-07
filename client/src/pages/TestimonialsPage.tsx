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
      rating: '/ 5 sur Google',
      reviews: 'Plus de 250 avis patients vérifiés',
      button: 'Voir tous les avis sur Google',
    },
    ar: {
      title: 'آراء مرضانا',
      subtitle: 'اكتشف ما يقوله مرضانا عن تجربتهم',
      rating: '/ ٥ على جوجل',
      reviews: 'أكثر من ٢٥٠ تقييم مريض موثق',
      button: 'عرض جميع التقييمات على جوجل',
    },
    en: {
      title: 'Patient Reviews',
      subtitle: 'Discover what our patients say about their experience',
      rating: '/ 5 on Google',
      reviews: 'Over 250 verified patient reviews',
      button: 'View all reviews on Google',
    },
  };

  const testimonials = {
    fr: [
      {
        name: 'Fatima Zahra',
        rating: 5,
        text: 'Excellent service! Dr. Moustaine est très professionnelle et attentionnée. Le blanchiment dentaire a dépassé mes attentes. Je recommande vivement ce cabinet à Casablanca.',
        service: 'Blanchiment dentaire',
      },
      {
        name: 'Ahmed El Mansouri',
        rating: 5,
        text: 'Une équipe formidable et un cabinet moderne. Mon implant dentaire a été un succès total. Aucune douleur et un résultat parfait. Merci Dr. Moustaine!',
        service: 'Implantologie',
      },
      {
        name: 'Sarah Johnson',
        rating: 5,
        text: 'Excellente expérience! Personnel professionnel et équipement moderne. Le traitement orthodontique pour ma fille était excellent. Je recommande vivement cette clinique dentaire à Casablanca.',
        service: 'Orthodontie',
      },
      {
        name: 'Karim Benali',
        rating: 5,
        text: 'Très satisfait des soins reçus. Le traitement de ma carie dentaire a été rapide et sans douleur. Le cabinet est propre et l\'équipe est accueillante.',
        service: 'Soins généraux',
      },
      {
        name: 'Laila Alaoui',
        rating: 5,
        text: 'Ma fille avait peur du dentiste, mais Dr. Moustaine a été si douce et patiente. Maintenant elle demande quand on retourne! Excellente pédodontiste.',
        service: 'Pédodontie',
      },
      {
        name: 'Mohammed Tahiri',
        rating: 5,
        text: 'J\'ai fait poser une couronne dentaire et le résultat est impeccable. On ne voit pas la différence avec mes vraies dents. Bravo!',
        service: 'Couronne dentaire',
      },
      {
        name: 'Amina Bensaid',
        rating: 5,
        text: 'Le traitement de mes gencives a complètement résolu mon problème. Dr. Moustaine explique tout clairement et met en confiance.',
        service: 'Parodontologie',
      },
      {
        name: 'Youssef Idrissi',
        rating: 5,
        text: 'Ma prothèse dentaire est parfaitement ajustée et confortable. Je peux manger et sourire en toute confiance. Merci beaucoup!',
        service: 'Prothèse dentaire',
      },
      {
        name: 'Nadia Hassan',
        rating: 5,
        text: 'Le traitement Invisalign était parfait! Dr. Moustaine est très compétente et les résultats ont dépassé mes attentes. Un beau sourire maintenant!',
        service: 'Orthodontie',
      },
    ],
    ar: [
      {
        name: 'فاطمة الزهراء',
        rating: 5,
        text: 'خدمة ممتازة! الدكتورة مستين محترفة جداً ومهتمة. تبييض الأسنان فاق توقعاتي. أوصي بشدة بهذه العيادة في الدار البيضاء.',
        service: 'تبييض الأسنان',
      },
      {
        name: 'أحمد المنصوري',
        rating: 5,
        text: 'فريق رائع وعيادة حديثة. كانت زراعة أسناني ناجحة تماماً. لا ألم ونتيجة مثالية. شكراً دكتورة مستين!',
        service: 'زراعة الأسنان',
      },
      {
        name: 'سارة جونسون',
        rating: 5,
        text: 'تجربة رائعة! طاقم محترف ومعدات حديثة. كان علاج تقويم الأسنان لابنتي ممتازاً. أوصي بشدة بهذه العيادة السنية في الدار البيضاء.',
        service: 'تقويم الأسنان',
      },
      {
        name: 'كريم بنعلي',
        rating: 5,
        text: 'راضٍ جداً عن الرعاية المقدمة. كان علاج التسوس سريعاً وبدون ألم. العيادة نظيفة والفريق مرحب.',
        service: 'العناية العامة',
      },
      {
        name: 'ليلى العلوي',
        rating: 5,
        text: 'كانت ابنتي خائفة من طبيب الأسنان، لكن الدكتورة مستين كانت لطيفة وصبورة جداً. الآن تسأل متى نعود! طبيبة أطفال أسنان ممتازة.',
        service: 'طب أسنان الأطفال',
      },
      {
        name: 'محمد الطاهري',
        rating: 5,
        text: 'وضعت تاج أسنان والنتيجة لا تشوبها شائبة. لا يمكن رؤية الفرق مع أسناني الحقيقية. برافو!',
        service: 'تاج الأسنان',
      },
      {
        name: 'أمينة بنسعيد',
        rating: 5,
        text: 'علاج اللثة حل مشكلتي تماماً. الدكتورة مستين تشرح كل شيء بوضوح وتبعث على الثقة.',
        service: 'أمراض اللثة',
      },
      {
        name: 'يوسف الإدريسي',
        rating: 5,
        text: 'طقم أسناني مضبوط تماماً ومريح. أستطيع الأكل والابتسام بثقة. شكراً جزيلاً!',
        service: 'طقم الأسنان',
      },
      {
        name: 'نادية حسن',
        rating: 5,
        text: 'كان علاج Invisalign مثالياً! الدكتورة مستين خبيرة جداً والنتائج فاقت توقعاتي. ابتسامة جميلة الآن!',
        service: 'تقويم الأسنان',
      },
    ],
    en: [
      {
        name: 'Fatima Zahra',
        rating: 5,
        text: 'Excellent service! Dr. Moustaine is very professional and caring. The teeth whitening exceeded my expectations. I highly recommend this clinic in Casablanca.',
        service: 'Teeth Whitening',
      },
      {
        name: 'Ahmed El Mansouri',
        rating: 5,
        text: 'A wonderful team and a modern clinic. My dental implant was a complete success. No pain and a perfect result. Thank you Dr. Moustaine!',
        service: 'Dental Implants',
      },
      {
        name: 'Sarah Johnson',
        rating: 5,
        text: 'Great experience! Professional staff and modern equipment. The orthodontic treatment for my daughter was excellent. Highly recommend this dental clinic in Casablanca.',
        service: 'Orthodontics',
      },
      {
        name: 'Karim Benali',
        rating: 5,
        text: 'Very satisfied with the care received. The cavity treatment was quick and painless. The clinic is clean and the team is welcoming.',
        service: 'General Care',
      },
      {
        name: 'Laila Alaoui',
        rating: 5,
        text: 'My daughter was afraid of the dentist, but Dr. Moustaine was so gentle and patient. Now she asks when we\'re going back! Excellent pediatric dentist.',
        service: 'Pediatric Dentistry',
      },
      {
        name: 'Mohammed Tahiri',
        rating: 5,
        text: 'I had a dental crown placed and the result is impeccable. You can\'t see the difference from my real teeth. Bravo!',
        service: 'Dental Crown',
      },
      {
        name: 'Amina Bensaid',
        rating: 5,
        text: 'The gum treatment completely solved my problem. Dr. Moustaine explains everything clearly and inspires confidence.',
        service: 'Periodontics',
      },
      {
        name: 'Youssef Idrissi',
        rating: 5,
        text: 'My denture is perfectly fitted and comfortable. I can eat and smile with confidence. Thank you very much!',
        service: 'Dentures',
      },
      {
        name: 'Nadia Hassan',
        rating: 5,
        text: 'Invisalign treatment was perfect! Dr. Moustaine is very knowledgeable and the results exceeded my expectations. Beautiful smile now!',
        service: 'Orthodontics',
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
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold" dir="ltr">4.8</span>
            <span className="text-muted-foreground">{c.rating}</span>
          </div>
          <p className="mt-4 text-muted-foreground">{c.reviews}</p>
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
