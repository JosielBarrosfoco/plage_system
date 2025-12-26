import { Target, Users, Award, TrendingUp, Mail, ArrowRight, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router';
import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import CircuitBackground from '@/react-app/components/CircuitBackground';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Entregamos soluções que geram valor mensurável e impactam positivamente os resultados do seu negócio.',
    },
    {
      icon: Users,
      title: 'Parceria Estratégica',
      description: 'Construímos relacionamentos duradouros, atuando como extensão da sua equipe.',
    },
    {
      icon: Award,
      title: 'Excelência Técnica',
      description: 'Mantemos os mais altos padrões de qualidade em todos os nossos projetos e entregas.',
    },
    {
      icon: TrendingUp,
      title: 'Inovação Contínua',
      description: 'Estamos sempre explorando novas tecnologias e metodologias para oferecer o melhor.',
    },
  ];

  const team = [
    {
      role: 'Engenharia de Software',
      description: 'Especialistas em arquitetura de sistemas, desenvolvimento full-stack e DevOps.',
    },
    {
      role: 'Data Science & IA',
      description: 'Cientistas de dados e especialistas em machine learning e deep learning.',
    },
    {
      role: 'UX/UI Design',
      description: 'Designers focados em criar experiências intuitivas e interfaces elegantes.',
    },
    {
      role: 'Gestão de Projetos',
      description: 'PMPs certificados que garantem entregas no prazo e dentro do orçamento.',
    },
  ];

  return (
    <div className="min-h-screen bg-plage-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <CircuitBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-plage-teal to-plage-gold bg-clip-text text-transparent">
              Sobre a PLAGE
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Somos uma software house especializada em criar soluções tecnológicas que 
            transformam desafios complexos em oportunidades de crescimento.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Nossa Missão</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-4">
                Capacitar empresas através da tecnologia, desenvolvendo sistemas inteligentes 
                que otimizam processos, automatizam tarefas e impulsionam a inovação.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Acreditamos que a tecnologia deve ser um facilitador de negócios, não um 
                obstáculo. Por isso, criamos soluções sob medida que se integram perfeitamente 
                ao seu ecossistema e escalam conforme sua empresa cresce.
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold mb-4 text-plage-teal">Nossa Visão</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Ser reconhecida como a principal referência em inovação tecnológica corporativa 
                no Brasil, criando soluções que definem novos padrões de excelência no mercado.
              </p>
              <div className="h-px bg-gradient-to-r from-plage-teal/0 via-plage-teal to-plage-teal/0 mb-6" />
              <h3 className="text-2xl font-display font-bold mb-4 text-plage-gold">Nossos Valores</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-plage-gold rounded-full" />
                  <span>Inovação como cultura</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-plage-gold rounded-full" />
                  <span>Transparência em todas as relações</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-plage-gold rounded-full" />
                  <span>Comprometimento com resultados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 bg-plage-petrol/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              O que nos move
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Princípios que guiam cada decisão e cada linha de código
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-2xl text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-plage-teal/20 to-plage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-plage-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              Equipe Multidisciplinar
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Profissionais especializados trabalhando em sinergia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-display font-bold mb-3 text-plage-teal">
                  {member.role}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative py-20 bg-plage-petrol/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-effect p-12 rounded-3xl text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Certificações e Parcerias
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Mantemos parcerias estratégicas com as principais empresas de tecnologia do mundo
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {['AWS Partner', 'Microsoft Gold', 'Google Cloud', 'ISO 27001', 'ISO 9001'].map((cert) => (
                <div key={cert} className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg">
                  <span className="text-white/80 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-effect p-12 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Vamos conversar?
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Estamos prontos para entender suas necessidades e criar soluções que transformem seu negócio.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-plage-teal">Informações de Contato</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-plage-teal mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white/60 text-sm mb-1">E-mail</p>
                        <a 
                          href="mailto:suporte@plagesystem.com.br" 
                          className="text-white hover:text-plage-teal transition-colors font-medium"
                        >
                          suporte@plagesystem.com.br
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-plage-teal mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white/60 text-sm mb-1">Endereço</p>
                        <p className="text-white font-medium">
                          832 Avenida General Ataíde Teive
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="w-5 h-5 text-plage-teal mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white/60 text-sm mb-1">Site</p>
                        <p className="text-white font-medium">
                          PLAGE System - Tecnologia e Inovação
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="space-y-4">
                  <a
                    href="mailto:suporte@plagesystem.com.br"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-plage-teal to-plage-teal-dark text-plage-dark font-semibold rounded-xl hover:shadow-2xl hover:shadow-plage-teal/50 transition-all duration-300 hover:scale-105 w-full"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Enviar E-mail</span>
                  </a>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 glass-effect text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 w-full"
                  >
                    <span>Ver Portfólio</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
