import { useState } from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-12 w-auto" }: LogoProps) {
  const [imgError, setImgError] = useState(false);
  
  // Tenta carregar o logo local primeiro, se falhar usa o fallback
  // Com base: './', usa caminho relativo
  const logoSrc = imgError 
    ? "https://019b2e7b-ce1c-747b-a372-7a46832adeec.mochausercontent.com/LOGO.png"
    : "./LOGO.png";

  return (
    <img 
      src={logoSrc}
      alt="PLAGE System" 
      className={className}
      onError={() => {
        if (!imgError) {
          setImgError(true);
        }
      }}
    />
  );
}

