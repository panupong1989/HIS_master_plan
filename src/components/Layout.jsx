import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'

const hisSubItems = [
  { path: '/', label: 'Patient Journey', emoji: '🏥', num: 1 },
  { path: '/registration', label: 'ลงทะเบียน / คัดกรอง', emoji: '📋', num: 2 },
  { path: '/opd', label: 'ห้องตรวจ OPD & ER', emoji: '🩺', num: 3 },
  { path: '/lab', label: 'Lab & รังสีวิทยา', emoji: '🔬', num: 4 },
  { path: '/pharmacy', label: 'เภสัชกรรม', emoji: '💊', num: 5 },
  { path: '/ipd', label: 'ผู้ป่วยใน / OR', emoji: '🛏️', num: 6 },
  { path: '/finance', label: 'การเงิน & บริหาร', emoji: '💰', num: 7 },
  { path: '/integration', label: 'เชื่อมต่อ & สรุป', emoji: '🔗', num: 8 },
]

const hisExampleSubItems = [
  { path: '/his-example/main-layout', label: 'Main Dashboard', emoji: '🖥️', num: 1 },
  { path: '/his-example/registration', label: 'Registration', emoji: '📋', num: 2 },
  { path: '/his-example/rights', label: 'Rights Verification', emoji: '🛡️', num: 3 },
  { path: '/his-example/queue', label: 'Queue Management', emoji: '🎫', num: 4 },
  { path: '/his-example/queue-display', label: 'Queue Display (TV)', emoji: '📺', num: 5 },
  { path: '/his-example/workstation', label: 'Doctor Workstation', emoji: '🩺', num: 6 },
  { path: '/his-example/lab', label: 'Lab Workstation', emoji: '🔬', num: 7 },
  { path: '/his-example/pharmacy', label: 'Pharmacy', emoji: '💊', num: 8 },
  { path: '/his-example/billing', label: 'Billing & Cashier', emoji: '💰', num: 9 },
  { path: '/his-example/admin', label: 'Admin Dashboard', emoji: '📊', num: 10 },
]

const mainNavItems = [
  { id: 'his', label: 'HIS Modules', emoji: '🏥', hasChildren: true },
  { id: 'team', path: '/team', label: 'Team', emoji: '👥' },
  { id: 'plan', path: '/plan', label: 'Plan', emoji: '📅' },
  { id: 'dashboard', path: '/dashboard', label: 'Dashboard', emoji: '📊' },
  { id: 'his-example', label: 'HIS Example', emoji: '🖥️', hasChildren: true },
]

