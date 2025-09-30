import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  service?: string;
}

export default function TestimonialCard({ name, rating, text, service }: TestimonialCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Card className="h-full" data-testid={`card-testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="pt-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <AvatarFallback className="bg-primary/10 text-primary">{initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-semibold">{name}</div>
            <div className="flex items-center gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed italic">&ldquo;{text}&rdquo;</p>
        {service && (
          <div className="mt-3 text-sm text-primary font-medium">{service}</div>
        )}
      </CardContent>
    </Card>
  );
}
