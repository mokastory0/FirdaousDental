import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'fr' as const, label: 'FR', flag: '🇫🇷' },
    { code: 'ar' as const, label: 'AR', flag: '🇲🇦' },
    { code: 'en' as const, label: 'EN', flag: '🇬🇧' },
  ];

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className="h-8 px-2 text-xs"
          data-testid={`button-language-${lang.code}`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.label}
        </Button>
      ))}
    </div>
  );
}
