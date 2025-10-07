import { Link } from 'wouter';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  const { localizePath } = useLocalizedPath();

  return (
    <Card className="hover-elevate transition-all h-full flex flex-col" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <CardDescription className="flex-1 leading-relaxed">{description}</CardDescription>
        <Link href={localizePath(href)}>
          <Button variant="ghost" className="mt-4 p-0 h-auto hover-elevate" data-testid={`link-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            En savoir plus
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
