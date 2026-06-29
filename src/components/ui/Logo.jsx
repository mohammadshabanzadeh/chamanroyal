const Logo = ({ size = 'md', showText = true }) => {
  const sizes = {
    sm: { icon: 32, font: '1rem' },
    md: { icon: 42, font: '1.2rem' },
    lg: { icon: 56, font: '1.5rem' },
  };
  const s = sizes[size];

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#42a5f5" />
            <stop offset="100%" stopColor="#1565c0" />
          </linearGradient>
          <linearGradient id="crownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8c96a" />
            <stop offset="100%" stopColor="#c9a84c" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <circle cx="28" cy="28" r="27" fill="url(#logoGrad)" opacity="0.15" />
        <circle cx="28" cy="28" r="27" stroke="url(#logoGrad)" strokeWidth="1.5" fill="none" />
        <path d="M14 22 L18 30 L28 18 L38 30 L42 22 L40 38 H16 L14 22Z" fill="url(#crownGrad)" filter="url(#glow)" />
        <path d="M18 38 Q18 33 20 30 Q21 33 20 38" fill="url(#logoGrad)" />
        <path d="M23 38 Q22 31 25 27 Q27 31 25 38" fill="url(#logoGrad)" />
        <path d="M28 38 Q27 30 30 26 Q32 30 30 38" fill="url(#logoGrad)" />
        <path d="M33 38 Q33 31 36 27 Q37 31 36 38" fill="url(#logoGrad)" />
        <path d="M37 38 Q38 33 40 30 Q40 33 39 38" fill="url(#logoGrad)" />
        <rect x="13" y="38" width="30" height="2.5" rx="1.25" fill="url(#logoGrad)" opacity="0.7" />
      </svg>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{
            fontSize: s.font, fontWeight: 800,
            background: 'linear-gradient(135deg, #42a5f5, #1565c0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            چمن رویال
          </span>
          <span style={{ fontSize: '0.65rem', color: '#c9a84c', fontWeight: 500, letterSpacing: '0.05em' }}>
            CHAMAN ROYAL
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
