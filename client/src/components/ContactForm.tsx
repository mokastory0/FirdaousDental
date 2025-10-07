import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const { toast } = useToast();
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    fr: {
      nameLabel: 'Nom complet',
      namePlaceholder: 'Votre nom',
      nameError: 'Le nom doit contenir au moins 2 caractères',
      emailLabel: 'Email',
      emailPlaceholder: 'votre@email.com',
      emailError: 'Email invalide',
      phoneLabel: 'Téléphone',
      phonePlaceholder: '+212 6XX-XXXXXX',
      phoneError: 'Numéro de téléphone invalide',
      dateLabel: 'Date souhaitée (optionnelle)',
      messageLabel: 'Message',
      messagePlaceholder: 'Décrivez brièvement la raison de votre rendez-vous...',
      messageError: 'Le message doit contenir au moins 10 caractères',
      submitButton: 'Envoyer',
      submittingButton: 'Envoi en cours...',
      successTitle: 'Message envoyé !',
      successDescription: 'Nous vous contacterons bientôt pour confirmer votre rendez-vous.',
    },
    ar: {
      nameLabel: 'الاسم الكامل',
      namePlaceholder: 'اسمك',
      nameError: 'يجب أن يحتوي الاسم على حرفين على الأقل',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'your@email.com',
      emailError: 'بريد إلكتروني غير صالح',
      phoneLabel: 'الهاتف',
      phonePlaceholder: '+212 6XX-XXXXXX',
      phoneError: 'رقم هاتف غير صالح',
      dateLabel: 'التاريخ المطلوب (اختياري)',
      messageLabel: 'الرسالة',
      messagePlaceholder: 'اشرح بإيجاز سبب موعدك...',
      messageError: 'يجب أن تحتوي الرسالة على 10 أحرف على الأقل',
      submitButton: 'إرسال',
      submittingButton: 'جاري الإرسال...',
      successTitle: 'تم إرسال الرسالة!',
      successDescription: 'سنتصل بك قريبًا لتأكيد موعدك.',
    },
    en: {
      nameLabel: 'Full name',
      namePlaceholder: 'Your name',
      nameError: 'Name must contain at least 2 characters',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      emailError: 'Invalid email',
      phoneLabel: 'Phone',
      phonePlaceholder: '+212 6XX-XXXXXX',
      phoneError: 'Invalid phone number',
      dateLabel: 'Preferred date (optional)',
      messageLabel: 'Message',
      messagePlaceholder: 'Briefly describe the reason for your appointment...',
      messageError: 'Message must contain at least 10 characters',
      submitButton: 'Send',
      submittingButton: 'Sending...',
      successTitle: 'Message sent!',
      successDescription: 'We will contact you soon to confirm your appointment.',
    },
  };

  const c = content[language];

  const formSchema = z.object({
    name: z.string().min(2, c.nameError),
    email: z.string().email(c.emailError),
    phone: z.string().min(10, c.phoneError),
    date: z.string().optional(),
    message: z.string().min(10, c.messageError),
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log('Form submitted:', data);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: c.successTitle,
      description: c.successDescription,
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{c.nameLabel}</FormLabel>
              <FormControl>
                <Input placeholder={c.namePlaceholder} {...field} data-testid="input-name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{c.emailLabel}</FormLabel>
                <FormControl>
                  <Input type="email" placeholder={c.emailPlaceholder} {...field} data-testid="input-email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{c.phoneLabel}</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder={c.phonePlaceholder} {...field} data-testid="input-phone" dir="ltr" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{c.dateLabel}</FormLabel>
              <FormControl>
                <Input type="date" {...field} data-testid="input-date" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{c.messageLabel}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={c.messagePlaceholder}
                  className="min-h-32 resize-none"
                  {...field}
                  data-testid="input-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full gap-2" data-testid="button-submit">
          {isSubmitting ? c.submittingButton : c.submitButton}
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}
