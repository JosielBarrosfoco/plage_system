import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="text-3xl font-display font-bold text-gradient-teal-gold">PLAGE</div>
            <div className="hidden sm:block text-xs text-white/60 group-hover:text-white/80 transition-colors">Softhouse</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-plage-teal'
                    : 'text-white/70 hover:text-plage-teal'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-plage-teal to-plage-teal-light text-plage-dark text-sm font-semibold rounded-lg hover:shadow-glow-teal transition-all duration-300"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
                    isActive(link.path)
                      ? 'bg-plage-teal/20 text-plage-teal border border-plage-teal/30'
                      : 'text-white/70 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-gradient-to-r from-plage-teal to-plage-teal-light text-plage-dark text-sm font-semibold rounded-lg text-center"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
