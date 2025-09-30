import TestimonialCard from '../TestimonialCard';

export default function TestimonialCardExample() {
  return (
    <div className="p-4 max-w-md">
      <TestimonialCard
        name="Fatima Zahra"
        rating={5}
        text="Excellent service! Dr. Moustaine est très professionnelle et attentionnée. Je recommande vivement."
        service="Blanchiment dentaire"
      />
    </div>
  );
}
