import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, Check, ShoppingCart } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  detailed_description?: string;
  price: number;
  image_url?: string;
  features?: string;
  target_audience?: string;
  whats_included?: string;
}

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetch(`/api/products/${slug}`)
        .then(res => res.json())
        .then(data => {
          setProduct(data.product);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-plage-dark">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-plage-teal border-t-transparent"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-plage-dark">
        <Header />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-3xl font-display font-bold text-white mb-4">Produto não encontrado</h1>
          <Link to="/produtos" className="text-plage-teal hover:text-plage-teal-light transition-colors">
            Voltar para produtos
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const features = product.features ? JSON.parse(product.features) : [];

  return (
    <div className="min-h-screen bg-plage-dark">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 circuit-bg">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <Link
            to="/produtos"
            className="inline-flex items-center text-plage-teal hover:text-plage-teal-light mb-8 gap-2 transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar para produtos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="glass-panel rounded-3xl p-12 flex items-center justify-center min-h-[500px]">
              {product.image_url ? (
                <img src={product.image_url} alt={product.name} className="max-w-full max-h-full object-contain rounded-2xl" />
              ) : (
                <div className="text-9xl opacity-20">💼</div>
              )}
            </div>

            {/* Details */}
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 glass-panel rounded-xl text-plage-teal text-sm font-medium">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                {product.name}
              </h1>

              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                {product.description}
              </p>

              {product.detailed_description && (
                <p className="text-white/70 mb-8 leading-relaxed">
                  {product.detailed_description}
                </p>
              )}

              <div className="mb-8">
                <div className="text-5xl font-display font-bold text-gradient-teal-gold mb-2">
                  R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
                <p className="text-sm text-white/60">Pagamento único</p>
              </div>

              <div className="flex gap-4 mb-8">
                <a
                  href="https://wa.me/5595981249755"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-plage-teal to-plage-teal-light text-plage-dark font-semibold rounded-xl hover:shadow-glow-teal transition-all duration-300 gap-2"
                >
                  <ShoppingCart size={20} />
                  Comprar Agora
                </a>
                <Link
                  to="/contato"
                  className="px-6 py-4 glass-panel-hover text-white font-semibold rounded-xl"
                >
                  Dúvidas?
                </Link>
              </div>

              {/* Features */}
              {features.length > 0 && (
                <div className="glass-panel rounded-2xl p-8 mb-6">
                  <h3 className="text-lg font-bold text-white mb-6">O que está incluso:</h3>
                  <ul className="space-y-4">
                    {features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br from-plage-teal to-plage-teal-light flex items-center justify-center mt-0.5">
                          <Check size={16} className="text-plage-dark" />
                        </div>
                        <span className="text-white/80 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Target Audience */}
              {product.target_audience && (
                <div className="glass-panel rounded-2xl p-8 mb-6 border border-plage-teal/20">
                  <h3 className="text-lg font-bold text-white mb-3">Para quem é indicado:</h3>
                  <p className="text-white/70 leading-relaxed">{product.target_audience}</p>
                </div>
              )}

              {/* What's Included */}
              {product.whats_included && (
                <div className="glass-panel rounded-2xl p-8 border border-plage-gold/20">
                  <h3 className="text-lg font-bold text-white mb-3">Você receberá:</h3>
                  <p className="text-white/70 leading-relaxed">{product.whats_included}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
