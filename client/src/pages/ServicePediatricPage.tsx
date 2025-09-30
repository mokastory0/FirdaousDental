import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, Baby, Heart, Shield, Smile } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from '@/components/FAQItem';
import pediatricImage from '@assets/generated_images/Pediatric_dentistry_happy_child_aed6da30.png';

export default function ServicePediatricPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link href="/services">
          <Button variant="ghost" className="mb-6 gap-2" data-testid="link-back-services">
            <ChevronLeft className="h-4 w-4" />
            Retour aux services
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Baby className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Pédodontie - Dentiste pour Enfants</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Soins dentaires spécialisés pour les enfants dans un environnement rassurant
          </p>
        </div>

        <div className="rounded-lg overflow-hidden mb-12">
          <img
            src={pediatricImage}
            alt="Pédodontie - Soins dentaires pour enfants à Casablanca"
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">Dentisterie Pédiatrique à Casablanca</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La pédodontie est la spécialité dentaire dédiée aux soins des enfants, de la naissance à
              l'adolescence. Notre cabinet à Casablanca offre un environnement accueillant et rassurant
              pour que chaque visite soit une expérience positive pour votre enfant.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dr. Firdaous MOUSTAINE adopte une approche douce et patiente, adaptée à chaque enfant. Nous
              prenons le temps d'expliquer chaque étape avec des mots simples et rassurants pour créer
              une relation de confiance durable avec votre enfant.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Nos Services Pédiatriques</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Smile className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Première visite et prévention</div>
                      <p className="text-sm text-muted-foreground">
                        Examen complet, nettoyage doux, application de fluor et conseils d'hygiène
                        adaptés à l'âge de l'enfant.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Traitement des caries (تسوس الأسنان)</div>
                      <p className="text-sm text-muted-foreground">
                        Soins des caries dentaires avec des techniques douces et sans douleur. Nous
                        utilisons des méthodes adaptées pour minimiser l'anxiété.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Scellements dentaires</div>
                      <p className="text-sm text-muted-foreground">
                        Protection préventive des molaires pour éviter les caries. Procédure rapide et
                        indolore pour protéger les dents de votre enfant.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Baby className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Urgences pédiatriques</div>
                      <p className="text-sm text-muted-foreground">
                        Prise en charge rapide des urgences : mal de dent, traumatisme dentaire, dent
                        cassée. Nous sommes là pour soulager votre enfant.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Conseils pour les parents</h2>
            <div className="space-y-4 bg-card p-6 rounded-lg">
              <div>
                <h3 className="font-semibold mb-2">Quand commencer les visites ?</h3>
                <p className="text-muted-foreground">
                  La première visite dentaire est recommandée vers l'âge de 1 an, ou dès l'apparition des
                  premières dents. Cela permet de détecter précocement tout problème et d'habituer
                  l'enfant à l'environnement du cabinet.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Préparer votre enfant</h3>
                <p className="text-muted-foreground">
                  Parlez positivement de la visite chez le dentiste. Évitez les mots comme "douleur" ou
                  "piqûre". Lisez des livres sur le dentiste et jouez au dentiste à la maison pour
                  familiariser votre enfant.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Hygiène dentaire quotidienne</h3>
                <p className="text-muted-foreground">
                  Brossez les dents de votre enfant 2 fois par jour dès l'apparition de la première dent.
                  Utilisez une brosse à dents douce et une petite quantité de dentifrice fluoré adapté à
                  son âge.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              <FAQItem
                value="faq-1"
                question="À quel âge doit-on emmener son enfant chez le dentiste ?"
                answer="Il est recommandé d'emmener votre enfant pour sa première visite dentaire vers l'âge de 1 an ou dès l'apparition de sa première dent. Ces visites précoces permettent de prévenir les problèmes et de créer une routine positive."
              />
              <FAQItem
                value="faq-2"
                question="Comment gérer l'anxiété de mon enfant ?"
                answer="Notre équipe est formée pour rassurer les enfants anxieux. Nous utilisons des techniques de communication adaptées, prenons notre temps et créons un environnement accueillant. N'hésitez pas à nous informer des craintes de votre enfant avant la visite."
              />
              <FAQItem
                value="faq-3"
                question="Les caries sur les dents de lait doivent-elles être traitées ?"
                answer="Oui, absolument! Les caries sur les dents de lait peuvent causer de la douleur, des infections et affecter le développement des dents permanentes. Il est important de les traiter rapidement."
              />
              <FAQItem
                value="faq-4"
                question="À quelle fréquence mon enfant doit-il consulter ?"
                answer="Nous recommandons une visite tous les 6 mois pour un contrôle et un nettoyage préventif. Ces visites régulières permettent de détecter et prévenir les problèmes dentaires."
              />
            </Accordion>
          </section>

          <section className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Prenez soin du sourire de votre enfant</h2>
              <p className="text-lg mb-8 opacity-90">
                Réservez la première visite dentaire de votre enfant dès aujourd'hui
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg" data-testid="button-book-pediatric">
                  Prendre Rendez-vous
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
