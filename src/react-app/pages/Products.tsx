import { useEffect, useState } from 'react';
import { Filter, Store, ExternalLink } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import ProductCard from '@/react-app/components/ProductCard';

interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: number;
  image_url?: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [loading, setLoading] = useState(true);

  const categories = ['Todos', 'Sites', 'Automações', 'WordPress', 'Excel', 'Power BI'];

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products || []);
        setFilteredProducts(data.products || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (selectedCategory === 'Todos') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  return (
    <div className="min-h-screen bg-plage-dark">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 circuit-bg">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Nossos <span className="text-gradient-teal">Produtos</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
              Soluções digitais profissionais prontas para uso. Escolha o produto ideal para sua necessidade.
            </p>
            <a
              href="https://plagestore.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-plage-gold to-yellow-400 text-plage-dark font-semibold rounded-xl hover:shadow-glow-gold transition-all duration-300 gap-2 transform hover:scale-105"
            >
              <Store size={20} />
              Comprar Sistemas Prontos
              <ExternalLink size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Filter size={20} className="text-plage-teal" />
              <span className="text-sm font-medium text-white/80">Filtrar por categoria:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-plage-teal to-plage-teal-light text-plage-dark shadow-glow-teal'
                      : 'glass-panel-hover text-white/70'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-plage-teal border-t-transparent"></div>
              <p className="mt-4 text-white/70 text-lg">Carregando produtos...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-white/70">Nenhum produto encontrado nesta categoria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
