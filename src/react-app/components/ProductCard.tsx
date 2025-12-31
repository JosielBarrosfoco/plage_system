import { Link } from 'react-router';
import { ArrowRight, Tag } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: number;
  image_url?: string;
}

export default function ProductCard({ name, slug, category, description, price, image_url }: ProductCardProps) {
  return (
    <div className="group glass-panel-hover rounded-2xl overflow-hidden">
      <div className="relative h-56 bg-gradient-to-br from-plage-teal/20 to-plage-gold/20 overflow-hidden">
        {image_url ? (
          <img src={image_url} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-7xl opacity-30">💼</div>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1.5 glass-panel rounded-full text-xs font-medium text-plage-teal">
            <Tag size={12} className="mr-1" />
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-plage-teal transition-colors">
          {name}
        </h3>
        <p className="text-white/60 text-sm mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gradient-teal-gold">
              R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </span>
          </div>
          <Link
            to={`/produto/${slug}`}
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-plage-teal to-plage-teal-light text-plage-dark text-sm font-semibold rounded-lg hover:shadow-glow-teal transition-all duration-300 group-hover:gap-2 gap-1"
          >
            Ver Detalhes
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
