import { motion } from 'framer-motion';
import { Shield, Truck, Wrench, Leaf } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { FEATURES } from '../../constants';

const iconMap = { Shield, Truck, Wrench, Leaf };

const FeaturesSection = () => {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative bg */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(45,138,62,0.4), transparent)',
      }} />

      <div className="container">
        <SectionHeader
          badge="چرا چمن رویال؟"
          title="مزایای انتخاب"
          highlight="محصولات ما"
          subtitle="با بیش از ۱۵ سال تجربه، کیفیت را در هر تار چمن حس کنید"
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
        }}>
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                style={{
                  padding: '32px 28px',
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '20px',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(126,217,87,0.25)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Corner accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '80px',
                  height: '80px',
                  background: 'radial-gradient(circle at top right, rgba(45,138,62,0.15), transparent)',
                  borderRadius: '0 20px 0 80px',
                }} />

                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(45,138,62,0.25), rgba(126,217,87,0.1))',
                  border: '1px solid rgba(45,138,62,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  {Icon && <Icon size={24} color="#7ed957" />}
                </div>

                <h3 style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '10px' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
