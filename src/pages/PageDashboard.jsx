import { useState } from 'react'
import { PageWrapper, PageHeader, GlassCard, SectionTitle } from '../components/PageWrapper'

const departments = [
  { name: 'ลงทะเบียน', dept: 'จุดคัดกรอง / ห้องบัตร', funcs: 7, phase: 1, progress: 100, status: 'done', color: '#667eea', icon: '📋' },
  { name: 'คิว & นัดหมาย', dept: 'ระบบคิว / นัดหมาย', funcs: 8, phase: 1, progress: 75, status: 'active', color: '#667eea', icon: '🎫' },
  { name: 'คัดกรอง & Triage', dept: 'จุดคัดกรอง', funcs: 4, phase: 1, progress: 50, status: 'active', color: '#667eea', icon: '🏥' },
  { name: 'ห้องตรวจ OPD', dept: 'ห้องตรวจ OPD', funcs: 10, phase: 2, progress: 60, status: 'active', color: '#f39c12', icon: '🩺' },
  { name: 'Lab (LIS)', dept: 'ห้องปฏิบัติการ', funcs: 7, phase: 2, progress: 43, status: 'active', color: '#f39c12', icon: '🔬' },
  { name: 'เภสัชกรรม', dept: 'ห้องยา', funcs: 7, phase: 2, progress: 57, status: 'active', color: '#f39c12', icon: '💊' },
  { name: 'ห้องฉุกเฉิน ER', dept: 'ห้องฉุกเฉิน', funcs: 5, phase: 2, progress: 40, status: 'active', color: '#f39c12', icon: '🚑' },
  { name: 'รังสีวิทยา (RIS)', dept: 'ห้อง X-Ray / CT', funcs: 4, phase: 2, progress: 25, status: 'active', color: '#f39c12', icon: '📡' },
  { name: 'ผู้ป่วยใน (IPD)', dept: 'หอผู้ป่วย', funcs: 7, phase: 2, progress: 14, status: 'active', color: '#f39c12', icon: '🛏️' },
  { name: 'Screening / คัดกรอง', dept: 'คลินิก NCD / คัดกรอง', funcs: 9, phase: 2, progress: 33, status: 'active', color: '#f39c12', icon: '❤️' },
  { name: 'ห้องผ่าตัด (OR)', dept: 'ห้องผ่าตัด', funcs: 4, phase: 2, progress: 0, status: 'planned', color: '#f39c12', icon: '🔪' },
  { name: 'การเงิน & e-Claim', dept: 'การเงิน / เบิกจ่าย', funcs: 8, phase: 3, progress: 25, status: 'active', color: '#2ed573', icon: '💰' },
  { name: 'เชื่อมต่อภายนอก', dept: '43 แฟ้ม / HDC / HIE', funcs: 7, phase: 3, progress: 14, status: 'active', color: '#2ed573', icon: '🔗' },
  { name: 'บริหารระบบ', dept: 'Admin / IT', funcs: 6, phase: 3, progress: 17, status: 'active', color: '#2ed573', icon: '⚙️' },
  { name: 'พัสดุ & คลัง', dept: 'พัสดุ / คลังสินค้า', funcs: 3, phase: 3, progress: 0, status: 'planned', color: '#2ed573', icon: '📦' },
  { name: 'ทันตกรรม', dept: 'ห้องทันตกรรม', funcs: 2, phase: 3, progress: 0, status: 'planned', color: '#2ed573', icon: '🦷' },
  { name: 'แพทย์แผนไทย', dept: 'แพทย์แผนไทย', funcs: 2, phase: 3, progress: 0, status: 'planned', color: '#2ed573', icon: '🌿' },
  { name: 'ส่งเสริมสุขภาพ', dept: 'งานส่งเสริม / ป้องกัน', funcs: 3, phase: 3, progress: 0, status: 'planned', color: '#2ed573', icon: '💪' },
]

const totalFunctions = departments.reduce((sum, d) => sum + d.funcs, 0)

const budgetItems = [
  { label: 'เงินเดือนทีม (12 เดือน)', amount: 4200000, color: '#667eea' },
  { label: 'ที่ปรึกษา', amount: 300000, color: '#e17055' },
  { label: 'UX/UI Designer', amount: 150000, color: '#6c5ce7' },
  { label: 'Server & Infrastructure', amount: 600000, color: '#00cec9' },
  { label: 'License & Tools', amount: 200000, color: '#fdcb6e' },
  { label: 'สำรอง / Contingency', amount: 350000, color: '#636e72' },
]

const risks = [
  { name: 'Requirement เปลี่ยนบ่อย', severity: 'high', mitigation: 'Agile Sprint + Sign-off ทุก Phase' },
  { name: 'เชื่อมต่อ API ภาครัฐล่าช้า', severity: 'high', mitigation: 'Mock API + เริ่มทำเรื่องขอ API แต่เนิ่น' },
  { name: 'ทีมขาดคน', severity: 'medium', mitigation: 'Cross-training + Documentation' },
  { name: 'Data Migration', severity: 'medium', mitigation: 'Plan migration ตั้งแต่ Phase 1' },
  { name: 'Security Breach', severity: 'high', mitigation: 'PDPA consultant + Pen Test ก่อน Go-Live' },
]

