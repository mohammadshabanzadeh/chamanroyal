import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';
import { NAV_LINKS, CONTACT_INFO } from '../../constants';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navBg = scrolled
    ? isDark
      ? 'rgba(6,12,24,0.93)'
      : 'rgba(248,250,255,0.93)'
    : 'transparent';

  const navBorder = scrolled
    ? isDark
      ? '1px solid rgba(96,180,255,0.1)'
      : '1px solid rgba(21,101,192,0.12)'
    : 'none';

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, right: 0, left: 0, zIndex: 1000,
          transition: 'all 0.4s ease',
          background: navBg,
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: navBorder,
          boxShadow: scrolled ? '0 4px 24px rgba(21,101,192,0.1)' : 'none',
        }}
      >
        <div className="container" style={{ padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
            <Link to="/"><Logo size="md" /></Link>

            {/* Desktop Nav */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '999px',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: location.pathname === link.path ? '#1976d2' : 'var(--text-secondary)',
                    background: location.pathname === link.path ? 'rgba(21,101,192,0.1)' : 'transparent',
                    border: location.pathname === link.path ? '1px solid rgba(21,101,192,0.25)' : '1px solid transparent',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    if (location.pathname !== link.path) {
                      e.currentTarget.style.color = '#1976d2';
                      e.currentTarget.style.background = 'rgba(21,101,192,0.07)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (location.pathname !== link.path) {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="desktop-nav">
              {/* Dark mode toggle */}
              <button
                onClick={toggle}
                style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: isDark ? 'rgba(96,180,255,0.1)' : 'rgba(21,101,192,0.08)',
                  border: isDark ? '1px solid rgba(96,180,255,0.2)' : '1px solid rgba(21,101,192,0.15)',
                  color: isDark ? '#60b4ff' : '#1565c0',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.25s ease',
                }}
                title={isDark ? 'حالت روشن' : 'حالت تاریک'}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="btn btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.9rem', gap: '6px' }}
              >
                <Phone size={16} />
                {CONTACT_INFO.phone}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-btn"
              style={{
                background: isDark ? 'rgba(96,180,255,0.08)' : 'rgba(21,101,192,0.08)',
                border: isDark ? '1px solid rgba(96,180,255,0.15)' : '1px solid rgba(21,101,192,0.15)',
                color: 'var(--text-primary)',
                padding: '8px', borderRadius: '10px', cursor: 'pointer',
                alignItems: 'center', justifyContent: 'center',
              }}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: isDark ? 'rgba(6,12,24,0.97)' : 'rgba(240,247,255,0.97)',
              backdropFilter: 'blur(20px)',
              display: 'flex', flexDirection: 'column',
              padding: '100px 32px 40px', gap: '8px',
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={link.path}
                  style={{
                    display: 'block', padding: '16px 20px',
                    fontSize: '1.2rem', fontWeight: 600,
                    color: location.pathname === link.path ? '#1976d2' : 'var(--text-secondary)',
                    borderRadius: '14px',
                    background: location.pathname === link.path ? 'rgba(21,101,192,0.1)' : 'transparent',
                    borderRight: location.pathname === link.path ? '3px solid #1976d2' : '3px solid transparent',
                    transition: 'all 0.2s',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <div style={{ marginTop: '16px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                onClick={toggle}
                style={{
                  padding: '12px 20px', borderRadius: '12px',
                  background: isDark ? 'rgba(96,180,255,0.1)' : 'rgba(21,101,192,0.08)',
                  border: isDark ? '1px solid rgba(96,180,255,0.2)' : '1px solid rgba(21,101,192,0.2)',
                  color: isDark ? '#60b4ff' : '#1565c0',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
                  fontSize: '0.95rem', fontFamily: 'Vazirmatn, sans-serif', fontWeight: 600,
                }}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                {isDark ? 'حالت روشن' : 'حالت تاریک'}
              </button>
            </div>

            <div style={{ marginTop: 'auto' }}>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '1rem' }}
              >
                <Phone size={18} />
                {CONTACT_INFO.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
