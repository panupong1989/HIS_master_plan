import { PageWrapper, PageHeader, GlassCard } from '../components/PageWrapper'

const TEAMS = [
  {
    label: 'Management', icon: '👑', color: '#fdcb6e',
    members: [
      { role: 'Project Owner', icon: '👑', salary: 130000 },
      { role: 'Project Manager', icon: '👨‍💼', salary: 100000 },
    ],
  },
  {
    label: 'System Analyst', icon: '🏗️', color: '#f39c12',
    members: [
      { role: 'System Analyst (Senior)', icon: '🏗️', salary: 60000 },
      { role: 'System Analyst', icon: '🏗️', salary: 30000 },
      { role: 'DevOps / Infra', icon: '🛡️', salary: 50000 },
      { role: 'Integration Engineer', icon: '🔌', salary: 35000 },
    ],
  },
  {
    label: 'Business Analyst', icon: '📋', color: '#6c5ce7',
    members: [
      { role: 'BA Lead', icon: '📋', salary: 60000 },
      { role: 'Business Analyst', icon: '📋', salary: 30000 },
    ],
  },
  {
    label: 'UX / UI', icon: '🎨', color: '#fd79a8',
    members: [
      { role: 'UX Lead', icon: '🎨', salary: 50000 },
      { role: 'UI Designer', icon: '✏️', salary: 35000 },
      { role: 'UX/UI Designer', icon: '🖌️', salary: 35000 },
    ],
  },
  {
    label: 'Backend Dev', icon: '⚙️', color: '#e17055',
    members: [
      { role: 'Backend Lead', icon: '⚙️', salary: 60000 },
      { role: 'Backend Developer (Mid) #1', icon: '⚙️', salary: 50000 },
      { role: 'Backend Developer (Mid) #2', icon: '⚙️', salary: 50000 },
      { role: 'Backend Developer (Jr)', icon: '⚙️', salary: 30000 },
    ],
  },
  {
    label: 'Frontend Dev', icon: '💻', color: '#0984e3',
    members: [
      { role: 'Frontend Lead', icon: '💻', salary: 60000 },
      { role: 'Frontend Developer (Mid) #1', icon: '💻', salary: 50000 },
      { role: 'Frontend Developer (Mid) #2', icon: '💻', salary: 50000 },
      { role: 'Frontend Developer (Jr)', icon: '💻', salary: 30000 },
    ],
  },
  {
    label: 'QA / Test', icon: '🧪', color: '#00b894',
    members: [
      { role: 'QA Lead', icon: '🧪', salary: 50000 },
      { role: 'QA Tester', icon: '🧪', salary: 25000 },
    ],
  },
  {
    label: 'Support & Trainer', icon: '🎓', color: '#a29bfe',
    members: [
      { role: 'Implementation Trainer', icon: '🎓', salary: 25000 },
      { role: 'Support / Helpdesk', icon: '🤝', salary: 25000 },
    ],
  },
]

const teamsWithTotals = TEAMS.map(t => ({
  ...t,
  monthlyTotal: t.members.reduce((s, m) => s + m.salary, 0),
  count: t.members.length,
}))

const totalMonthly = teamsWithTotals.reduce((s, t) => s + t.monthlyTotal, 0)
const totalHeadcount = teamsWithTotals.reduce((s, t) => s + t.count, 0)
const maxTeamMonthly = Math.max(...teamsWithTotals.map(t => t.monthlyTotal))

function fmt(n) {
  return n.toLocaleString('th-TH')
}

