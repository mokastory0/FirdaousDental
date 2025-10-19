import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'fr' as const, label: 'Français', flag: '🇫🇷', short: 'FR' },
    { code: 'ar' as const, label: 'العربية', flag: '🇲🇦', short: 'AR' },
    { code: 'en' as const, label: 'English', flag: '🇺🇸', short: 'EN' },
  ];

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <>
      {/* Mobile: Compact Dropdown */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              data-testid="button-language-mobile"
            >
              <span className="text-base">{currentLang?.flag}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className="flex items-center gap-2 cursor-pointer"
                data-testid={`dropdown-language-${lang.code}`}
              >
                <span className="text-base">{lang.flag}</span>
                <span className="flex-1">{lang.label}</span>
                {language === lang.code && (
                  <span className="text-primary">✓</span>
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop: Button Group */}
      <div className="hidden md:flex items-center gap-0.5">
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
            {lang.short}
          </Button>
        ))}
      </div>
    </>
  );
}
