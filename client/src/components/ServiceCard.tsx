import { Link } from 'wouter';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  const { localizePath } = useLocalizedPath();
  const { t } = useLanguage();

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col border-2 hover:border-primary/20" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="relative z-10">
        <div className="mb-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 flex-1 flex flex-col">
        <CardDescription className="flex-1 leading-relaxed text-base mb-6">{description}</CardDescription>
        <Link href={localizePath(href)}>
          <Button 
            variant="ghost" 
            className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary transition-all duration-300 font-semibold" 
            data-testid={`link-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <span>{t('cta.readMore')}</span>
            <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
