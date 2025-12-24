import { Link } from 'react-router';
import { ArrowRight, Cpu, Zap, Shield, Network, Code, Sparkles, CheckCircle2, Mail } from 'lucide-react';
import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import CircuitBackground from '@/react-app/components/CircuitBackground';

export default function Home() {
  const services = [
    {
      icon: Code,
      title: 'Software sob Medida',
      description: 'Desenvolvemos soluções personalizadas que se adaptam perfeitamente às necessidades do seu negócio.',
    },
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description: 'Otimize processos e aumente a eficiência com sistemas automatizados de última geração.',
    },
    {
      icon: Network,
      title: 'Sistemas Integrados',
      description: 'Conectamos suas plataformas e dados em um ecossistema unificado e eficiente.',
    },
    {
      icon: Cpu,
      title: 'IA e Machine Learning',
      description: 'Implementamos inteligência artificial para decisões mais inteligentes e precisas.',
    },
    {
      icon: Shield,
      title: 'Segurança Corporativa',
      description: 'Proteja seus dados e sistemas com as mais avançadas tecnologias de segurança.',
    },
    {
      icon: Sparkles,
      title: 'Inovação Digital',
      description: 'Transforme seu negócio com tecnologias emergentes e soluções inovadoras.',
    },
  ];

  const stats = [
    { value: '200+', label: 'Projetos Entregues' },
    { value: '98%', label: 'Satisfação do Cliente' },
    { value: '15+', label: 'Anos de Experiência' },
    { value: '50+', label: 'Empresas Atendidas' },
  ];

  const benefits = [
    'Equipe especializada e certificada',
    'Metodologia ágil e transparente',
    'Suporte técnico 24/7',
    'Tecnologias de ponta',
    'ROI comprovado',
    'Escalabilidade garantida',
  ];

  return (
    <div className="min-h-screen bg-plage-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <CircuitBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-plage-teal/20 border border-plage-teal/30 rounded-full text-plage-teal text-sm font-medium backdrop-blur-sm">
                Sistema Inteligente de Tecnologia
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-plage-teal to-plage-gold bg-clip-text text-transparent">
                Transformando Ideias
              </span>
              <br />
              <span className="text-white">em Soluções Digitais</span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Desenvolvemos software sob medida, automação inteligente e sistemas integrados 
              que conectam tecnologia, negócios e inovação para impulsionar o seu crescimento.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/sobre"
                className="px-8 py-4 bg-gradient-to-r from-plage-teal to-plage-teal-dark text-plage-dark font-semibold rounded-xl hover:shadow-2xl hover:shadow-plage-teal/50 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <span>Conhecer a PLAGE</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 glass-effect text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Ver Projetos</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-plage-teal/50 rounded-full p-1">
            <div className="w-1 h-3 bg-plage-teal rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-plage-teal to-plage-gold bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Soluções Tecnológicas
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Oferecemos um portfólio completo de serviços para transformar sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-plage-teal/20 to-plage-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-plage-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-plage-teal transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 bg-plage-petrol/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Por que escolher a PLAGE?
              </h2>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                Somos mais do que uma empresa de tecnologia. Somos seu parceiro estratégico 
                na jornada de transformação digital.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-plage-teal flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-effect p-8 rounded-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-white/60">Tecnologias</span>
                  <span className="text-plage-teal font-semibold">100+</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'AI/ML', 'Blockchain', 'IoT'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect p-12 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como podemos ajudar a impulsionar sua empresa 
              com tecnologia de ponta.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/sobre"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-plage-teal to-plage-teal-dark text-plage-dark font-semibold rounded-xl hover:shadow-2xl hover:shadow-plage-teal/50 transition-all duration-300 hover:scale-105"
              >
                <span>Falar com Especialista</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:suporte@plagesystem.com.br"
                className="inline-flex items-center space-x-2 px-8 py-4 glass-effect text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>suporte@plagesystem.com.br</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
