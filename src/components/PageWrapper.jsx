export function PageWrapper({ children }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #4a90b8 0%, #5ba3cc 20%, #6bb5d8 40%, #5a9ec5 60%, #4889ae 80%, #3d7a9e 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: '32px 32px 40px',
    }}>
      {/* Grid pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04,
        backgroundImage: `repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 40px),
                          repeating-linear-gradient(90deg, #fff 0px, transparent 1px, transparent 40px)`,
      }} />
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -60, left: -60, width: 250, height: 250, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.06), transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}

export function PageHeader({ title, subtitle, badge, emoji }) {
  return (
    <header style={{
      marginBottom: 28,
      animation: 'slideInLeft 0.6s ease',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <span style={{ fontSize: 40 }}>{emoji}</span>
            <h1 style={{
              fontSize: 34,
              fontWeight: 900,
              color: '#fff',
              margin: 0,
              fontFamily: "'Kanit', sans-serif",
              textShadow: '0 2px 20px rgba(0,0,0,0.15)',
              lineHeight: 1.2,
            }}>
              {title}
            </h1>
          </div>
          <p style={{
            fontSize: 14,
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.6,
            maxWidth: 500,
          }}>
            {subtitle}
          </p>
        </div>
        {badge && (
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(12px)',
            borderRadius: 16,
            padding: '14px 22px',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            animation: 'slideInRight 0.6s ease 0.2s both',
          }}>
            <div style={{
              fontFamily: "'Kanit', sans-serif",
              fontWeight: 700,
              fontSize: 18,
              color: '#fff',
            }}>
              {badge.title}
            </div>
            <div style={{
              fontSize: 12,
              color: 'rgba(255,255,255,0.7)',
              marginTop: 2,
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              {badge.sub}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export function GlassCard({ children, style, delay = 0 }) {
  return (
    <div style={{
      background: 'linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))',
      backdropFilter: 'blur(16px)',
      borderRadius: 18,
      border: '1px solid rgba(255,255,255,0.2)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.2)',
      overflow: 'hidden',
      animation: `fadeInUp 0.5s ease ${delay}s both`,
      ...style,
    }}>
      {children}
    </div>
  )
}

export function SectionTitle({ children, mono }) {
  return (
    <div style={{
      fontSize: 10,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.5)',
      fontFamily: "'JetBrains Mono', monospace",
      letterSpacing: 1.5,
      textTransform: 'uppercase',
      marginBottom: mono ? 8 : 12,
    }}>
      {children}
    </div>
  )
}

export function FeatureList({ features, accentColor = '#5bc0de' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {features.map((f, i) => (
        <div key={i} style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 10,
          padding: '6px 0',
          borderBottom: i < features.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}>
          <div style={{
            width: 22,
            height: 22,
            borderRadius: 6,
            background: `linear-gradient(135deg, ${accentColor}, ${accentColor}88)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 10,
            color: '#fff',
            fontWeight: 800,
            flexShrink: 0,
            fontFamily: "'JetBrains Mono', monospace",
            boxShadow: `0 2px 6px ${accentColor}44`,
            marginTop: 1,
          }}>
            {i + 1}
          </div>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.88)', lineHeight: 1.5 }}>{f}</span>
        </div>
      ))}
    </div>
  )
}

export function StatBox({ label, value, sub }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.08)',
      borderRadius: 12,
      padding: '14px 16px',
      border: '1px solid rgba(255,255,255,0.1)',
      textAlign: 'center',
      flex: '1 1 140px',
    }}>
      <div style={{
        fontSize: 28,
        fontWeight: 900,
        color: '#fff',
        fontFamily: "'Kanit', sans-serif",
      }}>
        {value}
      </div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>
        {label}
      </div>
      {sub && (
        <div style={{
          fontSize: 10,
          color: 'rgba(255,255,255,0.45)',
          marginTop: 2,
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          {sub}
        </div>
      )}
    </div>
  )
}
