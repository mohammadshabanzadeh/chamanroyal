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
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(126,217,87,0.3)';
        e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(126,217,87,0.1)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Image */}
      <div style={{
        height: '220px',
        background: `linear-gradient(135deg, ${product.color}22, ${product.color}44)`,
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
        {/* overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: product.image
            ? 'linear-gradient(to top, rgba(5,15,7,0.75) 0%, rgba(0,0,0,0.15) 60%)'
            : `linear-gradient(135deg, ${product.color}22, ${product.color}44)`,
        }} />

        {/* Badge */}
        {product.badge && (
          <span style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            padding: '4px 12px',
            borderRadius: '999px',
            fontSize: '0.78rem',
            fontWeight: 700,
            background: product.badge === 'پرفروش' ? 'rgba(201,168,76,0.25)'
              : product.badge === 'جدید' ? 'rgba(45,138,62,0.25)'
              : 'rgba(126,217,87,0.2)',
            border: `1px solid ${product.badge === 'پرفروش' ? 'rgba(201,168,76,0.5)'
              : product.badge === 'جدید' ? 'rgba(45,138,62,0.5)'
              : 'rgba(126,217,87,0.4)'}`,
            color: product.badge === 'پرفروش' ? '#e8c96a' : '#7ed957',
            backdropFilter: 'blur(8px)',
          }}>
            {product.badge}
          </span>
        )}

        {/* Height indicator */}
        <span style={{
          position: 'absolute',
          top: '14px',
          left: '14px',
          padding: '4px 10px',
          borderRadius: '999px',
          fontSize: '0.75rem',
          fontWeight: 600,
          background: 'rgba(0,0,0,0.4)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'rgba(240,249,241,0.7)',
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
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              background: 'rgba(255,255,255,0.05)',
              padding: '3px 10px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.08)',
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

        {/* Features */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {product.features.slice(0, 3).map(f => (
            <span key={f} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.78rem',
              color: 'var(--text-secondary)',
              background: 'rgba(45,138,62,0.08)',
              border: '1px solid rgba(45,138,62,0.15)',
              padding: '3px 8px',
              borderRadius: '999px',
            }}>
              <Check size={10} color="#7ed957" />
              {f}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>از</span>
            <span style={{
              fontSize: '1.2rem',
              fontWeight: 800,
              color: '#7ed957',
              margin: '0 6px',
            }}>
              {product.price}
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>تومان/{product.unit}</span>
          </div>
          <Link
            to="/contact"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '8px 16px',
              borderRadius: '999px',
              background: 'rgba(45,138,62,0.2)',
              border: '1px solid rgba(45,138,62,0.3)',
              color: '#7ed957',
              fontSize: '0.85rem',
              fontWeight: 600,
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(45,138,62,0.35)';
              e.currentTarget.style.transform = 'translateX(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(45,138,62,0.2)';
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
