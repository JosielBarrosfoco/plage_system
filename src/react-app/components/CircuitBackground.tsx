export default function CircuitBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-30" />
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-plage-teal/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-plage-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Animated circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9C0" />
            <stop offset="100%" stopColor="#F4C542" />
          </linearGradient>
        </defs>
        <path 
          d="M0,200 Q400,100 800,200 T1600,200" 
          stroke="url(#circuit-gradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-pulse-slow"
        />
        <path 
          d="M0,400 Q400,300 800,400 T1600,400" 
          stroke="url(#circuit-gradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        />
      </svg>
      
      {/* Data nodes */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-plage-teal rounded-full glow-teal animate-pulse" />
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-plage-gold rounded-full glow-gold animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-plage-teal rounded-full glow-teal animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}
