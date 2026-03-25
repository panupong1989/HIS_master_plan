import { useParams } from 'react-router-dom'

const screens = {
  'main-layout': { label: 'Main Dashboard', icon: '🖥️', file: '/examples/main-layout.html' },
  'registration': { label: 'Registration', icon: '📋', file: '/examples/registration.html' },
  'rights': { label: 'Rights Verification', icon: '🛡️', file: '/examples/rights.html' },
  'queue': { label: 'Queue Management', icon: '🎫', file: '/examples/queue.html' },
  'queue-display': { label: 'Queue Display (TV)', icon: '📺', file: '/examples/queue-display.html' },
  'workstation': { label: 'Doctor Workstation', icon: '🩺', file: '/examples/workstation.html' },
  'lab': { label: 'Lab Workstation', icon: '🔬', file: '/examples/lab.html' },
  'pharmacy': { label: 'Pharmacy', icon: '💊', file: '/examples/pharmacy.html' },
  'billing': { label: 'Billing & Cashier', icon: '💰', file: '/examples/billing.html' },
  'admin': { label: 'Admin Dashboard', icon: '📊', file: '/examples/admin.html' },
}

export default function PageHISExample() {
  const { screenId } = useParams()
  const current = screens[screenId] || screens['main-layout']

  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(145deg, #0f1923 0%, #1a2a3a 50%, #0d1620 100%)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Minimal header */}
      <div style={{
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        flexShrink: 0,
      }}>
        <span style={{ fontSize: 22 }}>{current.icon}</span>
        <div style={{
          fontSize: 15,
          fontWeight: 700,
          color: '#fff',
          fontFamily: "'Kanit', sans-serif",
        }}>{current.label}</div>
        <div style={{
          fontSize: 11,
          color: 'rgba(255,255,255,0.4)',
          fontFamily: "'JetBrains Mono', monospace",
        }}>Ethereal Guardian HIS</div>
      </div>

      {/* Full iframe */}
      <div style={{
        flex: 1,
        margin: '0 8px 8px',
        borderRadius: 10,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        background: '#fff',
        position: 'relative',
      }}>
        <iframe
          key={screenId}
          src={current.file}
          title={current.label}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            position: 'absolute',
            inset: 0,
          }}
        />
      </div>
    </div>
  )
}
