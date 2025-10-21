import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface Review {
  name: string;
  rating: number;
  text: string;
  service: string;
  date?: string;
}

interface GoogleReviewsCarouselProps {
  autoPlay?: boolean;
  interval?: number;
}

export default function GoogleReviewsCarousel({ autoPlay = true, interval = 5000 }: GoogleReviewsCarouselProps) {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews: Record<string, Review[]> = {
    fr: [
      {
        name: 'Mohamed AMAR',
        rating: 5,
        text: 'Détartrage sans douleur. Première fois dans ma vie ou je reçois un détartrage sans douleur. J\'ai évité de faire le détartrage pendant 8 ans car c\'était douloureux avec les autres dentistes. Dr Firdaouise a appliqué le détartrage et soins sans douleur et dans le comfort. Recommende vivement.',
        service: 'Détartrage',
      },
      {
        name: 'Nouhaila Talbaoui',
        rating: 5,
        text: 'Le service était impeccable. L\'endroit est super et Dr Moustaine était très attentive et à l\'écoute de toutes mes préoccupations. J\'ai adoré les résultats et mes dents n\'ont jamais été aussi propres et blanches. J\'ai également fait traiter ma dent de sagesse là-bas et tout s\'est très bien passé.',
        service: 'Blanchiment et extraction',
      },
      {
        name: 'Ali Talbaoui',
        rating: 5,
        text: 'Excellente dentiste. Dr Firdaous est une dentiste très gentille et professionnelle. Elle m\'a aidé à me sentir moins anxieux lors des rendez-vous dentaires, donc maintenant je peux prendre soin de mes dents avec son aide.',
        service: 'Soins généraux',
      },
      {
        name: 'Nabil DANOUJ',
        rating: 5,
        text: 'La simplicité incarne l\'excellence et la modestie. Ce cabinet dentaire en est la preuve vivante. Ici, pas de prétention ni de discours superflu : Dr. Firdaous Moustaine est simplement une professionnelle remarquable.',
        service: 'Consultation',
      },
      {
        name: 'Abdou Raji',
        rating: 5,
        text: 'Je remercie vraiment Dr. Firdaous. J\'avais très mal et elle a accepté de me recevoir un samedi après-midi. Sans elle, j\'aurais passé le pire week-end de ma vie. Elle était très professionnelle et m\'a expliqué chaque détail.',
        service: 'Urgence dentaire',
      },
      {
        name: 'Ihab Eddine',
        rating: 5,
        text: 'Je tiens à remercier et recommander vivement Dr. Ferdaous. Elle est très professionnelle, attentionnée et met immédiatement à l\'aise. Ses soins sont de grande qualité et réalisés avec beaucoup de douceur et de sérieux.',
        service: 'Soins généraux',
      },
      {
        name: 'Adnane Allali',
        rating: 5,
        text: 'Je recommande vivement Dr. Firdaous Moustaine. Elle est très professionnelle, douce et à l\'écoute de ses patients. On se sent immédiatement en confiance. C\'est sans hésitation la meilleure dentiste que j\'ai jamais consultée.',
        service: 'Consultation',
      },
      {
        name: 'N Zakriti',
        rating: 5,
        text: 'Très à l\'écoute et efficace ! Soins indolores et doux. Malgré la difficulté du "chantier", je n\'ai absolument rien senti pendant et après le soin. Je suis repartie sans la douleur qui m\'avait conduite chez elle.',
        service: 'Traitement complexe',
      },
      {
        name: 'Elarbi Jadiri',
        rating: 5,
        text: 'Très belle surprise !!!! Un cabinet dentaire que je recommande vivement. Un plan de traitement efficace et une doctoresse qui assure l\'excellence en asepsie et professionnalisme. Docteur Firdaous est exceptionnellement humaine.',
        service: 'Consultation',
      },
      {
        name: 'Smaïl Darbane',
        rating: 5,
        text: 'Je le recommande vivement, un médecin compétent. Excellent détartrage et soins ! J\'avais peur de me faire arracher la dent de sagesse, mais le docteur était rassurant, et tout s\'est très bien passé !',
        service: 'Extraction dent de sagesse',
      },
      {
        name: 'simoH Haoury',
        rating: 5,
        text: 'Service impeccable : détartrage et blanchiment réalisés avec précision et douceur. Dr. Firdaous Mustaine inspire confiance dès la première visite.',
        service: 'Détartrage et blanchiment',
      },
      {
        name: 'Hassan Fandi',
        rating: 5,
        text: 'J\'ai eu un traitement dentaire réussi avec Dr. Moustaine, sans douleur, avec des résultats surprenants et durables. MERCI Docteur !',
        service: 'Traitement dentaire',
      },
      {
        name: 'youssef 01',
        rating: 5,
        text: 'Excellente dentiste, douce et très professionnelle. Je la recommande vivement !',
        service: 'Soins généraux',
      },
      {
        name: 'Ihssane Fathi',
        rating: 5,
        text: 'Je recommande vivement ! Traitement indolore et doux, je n\'ai rien senti ! Merci beaucoup !',
        service: 'Soins dentaires',
      },
      {
        name: 'KRIPPMACHA',
        rating: 5,
        text: 'Les soins sont indolores, franchement un très bon cabinet, merci.',
        service: 'Soins dentaires',
      },
      {
        name: 'Jihane ZI',
        rating: 5,
        text: 'Un accueil chaleureux, Dr. Firdaous est douce, compétente et à l\'écoute du patient. Je recommande à 1000%',
        service: 'Consultation',
      },
      {
        name: 'Merieme Mokhlis',
        rating: 5,
        text: 'Dentiste impeccable. Parmi les meilleurs de Casablanca, je la recommande.',
        service: 'Soins dentaires',
      },
      {
        name: 'Fadwa Chokri',
        rating: 5,
        text: 'C\'est parfait.',
        service: 'Soins dentaires',
      },
      {
        name: 'Nisrine Boularhrass',
        rating: 5,
        text: 'Très professionnelle 👍🏻👍🏻',
        service: 'Soins dentaires',
      },
      {
        name: 'Fatima Zahra',
        rating: 5,
        text: 'Prend son temps, à l\'écoute ! Et ne fait pas mal, surtout lors du détartrage.',
        service: 'Détartrage',
      },
      {
        name: 'zaineb bouissi',
        rating: 5,
        text: 'Très compétente, je recommande vivement.',
        service: 'Soins dentaires',
      },
    ],
    ar: [
      {
        name: 'محمد عمر',
        rating: 5,
        text: 'إزالة الجير بدون ألم. المرة الأولى في حياتي التي أتلقى فيها إزالة الجير بدون ألم. تجنبت إزالة الجير لمدة 8 سنوات لأنها كانت مؤلمة مع أطباء الأسنان الآخرين. طبقت الدكتورة فردوس إزالة الجير والعناية بدون ألم وبراحة تامة.',
        service: 'إزالة الجير',
      },
      {
        name: 'نهيلة الطلباوي',
        rating: 5,
        text: 'الخدمة كانت لا تشوبها شائبة. المكان رائع والدكتورة مصطفى كانت منتبهة جداً ومستمعة لجميع مخاوفي. أحببت النتائج وأسناني لم تكن نظيفة وبيضاء من قبل. عالجت أيضاً ضرس العقل هناك وسار كل شيء على ما يرام.',
        service: 'تبييض وخلع',
      },
      {
        name: 'علي الطلباوي',
        rating: 5,
        text: 'طبيبة أسنان رائعة. الدكتورة فردوس طبيبة أسنان لطيفة ومحترفة جداً. ساعدتني على الشعور بقلق أقل بشأن مواعيد الأسنان، لذا يمكنني الآن العناية بأسناني بمساعدتها.',
        service: 'العناية العامة',
      },
      {
        name: 'نبيل دانوج',
        rating: 5,
        text: 'البساطة تجسد التميز والتواضع. هذه العيادة دليل حي على ذلك. هنا، لا ادعاء ولا خطاب زائد: الدكتورة فردوس مصطفى محترفة رائعة ببساطة.',
        service: 'استشارة',
      },
      {
        name: 'عبده راجي',
        rating: 5,
        text: 'أشكر حقاً الدكتورة فردوس. كنت أعاني من ألم شديد ووافقت على استقبالي بعد ظهر يوم السبت. بدونها، كنت سأقضي أسوأ عطلة نهاية أسبوع في حياتي. كانت محترفة جداً وشرحت لي كل التفاصيل.',
        service: 'طوارئ الأسنان',
      },
      {
        name: 'إيهاب الدين',
        rating: 5,
        text: 'أود أن أشكر وأوصي بشدة بالدكتورة فردوس. إنها محترفة جداً، مهتمة، وتجعلك تشعر بالراحة على الفور. رعايتها ذات جودة عالية وتُجرى بلطف شديد وجدية.',
        service: 'العناية العامة',
      },
      {
        name: 'عدنان العلالي',
        rating: 5,
        text: 'أوصي بشدة بالدكتورة فردوس مصطفى. إنها محترفة جداً، لطيفة ومنتبهة لمرضاها. تشعر بالثقة على الفور. إنها بلا تردد أفضل طبيبة أسنان استشرتها على الإطلاق.',
        service: 'استشارة',
      },
      {
        name: 'ن. زكريتي',
        rating: 5,
        text: 'منتبهة جداً وفعالة! رعاية غير مؤلمة ولطيفة. على الرغم من صعوبة "الموقع"، لم أشعر بأي شيء على الإطلاق أثناء وبعد العلاج. غادرت دون الألم الذي قادني إليها.',
        service: 'علاج معقد',
      },
      {
        name: 'العربي جديري',
        rating: 5,
        text: 'مفاجأة رائعة جداً!!!! عيادة أسنان أوصي بها بشدة. خطة علاج فعالة وطبيبة تضمن التميز في التعقيم والاحترافية. الدكتورة فردوس إنسانة استثنائية.',
        service: 'استشارة',
      },
      {
        name: 'سماعيل دربان',
        rating: 5,
        text: 'أوصي به بشدة، طبيب كفؤ. إزالة جير وعناية ممتازة! كنت خائفاً من خلع ضرس العقل، لكن الطبيبة كانت مطمئنة، وسار كل شيء على ما يرام!',
        service: 'خلع ضرس العقل',
      },
      {
        name: 'سيمو حوري',
        rating: 5,
        text: 'خدمة لا تشوبها شائبة: إزالة الجير والتبييض تمت بدقة ولطف. الدكتورة فردوس مصطفى تلهم الثقة من الزيارة الأولى.',
        service: 'إزالة الجير والتبييض',
      },
      {
        name: 'حسن فندي',
        rating: 5,
        text: 'حصلت على علاج أسنان ناجح مع الدكتورة مصطفى، بدون ألم، مع نتائج مفاجئة ودائمة. شكراً دكتورة!',
        service: 'علاج الأسنان',
      },
      {
        name: 'يوسف 01',
        rating: 5,
        text: 'طبيبة أسنان ممتازة، لطيفة ومحترفة جداً. أوصي بها بشدة!',
        service: 'العناية العامة',
      },
      {
        name: 'إحسان فتحي',
        rating: 5,
        text: 'أوصي بشدة! علاج غير مؤلم ولطيف، لم أشعر بأي شيء! شكراً جزيلاً!',
        service: 'رعاية الأسنان',
      },
      {
        name: 'كريبماشا',
        rating: 5,
        text: 'العلاجات غير مؤلمة، بصراحة عيادة جيدة جداً، شكراً.',
        service: 'رعاية الأسنان',
      },
      {
        name: 'جيهان زي',
        rating: 5,
        text: 'استقبال حار، الدكتورة فردوس لطيفة وكفؤة ومنصتة للمريض. أوصي بنسبة 1000%',
        service: 'استشارة',
      },
      {
        name: 'مريم مخلص',
        rating: 5,
        text: 'طبيبة أسنان لا تشوبها شائبة. من بين الأفضل في الدار البيضاء، أوصي بها.',
        service: 'رعاية الأسنان',
      },
      {
        name: 'فدوى شكري',
        rating: 5,
        text: 'إنه مثالي.',
        service: 'رعاية الأسنان',
      },
      {
        name: 'نسرين بولرهراس',
        rating: 5,
        text: 'محترفة جداً 👍🏻👍🏻',
        service: 'رعاية الأسنان',
      },
      {
        name: 'فاطمة الزهراء',
        rating: 5,
        text: 'تأخذ وقتها، مستمعة! ولا تؤلم، خاصة عند إزالة الجير.',
        service: 'إزالة الجير',
      },
      {
        name: 'زينب بويسي',
        rating: 5,
        text: 'كفؤة جداً، أوصي بشدة.',
        service: 'رعاية الأسنان',
      },
    ],
    en: [
      {
        name: 'Mohamed AMAR',
        rating: 5,
        text: 'Painless scaling. First time in my life I received painless scaling. I avoided scaling for 8 years because it was painful with other dentists. Dr. Firdaous applied scaling and care without pain and in comfort. Highly recommend.',
        service: 'Dental Scaling',
      },
      {
        name: 'Nouhaila Talbaoui',
        rating: 5,
        text: 'The service was impeccable. The place is great and Dr Moustaine was very attentive and listened to all my concerns. I loved the results and my teeth never looked so clean and white before. I also got my wisdom tooth treated there and everything went very well.',
        service: 'Whitening and extraction',
      },
      {
        name: 'Ali Talbaoui',
        rating: 5,
        text: 'Great dentist. Dr Firdaous is a very kind and professional dentist. She helped me feel less anxious about dental appointments so now I can take care of my teeth with her help.',
        service: 'General Care',
      },
      {
        name: 'Nabil DANOUJ',
        rating: 5,
        text: 'Simplicity embodies excellence and modesty. This dental practice is living proof of this. Here, there\'s no pretension or superfluous rhetoric: Dr. Firdaous Moustaine is simply a remarkable professional.',
        service: 'Consultation',
      },
      {
        name: 'Abdou Raji',
        rating: 5,
        text: 'I really thank Dr. Firdaous. I was in a lot of pain, and she agreed to see me on a Saturday afternoon. Without her, I would have had the worst weekend ever. She was very professional and explained every detail to me.',
        service: 'Dental Emergency',
      },
      {
        name: 'Ihab Eddine',
        rating: 5,
        text: 'I would like to thank and highly recommend Dr. Ferdaous. She is very professional, attentive, and immediately puts you at ease. Her care is of high quality and carried out with great gentleness and seriousness.',
        service: 'General Care',
      },
      {
        name: 'Adnane Allali',
        rating: 5,
        text: 'I highly recommend Dr. Firdaous Moustaine. She is very professional, gentle, and attentive to her patients. You immediately feel confident. She is, without hesitation, the best dentist I have ever consulted.',
        service: 'Consultation',
      },
      {
        name: 'N Zakriti',
        rating: 5,
        text: 'Very attentive and efficient! Painless and gentle care. Despite the difficulty of the "site", I felt absolutely nothing during and after the treatment. I left without the pain that led me to her.',
        service: 'Complex treatment',
      },
      {
        name: 'Elarbi Jadiri',
        rating: 5,
        text: 'Very nice surprise!!!! A dental practice that I highly recommend. An effective treatment plan and a doctor who ensures excellence in asepsis and professionalism. Doctor Firdaous is exceptionally human.',
        service: 'Consultation',
      },
      {
        name: 'Smaïl Darbane',
        rating: 5,
        text: 'I highly recommend him, a competent doctor. Excellent scaling and care! I was afraid of having my wisdom tooth removed, but the doctor was reassuring, and everything went very well!',
        service: 'Wisdom tooth extraction',
      },
      {
        name: 'simoH Haoury',
        rating: 5,
        text: 'Impeccable service: scaling and whitening performed with precision and gentleness. Dr. Firdaous Mustaine inspires confidence from the first visit.',
        service: 'Scaling and whitening',
      },
      {
        name: 'Hassan Fandi',
        rating: 5,
        text: 'I had a successful dental treatment with Dr. Moustaine, painless, with surprising and lasting results. THANK YOU, Doctor!',
        service: 'Dental treatment',
      },
      {
        name: 'youssef 01',
        rating: 5,
        text: 'Excellent dentist, gentle and very professional. I highly recommend her!',
        service: 'General Care',
      },
      {
        name: 'Ihssane Fathi',
        rating: 5,
        text: 'I highly recommend! Painless and gentle treatment, I didn\'t feel a thing! Thank you very much!',
        service: 'Dental care',
      },
      {
        name: 'KRIPPMACHA',
        rating: 5,
        text: 'The treatments are painless, frankly a very good practice, thank you.',
        service: 'Dental care',
      },
      {
        name: 'Jihane ZI',
        rating: 5,
        text: 'A warm welcome, Dr. Firdaous is gentle, competent and attentive to the patient. I recommend 1000%',
        service: 'Consultation',
      },
      {
        name: 'Merieme Mokhlis',
        rating: 5,
        text: 'Impeccable dentist. Among the best in Casablanca, I recommend it.',
        service: 'Dental care',
      },
      {
        name: 'Fadwa Chokri',
        rating: 5,
        text: 'It\'s perfect.',
        service: 'Dental care',
      },
      {
        name: 'Nisrine Boularhrass',
        rating: 5,
        text: 'Very professional 👍🏻👍🏻',
        service: 'Dental care',
      },
      {
        name: 'Fatima Zahra',
        rating: 5,
        text: 'Takes her time, listens! And doesn\'t hurt, especially when descaling.',
        service: 'Dental Scaling',
      },
      {
        name: 'zaineb bouissi',
        rating: 5,
        text: 'Very competent, I highly recommend.',
        service: 'Dental care',
      },
    ],
  };

  const currentReviews = reviews[language] || reviews.fr;

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentReviews.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, currentReviews.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + currentReviews.length) % currentReviews.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % currentReviews.length);
  };

  const currentReview = currentReviews[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Review Card */}
      <Card className="relative overflow-hidden border-2 shadow-xl">
        {/* Google Colors Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500" />
        
        <CardContent className="p-8 md:p-12">
          {/* Quote Icon */}
          <div className="absolute top-6 right-6 opacity-10">
            <Quote className="h-20 w-20 text-primary" />
          </div>

          {/* Rating Stars */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < currentReview.rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-lg md:text-xl leading-relaxed mb-6 relative z-10">
            "{currentReview.text}"
          </p>

          {/* Reviewer Info */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="font-bold text-lg">{currentReview.name}</p>
              <p className="text-sm text-muted-foreground">{currentReview.service}</p>
            </div>
            
            {/* Google Logo Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white border-2 rounded-full shadow-sm">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-sm font-semibold text-gray-900">Google</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="rounded-full h-12 w-12 shadow-lg hover:shadow-xl transition-all hover:scale-110"
          data-testid="button-review-previous"
          aria-label="Previous review"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex items-center gap-2">
          {currentReviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="rounded-full h-12 w-12 shadow-lg hover:shadow-xl transition-all hover:scale-110"
          data-testid="button-review-next"
          aria-label="Next review"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Review Counter */}
      <p className="text-center text-sm text-muted-foreground mt-4">
        {currentIndex + 1} / {currentReviews.length}
      </p>
    </div>
  );
}
