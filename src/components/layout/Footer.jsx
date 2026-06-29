import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Camera, Send, Play, MessageCircle } from 'lucide-react';
import Logo from '../ui/Logo';
import { CONTACT_INFO, SOCIAL_LINKS, NAV_LINKS } from '../../constants';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--glass-border)',
      padding: '80px 0 0',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px', marginBottom: '60px',
        }}>
          <div style={{ maxWidth: '280px' }}>
            <Logo size="md" />
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: '20px', fontSize: '0.95rem' }}>
              چمن رویال با بیش از ۱۵ سال تجربه، پیشرو در تولید و نصب چمن مصنوعی با کیفیت در ایران.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              {[
                { icon: Camera, href: SOCIAL_LINKS.instagram, label: 'Instagram', color: '#e1306c' },
                { icon: Send, href: SOCIAL_LINKS.telegram, label: 'Telegram', color: '#0088cc' },
                { icon: MessageCircle, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp', color: '#25d366' },
                { icon: Play, href: SOCIAL_LINKS.youtube, label: 'YouTube', color: '#ff0000' },
              ].map(({ icon: Icon, href, label, color }) => (
                <a key={label} href={href} aria-label={label} style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-secondary)', transition: 'all 0.25s ease',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = color;
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.background = `${color}18`;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                    e.currentTarget.style.background = 'var(--glass-bg)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: '20px', fontSize: '1rem' }}>دسترسی سریع</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} style={{
                    color: 'var(--text-secondary)', fontSize: '0.95rem',
                    transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '8px',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#1976d2'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <span style={{ color: '#42a5f5', fontSize: '0.7rem' }}>◆</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: '20px', fontSize: '1rem' }}>خدمات ما</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['چمن دکوراتیو', 'چمن ورزشی', 'چمن پشت‌بامی', 'چمن باغچه‌ای', 'نصب و اجرا', 'مشاوره رایگان'].map(s => (
                <li key={s}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#42a5f5', fontSize: '0.7rem' }}>◆</span>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: '20px', fontSize: '1rem' }}>اطلاعات تماس</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: Phone, text: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
                { icon: Phone, text: CONTACT_INFO.mobile, href: `tel:${CONTACT_INFO.mobile}` },
                { icon: Mail, text: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                { icon: MapPin, text: CONTACT_INFO.address },
              ].map(({ icon: Icon, text, href }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    background: 'rgba(21,101,192,0.1)', border: '1px solid rgba(21,101,192,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={14} color="#42a5f5" />
                  </div>
                  {href ? (
                    <a href={href} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#1976d2'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >{text}</a>
                  ) : (
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--glass-border)', padding: '24px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>© ۱۴۰۴ چمن رویال — تمامی حقوق محفوظ است.</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{CONTACT_INFO.workingHours}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
