import { Link } from 'react-router';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-plage-petrol-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src="/LOGO.png" 
              alt="PLAGE System" 
              className="h-10 w-auto"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Conectando tecnologia, negócios e inovação através de sistemas inteligentes e soluções corporativas.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/60 hover:text-plage-teal transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-white/60 hover:text-plage-teal transition-colors text-sm">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/60 hover:text-plage-teal transition-colors text-sm">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/clientes" className="text-white/60 hover:text-plage-teal transition-colors text-sm">
                  Área do Cliente
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Software sob Medida</li>
              <li>Automação Inteligente</li>
              <li>Sistemas Integrados</li>
              <li>Consultoria Digital</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-plage-teal mt-0.5 flex-shrink-0" />
                <a href="mailto:suporte@plagesystem.com.br" className="hover:text-plage-teal transition-colors">
                  suporte@plagesystem.com.br
                </a>
              </li>
              <li className="flex items-start space-x-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-plage-teal mt-0.5 flex-shrink-0" />
                <span>832 Avenida General Ataíde Teive</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/40 text-sm">
            © 2024 PLAGE System. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white/40 hover:text-plage-teal transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/40 hover:text-plage-teal transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/40 hover:text-plage-teal transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
