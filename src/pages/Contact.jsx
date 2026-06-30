import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, Camera, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', phone: '', subject: '', message: '' });
  };

  const contactItems = [
    { icon: Phone, label: 'تلفن ثابت', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
    { icon: Phone, label: 'موبایل', value: CONTACT_INFO.mobile, href: `tel:${CONTACT_INFO.mobile}` },
    { icon: Mail, label: 'ایمیل', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
    { icon: MapPin, label: 'آدرس', value: CONTACT_INFO.address, href: null },
    { icon: Clock, label: 'ساعات کاری', value: CONTACT_INFO.workingHours, href: null },
  ];

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.25s, box-shadow 0.25s',
    fontFamily: 'Vazirmatn, sans-serif',
    direction: 'rtl',
  };

  return (
    <>
      {/* Header */}
      <section style={{
        paddingTop: '130px',
        paddingBottom: '60px',
        background: 'linear-gradient(180deg, rgba(45,138,62,0.08) 0%, transparent 100%)',
        textAlign: 'center',
      }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge">تماس با ما</span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--text-primary)', marginTop: '12px' }}>
              با ما در <span className="gradient-text">ارتباط</span> باشید
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: '16px auto 0', maxWidth: '500px', lineHeight: 1.8 }}>
              کارشناسان ما آماده پاسخگویی و ارائه مشاوره رایگان هستند
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)', paddingTop: '40px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '40px',
            alignItems: 'start',
          }}
          className="contact-grid"
          >
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div style={{
                padding: '36px',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                marginBottom: '24px',
              }}>
                <h3 style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.15rem', marginBottom: '28px' }}>
                  اطلاعات تماس
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {contactItems.map(({ icon: Icon, label, value, href }, i) => (
                    <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '40px', height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(45,138,62,0.15)',
                        border: '1px solid rgba(45,138,62,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Icon size={16} color="#7ed957" />
                      </div>
                      <div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '2px' }}>{label}</div>
                        {href ? (
                          <a href={href} style={{
                            color: 'var(--text-secondary)', fontSize: '0.92rem',
                            transition: 'color 0.2s',
                          }}
                            onMouseEnter={e => e.currentTarget.style.color = '#7ed957'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                          >{value}</a>
                        ) : (
                          <span style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div style={{
                padding: '24px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
              }}>
                <h4 style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: '16px', fontSize: '0.95rem' }}>
                  شبکه‌های اجتماعی
                </h4>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {[
                    { icon: Camera, href: SOCIAL_LINKS.instagram, label: 'Instagram', color: '#e1306c' },
                    { icon: MessageCircle, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp', color: '#25d366' },
                    { icon: Send, href: SOCIAL_LINKS.telegram, label: 'Telegram', color: '#0088cc' },
                  ].map(({ icon: Icon, href, label, color }) => (
                    <a key={label} href={href} aria-label={label}
                      style={{
                        width: '44px', height: '44px', borderRadius: '12px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--text-secondary)',
                        transition: 'all 0.25s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = color;
                        e.currentTarget.style.borderColor = color;
                        e.currentTarget.style.background = `${color}18`;
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div style={{
                padding: '40px',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
              }}>
                <h3 style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '32px' }}>
                  ارسال پیام
                </h3>

                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      padding: '14px 20px',
                      background: 'rgba(45,138,62,0.15)',
                      border: '1px solid rgba(45,138,62,0.3)',
                      borderRadius: '12px',
                      color: '#7ed957',
                      marginBottom: '24px',
                      fontSize: '0.95rem',
                      textAlign: 'center',
                    }}
                  >
                    ✓ پیام شما با موفقیت ارسال شد. به زودی با شما تماس می‌گیریم.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-grid">
                    <div>
                      <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '8px' }}>
                        نام و نام خانوادگی *
                      </label>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange} required
                        placeholder="مثال: علی رضایی"
                        style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = 'rgba(126,217,87,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(126,217,87,0.08)'; }}
                        onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '8px' }}>
                        شماره تماس *
                      </label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange} required
                        placeholder="۰۹۱۲..."
                        style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = 'rgba(126,217,87,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(126,217,87,0.08)'; }}
                        onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '8px' }}>
                      موضوع پیام
                    </label>
                    <input
                      type="text" name="subject" value={form.subject} onChange={handleChange}
                      placeholder="استعلام قیمت چمن ورزشی"
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'rgba(126,217,87,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(126,217,87,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '8px' }}>
                      پیام شما *
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} required
                      placeholder="توضیحات پروژه، متراژ موردنیاز، سوالات..."
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                      onFocus={e => { e.target.style.borderColor = 'rgba(126,217,87,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(126,217,87,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1rem' }}
                  >
                    <Send size={18} />
                    ارسال پیام
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
};

export default Contact;
