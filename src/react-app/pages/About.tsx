import { Target, Zap, Shield, Users } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { Link } from 'react-router';

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Foco em Resultados',
      description: 'Cada projeto é desenvolvido pensando no retorno e impacto real para seu negócio.',
      color: 'from-plage-teal to-plage-teal-light'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Inovação Constante',
      description: 'Utilizamos as tecnologias mais modernas para entregar soluções de ponta.',
      color: 'from-plage-gold to-yellow-400'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Confiabilidade',
      description: 'Comprometimento com prazos, qualidade e suporte completo em cada entrega.',
      color: 'from-plage-teal-dark to-teal-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Proximidade',
      description: 'Atendimento personalizado e consultivo, sempre disponível para ajudar.',
      color: 'from-plage-teal-light to-cyan-400'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projetos Entregues' },
    { number: '50+', label: 'Clientes Satisfeitos' },
    { number: '5+', label: 'Anos de Experiência' },
    { number: '98%', label: 'Taxa de Satisfação' }
  ];

  return (
    <div className="min-h-screen bg-plage-dark">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 circuit-bg">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Sobre a <span className="text-gradient-teal-gold">PLAGE</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Somos uma softhouse especializada em transformar desafios tecnológicos em soluções práticas e eficientes. 
              Nossa missão é democratizar o acesso à tecnologia de qualidade, oferecendo produtos e serviços que realmente 
              fazem diferença no dia a dia das empresas.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-panel-hover rounded-2xl p-8 text-center"
              >
                <div className="text-5xl font-display font-bold text-gradient-teal-gold mb-3">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="relative overflow-hidden rounded-3xl p-12 mb-24">
            <div className="absolute inset-0 bg-gradient-to-br from-plage-teal/20 via-plage-dark to-plage-gold/20"></div>
            <div className="absolute inset-0 glass-panel"></div>
            <div className="relative max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Nossa Missão</h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Empoderar empresas de todos os tamanhos com tecnologia de ponta, oferecendo soluções digitais 
                acessíveis, eficientes e de alta qualidade. Acreditamos que toda empresa merece ter acesso às 
                melhores ferramentas tecnológicas para crescer e prosperar no mercado digital.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Nossos <span className="text-gradient-teal">Valores</span>
              </h2>
              <p className="text-xl text-white/70">
                O que nos guia em cada projeto
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="glass-panel-hover rounded-2xl p-8"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} text-white mb-4 shadow-lg`}>
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Do */}
          <div className="glass-panel rounded-3xl p-12 mb-24">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center">O que Fazemos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-plage-teal mb-4">Produtos Digitais</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  Oferecemos uma linha completa de produtos digitais prontos para uso: sites institucionais, 
                  sistemas de automação, temas WordPress, planilhas Excel avançadas e dashboards em Power BI.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Cada produto é desenvolvido com foco em usabilidade, design profissional e resultados concretos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-plage-gold mb-4">Desenvolvimento Sob Medida</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  Além dos produtos prontos, desenvolvemos soluções personalizadas que atendem necessidades 
                  específicas do seu negócio. Nossa equipe trabalha lado a lado com você para criar a ferramenta 
                  perfeita.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Do planejamento à entrega, você conta com suporte completo e acompanhamento dedicado.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-panel rounded-3xl p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Vamos construir algo incrível juntos?
            </h3>
            <p className="text-xl text-white/70 mb-8">
              Entre em contato e descubra como podemos ajudar seu negócio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-plage-teal to-plage-teal-light text-plage-dark font-semibold rounded-xl hover:shadow-glow-teal transition-all duration-300"
              >
                Falar com a Equipe
              </Link>
              <Link
                to="/produtos"
                className="inline-flex items-center justify-center px-8 py-4 glass-panel-hover text-white font-semibold rounded-xl"
              >
                Ver Produtos
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
