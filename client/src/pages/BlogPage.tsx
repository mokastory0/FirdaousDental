import BlogCard from '@/components/BlogCard';
import teethWhiteningImage from '@assets/generated_images/Teeth_whitening_bright_smile_ca666386.png';
import implantImage from '@assets/generated_images/Dental_implants_and_restorations_a69aa831.png';
import pediatricImage from '@assets/generated_images/Pediatric_dentistry_happy_child_aed6da30.png';

export default function BlogPage() {
  // todo: remove mock functionality
  const blogPosts = [
    {
      id: 'prevenir-caries',
      title: 'Prévenir les caries dentaires : conseils et traitements',
      excerpt: 'Découvrez les meilleures pratiques pour prévenir les caries et maintenir une bonne santé bucco-dentaire. Des conseils d\'experts pour toute la famille, incluant l\'importance du brossage et les visites régulières.',
      category: 'Prévention',
      date: '15 Jan 2025',
      readTime: '5 min',
    },
    {
      id: 'blanchiment-professionnel',
      title: 'Blanchiment dentaire : méthodes professionnelles vs kits à domicile',
      excerpt: 'Comparaison approfondie entre le blanchiment dentaire professionnel au cabinet et les kits de blanchiment à domicile. Résultats, sécurité et efficacité analysés.',
      category: 'Esthétique',
      date: '10 Jan 2025',
      readTime: '7 min',
      image: teethWhiteningImage,
    },
    {
      id: 'implants-vs-bridges',
      title: 'Implants dentaires ou bridges : comment choisir ?',
      excerpt: 'Guide complet pour vous aider à choisir entre un implant dentaire et un bridge. Avantages, inconvénients, coûts et durabilité de chaque option expliqués par Dr. Moustaine.',
      category: 'Implantologie',
      date: '5 Jan 2025',
      readTime: '8 min',
      image: implantImage,
    },
    {
      id: 'premiere-visite-enfant',
      title: 'Première visite chez le dentiste : préparer votre enfant',
      excerpt: 'Conseils pratiques pour une première visite dentaire réussie. Comment rassurer votre enfant et créer une expérience positive qui durera toute sa vie.',
      category: 'Pédodontie',
      date: '28 Déc 2024',
      readTime: '6 min',
      image: pediatricImage,
    },
    {
      id: 'hygiene-bucco-dentaire',
      title: 'Les 5 règles d\'or de l\'hygiène bucco-dentaire',
      excerpt: 'Les bases essentielles pour maintenir des dents et des gencives en bonne santé. Techniques de brossage, utilisation du fil dentaire et autres habitudes importantes.',
      category: 'Prévention',
      date: '20 Déc 2024',
      readTime: '4 min',
    },
    {
      id: 'orthodontie-adulte',
      title: 'Orthodontie pour adultes : il n\'est jamais trop tard',
      excerpt: 'L\'orthodontie n\'est pas réservée aux enfants! Découvrez les options modernes comme Invisalign pour corriger l\'alignement dentaire à l\'âge adulte.',
      category: 'Orthodontie',
      date: '15 Déc 2024',
      readTime: '6 min',
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Dentaire</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conseils, actualités et informations sur la santé bucco-dentaire par Dr. Firdaous MOUSTAINE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
