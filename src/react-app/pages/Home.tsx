import { Link } from 'react-router';
import { ArrowRight, Zap, Shield, Clock, Target, Code, BarChart, FileSpreadsheet, Globe, Cog, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import ProductCard from '@/react-app/components/ProductCard';
import TestimonialCard from '@/react-app/components/TestimonialCard';

interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: number;
  image_url?: string;
}

interface Testimonial {
  id: number;
  client_name: string;
  company?: string;
  message: string;
  rating: number;
}

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Fetch featured products
    fetch('/api/products?limit=3')
      .then(res => res.json())
      .then(data => setFeaturedProducts(data.products || []));

    // Fetch testimonials
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data.testimonials || []));
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Agilidade',
      description: 'Entregas rápidas sem comprometer a qualidade',
      color: 'from-plage-teal to-plage-teal-light'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Confiabilidade',
      description: 'Soluções testadas e com garantia de suporte',
      color: 'from-plage-gold to-yellow-400'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Economia de Tempo',
      description: 'Automatize processos e ganhe produtividade',
      color: 'from-plage-teal-light to-cyan-400'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Foco em Resultados',
      description: 'Soluções pensadas para gerar valor real',
      color: 'from-plage-gold to-orange-400'
    }
  ];

  const services = [
    { icon: <Globe className="w-10 h-10" />, name: 'Sites', color: 'from-plage-teal to-plage-teal-light' },
    { icon: <Cog className="w-10 h-10" />, name: 'Automações', color: 'from-plage-gold to-yellow-400' },
    { icon: <Code className="w-10 h-10" />, name: 'WordPress', color: 'from-plage-teal-dark to-teal-500' },
    { icon: <FileSpreadsheet className="w-10 h-10" />, name: 'Excel', color: 'from-green-400 to-emerald-500' },
    { icon: <BarChart className="w-10 h-10" />, name: 'Power BI', color: 'from-amber-400 to-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-plage-dark">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden circuit-bg">
        {/* Animated background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-plage-teal/10 via-transparent to-plage-gold/10 opacity-50"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-plage-teal/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-plage-gold/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-plage-teal" />
            <span className="text-sm text-white/80 font-medium">Transformação Digital de Alto Impacto</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            <span className="text-white">Soluções Digitais que</span>
            <br />
            <span className="text-gradient-teal-gold">Impulsionam seu Negócio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Sites profissionais, automação inteligente, Power BI e produtos digitais prontos para uso.
            <span className="block mt-2 text-plage-teal-light">Tecnologia de ponta com a praticidade que sua empresa precisa.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/produtos"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-plage-teal to-plage-teal-light text-plage-dark font-semibold rounded-xl hover:shadow-glow-teal transition-all duration-300 transform hover:scale-105 gap-2"
            >
              Ver Produtos
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center px-8 py-4 glass-panel-hover text-white font-semibold rounded-xl gap-2"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </section>

      {/* Services Icons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-plage-petrol-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Nossas Especialidades</h2>
            <p className="text-white/60">Soluções completas para o seu negócio digital</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-8 glass-panel-hover cursor-pointer rounded-2xl"
              >
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-plage-petrol-dark/50 to-plage-dark"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Produtos em <span className="text-gradient-teal">Destaque</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Soluções prontas para você começar a usar hoje mesmo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/produtos"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-plage-teal to-plage-teal-light text-plage-dark font-semibold rounded-xl hover:shadow-glow-teal transition-all duration-300 gap-2"
            >
              Ver Todos os Produtos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose PLAGE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-plage-petrol-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Por que escolher a <span className="text-gradient-teal-gold">PLAGE?</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Somos especialistas em transformar desafios em soluções digitais eficientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 glass-panel-hover rounded-2xl"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-plage-dark to-plage-petrol-dark"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                O que dizem <span className="text-gradient-teal">nossos clientes</span>
              </h2>
              <p className="text-xl text-white/70">
                Confiança comprovada por quem já contratou
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-plage-teal/20 via-plage-dark to-plage-gold/20"></div>
        <div className="absolute inset-0 circuit-bg"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="glass-panel p-12 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Pronto para <span className="text-gradient-teal-gold">transformar</span> seu negócio?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Entre em contato e descubra como nossas soluções podem ajudar sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-plage-teal to-plage-teal-light text-plage-dark font-semibold rounded-xl hover:shadow-glow-teal transition-all duration-300 transform hover:scale-105"
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
      </section>

      <Footer />
    </div>
  );
}
