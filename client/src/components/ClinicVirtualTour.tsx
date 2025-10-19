import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ChevronLeft, ChevronRight, Shield, Sparkles, Sofa, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import clinic images - Reception
import reception4 from '@assets/cabinet/cabinet-dentaire-reception4.webp';
import reception5 from '@assets/cabinet/cabinet-dentaire-reception5.webp';
import reception6 from '@assets/cabinet/cabinet-dentaire-reception6.webp';

// Import clinic images - Treatment Rooms
import salleSoin1 from '@assets/cabinet/cabinet-dentaire-salle de soin.webp';
import salleSoin2 from '@assets/cabinet/cabinet-dentaire-salle de soin2.webp';
import salleSoin3 from '@assets/cabinet/cabinet-dentaire-salle de soin3.webp';
import salleSoin4 from '@assets/cabinet/cabinet-dentaire-salle de soin4.webp';
import salleSoin6 from '@assets/cabinet/cabinet-dentaire-salle de soin6.webp';

// Import clinic images - Waiting Room
import salleAttente from '@assets/cabinet/cabinet-dentaire-salle-atte,te.webp';

interface GalleryImage {
  src: string;
  category: string;
}

export default function ClinicVirtualTour() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const content = {
    fr: {
      title: 'Découvrez Notre Cabinet Moderne',
      subtitle: 'Une visite virtuelle de nos installations de pointe',
      categories: {
        all: 'Tout Voir',
        reception: 'Réception',
        treatment: 'Salle de Soins',
        waiting: 'Salle d\'Attente',
      },
      features: [
        {
          icon: Sparkles,
          text: 'Équipement moderne 2024',
        },
        {
          icon: Shield,
          text: 'Stérilisation de pointe',
        },
        {
          icon: Sofa,
          text: 'Environnement confortable',
        },
        {
          icon: Microscope,
          text: 'Technologies avancées',
        },
      ],
      viewAll: 'Voir toutes les photos',
    },
    ar: {
      title: 'اكتشف عيادتنا الحديثة',
      subtitle: 'جولة افتراضية في منشآتنا المتطورة',
      categories: {
        all: 'عرض الكل',
        reception: 'الاستقبال',
        treatment: 'غرفة العلاج',
        waiting: 'غرفة الانتظار',
      },
      features: [
        {
          icon: Sparkles,
          text: 'معدات حديثة 2024',
        },
        {
          icon: Shield,
          text: 'تعقيم متطور',
        },
        {
          icon: Sofa,
          text: 'بيئة مريحة',
        },
        {
          icon: Microscope,
          text: 'تقنيات متقدمة',
        },
      ],
      viewAll: 'عرض جميع الصور',
    },
    en: {
      title: 'Discover Our Modern Clinic',
      subtitle: 'A virtual tour of our state-of-the-art facilities',
      categories: {
        all: 'View All',
        reception: 'Reception',
        treatment: 'Treatment Room',
        waiting: 'Waiting Room',
      },
      features: [
        {
          icon: Sparkles,
          text: 'Modern equipment 2024',
        },
        {
          icon: Shield,
          text: 'Advanced sterilization',
        },
        {
          icon: Sofa,
          text: 'Comfortable environment',
        },
        {
          icon: Microscope,
          text: 'Advanced technologies',
        },
      ],
      viewAll: 'View all photos',
    },
  };

  const c = content[language];

  // Categorize images based on actual filenames
  const images: GalleryImage[] = [
    // Treatment room images (5) - Displayed first
    { src: salleSoin1, category: 'treatment' },
    { src: salleSoin2, category: 'treatment' },
    { src: salleSoin3, category: 'treatment' },
    { src: salleSoin4, category: 'treatment' },
    { src: salleSoin6, category: 'treatment' },
    
    // Reception images (3)
    { src: reception4, category: 'reception' },
    { src: reception5, category: 'reception' },
    { src: reception6, category: 'reception' },
    
    // Waiting room image (1)
    { src: salleAttente, category: 'waiting' },
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {c.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {c.subtitle}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {Object.entries(c.categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-muted-foreground hover:bg-primary/10 hover:text-primary border border-gray-200 dark:border-gray-700'
              }`}
              data-testid={`category-${key}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => openLightbox(index)}
              data-testid={`gallery-image-${index}`}
            >
              <img
                src={image.src}
                alt={`Cabinet ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-semibold">{c.categories[image.category as keyof typeof c.categories]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {c.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-semibold">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <div className="max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={filteredImages[currentImageIndex].src}
              alt={`Cabinet ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-semibold">
            {currentImageIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
