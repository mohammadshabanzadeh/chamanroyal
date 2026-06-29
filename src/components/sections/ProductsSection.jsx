import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ProductCard from '../ui/ProductCard';
import { PRODUCTS, CATEGORIES } from '../../constants';

const ProductsSection = ({ featured = false }) => {
  const [activeCategory, setActiveCategory] = useState('همه');

  const displayed = featured
    ? PRODUCTS.slice(0, 3)
    : activeCategory === 'همه'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeader
          badge="محصولات ما"
          title={featured ? 'محصولات' : 'تمام'}
          highlight={featured ? 'برگزیده' : 'محصولات'}
          subtitle="کیفیت برتر در انواع چمن مصنوعی برای هر کاربردی"
        />

        {/* Category Filter (full page only) */}
        {!featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '48px',
            }}
          >
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '999px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  border: '1px solid',
                  fontFamily: 'Vazirmatn, sans-serif',
                  background: activeCategory === cat
                    ? 'linear-gradient(135deg, #2d8a3e, #1a5e2a)'
                    : 'rgba(255,255,255,0.04)',
                  borderColor: activeCategory === cat
                    ? 'transparent'
                    : 'rgba(255,255,255,0.1)',
                  color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
                  boxShadow: activeCategory === cat ? '0 4px 16px rgba(45,138,62,0.4)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {displayed.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {featured && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '48px' }}
          >
            <Link to="/products" className="btn btn-outline" style={{ fontSize: '1rem', padding: '14px 40px' }}>
              مشاهده همه محصولات
              <ArrowLeft size={18} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
