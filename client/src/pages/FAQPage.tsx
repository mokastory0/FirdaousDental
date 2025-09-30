import { Accordion } from '@/components/ui/accordion';
import FAQItem from '@/components/FAQItem';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function FAQPage() {
  // todo: remove mock functionality
  const faqCategories = {
    appointments: [
      {
        question: 'Comment prendre rendez-vous ?',
        answer: 'Vous pouvez prendre rendez-vous par téléphone au +212 5XX-XXXXXX, par WhatsApp, ou via notre formulaire de contact en ligne. Nous vous confirmerons votre rendez-vous dans les plus brefs délais.',
      },
      {
        question: 'Quels sont vos horaires d\'ouverture ?',
        answer: 'Nous sommes ouverts du lundi au vendredi de 9h00 à 18h00, et le samedi de 9h00 à 13h00. Nous sommes fermés le dimanche.',
      },
      {
        question: 'Acceptez-vous les urgences dentaires ?',
        answer: 'Oui, nous acceptons les urgences dentaires. En cas d\'urgence (mal de dent intense, dent cassée, etc.), contactez-nous immédiatement et nous ferons notre possible pour vous recevoir le jour même.',
      },
    ],
    treatments: [
      {
        question: 'Comment soulager un mal de dent en attendant le rendez-vous ?',
        answer: 'En attendant votre rendez-vous, vous pouvez prendre un analgésique comme du paracétamol, appliquer une compresse froide sur la joue, et éviter les aliments chauds ou très froids. Ne mettez jamais d\'aspirine directement sur la gencive.',
      },
      {
        question: 'Qu\'est-ce qu\'un pansement dentaire et quand est-il utilisé ?',
        answer: 'Un pansement dentaire est une obturation temporaire utilisée en cas d\'urgence ou entre deux séances de traitement. Il protège la dent en attendant la restauration définitive (plombage ou couronne).',
      },
      {
        question: 'La chirurgie dentaire est-elle douloureuse ?',
        answer: 'Grâce aux anesthésiques modernes, la chirurgie dentaire n\'est généralement pas douloureuse. Vous pourriez ressentir une légère pression, mais pas de douleur. Après l\'intervention, nous prescrivons des antalgiques si nécessaire.',
      },
      {
        question: 'Combien de temps dure un traitement de blanchiment dentaire ?',
        answer: 'Un blanchiment dentaire professionnel au cabinet dure environ une heure. Les résultats sont immédiats et peuvent durer de 6 mois à 2 ans selon vos habitudes alimentaires et votre hygiène bucco-dentaire.',
      },
    ],
    aftercare: [
      {
        question: 'Comment prévenir les caries dentaires ?',
        answer: 'Pour prévenir les caries: brossez-vous les dents 2 fois par jour pendant 2 minutes, utilisez du fil dentaire quotidiennement, limitez les aliments sucrés, buvez de l\'eau après les repas, et consultez votre dentiste tous les 6 mois pour un détartrage.',
      },
      {
        question: 'Que faire après la pose d\'un implant dentaire ?',
        answer: 'Après la pose d\'un implant: évitez de mâcher du côté de l\'implant pendant 48h, mangez des aliments mous, ne fumez pas, prenez les médicaments prescrits, et maintenez une bonne hygiène bucco-dentaire. La cicatrisation complète prend 3-6 mois.',
      },
      {
        question: 'Comment entretenir mon appareil orthodontique ?',
        answer: 'Brossez vos dents et votre appareil après chaque repas avec une brosse spéciale orthodontique. Évitez les aliments durs ou collants. Utilisez du fil dentaire avec un enfileur spécial. Portez vos élastiques comme prescrit.',
      },
    ],
    payment: [
      {
        question: 'Quels moyens de paiement acceptez-vous ?',
        answer: 'Nous acceptons les paiements en espèces, par carte bancaire, et par virement. Pour les traitements importants, nous pouvons établir un plan de paiement personnalisé.',
      },
      {
        question: 'Travaillez-vous avec les mutuelles ?',
        answer: 'Oui, nous travaillons avec la plupart des mutuelles et organismes d\'assurance. Nous vous fournirons tous les documents nécessaires pour le remboursement. Contactez-nous pour plus d\'informations sur votre mutuelle spécifique.',
      },
      {
        question: 'Proposez-vous des devis gratuits ?',
        answer: 'Oui, après un examen initial, nous vous fournissons un devis détaillé et gratuit pour tous les traitements proposés. Nous prenons le temps de vous expliquer chaque étape et les coûts associés.',
      },
    ],
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Foire aux Questions</h1>
          <p className="text-lg text-muted-foreground">
            Trouvez rapidement les réponses à vos questions sur nos services dentaires
          </p>
        </div>

        <Tabs defaultValue="appointments" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="appointments">Rendez-vous</TabsTrigger>
            <TabsTrigger value="treatments">Traitements</TabsTrigger>
            <TabsTrigger value="aftercare">Soins Post-Traitement</TabsTrigger>
            <TabsTrigger value="payment">Paiement</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments">
            <Accordion type="single" collapsible className="w-full">
              {faqCategories.appointments.map((faq, index) => (
                <FAQItem
                  key={index}
                  value={`appointments-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="treatments">
            <Accordion type="single" collapsible className="w-full">
              {faqCategories.treatments.map((faq, index) => (
                <FAQItem
                  key={index}
                  value={`treatments-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="aftercare">
            <Accordion type="single" collapsible className="w-full">
              {faqCategories.aftercare.map((faq, index) => (
                <FAQItem
                  key={index}
                  value={`aftercare-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="payment">
            <Accordion type="single" collapsible className="w-full">
              {faqCategories.payment.map((faq, index) => (
                <FAQItem
                  key={index}
                  value={`payment-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
