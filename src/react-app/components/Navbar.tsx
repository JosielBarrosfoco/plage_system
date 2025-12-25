import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/portfolio', label: 'Portfólio' },
    { path: '/clientes', label: 'Área do Cliente' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Logo className="h-12 w-auto transition-transform group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors relative group ${
                  isActive(link.path) 
                    ? 'text-plage-teal' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-plage-teal transition-all ${
                  isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <Link
              to="/clientes"
              className="px-6 py-2.5 bg-gradient-to-r from-plage-teal to-plage-teal-dark text-plage-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-plage-teal/50 transition-all duration-300 hover:scale-105"
            >
              Acesso Cliente
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-effect border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-plage-teal/20 text-plage-teal'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/clientes"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 bg-gradient-to-r from-plage-teal to-plage-teal-dark text-plage-dark font-semibold rounded-lg text-center"
            >
              Acesso Cliente
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
