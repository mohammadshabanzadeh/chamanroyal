import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import StatsSection from '../components/sections/StatsSection';
import CtaSection from '../components/sections/CtaSection';
import { FEATURES } from '../constants';
import { Shield, Truck, Wrench, Leaf } from 'lucide-react';

const iconMap = { Shield, Truck, Wrench, Leaf };

const teamMembers = [
  { name: 'علیرضا محمدی', role: 'مدیرعامل', exp: '۲۰ سال تجربه' },
  { name: 'مریم حسینی', role: 'مدیر فروش', exp: '۱۲ سال تجربه' },
  { name: 'رضا کرمی', role: 'سرپرست نصب', exp: '۱۵ سال تجربه' },
  { name: 'نیلوفر رضایی', role: 'طراح فنی', exp: '۸ سال تجربه' },
];

const values = [
  { icon: Award, title: 'کیفیت بی‌타협', desc: 'در هر مرحله تولید، کیفیت اولویت اول ماست' },
  { icon: Users, title: 'مشتری‌مداری', desc: 'رضایت مشتری معیار اصلی موفقیت ماست' },
  { icon: Target, title: 'دقت در اجرا', desc: 'هر پروژه با بالاترین دقت و تخصص اجرا می‌شود' },
  { icon: TrendingUp, title: 'نوآوری مستمر', desc: 'همواره به‌روزترین فناوری‌ها را به کار می‌بریم' },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: '130px',
        paddingBottom: '80px',
        background: 'linear-gradient(180deg, rgba(45,138,62,0.08) 0%, transparent 100%)',
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="badge">درباره چمن رویال</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.3, margin: '16px 0 24px' }}>
                پیشگام در چمن مصنوعی <span className="gradient-text">فوتبال</span> ایران
              </h1>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1rem', marginBottom: '20px' }}>
                چمن رویال در سال ۱۳۸۸ با تخصص در زمین‌های فوتبال مصنوعی تأسیس شد. با بیش از ۳۰۰۰ زمین فوتبال اجرا شده از زمین‌های ۵ نفره تا استادیوم‌های حرفه‌ای، ما تجربه‌ای بی‌نظیر در این صنعت داریم.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1rem' }}>
                تمام محصولات فوتبالی ما دارای تأییدیه FIFA Quality و FIFA Quality Pro هستند. از بهترین الیاف اروپایی استفاده می‌کنیم که در برابر شرایط آب‌وهوایی ایران کاملاً مقاوم است.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                height: '400px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(45,138,62,0.15), rgba(126,217,87,0.08))',
                border: '1px solid rgba(45,138,62,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
                {Array.from({ length: 25 }).map((_, i) => (
                  <path
                    key={i}
                    d={`M${8 + i * 16} 400 Q${6 + i * 16} ${320 - Math.sin(i * 0.9) * 60} ${10 + i * 16} ${220 - Math.cos(i * 0.7) * 80}`}
                    stroke="#2d8a3e"
                    strokeWidth="2.5"
                    fill="none"
                    opacity={0.2 + (i % 4) * 0.08}
                  />
                ))}
                <rect x="0" y="380" width="400" height="20" fill="#2d8a3e" opacity="0.15" />
                <text x="200" y="200" textAnchor="middle" fill="#7ed957" opacity="0.06"
                  fontSize="100" fontWeight="900" fontFamily="Vazirmatn">۱۵+</text>
                <text x="200" y="260" textAnchor="middle" fill="#7ed957" opacity="0.12"
                  fontSize="24" fontFamily="Vazirmatn">سال تجربه</text>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Values */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="badge">ارزش‌های ما</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '12px' }}>
              آنچه ما را <span className="gradient-text">متمایز</span> می‌کند
            </h2>
            <div className="divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  padding: '28px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '18px',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  width: '52px', height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(45,138,62,0.15)',
                  border: '1px solid rgba(45,138,62,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <v.icon size={22} color="#7ed957" />
                </div>
                <h3 style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: '8px' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="badge">تیم ما</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '12px' }}>
              متخصصان <span className="gradient-text">چمن رویال</span>
            </h2>
            <div className="divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px' }}>
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                style={{
                  padding: '32px 24px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  textAlign: 'center',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(126,217,87,0.25)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
              >
                <div style={{
                  width: '72px', height: '72px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2d8a3e, #1a5e2a)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '1.6rem', fontWeight: 800, color: 'white',
                  boxShadow: '0 8px 24px rgba(45,138,62,0.3)',
                }}>
                  {member.name[0]}
                </div>
                <h3 style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: '4px' }}>{member.name}</h3>
                <p style={{ color: '#7ed957', fontSize: '0.88rem', fontWeight: 600, marginBottom: '8px' }}>{member.role}</p>
                <span style={{
                  fontSize: '0.8rem', color: 'var(--text-muted)',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '3px 12px', borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  {member.exp}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
};

export default About;
