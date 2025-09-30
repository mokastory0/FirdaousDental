import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Calendar, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import doctorImage from '@assets/generated_images/Female_dentist_professional_portrait_0f9ebea2.png';
import equipmentImage from '@assets/generated_images/Modern_dental_equipment_technology_344d1782.png';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-lg text-muted-foreground">{t('about.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="rounded-lg overflow-hidden">
            <img
              src={doctorImage}
              alt="Dr. Firdaous MOUSTAINE"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Une Expertise au Service de Votre Sourire</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dr. Firdaous MOUSTAINE est une dentiste expérimentée et passionnée, exerçant à Casablanca.
                  Avec plus de 15 ans d'expérience, elle s'est spécialisée dans les soins dentaires complets,
                  de la dentisterie esthétique aux traitements complexes.
                </p>
                <p>
                  Diplômée de la Faculté de Médecine Dentaire de Casablanca, Dr. MOUSTAINE continue de se
                  former aux dernières techniques et technologies pour offrir à ses patients les meilleurs
                  soins possibles.
                </p>
                <p>
                  Sa philosophie ? Allier expertise technique et approche humaine pour créer une expérience
                  de soins dentaires positive et sans stress pour tous ses patients.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-muted-foreground">Années d'expérience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm text-muted-foreground">Patients traités</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">4.8★</div>
                  <div className="text-sm text-muted-foreground">Note Google</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Équipement Moderne</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src={equipmentImage}
                alt="Équipement dentaire moderne"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Notre cabinet à Casablanca est équipé des dernières technologies pour vous garantir
                des soins dentaires de qualité supérieure dans un environnement confortable et sécurisé.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Radiographie numérique</div>
                    <div className="text-sm text-muted-foreground">Diagnostic précis avec 90% moins de radiation</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Caméra intra-orale</div>
                    <div className="text-sm text-muted-foreground">Visualisation en temps réel de vos dents</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Système de stérilisation avancé</div>
                    <div className="text-sm text-muted-foreground">Hygiène et sécurité maximales</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Fauteuils ergonomiques</div>
                    <div className="text-sm text-muted-foreground">Confort optimal pendant vos soins</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Notre Engagement</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nous nous engageons à fournir des soins dentaires d'excellence dans une atmosphère chaleureuse
            et accueillante. Chaque patient est unique, et nous adaptons nos traitements à vos besoins
            spécifiques pour vous garantir les meilleurs résultats possibles.
          </p>
        </div>
      </div>
    </div>
  );
}
