import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../constants';

const CtaSection = () => {
  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: 'linear-gradient(135deg, rgba(21,101,192,0.12) 0%, var(--glass-bg) 50%, rgba(21,101,192,0.08) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(21,101,192,0.2)',
            borderRadius: '28px',
            padding: 'clamp(40px, 6vw, 80px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: '-40px', right: '-40px',
            width: '300px', height: '300px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(21,101,192,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-40px', left: '-40px',
            width: '250px', height: '250px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(66,165,245,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span className="badge" style={{ fontSize: '0.9rem', padding: '8px 20px' }}>
              مشاوره رایگان
            </span>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              lineHeight: 1.3,
              margin: '16px 0 20px',
            }}>
              آماده ساخت{' '}
              <span className="gradient-text">زمین فوتبال</span>
              {' '}رویایی هستید؟
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              maxWidth: '520px',
              margin: '0 auto 40px',
              lineHeight: 1.8,
            }}>
              همین حالا با متخصصان ما تماس بگیرید — مشاوره رایگان، بازدید از محل و ارائه طرح اجرایی.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="btn btn-primary"
                style={{ padding: '16px 36px', fontSize: '1.05rem' }}
              >
                <Phone size={20} />
                تماس فوری
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                className="btn btn-glass"
                style={{ padding: '16px 36px', fontSize: '1.05rem' }}
              >
                <MessageCircle size={20} />
                واتساپ
              </a>
              <Link
                to="/contact"
                className="btn btn-outline"
                style={{ padding: '16px 36px', fontSize: '1.05rem' }}
              >
                فرم تماس
                <ArrowLeft size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
