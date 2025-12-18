import { useState } from 'react';
import { ExternalLink, Code2, Database, Smartphone, Globe } from 'lucide-react';
import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import CircuitBackground from '@/react-app/components/CircuitBackground';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'automation', label: 'Automação' },
    { id: 'integration', label: 'Integração' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
  ];

  const projects = [
    {
      title: 'Sistema de Gestão Integrada',
      category: 'integration',
      description: 'ERP customizado integrando vendas, estoque e finanças com análise de dados em tempo real.',
      icon: Database,
      tags: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    },
    {
      title: 'Plataforma de E-commerce',
      category: 'web',
      description: 'Marketplace completo com gateway de pagamento, gestão de pedidos e análise de comportamento.',
      icon: Globe,
      tags: ['Next.js', 'Stripe', 'AWS', 'GraphQL'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
    },
    {
      title: 'App de Logística',
      category: 'mobile',
      description: 'Aplicativo mobile para rastreamento de entregas com otimização de rotas via IA.',
      icon: Smartphone,
      tags: ['React Native', 'Google Maps', 'TensorFlow'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
    },
    {
      title: 'Automação de Processos RH',
      category: 'automation',
      description: 'Sistema automatizado de recrutamento, onboarding e gestão de benefícios.',
      icon: Code2,
      tags: ['Python', 'Django', 'Celery', 'ML'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    },
    {
      title: 'Portal de Business Intelligence',
      category: 'web',
      description: 'Dashboard analítico com visualizações interativas e relatórios customizáveis.',
      icon: Database,
      tags: ['TypeScript', 'D3.js', 'Python', 'BigQuery'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    },
    {
      title: 'Sistema de IoT Industrial',
      category: 'integration',
      description: 'Plataforma de monitoramento e controle de equipamentos industriais em tempo real.',
      icon: Database,
      tags: ['MQTT', 'TimescaleDB', 'Node-RED', 'Docker'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-plage-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <CircuitBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-plage-teal to-plage-gold bg-clip-text text-transparent">
              Nosso Portfólio
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Casos de sucesso que transformaram desafios em resultados concretos
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-plage-teal to-plage-teal-dark text-plage-dark shadow-lg shadow-plage-teal/30'
                    : 'glass-effect text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plage-dark via-plage-dark/50 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-plage-teal/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-plage-teal/30">
                    <project.icon className="w-6 h-6 text-plage-teal" />
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-display font-bold group-hover:text-plage-teal transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center space-x-2 text-plage-teal hover:text-plage-teal-light transition-colors mt-4">
                    <span className="text-sm font-medium">Ver detalhes</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-plage-petrol/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Seu projeto pode ser o próximo
          </h2>
          <p className="text-xl text-white/60 mb-8">
            Vamos conversar sobre como podemos transformar suas ideias em realidade
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-plage-teal to-plage-teal-dark text-plage-dark font-semibold rounded-xl hover:shadow-2xl hover:shadow-plage-teal/50 transition-all duration-300 hover:scale-105">
            Iniciar um Projeto
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
