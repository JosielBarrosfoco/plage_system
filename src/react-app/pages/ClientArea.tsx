import { useState } from 'react';
import { Lock, Mail, LogIn, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import CircuitBackground from '@/react-app/components/CircuitBackground';

export default function ClientArea() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login - in production this would authenticate with backend
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const projects = [
    {
      name: 'Sistema de CRM',
      status: 'Em desenvolvimento',
      progress: 65,
      statusColor: 'plage-teal',
      icon: Clock,
    },
    {
      name: 'Plataforma E-commerce',
      status: 'Concluído',
      progress: 100,
      statusColor: 'green-500',
      icon: CheckCircle2,
    },
    {
      name: 'App Mobile',
      status: 'Em homologação',
      progress: 85,
      statusColor: 'plage-gold',
      icon: AlertCircle,
    },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-plage-dark">
        <Navbar />
        
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <CircuitBackground />
          
          <div className="relative z-10 max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-effect p-8 rounded-3xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-plage-teal/20 to-plage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-plage-teal" />
                </div>
                <h1 className="text-3xl font-display font-bold mb-2">Área do Cliente</h1>
                <p className="text-white/60">Acesse seus projetos e soluções</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-plage-teal transition-colors"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-plage-teal transition-colors"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-plage-teal to-plage-teal-dark text-plage-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-plage-teal/50 transition-all duration-300 hover:scale-105"
                >
                  <LogIn className="w-5 h-5" />
                  <span>Entrar</span>
                </button>
              </form>

              <div className="mt-6 text-center">
                <a href="#" className="text-sm text-plage-teal hover:text-plage-teal-light transition-colors">
                  Esqueceu sua senha?
                </a>
              </div>
            </div>

            <p className="text-center text-white/40 text-sm mt-6">
              Não é cliente? <a href="#" className="text-plage-teal hover:text-plage-teal-light transition-colors">Entre em contato</a>
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-plage-dark">
      <Navbar />
      
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-display font-bold mb-2">
              Bem-vindo de volta!
            </h1>
            <p className="text-white/60">Acompanhe o status dos seus projetos</p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <div className={`w-10 h-10 bg-${project.statusColor}/20 rounded-lg flex items-center justify-center`}>
                    <project.icon className={`w-5 h-5 text-${project.statusColor}`} />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">Status:</span>
                    <span className={`text-${project.statusColor} font-medium`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="text-white/60">Progresso:</span>
                      <span className="text-white font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-plage-teal to-plage-teal-dark rounded-full transition-all duration-500`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium transition-colors">
                    Ver detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4">Documentação</h2>
              <p className="text-white/60 mb-4">
                Acesse manuais, guias e documentação técnica dos seus sistemas
              </p>
              <button className="px-6 py-2.5 bg-plage-teal/20 text-plage-teal border border-plage-teal/30 rounded-lg hover:bg-plage-teal/30 transition-colors">
                Acessar documentos
              </button>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4">Suporte Técnico</h2>
              <p className="text-white/60 mb-4">
                Nossa equipe está disponível 24/7 para ajudar você
              </p>
              <button className="px-6 py-2.5 bg-plage-gold/20 text-plage-gold border border-plage-gold/30 rounded-lg hover:bg-plage-gold/30 transition-colors">
                Abrir chamado
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
