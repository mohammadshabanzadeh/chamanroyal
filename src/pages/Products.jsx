import { motion } from 'framer-motion';
import ProductsSection from '../components/sections/ProductsSection';
import CtaSection from '../components/sections/CtaSection';

const Products = () => {
  return (
    <>
      {/* Page Header */}
      <section style={{
        paddingTop: '130px',
        paddingBottom: '60px',
        background: 'linear-gradient(180deg, rgba(45,138,62,0.08) 0%, transparent 100%)',
        textAlign: 'center',
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge">کاتالوگ محصولات</span>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              marginTop: '12px',
            }}>
              تمام <span className="gradient-text">محصولات</span> ما
            </h1>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              marginTop: '16px',
              maxWidth: '500px',
              margin: '16px auto 0',
              lineHeight: 1.8,
            }}>
              از چمن دکوراتیو تا ورزشی حرفه‌ای — هر آنچه نیاز دارید اینجاست
            </p>
          </motion.div>
        </div>
      </section>

      <ProductsSection />
      <CtaSection />
    </>
  );
};

export default Products;
