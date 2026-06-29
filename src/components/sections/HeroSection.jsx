import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Star, CheckCircle } from 'lucide-react';

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
      {/* Background effects */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <motion.div
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '-20%', right: '-10%',
            width: '700px', height: '700px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(21,101,192,0.2) 0%, transparent 65%)',
          }}
        />
        <motion.div
          animate={{ opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          style={{
            position: 'absolute', bottom: '0%', left: '-5%',
            width: '500px', height: '500px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(66,165,245,0.15) 0%, transparent 65%)',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(21,101,192,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(21,101,192,0.04) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '120px 24px 100px' }}>
        <div className="hero-grid">

          {/* Right: Text */}
          <div className="hero-text">
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '8px 20px', borderRadius: '999px',
                background: 'rgba(21,101,192,0.1)', border: '1px solid rgba(21,101,192,0.2)',
                marginBottom: '28px',
              }}>
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: '#42a5f5', boxShadow: '0 0 8px #42a5f5',
                  animation: 'pulse 2s infinite',
                }} />
                <span style={{ color: '#1976d2', fontSize: '0.9rem', fontWeight: 600 }}>
                  متخصص چمن مصنوعی فوتبال — استاندارد FIFA
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.25, color: 'var(--text-primary)', marginBottom: '24px' }}
            >
              <span className="hero-title-line">
                متخصص چمن مصنوعی{' '}
                <span style={{ background: 'linear-gradient(135deg, #42a5f5, #1565c0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  فوتبال
                </span>
              </span>
              <br />با استاندارد FIFA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '32px', maxWidth: '520px' }}
            >
              بیش از ۳۰۰۰ زمین فوتبال در سراسر ایران — از زمین‌های ۵ نفره تا استادیوم‌های حرفه‌ای.
              کیفیت FIFA، نصب تخصصی و گارانتی ۱۰ ساله.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}
              className="hero-checklist"
            >
              {['تأیید شده توسط FIFA', 'گارانتی ۱۰ ساله', 'نصب تخصصی در سراسر ایران'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="#42a5f5" />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}
              className="hero-btns"
            >
              <Link to="/products" className="btn btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
                مشاهده محصولات <ArrowLeft size={18} />
              </Link>
              <Link to="/gallery" className="btn btn-glass" style={{ fontSize: '1rem', padding: '14px 28px' }}>
                <Play size={16} /> نمونه کارها
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="hero-social-proof"
              style={{
                display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
                gap: '8px', marginTop: '40px', padding: '14px 24px',
                background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
                border: '1px solid var(--glass-border)', borderRadius: '14px',
              }}
            >
              <div style={{ display: 'flex' }}>
                {[1,2,3,4,5].map(i => (
                  <div key={i} style={{
                    width: '34px', height: '34px', borderRadius: '50%',
                    background: `hsl(${210 + i * 10}, 60%, 35%)`,
                    border: '2px solid var(--bg-primary)',
                    marginLeft: i > 1 ? '-8px' : '0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.7rem', fontWeight: 700, color: '#60b4ff',
                  }}>
                    {String.fromCharCode(1575 + i)}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '2px', justifyContent: 'center' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#c9a84c" color="#c9a84c" />)}
                </div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>+۳۰۰۰ زمین فوتبال اجرا شده</span>
              </div>
            </motion.div>
          </div>

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hero-image-wrap"
          >
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: '-16px',
                background: 'radial-gradient(ellipse, rgba(21,101,192,0.25) 0%, transparent 70%)',
                borderRadius: '32px', filter: 'blur(20px)',
              }} />
              <div style={{
                position: 'relative', borderRadius: '24px', overflow: 'hidden',
                border: '1px solid rgba(21,101,192,0.25)',
                boxShadow: '0 32px 80px rgba(21,101,192,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
              }}>
                <img
                  src="/images/turf-football-1.jpg"
                  alt="زمین فوتبال چمن مصنوعی"
                  style={{ width: '100%', height: '480px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(21,101,192,0.3) 0%, transparent 50%)' }} />
                <div style={{
                  position: 'absolute', bottom: '20px', right: '20px',
                  padding: '8px 16px',
                  background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(21,101,192,0.2)', borderRadius: '12px',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}>
                  <span style={{ fontSize: '1.1rem' }}>⚽</span>
                  <div>
                    <div style={{ color: '#1565c0', fontSize: '0.75rem', fontWeight: 700 }}>استاندارد FIFA</div>
                    <div style={{ color: '#3d5a80', fontSize: '0.68rem' }}>تأیید شده</div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', top: '-20px', left: '-20px', padding: '14px 18px',
                  background: 'var(--glass-bg)', backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(21,101,192,0.2)', borderRadius: '16px',
                  boxShadow: '0 12px 40px rgba(21,101,192,0.15)', minWidth: '130px',
                }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#1565c0', lineHeight: 1 }}>+۳۰۰۰</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', marginTop: '4px' }}>زمین اجرا شده</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                style={{
                  position: 'absolute', bottom: '-20px', left: '-20px', padding: '14px 18px',
                  background: 'var(--glass-bg)', backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(201,168,76,0.3)', borderRadius: '16px',
                  boxShadow: '0 12px 40px rgba(21,101,192,0.12)', minWidth: '130px',
                }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#c9a84c', lineHeight: 1 }}>۱۵+</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', marginTop: '4px' }}>سال تجربه</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '28px', left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>اسکرول کنید</span>
        <div style={{ width: '24px', height: '38px', borderRadius: '12px', border: '1.5px solid rgba(21,101,192,0.3)', display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: '4px', height: '8px', borderRadius: '2px', background: '#42a5f5' }} />
        </div>
      </motion.div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .hero-title-line { white-space: nowrap; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        @media (max-width: 1024px) { .hero-grid { gap: 40px; } }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .hero-image-wrap { order: -1; }
          .hero-image-wrap img { height: 260px !important; }
          .hero-title-line { white-space: normal; }
          .hero-text { text-align: center; }
          .hero-text h1 { font-size: 2rem !important; }
          .hero-text p { margin-left: auto; margin-right: auto; }
          .hero-checklist { align-items: center; }
          .hero-btns { justify-content: center; }
          .hero-social-proof { width: 100% !important; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
