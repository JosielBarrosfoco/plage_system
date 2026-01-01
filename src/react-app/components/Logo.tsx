import { Link } from 'react-router';
import { useState } from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'circle' | 'full';
  className?: string;
  showText?: boolean;
  linkTo?: string;
  height?: string;
}

export default function Logo({ 
  variant = 'light', 
  className = '',
  showText = false,
  linkTo = '/',
  height = 'h-10'
}: LogoProps) {
  const [imageError, setImageError] = useState(false);

  // Define os nomes dos arquivos de imagem baseado na variante
  const imageMap: Record<string, string> = {
    light: '/logos/logo-light.png',      // Logo com fundo claro (para fundos escuros)
    dark: '/logos/logo-dark.png',        // Logo com fundo escuro (para fundos claros)
    circle: '/logos/logo-circle.png',    // Logo circular
    full: '/logos/logo-full.png',        // Logo completo com "PLAGE SYSTEM"
  };

  const logoSrc = imageMap[variant] || imageMap.light;

  const content = (
    <div className={`flex items-center ${className}`}>
      {!imageError ? (
        <img 
          src={logoSrc} 
          alt="PLAGE System" 
          className={`${height} object-contain`}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex items-baseline gap-2">
          <span className={`${height === 'h-10' ? 'text-3xl' : height === 'h-16' || height === 'h-20' || height === 'h-24' ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl'} font-display font-bold text-gradient-teal-gold`}>PLAGE</span>
          <span className={`${height === 'h-10' ? 'text-lg' : height === 'h-16' || height === 'h-20' || height === 'h-24' ? 'text-xl md:text-2xl lg:text-3xl' : 'text-lg'} font-display font-medium text-white/50`}>SYSTEM</span>
        </div>
      )}
      {showText && !imageError && (
        <div className="hidden sm:block ml-3">
          <div className="text-xs text-white/60">Softhouse</div>
        </div>
      )}
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}

