import { motion } from 'framer-motion';
import { STATS } from '../../constants';

const StatsSection = () => {
  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(135deg, rgba(21,101,192,0.1) 0%, rgba(6,12,24,0) 50%, rgba(21,101,192,0.07) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(21,101,192,0.12) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 50%, rgba(66,165,245,0.08) 0%, transparent 60%)`,
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2px',
          background: 'var(--glass-border)',
          border: '1px solid var(--glass-border)',
          borderRadius: '24px',
          overflow: 'hidden',
          backdropFilter: 'blur(16px)',
        }}>
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: '40px 24px',
                textAlign: 'center',
                background: 'var(--glass-bg)',
                position: 'relative',
              }}
            >
              {i < STATS.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '20%',
                  bottom: '20%',
                  width: '1px',
                  background: 'var(--glass-border)',
                }} />
              )}
              <div style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #42a5f5, #1565c0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '8px',
                lineHeight: 1,
              }}>
                {stat.value}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 500 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
