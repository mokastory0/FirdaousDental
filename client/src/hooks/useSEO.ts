import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOConfig {
  title: Record<string, string>;
  description: Record<string, string>;
  keywords?: Record<string, string>;
  ogImage?: string;
  schema?: any;
}

export function useSEO(config: SEOConfig) {
  const { language } = useLanguage();
  
  useEffect(() => {
    // Set page title
    document.title = config.title[language];
    
    // Set meta description
    setMetaTag('description', config.description[language]);
    
    // Set keywords if provided
    if (config.keywords) {
      setMetaTag('keywords', config.keywords[language]);
    }
    
    // Set Open Graph tags (always use non-www version)
    const canonicalUrl = window.location.href.replace('://www.', '://');
    setMetaTag('og:title', config.title[language]);
    setMetaTag('og:description', config.description[language]);
    setMetaTag('og:image', config.ogImage || 'https://couronnedentaire.ma/og-image.jpg');
    setMetaTag('og:url', canonicalUrl);
    setMetaTag('og:type', 'website');
    setMetaTag('og:locale', language === 'ar' ? 'ar_MA' : language === 'en' ? 'en_US' : 'fr_FR');
    
    // Set Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', config.title[language]);
    setMetaTag('twitter:description', config.description[language]);
    setMetaTag('twitter:image', config.ogImage || 'https://couronnedentaire.ma/og-default.jpg');
    
    // Set canonical URL
    setCanonical(window.location.href);
    
    // Set hreflang tags
    setHreflang();
    
    // Set structured data (Schema.org)
    if (config.schema) {
      setSchema(config.schema);
    }
    
    // Cleanup function
    return () => {
      // Remove hreflang tags on unmount
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
      // Remove schema on unmount
      const schemaScript = document.querySelector('script[type="application/ld+json"][data-seo-hook]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [language, config]);
}

function setMetaTag(name: string, content: string) {
  const isOG = name.startsWith('og:') || name.startsWith('twitter:');
  const attribute = isOG ? 'property' : 'name';
  const selector = `meta[${attribute}="${name}"]`;
  
  let meta = document.querySelector(selector) as HTMLMetaElement;
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  
  meta.setAttribute('content', content);
}

function setCanonical(url: string) {
  // Always use non-www version as canonical
  const canonicalUrl = url.replace('://www.', '://');
  
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  
  link.setAttribute('href', canonicalUrl);
}

function setHreflang() {
  // Remove existing hreflang tags
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
  
  const languages = ['fr', 'ar', 'en'];
  const currentPath = window.location.pathname.replace(/^\/(fr|ar|en)/, '');
  
  // Add hreflang for each language
  languages.forEach(lang => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lang;
    link.href = `https://couronnedentaire.ma/${lang}${currentPath}`;
    document.head.appendChild(link);
  });
  
  // Add x-default (defaults to French)
  const defaultLink = document.createElement('link');
  defaultLink.rel = 'alternate';
  defaultLink.hreflang = 'x-default';
  defaultLink.href = `https://couronnedentaire.ma/fr${currentPath}`;
  document.head.appendChild(defaultLink);
}

function setSchema(schema: any) {
  // Remove existing schema added by this hook
  const existingSchema = document.querySelector('script[type="application/ld+json"][data-seo-hook]');
  if (existingSchema) {
    existingSchema.remove();
  }
  
  // Add new schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-seo-hook', 'true');
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
