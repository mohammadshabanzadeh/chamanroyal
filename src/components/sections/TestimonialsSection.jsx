import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { TESTIMONIALS } from '../../constants';

const TestimonialsSection = () => {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeader
          badge="نظرات مشتریان"
          title="آنچه مشتریان"
          highlight="می‌گویند"
          subtitle="رضایت مشتری بالاترین ارزش برای ماست"
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              style={{
                padding: '32px',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(126,217,87,0.2)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
            >
              {/* Quote icon */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                opacity: 0.08,
              }}>
                <Quote size={60} color="#7ed957" />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(t.rating)].map((_, si) => (
                  <Star key={si} size={16} fill="#c9a84c" color="#c9a84c" />
                ))}
              </div>

              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                marginBottom: '24px',
                position: 'relative',
                zIndex: 1,
              }}>
                "{t.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2d8a3e, #1a5e2a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'white',
                  flexShrink: 0,
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.95rem' }}>{t.name}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
