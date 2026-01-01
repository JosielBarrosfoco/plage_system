import { Link } from 'react-router';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Globe } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-plage-petrol-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Logo variant="light" className="mb-2" />
            <p className="text-white/60 text-sm leading-relaxed">
              Softhouse especializada em soluções digitais profissionais que impulsionam seu negócio.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61585843803921" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 glass-panel-hover rounded-lg text-white/70 hover:text-plage-teal transition-colors" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/plage_system/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 glass-panel-hover rounded-lg text-white/70 hover:text-plage-teal transition-colors" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/110667617/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 glass-panel-hover rounded-lg text-white/70 hover:text-plage-teal transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/60 hover:text-plage-teal transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-white/60 hover:text-plage-teal transition-colors text-sm">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-white/60 hover:text-plage-teal transition-colors text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-white/60 hover:text-plage-teal transition-colors text-sm">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li className="text-white/60 text-sm">Sites Institucionais</li>
              <li className="text-white/60 text-sm">Automação de Processos</li>
              <li className="text-white/60 text-sm">WordPress</li>
              <li className="text-white/60 text-sm">Power BI</li>
              <li className="text-white/60 text-sm">Excel Avançado</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/60 text-sm">
                <Globe size={18} className="mt-0.5 flex-shrink-0 text-plage-teal" />
                <a href="https://plagesystem.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-plage-teal transition-colors">plagesystem.com.br</a>
              </li>
              <li className="flex items-start space-x-3 text-white/60 text-sm">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-plage-teal" />
                <a href="mailto:suporte@plagesystem.com.br" className="hover:text-plage-teal transition-colors">suporte@plagesystem.com.br</a>
              </li>
              <li className="flex items-start space-x-3 text-white/60 text-sm">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-plage-teal" />
                <a href="tel:+5595981249755" className="hover:text-plage-teal transition-colors">(95) 98124-9755</a>
              </li>
              <li className="flex items-start space-x-3 text-white/60 text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-plage-teal" />
                <span>832 Avenida General Ataíde Teive</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-gradient-teal-gold">PLAGE</span> <span className="text-white/40">SYSTEM</span>. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
