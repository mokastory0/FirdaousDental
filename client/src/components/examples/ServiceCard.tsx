import ServiceCard from '../ServiceCard';
import { Sparkles } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-4 max-w-sm">
      <ServiceCard
        icon={Sparkles}
        title="Blanchiment Dentaire"
        description="Un sourire éclatant grâce à nos techniques professionnelles de blanchiment dentaire sûres et efficaces."
        href="/services/whitening"
      />
    </div>
  );
}
