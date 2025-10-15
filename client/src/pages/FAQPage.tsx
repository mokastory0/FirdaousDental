import { Accordion } from '@/components/ui/accordion';
import FAQItem from '@/components/FAQItem';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FAQPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: 'Foire aux Questions',
      subtitle: 'Trouvez rapidement les réponses à vos questions sur nos services dentaires',
      tab1: 'Rendez-vous',
      tab2: 'Traitements',
      tab3: 'Soins Post-Traitement',
      tab4: 'Paiement',
    },
    ar: {
      title: 'الأسئلة الشائعة',
      subtitle: 'ابحث بسرعة عن إجابات لأسئلتك حول خدماتنا السنية',
      tab1: 'المواعيد',
      tab2: 'العلاجات',
      tab3: 'العناية بعد العلاج',
      tab4: 'الدفع',
    },
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Quickly find answers to your questions about our dental services',
      tab1: 'Appointments',
      tab2: 'Treatments',
      tab3: 'Post-Treatment Care',
      tab4: 'Payment',
    },
  };

  const faqCategories = {
    fr: {
      appointments: [
        {
          question: 'Comment prendre rendez-vous ?',
          answer: 'Vous pouvez prendre rendez-vous par téléphone au +212 520-960611, par WhatsApp, ou via notre formulaire de contact en ligne. Nous vous confirmerons votre rendez-vous dans les plus brefs délais.',
        },
        {
          question: 'Quels sont vos horaires d\'ouverture ?',
          answer: 'Nous sommes ouverts du lundi au vendredi de 9h00 à 17h00, et le samedi de 9h00 à 13h00. Nous sommes fermés le dimanche.',
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
    },
    ar: {
      appointments: [
        {
          question: 'كيف يمكنني حجز موعد؟',
          answer: 'يمكنك حجز موعد عبر الهاتف على +٢١٢ ٥٢٠-٩٦٠٦١١، عبر واتساب، أو من خلال نموذج الاتصال عبر الإنترنت. سنؤكد موعدك في أقرب وقت ممكن.',
        },
        {
          question: 'ما هي ساعات العمل؟',
          answer: 'نحن مفتوحون من الاثنين إلى الجمعة من ٩:٠٠ صباحاً إلى ٥:٠٠ مساءً، والسبت من ٩:٠٠ صباحاً إلى ١:٠٠ ظهراً. نحن مغلقون يوم الأحد.',
        },
        {
          question: 'هل تقبلون حالات الطوارئ السنية؟',
          answer: 'نعم، نقبل حالات الطوارئ السنية. في حالة الطوارئ (ألم شديد في الأسنان، سن مكسور، إلخ)، اتصل بنا على الفور وسنبذل قصارى جهدنا لاستقبالك في نفس اليوم.',
        },
      ],
      treatments: [
        {
          question: 'كيف أخفف ألم الأسنان في انتظار الموعد؟',
          answer: 'في انتظار موعدك، يمكنك تناول مسكن للألم مثل الباراسيتامول، وضع كمادة باردة على الخد، وتجنب الأطعمة الساخنة أو الباردة جداً. لا تضع الأسبرين مباشرة على اللثة أبداً.',
        },
        {
          question: 'ما هو الحشو السني ومتى يستخدم؟',
          answer: 'الحشو السني هو حشوة مؤقتة تستخدم في حالات الطوارئ أو بين جلستي علاج. يحمي السن في انتظار الترميم النهائي (حشو أو تاج).',
        },
        {
          question: 'هل جراحة الأسنان مؤلمة؟',
          answer: 'بفضل المخدرات الحديثة، جراحة الأسنان ليست مؤلمة بشكل عام. قد تشعر بضغط طفيف، ولكن ليس بألم. بعد التدخل، نصف مسكنات الألم إذا لزم الأمر.',
        },
        {
          question: 'كم يستغرق علاج تبييض الأسنان؟',
          answer: 'تبييض الأسنان المهني في العيادة يستغرق حوالي ساعة. النتائج فورية ويمكن أن تدوم من ٦ أشهر إلى سنتين حسب عاداتك الغذائية ونظافة فمك.',
        },
      ],
      aftercare: [
        {
          question: 'كيف أمنع تسوس الأسنان؟',
          answer: 'للوقاية من التسوس: نظف أسنانك مرتين يومياً لمدة دقيقتين، استخدم خيط الأسنان يومياً، قلل من الأطعمة السكرية، اشرب الماء بعد الوجبات، واستشر طبيب أسنانك كل ٦ أشهر لإزالة الجير.',
        },
        {
          question: 'ماذا أفعل بعد وضع غرسة سنية؟',
          answer: 'بعد وضع الغرسة: تجنب المضغ على جانب الغرسة لمدة ٤٨ ساعة، تناول أطعمة لينة، لا تدخن، خذ الأدوية الموصوفة، وحافظ على نظافة فموية جيدة. الشفاء الكامل يستغرق ٣-٦ أشهر.',
        },
        {
          question: 'كيف أعتني بجهاز تقويم الأسنان؟',
          answer: 'نظف أسنانك وجهازك بعد كل وجبة بفرشاة خاصة للتقويم. تجنب الأطعمة الصلبة أو اللزجة. استخدم خيط الأسنان بمساعد خاص. ارتدِ الأشرطة المطاطية كما هو موصوف.',
        },
      ],
      payment: [
        {
          question: 'ما هي وسائل الدفع التي تقبلونها؟',
          answer: 'نقبل الدفع نقداً، بالبطاقة المصرفية، وبالتحويل. للعلاجات الكبيرة، يمكننا وضع خطة دفع مخصصة.',
        },
        {
          question: 'هل تعملون مع شركات التأمين؟',
          answer: 'نعم، نعمل مع معظم شركات التأمين الصحي. سنقدم لك جميع المستندات اللازمة للسداد. اتصل بنا لمزيد من المعلومات حول تأمينك المحدد.',
        },
        {
          question: 'هل تقدمون تقديرات مجانية؟',
          answer: 'نعم، بعد الفحص الأولي، نقدم لك تقديراً مفصلاً ومجانياً لجميع العلاجات المقترحة. نأخذ الوقت لشرح كل خطوة والتكاليف المرتبطة بها.',
        },
      ],
    },
    en: {
      appointments: [
        {
          question: 'How do I make an appointment?',
          answer: 'You can make an appointment by phone at +212 520-960611, via WhatsApp, or through our online contact form. We will confirm your appointment as soon as possible.',
        },
        {
          question: 'What are your opening hours?',
          answer: 'We are open Monday to Friday from 9:00 AM to 5:00 PM, and Saturday from 9:00 AM to 1:00 PM. We are closed on Sundays.',
        },
        {
          question: 'Do you accept dental emergencies?',
          answer: 'Yes, we accept dental emergencies. In case of emergency (severe toothache, broken tooth, etc.), contact us immediately and we will do our best to see you the same day.',
        },
      ],
      treatments: [
        {
          question: 'How can I relieve a toothache while waiting for my appointment?',
          answer: 'While waiting for your appointment, you can take a painkiller like paracetamol, apply a cold compress to your cheek, and avoid hot or very cold foods. Never put aspirin directly on the gum.',
        },
        {
          question: 'What is a dental filling and when is it used?',
          answer: 'A dental filling is a temporary restoration used in emergencies or between treatment sessions. It protects the tooth while awaiting the final restoration (filling or crown).',
        },
        {
          question: 'Is dental surgery painful?',
          answer: 'Thanks to modern anesthetics, dental surgery is generally not painful. You might feel slight pressure, but no pain. After the procedure, we prescribe painkillers if necessary.',
        },
        {
          question: 'How long does teeth whitening treatment take?',
          answer: 'Professional in-office teeth whitening takes about one hour. Results are immediate and can last from 6 months to 2 years depending on your dietary habits and oral hygiene.',
        },
      ],
      aftercare: [
        {
          question: 'How can I prevent dental cavities?',
          answer: 'To prevent cavities: brush your teeth twice daily for 2 minutes, use dental floss daily, limit sugary foods, drink water after meals, and visit your dentist every 6 months for scaling.',
        },
        {
          question: 'What should I do after dental implant placement?',
          answer: 'After implant placement: avoid chewing on the implant side for 48h, eat soft foods, don\'t smoke, take prescribed medications, and maintain good oral hygiene. Complete healing takes 3-6 months.',
        },
        {
          question: 'How do I care for my orthodontic appliance?',
          answer: 'Brush your teeth and appliance after every meal with a special orthodontic brush. Avoid hard or sticky foods. Use dental floss with a special threader. Wear your elastics as prescribed.',
        },
      ],
      payment: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, credit card, and bank transfer payments. For major treatments, we can establish a personalized payment plan.',
        },
        {
          question: 'Do you work with insurance companies?',
          answer: 'Yes, we work with most health insurance companies. We will provide you with all necessary documents for reimbursement. Contact us for more information about your specific insurance.',
        },
        {
          question: 'Do you offer free estimates?',
          answer: 'Yes, after an initial examination, we provide you with a detailed and free estimate for all proposed treatments. We take the time to explain each step and associated costs.',
        },
      ],
    },
  };

  const c = content[language];
  const faqs = faqCategories[language];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{c.title}</h1>
          <p className="text-lg text-muted-foreground">
            {c.subtitle}
          </p>
        </div>

        <Tabs defaultValue="appointments" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="appointments">{c.tab1}</TabsTrigger>
            <TabsTrigger value="treatments">{c.tab2}</TabsTrigger>
            <TabsTrigger value="aftercare">{c.tab3}</TabsTrigger>
            <TabsTrigger value="payment">{c.tab4}</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments">
            <Accordion type="single" collapsible className="w-full">
              {faqs.appointments.map((faq, index) => (
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
              {faqs.treatments.map((faq, index) => (
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
              {faqs.aftercare.map((faq, index) => (
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
              {faqs.payment.map((faq, index) => (
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