const totalBudget = 7800000

export default function PageDashboard() {
  const [filter, setFilter] = useState('all')

  const filteredDepts = filter === 'all' ? departments : departments.filter(m => m.phase === parseInt(filter))
  const completedFuncs = departments.reduce((sum, d) => sum + Math.round(d.funcs * d.progress / 100), 0)
  const overallProgress = Math.round((completedFuncs / totalFunctions) * 100)

  return (
    <PageWrapper>
      <PageHeader
        title="Dashboard"
        subtitle="ติดตามความคืบหน้าโปรเจค HIS — 103 ฟังก์ชัน 18 แผนก"
        emoji="📊"
        badge={{ title: `${completedFuncs}/${totalFunctions}`, sub: `ฟังก์ชัน · ${overallProgress}%` }}
      />

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12, marginBottom: 24 }}>
        {[
          { label: 'ฟังก์ชันทั้งหมด', value: '103', sub: 'functions', color: '#667eea', icon: '⚡' },
          { label: 'แผนก', value: '18', sub: 'departments', color: '#6c5ce7', icon: '🏥' },
          { label: 'งบประมาณ', value: '7.8M', sub: 'THB', color: '#f39c12', icon: '💰' },
          { label: 'ระยะเวลา', value: '12', sub: 'เดือน · 4 Phases', color: '#e17055', icon: '📅' },
        ].map((kpi, i) => (
          <GlassCard key={i} style={{ padding: 18, textAlign: 'center' }} delay={i * 0.05}>
            <span style={{ fontSize: 28 }}>{kpi.icon}</span>
            <div style={{
              fontSize: 32,
              fontWeight: 900,
              color: '#fff',
              fontFamily: "'Kanit', sans-serif",
              marginTop: 4,
            }}>{kpi.value}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{kpi.label}</div>
            <div style={{
              fontSize: 10,
              color: kpi.color,
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
              marginTop: 2,
            }}>{kpi.sub}</div>
          </GlassCard>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
        {/* Function Progress by Department */}
        <GlassCard style={{ padding: 20 }} delay={0.1}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <SectionTitle>FUNCTION PROGRESS</SectionTitle>
            <div style={{ display: 'flex', gap: 4 }}>
              {['all', '1', '2', '3'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    padding: '3px 10px',
                    borderRadius: 6,
                    border: 'none',
                    fontSize: 10,
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: filter === f ? 'rgba(102,126,234,0.3)' : 'rgba(255,255,255,0.06)',
                    color: filter === f ? '#667eea' : 'rgba(255,255,255,0.4)',
                    fontFamily: "'JetBrains Mono', monospace",
                    transition: 'all 0.2s',
                  }}
                >
                  {f === 'all' ? 'All' : `P${f}`}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {filteredDepts.map((dept, i) => {
              const done = Math.round(dept.funcs * dept.progress / 100)
              return (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '5px 0',
                  borderBottom: i < filteredDepts.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                }}>
                  <span style={{ fontSize: 14, width: 20, textAlign: 'center', flexShrink: 0 }}>{dept.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: 11,
                      color: 'rgba(255,255,255,0.85)',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>{dept.name}</div>
                    <div style={{
                      fontSize: 9,
                      color: 'rgba(255,255,255,0.4)',
                    }}>{dept.dept}</div>
                  </div>
                  <div style={{ width: 60, flexShrink: 0 }}>
                    <div style={{
                      height: 5,
                      borderRadius: 3,
                      background: 'rgba(255,255,255,0.08)',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${dept.progress}%`,
                        background: `linear-gradient(90deg, ${dept.color}, ${dept.color}88)`,
                        borderRadius: 3,
                        transition: 'width 0.5s ease',
                      }} />
                    </div>
                  </div>
                  <span style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: done > 0 ? dept.color : 'rgba(255,255,255,0.3)',
                    fontFamily: "'JetBrains Mono', monospace",
                    width: 40,
                    textAlign: 'right',
                    flexShrink: 0,
                  }}>{done}/{dept.funcs}</span>
                  <span style={{
                    fontSize: 8,
                    padding: '2px 5px',
                    borderRadius: 4,
                    background: dept.status === 'planned' ? 'rgba(255,255,255,0.06)' : `${dept.color}22`,
                    color: dept.status === 'planned' ? 'rgba(255,255,255,0.3)' : dept.color,
                    fontWeight: 600,
                    flexShrink: 0,
                    width: 38,
                    textAlign: 'center',
                  }}>
                    {dept.status === 'planned' ? 'Plan' : dept.status === 'active' ? 'Active' : 'Done'}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Summary bar */}
          <div style={{
            marginTop: 12,
            padding: '10px 12px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>
              {filter === 'all' ? 'รวมทั้งหมด' : `Phase ${filter}`}
            </span>
            <span style={{
              fontSize: 13,
              fontWeight: 800,
              color: '#fff',
              fontFamily: "'Kanit', sans-serif",
            }}>
              {filteredDepts.reduce((s, d) => s + Math.round(d.funcs * d.progress / 100), 0)}/{filteredDepts.reduce((s, d) => s + d.funcs, 0)} ฟังก์ชัน
            </span>
          </div>
        </GlassCard>

        {/* Budget Breakdown */}
        <GlassCard style={{ padding: 20 }} delay={0.15}>
          <SectionTitle>BUDGET BREAKDOWN</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
            {budgetItems.map((item, i) => {
              const pct = Math.round((item.amount / totalBudget) * 100)
              return (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{item.label}</span>
                    <span style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: item.color,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}>{(item.amount / 1000).toFixed(0)}K</span>
                  </div>
                  <div style={{
                    height: 8,
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.06)',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${pct}%`,
                      background: `linear-gradient(90deg, ${item.color}, ${item.color}66)`,
                      borderRadius: 4,
                      transition: 'width 0.8s ease',
                    }} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Total */}
          <div style={{
            background: 'rgba(255,255,255,0.06)',
            borderRadius: 10,
            padding: '12px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', fontFamily: "'Kanit', sans-serif" }}>
              รวมงบประมาณ
            </span>
            <span style={{
              fontSize: 20,
              fontWeight: 900,
              color: '#f39c12',
              fontFamily: "'Kanit', sans-serif",
            }}>7,800,000 THB</span>
          </div>
        </GlassCard>
      </div>

      {/* Risk Matrix */}
      <GlassCard style={{ padding: 20, marginBottom: 24 }} delay={0.2}>
        <SectionTitle>RISK MANAGEMENT</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {risks.map((risk, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 14px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.05)',
              borderLeft: `3px solid ${risk.severity === 'high' ? '#e17055' : '#f39c12'}`,
            }}>
              <span style={{
                fontSize: 9,
                fontWeight: 800,
                padding: '3px 8px',
                borderRadius: 4,
                background: risk.severity === 'high' ? 'rgba(225,112,85,0.2)' : 'rgba(243,156,18,0.2)',
                color: risk.severity === 'high' ? '#e17055' : '#f39c12',
                fontFamily: "'JetBrains Mono', monospace",
                flexShrink: 0,
                textTransform: 'uppercase',
              }}>{risk.severity}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>
                  {risk.name}
                </div>
              </div>
              <div style={{
                fontSize: 11,
                color: 'rgba(255,255,255,0.5)',
                maxWidth: 280,
                textAlign: 'right',
              }}>
                {risk.mitigation}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Phase Status Summary */}
      <GlassCard style={{ padding: 20 }} delay={0.25}>
        <SectionTitle>PHASE STATUS</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {[
            { num: 1, name: 'Foundation', months: '1-3', color: '#667eea', funcs: departments.filter(d => d.phase === 1).reduce((s, d) => s + d.funcs, 0), status: 'Planned' },
            { num: 2, name: 'Core Modules', months: '4-7', color: '#f39c12', funcs: departments.filter(d => d.phase === 2).reduce((s, d) => s + d.funcs, 0), status: 'Planned' },
            { num: 3, name: 'Integration', months: '8-10', color: '#2ed573', funcs: departments.filter(d => d.phase === 3).reduce((s, d) => s + d.funcs, 0), status: 'Planned' },
            { num: 4, name: 'Testing & Launch', months: '11-12', color: '#e17055', funcs: 0, status: 'Planned' },
          ].map((phase, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)',
              borderRadius: 12,
              padding: 16,
              border: '1px solid rgba(255,255,255,0.06)',
              textAlign: 'center',
              borderTop: `3px solid ${phase.color}`,
            }}>
              <div style={{
                fontSize: 28,
                fontWeight: 900,
                color: phase.color,
                fontFamily: "'Kanit', sans-serif",
              }}>P{phase.num}</div>
              <div style={{
                fontSize: 12,
                fontWeight: 700,
                color: '#fff',
                fontFamily: "'Kanit', sans-serif",
                marginTop: 4,
              }}>{phase.name}</div>
              <div style={{
                fontSize: 10,
                color: 'rgba(255,255,255,0.4)',
                fontFamily: "'JetBrains Mono', monospace",
                marginTop: 4,
              }}>
                เดือน {phase.months} · {phase.funcs > 0 ? `${phase.funcs} funcs` : 'UAT & Go-Live'}
              </div>
              <div style={{
                marginTop: 8,
                fontSize: 10,
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: 6,
                display: 'inline-block',
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.4)',
              }}>
                {phase.status}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </PageWrapper>
  )
}
