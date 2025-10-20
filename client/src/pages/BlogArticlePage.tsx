import { Link, useRoute } from 'wouter';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Calendar, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { useSEO } from '@/hooks/useSEO';
import { blogArticles } from '@/data/blogArticles';

export default function BlogArticlePage() {
  const { language } = useLanguage();
  const { localizePath } = useLocalizedPath();
  const [, params] = useRoute('/:lang/blog/:id');
  const articleId = params?.id;

  const article = articleId && blogArticles[articleId] ? blogArticles[articleId][language] : null;

  useSEO({
    title: {
      fr: article ? `${article.title} | Blog Dentaire Casablanca` : 'Article | Blog Dentaire',
      ar: article ? `${article.title} | مدونة الأسنان` : 'مقال | مدونة الأسنان',
      en: article ? `${article.title} | Dental Blog Casablanca` : 'Article | Dental Blog'
    },
    description: {
      fr: article ? article.excerpt : 'Article du blog dentaire',
      ar: article ? article.excerpt : 'مقال من مدونة الأسنان',
      en: article ? article.excerpt : 'Dental blog article'
    },
    keywords: {
      fr: article ? `${article.category}, blog dentaire, conseils dentaires, casablanca` : 'blog dentaire',
      ar: article ? `${article.category}, مدونة أسنان` : 'مدونة أسنان',
      en: article ? `${article.category}, dental blog, dental tips, casablanca` : 'dental blog'
    },
    schema: article ? {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.excerpt,
      "datePublished": article.date,
      "author": {
        "@type": "Person",
        "name": "Dr. Firdaous MOUSTAINE"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Cabinet Dentaire Dr. Firdaous MOUSTAINE"
      }
    } : undefined
  });

  if (!article) {
    return (
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">
            {language === 'ar' ? 'المقال غير موجود' : language === 'fr' ? 'Article non trouvé' : 'Article not found'}
          </h1>
          <Link href={localizePath('blog')}>
            <Button>
              {language === 'ar' ? 'العودة للمدونة' : language === 'fr' ? 'Retour au blog' : 'Back to blog'}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href={localizePath('blog')}>
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
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        <div className="mt-12 pt-8 border-t">
          <div className="bg-primary/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'احجز استشارتك' : language === 'fr' ? 'Prenez rendez-vous' : 'Book Your Consultation'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'ar' 
                ? 'هل لديك أسئلة حول صحة أسنانك؟ احجز موعدًا للاستشارة مع الدكتورة فردوس موستعين.'
                : language === 'fr'
                ? 'Vous avez des questions sur votre santé dentaire ? Prenez rendez-vous pour une consultation avec Dr. Firdaous MOUSTAINE.'
                : 'Have questions about your dental health? Book an appointment for a consultation with Dr. Firdaous MOUSTAINE.'}
            </p>
            <Link href={localizePath('contact')}>
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
