import BlogCard from '../BlogCard';

export default function BlogCardExample() {
  return (
    <div className="p-4 max-w-sm">
      <BlogCard
        id="prevenir-caries"
        title="Prévenir les caries dentaires : conseils et traitements"
        excerpt="Découvrez les meilleures pratiques pour prévenir les caries et maintenir une bonne santé bucco-dentaire. Des conseils d'experts pour toute la famille."
        category="Prévention"
        date="15 Jan 2025"
        readTime="5 min"
      />
    </div>
  );
}
