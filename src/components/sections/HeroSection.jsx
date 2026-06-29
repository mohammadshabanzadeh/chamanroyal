import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'var(--gradient-hero)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Background football field image */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1600&q=80&auto=format&fit=crop"
          alt="زمین فوتبال"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.18,
          }}
        />
        {/* Deep gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(5,15,7,0.97) 0%, rgba(10,26,13,0.88) 50%, rgba(5,15,7,0.95) 100%)',
        }} />
        {/* Green glow */}
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '-10%', right: '-5%',
            width: '600px', height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(45,138,62,0.3) 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute',
            bottom: '5%', left: '5%',
            width: '400px', height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(126,217,87,0.15) 0%, transparent 70%)',
          }}
        />
        {/* Grid lines like a football field */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(45,138,62,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45,138,62,0.04) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '120px 24px 160px' }}>
        <div style={{ maxWidth: '720px' }} className="hero-content">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '999px',
              background: 'rgba(126,217,87,0.1)',
              border: '1px solid rgba(126,217,87,0.25)',
              marginBottom: '28px',
            }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#7ed957', boxShadow: '0 0 8px #7ed957',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{ color: '#7ed957', fontSize: '0.9rem', fontWeight: 600 }}>
                متخصص چمن مصنوعی فوتبال — استاندارد FIFA
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.25,
              color: 'var(--text-primary)',
              marginBottom: '24px',
            }}
          >
            <span className="hero-title-line">
              متخصص چمن مصنوعی{' '}
              <span style={{
                background: 'linear-gradient(135deg, #7ed957, #2d8a3e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                فوتبال
              </span>
            </span>
            <br />
            با استاندارد FIFA
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.85,
              marginBottom: '40px',
              maxWidth: '560px',
            }}
          >
            بیش از ۳۰۰۰ زمین فوتبال در سراسر ایران — از زمین‌های ۵ نفره تا استادیوم‌های حرفه‌ای.
            کیفیت FIFA، نصب تخصصی و گارانتی ۱۰ ساله.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <Link to="/products" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
              مشاهده محصولات
              <ArrowLeft size={20} />
            </Link>
            <Link to="/gallery" className="btn btn-glass" style={{ fontSize: '1.05rem', padding: '16px 32px' }}>
              <Play size={18} />
              نمونه کارها
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="hero-social-proof"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '48px',
              padding: '16px 24px',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              width: 'fit-content',
            }}
          >
            <div style={{ display: 'flex' }}>
              {[1,2,3,4,5].map(i => (
                <div key={i} style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: `hsl(${120 + i * 20}, 50%, 30%)`,
                  border: '2px solid rgba(10,26,13,0.8)',
                  marginLeft: i > 1 ? '-8px' : '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: '#7ed957',
                }}>
                  {String.fromCharCode(1575 + i)}
                </div>
              ))}
            </div>
            <div>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '2px' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#c9a84c" color="#c9a84c" />)}
              </div>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                +۳۰۰۰ زمین فوتبال اجرا شده
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          cursor: 'pointer',
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem', letterSpacing: '0.1em' }}>اسکرول کنید</span>
        <div style={{
          width: '24px',
          height: '40px',
          borderRadius: '12px',
          border: '1.5px solid rgba(255,255,255,0.2)',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '6px',
        }}>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: '4px',
              height: '8px',
              borderRadius: '2px',
              background: '#7ed957',
            }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .hero-title-line { white-space: nowrap; }
        @media (max-width: 768px) {
          .hero-title-line { white-space: normal; }
          .hero-content { text-align: center; }
          .hero-content h1 { font-size: 2rem !important; }
          .hero-content p { margin-left: auto; margin-right: auto; }
          .hero-content > div[style*="display: flex"] { justify-content: center; }
          .hero-social-proof { width: 100% !important; justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