export default function Layout({ children }) {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const [hisOpen, setHisOpen] = useState(true)
  const [hisExampleOpen, setHisExampleOpen] = useState(true)

  const isHisPage = ['/', '/registration', '/opd', '/lab', '/pharmacy', '/ipd', '/finance', '/integration'].includes(location.pathname)
  const isHisExamplePage = location.pathname.startsWith('/his-example')

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
      {/* Sidebar */}
      <nav style={{
        width: collapsed ? 68 : 260,
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #1a1f2e 0%, #151a28 50%, #111520 100%)',
        padding: '16px 0',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        boxShadow: '4px 0 24px rgba(0,0,0,0.3)',
        overflow: 'hidden',
        overflowY: 'auto',
      }}>
        {/* Logo area */}
        <div style={{
          padding: collapsed ? '12px 8px 16px' : '12px 20px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          marginBottom: 8,
          textAlign: collapsed ? 'center' : 'left',
        }}>
          <div style={{
            fontFamily: "'Kanit', sans-serif",
            fontWeight: 800,
            fontSize: collapsed ? 18 : 22,
            color: '#fff',
            letterSpacing: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            justifyContent: collapsed ? 'center' : 'flex-start',
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: 10,
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16,
              flexShrink: 0,
            }}>H</span>
            {!collapsed && 'HIS Project'}
          </div>
          {!collapsed && (
            <div style={{
              fontSize: 10,
              color: 'rgba(255,255,255,0.35)',
              marginTop: 4,
              fontFamily: "'JetBrains Mono', monospace",
              paddingLeft: 46,
            }}>
              Project Monitor v1.0
            </div>
          )}
        </div>

        {/* Nav items */}
        <div style={{ flex: 1, padding: '0 8px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* HIS Section */}
          <div>
            <button
              onClick={() => collapsed ? null : setHisOpen(!hisOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: collapsed ? '10px 0' : '10px 12px',
                justifyContent: collapsed ? 'center' : 'flex-start',
                borderRadius: 10,
                border: isHisPage ? '1px solid rgba(102,126,234,0.3)' : '1px solid transparent',
                background: isHisPage
                  ? 'linear-gradient(135deg, rgba(102,126,234,0.15), rgba(118,75,162,0.1))'
                  : 'transparent',
                color: isHisPage ? '#fff' : 'rgba(255,255,255,0.55)',
                fontSize: 13,
                fontWeight: isHisPage ? 700 : 500,
                cursor: 'pointer',
                width: '100%',
                transition: 'all 0.25s ease',
                fontFamily: 'inherit',
              }}
            >
              <span style={{ fontSize: collapsed ? 20 : 18, width: 28, textAlign: 'center', flexShrink: 0 }}>🏥</span>
              {!collapsed && (
                <>
                  <span style={{ flex: 1, textAlign: 'left' }}>HIS Modules</span>
                  <span style={{
                    fontSize: 10,
                    color: 'rgba(255,255,255,0.3)',
                    transform: hisOpen ? 'rotate(90deg)' : 'rotate(0)',
                    transition: 'transform 0.2s',
                  }}>▶</span>
                </>
              )}
            </button>

            {/* HIS Sub items */}
            {!collapsed && hisOpen && (
              <div style={{
                marginLeft: 20,
                borderLeft: '1px solid rgba(255,255,255,0.06)',
                marginTop: 2,
                paddingLeft: 0,
              }}>
                {hisSubItems.map((item) => {
                  const isActive = location.pathname === item.path
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '7px 10px 7px 14px',
                        borderRadius: 8,
                        textDecoration: 'none',
                        color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                        background: isActive ? 'rgba(102,126,234,0.2)' : 'transparent',
                        fontSize: 12,
                        fontWeight: isActive ? 600 : 400,
                        transition: 'all 0.2s ease',
                        position: 'relative',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      {isActive && (
                        <div style={{
                          position: 'absolute',
                          left: -1,
                          top: '25%',
                          bottom: '25%',
                          width: 2,
                          borderRadius: 2,
                          background: '#667eea',
                        }} />
                      )}
                      <span style={{ fontSize: 14, width: 22, textAlign: 'center', flexShrink: 0 }}>{item.emoji}</span>
                      <span style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        flex: 1,
                      }}>{item.label}</span>
                      <span style={{
                        fontSize: 9,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 700,
                        color: isActive ? '#667eea' : 'rgba(255,255,255,0.2)',
                        flexShrink: 0,
                      }}>{item.num}</span>
                    </NavLink>
                  )
                })}
              </div>
            )}
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '8px 4px' }} />

          {/* Main nav items: Team, Plan, Dashboard */}
          {mainNavItems.filter(i => !i.hasChildren).map((item) => {
            const isActive = location.pathname === item.path
            return (
              <NavLink
                key={item.id}
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: collapsed ? '10px 0' : '10px 12px',
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  borderRadius: 10,
                  textDecoration: 'none',
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.55)',
                  background: isActive
                    ? item.id === 'team' ? 'linear-gradient(135deg, rgba(46,213,115,0.15), rgba(39,174,96,0.1))'
                    : item.id === 'plan' ? 'linear-gradient(135deg, rgba(255,165,2,0.15), rgba(255,130,0,0.1))'
                    : 'linear-gradient(135deg, rgba(0,168,255,0.15), rgba(0,123,255,0.1))'
                    : 'transparent',
                  border: isActive
                    ? item.id === 'team' ? '1px solid rgba(46,213,115,0.3)'
                    : item.id === 'plan' ? '1px solid rgba(255,165,2,0.3)'
                    : '1px solid rgba(0,168,255,0.3)'
                    : '1px solid transparent',
                  transition: 'all 0.25s ease',
                  fontSize: 13,
                  fontWeight: isActive ? 700 : 500,
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'transparent'
                }}
              >
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '20%',
                    bottom: '20%',
                    width: 3,
                    borderRadius: '0 3px 3px 0',
                    background: item.id === 'team' ? '#2ed573' : item.id === 'plan' ? '#ffa502' : '#0984e3',
                  }} />
                )}
                <span style={{ fontSize: collapsed ? 20 : 18, width: 28, textAlign: 'center', flexShrink: 0 }}>
                  {item.emoji}
                </span>
                {!collapsed && (
                  <span style={{ whiteSpace: 'nowrap' }}>{item.label}</span>
                )}
              </NavLink>
            )
          })}

          {/* Divider before HIS Example */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '8px 4px' }} />

          {/* HIS Example Section (expandable like HIS Modules) */}
          <div>
            <button
              onClick={() => collapsed ? null : setHisExampleOpen(!hisExampleOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: collapsed ? '10px 0' : '10px 12px',
                justifyContent: collapsed ? 'center' : 'flex-start',
                borderRadius: 10,
                border: isHisExamplePage ? '1px solid rgba(155,89,182,0.3)' : '1px solid transparent',
                background: isHisExamplePage
                  ? 'linear-gradient(135deg, rgba(155,89,182,0.15), rgba(142,68,173,0.1))'
                  : 'transparent',
                color: isHisExamplePage ? '#fff' : 'rgba(255,255,255,0.55)',
                fontSize: 13,
                fontWeight: isHisExamplePage ? 700 : 500,
                cursor: 'pointer',
                width: '100%',
                transition: 'all 0.25s ease',
                fontFamily: 'inherit',
              }}
            >
              <span style={{ fontSize: collapsed ? 20 : 18, width: 28, textAlign: 'center', flexShrink: 0 }}>🖥️</span>
              {!collapsed && (
                <>
                  <span style={{ flex: 1, textAlign: 'left' }}>HIS Example</span>
                  <span style={{
                    fontSize: 10,
                    color: 'rgba(255,255,255,0.3)',
                    transform: hisExampleOpen ? 'rotate(90deg)' : 'rotate(0)',
                    transition: 'transform 0.2s',
                  }}>▶</span>
                </>
              )}
            </button>

            {/* HIS Example Sub items */}
            {!collapsed && hisExampleOpen && (
              <div style={{
                marginLeft: 20,
                borderLeft: '1px solid rgba(255,255,255,0.06)',
                marginTop: 2,
                paddingLeft: 0,
              }}>
                {hisExampleSubItems.map((item) => {
                  const isActive = location.pathname === item.path
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '7px 10px 7px 14px',
                        borderRadius: 8,
                        textDecoration: 'none',
                        color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                        background: isActive ? 'rgba(155,89,182,0.2)' : 'transparent',
                        fontSize: 12,
                        fontWeight: isActive ? 600 : 400,
                        transition: 'all 0.2s ease',
                        position: 'relative',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      {isActive && (
                        <div style={{
                          position: 'absolute',
                          left: -1,
                          top: '25%',
                          bottom: '25%',
                          width: 2,
                          borderRadius: 2,
                          background: '#9b59b6',
                        }} />
                      )}
                      <span style={{ fontSize: 14, width: 22, textAlign: 'center', flexShrink: 0 }}>{item.emoji}</span>
                      <span style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        flex: 1,
                      }}>{item.label}</span>
                      <span style={{
                        fontSize: 9,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 700,
                        color: isActive ? '#9b59b6' : 'rgba(255,255,255,0.2)',
                        flexShrink: 0,
                      }}>{item.num}</span>
                    </NavLink>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            margin: '8px 12px',
            padding: '8px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8,
            color: 'rgba(255,255,255,0.4)',
            cursor: 'pointer',
            fontSize: 16,
            transition: 'all 0.2s',
          }}
        >
          {collapsed ? '▶' : '◀'}
        </button>

        {/* Footer */}
        {!collapsed && (
          <div style={{
            padding: '12px 16px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            fontSize: 10,
            color: 'rgba(255,255,255,0.25)',
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            งบประมาณ 7.8M THB
            <br />18 แผนก · 103 ฟังก์ชัน
          </div>
        )}
      </nav>

      {/* Main content */}
      <main style={{
        flex: 1,
        marginLeft: collapsed ? 68 : 260,
        transition: 'margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        minHeight: '100vh',
      }}>
        {children}
      </main>
    </div>
  )
}
