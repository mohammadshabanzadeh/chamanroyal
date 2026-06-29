import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

const ProductCard = ({ product, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(20px)',
        border: '1px solid var(--glass-border)',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(21,101,192,0.35)';
        e.currentTarget.style.boxShadow = '0 16px 40px rgba(21,101,192,0.15), 0 0 0 1px rgba(21,101,192,0.1)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--glass-border)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Image */}
      <div style={{
        height: '220px',
        background: `linear-gradient(135deg, rgba(21,101,192,0.15), rgba(66,165,245,0.25))`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
            }}
          />
        )}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: product.image
            ? 'linear-gradient(to top, rgba(6,12,24,0.75) 0%, rgba(0,0,0,0.1) 60%)'
            : 'linear-gradient(135deg, rgba(21,101,192,0.2), rgba(66,165,245,0.3))',
        }} />

        {product.badge && (
          <span style={{
            position: 'absolute', top: '14px', right: '14px',
            padding: '4px 12px', borderRadius: '999px',
            fontSize: '0.78rem', fontWeight: 700,
            background: product.badge === 'پرفروش' ? 'rgba(201,168,76,0.25)' : 'rgba(21,101,192,0.25)',
            border: `1px solid ${product.badge === 'پرفروش' ? 'rgba(201,168,76,0.5)' : 'rgba(21,101,192,0.5)'}`,
            color: product.badge === 'پرفروش' ? '#e8c96a' : '#60b4ff',
            backdropFilter: 'blur(8px)',
          }}>
            {product.badge}
          </span>
        )}

        <span style={{
          position: 'absolute', top: '14px', left: '14px',
          padding: '4px 10px', borderRadius: '999px',
          fontSize: '0.75rem', fontWeight: 600,
          background: 'rgba(0,0,0,0.4)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'rgba(200,225,255,0.8)',
          backdropFilter: 'blur(8px)',
        }}>
          {product.height}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div>
            <span style={{
              fontSize: '0.78rem', color: 'var(--text-muted)',
              background: 'rgba(21,101,192,0.08)', padding: '3px 10px',
              borderRadius: '999px', border: '1px solid rgba(21,101,192,0.12)',
            }}>
              {product.category}
            </span>
            <h3 style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.05rem', marginTop: '8px' }}>
              {product.name}
            </h3>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '16px' }}>
          {product.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {product.features.slice(0, 3).map(f => (
            <span key={f} style={{
              display: 'flex', alignItems: 'center', gap: '4px',
              fontSize: '0.78rem', color: 'var(--text-secondary)',
              background: 'rgba(21,101,192,0.07)',
              border: '1px solid rgba(21,101,192,0.15)',
              padding: '3px 8px', borderRadius: '999px',
            }}>
              <Check size={10} color="#42a5f5" />
              {f}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>از</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1976d2', margin: '0 6px' }}>
              {product.price}
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>تومان/{product.unit}</span>
          </div>
          <Link
            to="/contact"
            style={{
              display: 'flex', alignItems: 'center', gap: '4px',
              padding: '8px 16px', borderRadius: '999px',
              background: 'rgba(21,101,192,0.12)',
              border: '1px solid rgba(21,101,192,0.25)',
              color: '#1976d2', fontSize: '0.85rem', fontWeight: 600,
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(21,101,192,0.25)';
              e.currentTarget.style.transform = 'translateX(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(21,101,192,0.12)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            استعلام قیمت
            <ArrowLeft size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
