import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, Sparkles, Clock, Shield, Star } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from '@/components/FAQItem';
import teethWhiteningImage from '@assets/generated_images/Teeth_whitening_bright_smile_ca666386.png';

export default function ServiceWhiteningPage() {
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
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Blanchiment Dentaire Casablanca</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Un sourire éclatant avec nos techniques professionnelles de blanchiment dentaire
          </p>
        </div>

        <div className="rounded-lg overflow-hidden mb-12">
          <img
            src={teethWhiteningImage}
            alt="Blanchiment dentaire à Casablanca"
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">Qu'est-ce que le blanchiment dentaire ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le blanchiment dentaire est un traitement esthétique professionnel qui permet d'éclaircir la
              couleur naturelle de vos dents de plusieurs teintes. Notre cabinet à Casablanca utilise des
              techniques sûres et efficaces pour vous offrir un sourire plus blanc et plus lumineux.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Le traitement agit sur les taches et la décoloration causées par le café, le thé, le tabac,
              le vin rouge et le vieillissement naturel des dents. Contrairement aux produits en vente libre,
              notre blanchiment professionnel offre des résultats visibles et durables.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Avantages du blanchiment professionnel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Résultats rapides</div>
                      <p className="text-sm text-muted-foreground">
                        Blanchiment visible en une seule séance d'une heure
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
                      <div className="font-semibold mb-1">Sécurité garantie</div>
                      <p className="text-sm text-muted-foreground">
                        Produits professionnels et supervision par Dr. Moustaine
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Résultats durables</div>
                      <p className="text-sm text-muted-foreground">
                        Effet longue durée de 6 mois à 2 ans avec entretien
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Résultat naturel</div>
                      <p className="text-sm text-muted-foreground">
                        Blancheur naturelle et harmonieuse, pas artifielle
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Déroulement du traitement</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Consultation initiale</h3>
                      <p className="text-muted-foreground">
                        Examen de vos dents et détermination de la teinte actuelle. Discussion de vos
                        attentes et du résultat souhaité.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Nettoyage dentaire</h3>
                      <p className="text-muted-foreground">
                        Détartrage professionnel pour préparer les dents et optimiser l'efficacité du
                        blanchiment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Application du gel blanchissant</h3>
                      <p className="text-muted-foreground">
                        Application d'un gel de blanchiment professionnel. Protection des gencives et
                        activation par lampe LED si nécessaire.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Résultat et conseils</h3>
                      <p className="text-muted-foreground">
                        Évaluation du résultat et conseils pour maintenir la blancheur de vos dents le
                        plus longtemps possible.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              <FAQItem
                value="faq-1"
                question="Le blanchiment dentaire est-il douloureux ?"
                answer="Le blanchiment dentaire professionnel est généralement indolore. Certains patients peuvent ressentir une sensibilité temporaire pendant 24-48h après le traitement, qui disparaît rapidement. Nous prenons toutes les précautions pour minimiser l'inconfort."
              />
              <FAQItem
                value="faq-2"
                question="Combien de temps dure le résultat du blanchiment ?"
                answer="Les résultats durent généralement de 6 mois à 2 ans, selon vos habitudes alimentaires et votre hygiène bucco-dentaire. Éviter le tabac, le café et le thé, et maintenir une bonne hygiène prolonge l'effet."
              />
              <FAQItem
                value="faq-3"
                question="Le blanchiment dentaire abîme-t-il les dents ?"
                answer="Non, le blanchiment professionnel effectué par un dentiste n'abîme pas l'émail des dents. Nous utilisons des produits testés et approuvés qui agissent en toute sécurité sur la structure dentaire."
              />
              <FAQItem
                value="faq-4"
                question="Qui peut bénéficier d'un blanchiment dentaire ?"
                answer="La plupart des adultes avec des dents et gencives saines peuvent bénéficier d'un blanchiment. Une consultation préalable permet de vérifier votre éligibilité. Le blanchiment n'est pas recommandé pour les femmes enceintes ou allaitantes."
              />
            </Accordion>
          </section>

          <section className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Prêt pour un sourire éclatant ?</h2>
              <p className="text-lg mb-8 opacity-90">
                Prenez rendez-vous pour votre blanchiment dentaire à Casablanca
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg" data-testid="button-book-whitening">
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
