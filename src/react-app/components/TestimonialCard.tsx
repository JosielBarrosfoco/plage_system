import { Star } from 'lucide-react';

interface TestimonialCardProps {
  client_name: string;
  company?: string;
  message: string;
  rating: number;
}

export default function TestimonialCard({ client_name, company, message, rating }: TestimonialCardProps) {
  return (
    <div className="glass-panel-hover rounded-2xl p-6">
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-plage-gold text-plage-gold" />
        ))}
      </div>
      
      <p className="text-white/70 mb-6 italic leading-relaxed">"{message}"</p>
      
      <div className="pt-4 border-t border-white/10">
        <p className="font-semibold text-white">{client_name}</p>
        {company && <p className="text-sm text-plage-teal mt-1">{company}</p>}
      </div>
    </div>
  );
}
