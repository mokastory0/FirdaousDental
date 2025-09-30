import { Link } from 'wouter';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
}

export default function BlogCard({ id, title, excerpt, category, date, readTime, image }: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all h-full flex flex-col" data-testid={`card-blog-${id}`}>
      {image && (
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="space-y-2">
        <Badge className="w-fit" variant="secondary">{category}</Badge>
        <h3 className="text-xl font-semibold leading-tight line-clamp-2">{title}</h3>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {excerpt}
        </p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime}
            </div>
          </div>
          <Link href={`/blog/${id}`}>
            <Button variant="ghost" size="sm" className="p-0 h-auto hover-elevate" data-testid={`link-blog-${id}`}>
              Lire
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