export default function PageCost() {
  return (
    <PageWrapper>
      <PageHeader
        title="Estimate Cost"
        subtitle="ค่าใช้จ่ายพนักงานต่อเดือน"
        emoji="💰"
        badge={{ title: `฿${fmt(totalMonthly)}`, sub: 'บาท / เดือน' }}
      />

      {/* KPI row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 16 }}>
        {[
          { label: 'พนักงานทั้งหมด', value: `${totalHeadcount} คน`, sub: '8 ทีม', color: '#2ed573' },
          { label: 'ค่าจ้างรวม / เดือน', value: `฿${fmt(totalMonthly)}`, sub: 'บาทต่อเดือน', color: '#ffa502' },
        ].map(k => (
          <GlassCard key={k.label} style={{ padding: '16px 18px', borderTop: `3px solid ${k.color}` }}>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', fontFamily: "'JetBrains Mono', monospace", marginBottom: 6, letterSpacing: 0.8 }}>
              {k.label}
            </div>
            <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', fontFamily: "'Kanit', sans-serif", lineHeight: 1.1 }}>
              {k.value}
            </div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 4, fontFamily: "'JetBrains Mono', monospace" }}>
              {k.sub}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Team breakdown + detail */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>

        {/* Left: team bar chart */}
        <GlassCard style={{ padding: '18px 20px' }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.4)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1.5, marginBottom: 14 }}>
            ค่าจ้างรายทีม / เดือน
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {teamsWithTotals.map(t => (
              <div key={t.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 14 }}>{t.icon}</span>
                    <span style={{ fontSize: 12, color: '#fff', fontFamily: "'Kanit', sans-serif" }}>{t.label}</span>
                    <span style={{
                      fontSize: 9, color: t.color,
                      background: `${t.color}20`, border: `1px solid ${t.color}40`,
                      padding: '1px 6px', borderRadius: 10, fontFamily: "'JetBrains Mono', monospace",
                    }}>{t.count} คน</span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', fontFamily: "'JetBrains Mono', monospace" }}>
                    ฿{fmt(t.monthlyTotal)}
                  </span>
                </div>
                <div style={{ height: 7, background: 'rgba(255,255,255,0.08)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${(t.monthlyTotal / maxTeamMonthly) * 100}%`,
                    background: `linear-gradient(90deg, ${t.color}cc, ${t.color}66)`,
                    borderRadius: 4,
                  }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 14, paddingTop: 12,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontFamily: "'Kanit', sans-serif" }}>รวมทั้งหมด / เดือน</span>
            <span style={{ fontSize: 16, fontWeight: 900, color: '#fff', fontFamily: "'Kanit', sans-serif" }}>฿{fmt(totalMonthly)}</span>
          </div>
        </GlassCard>

        {/* Right: per-person table */}
        <GlassCard style={{ padding: '18px 20px', overflowY: 'auto', maxHeight: 480 }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.4)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1.5, marginBottom: 14 }}>
            รายละเอียดรายบุคคล
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {teamsWithTotals.map(t => (
              <div key={t.label}>
                <div style={{
                  fontSize: 9, fontWeight: 800, color: t.color,
                  fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1,
                  marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  <span>{t.icon}</span> {t.label}
                </div>
                {t.members.map((m, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '5px 8px',
                    background: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'transparent',
                    borderRadius: 6,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: 12 }}>{m.icon}</span>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', fontFamily: "'Kanit', sans-serif" }}>{m.role}</span>
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', fontFamily: "'JetBrains Mono', monospace" }}>
                      ฿{fmt(m.salary)}
                    </span>
                  </div>
                ))}
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '4px 8px', marginTop: 2,
                  borderTop: `1px solid ${t.color}25`,
                }}>
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', fontFamily: "'JetBrains Mono', monospace" }}>รวมทีม / เดือน</span>
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#fff', fontFamily: "'JetBrains Mono', monospace" }}>
                    ฿{fmt(t.monthlyTotal)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 12, padding: '12px 8px',
            borderTop: '2px solid rgba(255,255,255,0.15)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', fontFamily: "'Kanit', sans-serif" }}>รวมทั้งหมด / เดือน</span>
            <span style={{ fontSize: 18, fontWeight: 900, color: '#fff', fontFamily: "'Kanit', sans-serif" }}>
              ฿{fmt(totalMonthly)}
            </span>
          </div>
        </GlassCard>
      </div>
    </PageWrapper>
  )
}
