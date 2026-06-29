import { motion } from 'framer-motion';

const SectionHeader = ({ badge, title, highlight, subtitle, center = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: center ? 'center' : 'right', marginBottom: '56px' }}
    >
      {badge && (
        <div style={{ display: 'flex', justifyContent: center ? 'center' : 'flex-end', marginBottom: '12px' }}>
          <span className="badge">{badge}</span>
        </div>
      )}
      <h2 style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
        fontWeight: 800,
        color: 'var(--text-primary)',
        lineHeight: 1.3,
        marginBottom: '16px',
      }}>
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      <div className="divider" style={{ margin: center ? '0 auto 16px' : '0 0 16px' }} />
      {subtitle && (
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.05rem',
          lineHeight: 1.8,
          maxWidth: '560px',
          margin: center ? '16px auto 0' : '16px 0 0',
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
