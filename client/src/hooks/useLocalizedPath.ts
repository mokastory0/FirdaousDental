import { useLanguage } from '@/contexts/LanguageContext';

// Route mapping: English keys → French URLs (for SEO)
const routeMap: Record<string, string> = {
  'services/whitening': 'services/blanchiment-casablanca',
  'services/whitening/pricing': 'services/blanchiment-casablanca/prix',
  'services/crowns': 'services/couronne-casablanca',
  'services/crowns/pricing': 'services/couronne-casablanca/prix',
  'services/implants': 'services/implants-casablanca',
  'services/dentures': 'services/prothese-casablanca',
  'services/orthodontics': 'services/orthodontie-casablanca',
  'services/gum': 'services/parodontologie-casablanca',
  'services/general': 'services/soins-generaux-casablanca',
  'services/pediatric': 'services/pedodontie-casablanca',
  'about': 'a-propos',
  'testimonials': 'avis',
};

export function useLocalizedPath() {
  const { language } = useLanguage();

  const localizePath = (path: string): string => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // Map to French URL if exists
    const mappedPath = routeMap[cleanPath] || cleanPath;
    
    // Add language prefix
    return `/${language}${mappedPath ? '/' + mappedPath : ''}`;
  };

  return { localizePath };
}
