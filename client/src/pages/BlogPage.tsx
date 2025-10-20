import BlogCard from '@/components/BlogCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { blogArticles } from '@/data/blogArticles';
import teethWhiteningImage from '@assets/generated_images/Teeth_whitening_bright_smile_ca666386.png';
import implantImage from '@assets/generated_images/Dental_implants_and_restorations_a69aa831.png';
import pediatricImage from '@assets/generated_images/Pediatric_dentistry_happy_child_aed6da30.png';

export default function BlogPage() {
  const { language } = useLanguage();

  useSEO({
    title: {
      fr: 'Blog Dentaire - Conseils Santé Bucco-Dentaire | Casablanca',
      ar: 'مدونة الأسنان - نصائح صحة الفم | الدار البيضاء',
      en: 'Dental Blog - Oral Health Tips | Casablanca'
    },
    description: {
      fr: 'Blog dentaire du Cabinet Dr. Firdaous MOUSTAINE. Conseils, astuces et informations sur la santé bucco-dentaire, blanchiment, implants, orthodontie.',
      ar: 'مدونة أسنان عيادة د. فردوس موستعين. نصائح ومعلومات حول صحة الفم، تبييض، زرع، تقويم.',
      en: 'Dental blog from Cabinet Dr. Firdaous MOUSTAINE. Tips, advice and information on oral health, whitening, implants, orthodontics.'
    },
    keywords: {
      fr: 'blog dentaire, conseils dentaires, santé bucco-dentaire, hygiene dentaire, dentiste casablanca',
      ar: 'مدونة أسنان, نصائح أسنان, صحة الفم',
      en: 'dental blog, dental tips, oral health, dental hygiene, dentist casablanca'
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Cabinet Dentaire Dr. Firdaous MOUSTAINE Blog",
      "description": "Dental health tips and advice"
    }
  });

  const imageMap: Record<string, string> = {
    '@assets/generated_images/Teeth_whitening_bright_smile_ca666386.png': teethWhiteningImage,
    '@assets/generated_images/Dental_implants_and_restorations_a69aa831.png': implantImage,
    '@assets/generated_images/Pediatric_dentistry_happy_child_aed6da30.png': pediatricImage,
  };

  const posts = Object.entries(blogArticles).map(([id, article]) => {
    const currentLangArticle = article[language];
    return {
      id,
      title: currentLangArticle.title,
      excerpt: currentLangArticle.excerpt,
      category: currentLangArticle.category,
      date: currentLangArticle.date,
      readTime: currentLangArticle.readTime,
      image: currentLangArticle.image ? imageMap[currentLangArticle.image] : undefined,
    };
  });

  const content = {
    fr: {
      title: 'Blog Dentaire',
      subtitle: 'Conseils, actualités et informations sur la santé bucco-dentaire par Dr. Firdaous MOUSTAINE',
    },
    ar: {
      title: 'مدونة الأسنان',
      subtitle: 'نصائح وأخبار ومعلومات حول صحة الفم من الدكتورة فردوس موستعين',
    },
    en: {
      title: 'Dental Blog',
      subtitle: 'Tips, news and information on oral health by Dr. Firdaous MOUSTAINE',
    },
  };

  const c = content[language];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{c.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
