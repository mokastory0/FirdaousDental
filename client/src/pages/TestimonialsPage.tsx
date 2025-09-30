import TestimonialCard from '@/components/TestimonialCard';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TestimonialsPage() {
  // todo: remove mock functionality
  const testimonials = [
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
      text: 'Great experience! Professional staff and modern equipment. The orthodontic treatment for my daughter was excellent. Highly recommend this dental clinic in Casablanca.',
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
      text: 'Invisalign treatment was perfect! Dr. Moustaine is very knowledgeable and the results exceeded my expectations. Beautiful smile now!',
      service: 'Orthodontie',
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Avis de nos Patients</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Découvrez ce que nos patients disent de leur expérience
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-lg border">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold">4.8</span>
            <span className="text-muted-foreground">/ 5 sur Google</span>
          </div>
          <p className="mt-4 text-muted-foreground">Plus de 250 avis patients vérifiés</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
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
            Voir tous les avis sur Google
          </Button>
        </div>
      </div>
    </div>
  );
}
