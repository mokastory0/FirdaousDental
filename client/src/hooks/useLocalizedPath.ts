import { useLanguage } from '@/contexts/LanguageContext';

export function useLocalizedPath() {
  const { language } = useLanguage();

  const localizePath = (path: string): string => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // Add language prefix
    return `/${language}${cleanPath ? '/' + cleanPath : ''}`;
  };

  return { localizePath };
}
