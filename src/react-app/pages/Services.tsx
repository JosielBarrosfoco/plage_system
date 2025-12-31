import { Link } from 'react-router';
import { Code, Cog, Zap, BarChart, Globe, ArrowRight, Check } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Services() {
  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Desenvolvimento de Sites',
      description: 'Sites institucionais, landing pages e portais corporativos desenvolvidos com as melhores tecnologias do mercado.',
      features: [
        'Design responsivo e moderno',
        'Otimizado para SEO',
        'Alta performance',
        'Integração com redes sociais',
        'Formulários inteligentes'
      ],
      color: 'from-plage-teal to-plage-teal-light'
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: 'Automação de Processos',
      description: 'Automatize tarefas repetitivas e ganhe tempo para focar no que realmente importa para seu negócio.',
      features: [
        'Integração entre sistemas',
        'Automação de e-mails',
        'Processamento de dados',
        'Webhooks e APIs',
        'Relatórios automáticos'
      ],
      color: 'from-plage-gold to-yellow-400'
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Desenvolvimento WordPress',
      description: 'Sites e blogs em WordPress totalmente personalizados, com painel administrativo intuitivo e fácil de usar.',
      features: [
        'Temas exclusivos',
        'Plugins premium',
        'Otimização de velocidade',
        'Segurança reforçada',
        'Treinamento completo'
      ],
      color: 'from-plage-teal-dark to-teal-500'
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: 'Dashboards em Power BI',
      description: 'Transforme dados em insights com dashboards interativos e relatórios gerenciais profissionais.',
      features: [
        'Visualizações interativas',
        'Conexão com múltiplas fontes',
        'Atualização em tempo real',
        'KPIs personalizados',
        'Compartilhamento seguro'
      ],
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Planilhas Excel Avançadas',
      description: 'Planilhas profissionais para controle financeiro, gestão de estoque, vendas e muito mais.',
      features: [
        'Fórmulas avançadas',
        'Macros e automações',
        'Gráficos dinâmicos',
        'Proteção de dados',
        'Interface intuitiva'
      ],
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-plage-dark">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 circuit-bg">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Serviços <span className="text-gradient-teal-gold">Sob Medida</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Desenvolvemos soluções personalizadas que se adaptam perfeitamente às necessidades do seu negócio
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-panel-hover rounded-3xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-10">
                  {/* Icon and Title */}
                  <div className="lg:col-span-1">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-4 shadow-lg`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-white mb-6">Principais recursos:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            <Check size={20} className="text-plage-teal" />
                          </div>
                          <span className="text-white/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contato"
                      className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-plage-teal to-plage-teal-light text-plage-dark font-semibold rounded-xl hover:shadow-glow-teal transition-all duration-300 gap-2"
                    >
                      Solicitar Orçamento
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="relative overflow-hidden rounded-3xl p-12 mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-plage-teal/20 via-plage-dark to-plage-gold/20"></div>
            <div className="absolute inset-0 glass-panel"></div>
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Como Funciona?</h2>
              <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
                Nosso processo é simples, transparente e focado em resultados
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center text-3xl font-bold text-plage-teal mx-auto mb-4 shadow-lg">
                    1
                  </div>
                  <h4 className="font-semibold text-white mb-2">Contato Inicial</h4>
                  <p className="text-sm text-white/60">Você nos conta sua necessidade</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center text-3xl font-bold text-plage-teal mx-auto mb-4 shadow-lg">
                    2
                  </div>
                  <h4 className="font-semibold text-white mb-2">Proposta</h4>
                  <p className="text-sm text-white/60">Enviamos orçamento detalhado</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center text-3xl font-bold text-plage-teal mx-auto mb-4 shadow-lg">
                    3
                  </div>
                  <h4 className="font-semibold text-white mb-2">Desenvolvimento</h4>
                  <p className="text-sm text-white/60">Criamos a solução ideal</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center text-3xl font-bold text-plage-teal mx-auto mb-4 shadow-lg">
                    4
                  </div>
                  <h4 className="font-semibold text-white mb-2">Entrega</h4>
                  <p className="text-sm text-white/60">Você recebe pronto para usar</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-panel rounded-3xl p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Tem um projeto em mente?
            </h3>
            <p className="text-xl text-white/70 mb-8">
              Entre em contato e vamos transformar sua ideia em realidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-plage-teal to-plage-teal-light text-plage-dark font-semibold rounded-xl hover:shadow-glow-teal transition-all duration-300"
              >
                Falar com Especialista
              </Link>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 glass-panel-hover text-white font-semibold rounded-xl"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
