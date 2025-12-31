import { Link } from 'react-router';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-plage-petrol-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-display font-bold text-gradient-teal-gold">
              PLAGE
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Softhouse especializada em soluções digitais profissionais que impulsionam seu negócio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 glass-panel-hover rounded-lg text-white/70 hover:text-plage-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 glass-panel-hover rounded-lg text-white/70 hover:text-plage-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 glass-panel-hover rounded-lg text-white/70 hover:text-plage-teal transition-colors">
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
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-plage-teal" />
                <span>contato@plagesystem.com.br</span>
              </li>
              <li className="flex items-start space-x-3 text-white/60 text-sm">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-plage-teal" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start space-x-3 text-white/60 text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-plage-teal" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} PLAGE. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
