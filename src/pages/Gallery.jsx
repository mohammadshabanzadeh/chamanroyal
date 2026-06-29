import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CtaSection from '../components/sections/CtaSection';
import { GALLERY_ITEMS } from '../constants';

const GALLERY_CATS = ['همه', 'فوتبال', 'فوتسال', 'ورزشی', 'دکوراتیو'];

const GalleryCard = ({ item, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    whileHover={{ y: -6 }}
    style={{
      background: 'var(--glass-bg)',
      backdropFilter: 'blur(16px)',
      border: '1px solid var(--glass-border)',
      borderRadius: '20px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'border-color 0.3s',
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(21,101,192,0.35)'}
    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--glass-border)'}
  >
    <div style={{
      height: '220px',
      background: 'linear-gradient(160deg, rgba(21,101,192,0.12), rgba(66,165,245,0.2))',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
        />
      )}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(6,12,24,0.65) 0%, transparent 55%)',
      }} />

      <span style={{
        position: 'absolute', top: '14px', right: '14px',
        padding: '4px 12px', borderRadius: '999px',
        fontSize: '0.78rem', fontWeight: 600,
        background: 'rgba(21,101,192,0.25)',
        border: '1px solid rgba(21,101,192,0.4)',
        color: '#60b4ff',
        backdropFilter: 'blur(8px)',
      }}>
        {item.category}
      </span>
    </div>

    <div style={{ padding: '18px 20px' }}>
      <h3 style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>
        {item.title}
      </h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem' }}>
        پروژه شماره {item.id.toString().padStart(2, '0')}
      </p>
    </div>
  </motion.div>
);

const Gallery = () => {
  const [activecat, setActivecat] = useState('همه');

  const filtered = activecat === 'همه'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category === activecat);

  return (
    <>
      <section style={{
        paddingTop: '130px',
        paddingBottom: '60px',
        background: 'linear-gradient(180deg, rgba(21,101,192,0.08) 0%, transparent 100%)',
        textAlign: 'center',
      }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge">نمونه کارها</span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--text-primary)', marginTop: '12px' }}>
              پروژه‌های <span className="gradient-text">اجرا شده</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: '16px auto 0', maxWidth: '500px', lineHeight: 1.8 }}>
              نگاهی به نمونه کارهای موفق ما در سراسر کشور بیندازید
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)', paddingTop: '40px' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '48px' }}>
            {GALLERY_CATS.map(cat => (
              <button
                key={cat}
                onClick={() => setActivecat(cat)}
                style={{
                  padding: '10px 22px', borderRadius: '999px',
                  fontSize: '0.9rem', fontWeight: 600,
                  cursor: 'pointer', fontFamily: 'Vazirmatn, sans-serif',
                  transition: 'all 0.25s', border: '1px solid',
                  background: activecat === cat ? 'linear-gradient(135deg, #1565c0, #0d47a1)' : 'var(--glass-bg)',
                  borderColor: activecat === cat ? 'transparent' : 'var(--glass-border)',
                  color: activecat === cat ? 'white' : 'var(--text-secondary)',
                  boxShadow: activecat === cat ? '0 4px 16px rgba(21,101,192,0.4)' : 'none',
                }}
              >{cat}</button>
            ))}
          </div>

          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            <AnimatePresence>
              {filtered.map((item, i) => (
                <GalleryCard key={item.id} item={item} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <CtaSection />
    </>
  );
};

export default Gallery;
