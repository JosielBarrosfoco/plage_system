import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service_type: '',
          message: ''
        });
      } else {
        setError('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch {
      setError('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-plage-dark">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 circuit-bg">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Entre em <span className="text-gradient-teal">Contato</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para ajudar você. Preencha o formulário ou escolha um dos nossos canais de atendimento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="glass-panel rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-8">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-plage-teal to-plage-teal-light flex items-center justify-center text-plage-dark shadow-glow-teal">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">E-mail</p>
                      <a href="mailto:contato@plagesystem.com.br" className="text-plage-teal hover:text-plage-teal-light transition-colors text-sm">
                        contato@plagesystem.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-plage-teal to-plage-teal-light flex items-center justify-center text-plage-dark shadow-glow-teal">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">Telefone</p>
                      <a href="tel:+5511999999999" className="text-plage-teal hover:text-plage-teal-light transition-colors text-sm">
                        (11) 99999-9999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-plage-teal to-plage-teal-light flex items-center justify-center text-plage-dark shadow-glow-teal">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">Localização</p>
                      <p className="text-white/60 text-sm">São Paulo, SP</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white shadow-lg">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">WhatsApp</p>
                      <a
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition-colors text-sm"
                      >
                        Iniciar conversa
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-plage-teal/30 via-plage-dark to-plage-gold/30"></div>
                <div className="absolute inset-0 glass-panel"></div>
                <div className="relative">
                  <h4 className="font-bold text-lg text-white mb-3">Atendimento Rápido</h4>
                  <p className="text-sm text-white/70 mb-6 leading-relaxed">
                    Precisa de uma resposta imediata? Entre em contato via WhatsApp e receba atendimento prioritário.
                  </p>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-4 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-panel rounded-2xl p-8 lg:p-10">
                <h3 className="text-2xl font-display font-bold text-white mb-8">Envie sua Mensagem</h3>

                {success && (
                  <div className="mb-6 p-4 glass-panel rounded-xl border border-plage-teal/30">
                    <p className="text-plage-teal font-medium">Mensagem enviada com sucesso! Retornaremos em breve.</p>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 glass-panel rounded-xl border border-red-400/30">
                    <p className="text-red-400">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass-panel rounded-xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-plage-teal focus:border-transparent outline-none transition-all"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass-panel rounded-xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-plage-teal focus:border-transparent outline-none transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass-panel rounded-xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-plage-teal focus:border-transparent outline-none transition-all"
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label htmlFor="service_type" className="block text-sm font-medium text-white/80 mb-2">
                        Tipo de Serviço
                      </label>
                      <select
                        id="service_type"
                        name="service_type"
                        value={formData.service_type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass-panel rounded-xl text-white focus:ring-2 focus:ring-plage-teal focus:border-transparent outline-none transition-all"
                      >
                        <option value="" className="bg-plage-dark">Selecione...</option>
                        <option value="site" className="bg-plage-dark">Desenvolvimento de Site</option>
                        <option value="automacao" className="bg-plage-dark">Automação de Processos</option>
                        <option value="wordpress" className="bg-plage-dark">WordPress</option>
                        <option value="excel" className="bg-plage-dark">Planilha Excel</option>
                        <option value="powerbi" className="bg-plage-dark">Dashboard Power BI</option>
                        <option value="outro" className="bg-plage-dark">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 glass-panel rounded-xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-plage-teal focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Conte-nos sobre seu projeto ou dúvida..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-plage-teal to-plage-teal-light text-plage-dark font-semibold rounded-xl hover:shadow-glow-teal transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-plage-dark border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
