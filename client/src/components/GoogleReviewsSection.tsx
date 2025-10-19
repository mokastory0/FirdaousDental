import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import GoogleReviewsCarousel from './GoogleReviewsCarousel';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GoogleReviewsSection() {
  const { t, language } = useLanguage();

  const sectionTitles = {
    fr: {
      title: 'Avis Google',
      subtitle: 'Ce que disent nos patients',
      cta: 'Voir tous les avis sur Google',
      rating: 'Note moyenne',
      reviews: 'avis',
    },
    ar: {
      title: 'تقييمات جوجل',
      subtitle: 'ماذا يقول مرضانا',
      cta: 'عرض جميع التقييمات على جوجل',
      rating: 'التقييم المتوسط',
      reviews: 'تقييم',
    },
    en: {
      title: 'Google Reviews',
      subtitle: 'What our patients say',
      cta: 'View all reviews on Google',
      rating: 'Average rating',
      reviews: 'reviews',
    },
  };

  const content = sectionTitles[language] || sectionTitles.fr;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Google Badge */}
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-white rounded-full shadow-lg border-2">
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="font-bold text-lg text-gray-900">{content.title}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.subtitle}</h2>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-5xl font-bold">5.0</span>
                <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-sm text-muted-foreground">{content.rating}</p>
            </div>
            <div className="h-16 w-px bg-border" />
            <div className="text-center">
              <p className="text-5xl font-bold">50+</p>
              <p className="text-sm text-muted-foreground">{content.reviews}</p>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="mb-12">
          <GoogleReviewsCarousel autoPlay={true} interval={6000} />
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/Cabinet+dentaire+Dr+Firdaous+MOUSTAINE/@33.5717531,-7.6442775,17z/data=!3m1!4b1!4m6!3m5!1s0xda7d300473e84e9:0x85da4a7722a38b71!8m2!3d33.5717487!4d-7.6417026!16s%2Fg%2F11md0pmlyj?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-google-reviews"
          >
            <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all">
              <ExternalLink className="h-5 w-5" />
              {content.cta}
            </Button>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-2xl mx-auto">
          <Card className="text-center p-6 border-2 hover:border-primary/20 transition-colors">
            <CardContent className="p-0">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-green-600 fill-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">100%</h3>
              <p className="text-sm text-muted-foreground">
                {language === 'fr' ? 'Avis 5 étoiles' : language === 'ar' ? 'تقييمات 5 نجوم' : '5-star reviews'}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-2 hover:border-primary/20 transition-colors">
            <CardContent className="p-0">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#1976D2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">
                {language === 'fr' ? 'Vérifié' : language === 'ar' ? 'موثق' : 'Verified'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'fr' ? 'Avis vérifiés Google' : language === 'ar' ? 'تقييمات جوجل الموثقة' : 'Google verified reviews'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
