import { useState } from 'react'
import { PageWrapper, PageHeader, GlassCard, SectionTitle } from '../components/PageWrapper'

const phases = [
  {
    id: 1,
    name: 'Phase 1: Foundation',
    duration: 'เดือน 1-3',
    months: [1, 2, 3],
    color: '#667eea',
    tasks: [
      { name: 'วิเคราะห์ Requirement & Workflow รพ.', weeks: '1-4', owner: 'SA/BA + ที่ปรึกษา HIS', status: 'planned' },
      { name: 'ออกแบบ Database Schema', weeks: '3-6', owner: 'Senior Backend', status: 'planned' },
      { name: 'ออกแบบ UI/UX ทั้งระบบ', weeks: '3-8', owner: 'UX/UI Designer', status: 'planned' },
      { name: 'Setup Infrastructure & CI/CD', weeks: '2-4', owner: 'DevOps', status: 'planned' },
      { name: 'พัฒนาระบบลงทะเบียน / HN', weeks: '5-10', owner: 'Backend + Frontend', status: 'planned' },
      { name: 'พัฒนาระบบตรวจสอบสิทธิ', weeks: '7-12', owner: 'Backend Senior', status: 'planned' },
    ],
  },
  {
    id: 2,
    name: 'Phase 2: Core Modules',
    duration: 'เดือน 4-7',
    months: [4, 5, 6, 7],
    color: '#f39c12',
    tasks: [
      { name: 'ระบบคิวอัจฉริยะ + Display', weeks: '13-16', owner: 'Frontend Junior', status: 'planned' },
      { name: 'ระบบ EMR / OPD / ER', weeks: '13-20', owner: 'Backend + Frontend Lead', status: 'planned' },
      { name: 'ระบบ Lab (LIS) + เชื่อม HL7', weeks: '17-22', owner: 'Backend Senior', status: 'planned' },
      { name: 'ระบบเภสัชกรรม', weeks: '19-24', owner: 'Backend Mid + Frontend', status: 'planned' },
      { name: 'ระบบผู้ป่วยใน (IPD)', weeks: '21-26', owner: 'Backend + Frontend', status: 'planned' },
      { name: 'ระบบ OR (ห้องผ่าตัด)', weeks: '23-28', owner: 'Backend Mid', status: 'planned' },
    ],
  },
  {
    id: 3,
    name: 'Phase 3: Finance & Integration',
    duration: 'เดือน 8-10',
    months: [8, 9, 10],
    color: '#2ed573',
    tasks: [
      { name: 'ระบบการเงิน / e-Claim', weeks: '29-34', owner: 'Backend Senior', status: 'planned' },
      { name: 'ระบบ 43 แฟ้ม → HDC', weeks: '31-36', owner: 'Backend Mid', status: 'planned' },
      { name: 'Dashboard ผู้บริหาร', weeks: '33-38', owner: 'Frontend Lead', status: 'planned' },
      { name: 'เชื่อมต่อ LINE OA', weeks: '35-38', owner: 'Backend Mid', status: 'planned' },
      { name: 'รายงาน & สถิติ', weeks: '35-40', owner: 'Frontend Junior', status: 'planned' },
    ],
  },
  {
    id: 4,
    name: 'Phase 4: Testing & Launch',
    duration: 'เดือน 11-12',
    months: [11, 12],
    color: '#e17055',
    tasks: [
      { name: 'UAT กับเจ้าหน้าที่ รพ.', weeks: '41-44', owner: 'QA + SA/BA', status: 'planned' },
      { name: 'Security Audit & PDPA', weeks: '41-43', owner: 'ที่ปรึกษา Security', status: 'planned' },
      { name: 'Performance Testing', weeks: '43-45', owner: 'QA + DevOps', status: 'planned' },
      { name: 'แก้ไข Bug & Feedback', weeks: '44-47', owner: 'ทั้งทีม', status: 'planned' },
      { name: 'Training เจ้าหน้าที่', weeks: '46-48', owner: 'SA/BA + PM', status: 'planned' },
      { name: 'Go-Live! 🚀', weeks: '48', owner: 'ทั้งทีม', status: 'planned' },
    ],
  },
]

const totalMonths = 12

export default function PagePlan() {
  const [activePhase, setActivePhase] = useState(null)

  return (
    <PageWrapper>
      <PageHeader
        title="Project Plan"
        subtitle="แผนการพัฒนาระบบ HIS ทั้งหมด 12 เดือน แบ่งเป็น 4 เฟส"
        emoji="📅"
        badge={{ title: '12 เดือน', sub: '4 Phases · 48 สัปดาห์' }}
      />

      {/* Timeline Overview */}
      <GlassCard style={{ padding: 24, marginBottom: 24 }}>
        <SectionTitle>TIMELINE OVERVIEW</SectionTitle>
        <div style={{ overflowX: 'auto' }}>
          <div style={{ minWidth: 700 }}>
            {/* Month headers */}
            <div style={{ display: 'flex', marginBottom: 8, paddingLeft: 140 }}>
              {Array.from({ length: totalMonths }, (_, i) => (
                <div key={i} style={{
                  flex: 1,
                  textAlign: 'center',
                  fontSize: 10,
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.5)',
                  fontFamily: "'JetBrains Mono', monospace",
                  padding: '4px 0',
                }}>
                  M{i + 1}
                </div>
              ))}
            </div>

            {/* Phase bars */}
            {phases.map((phase) => (
              <div
                key={phase.id}
                onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 6,
                  cursor: 'pointer',
                  padding: '4px 0',
                  borderRadius: 8,
                  transition: 'all 0.2s',
                }}
              >
                <div style={{
                  width: 140,
                  fontSize: 11,
                  fontWeight: 600,
                  color: phase.color,
                  paddingRight: 12,
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {phase.name}
                </div>
                <div style={{ flex: 1, display: 'flex', position: 'relative', height: 28 }}>
                  {/* Background grid */}
                  {Array.from({ length: totalMonths }, (_, i) => (
                    <div key={i} style={{
                      flex: 1,
                      borderLeft: '1px solid rgba(255,255,255,0.04)',
                      height: '100%',
                    }} />
                  ))}
                  {/* Phase bar */}
                  <div style={{
                    position: 'absolute',
                    left: `${((phase.months[0] - 1) / totalMonths) * 100}%`,
                    width: `${(phase.months.length / totalMonths) * 100}%`,
                    top: 4,
                    bottom: 4,
                    background: `linear-gradient(135deg, ${phase.color}, ${phase.color}88)`,
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 9,
                    fontWeight: 700,
                    color: '#fff',
                    fontFamily: "'JetBrains Mono', monospace",
                    boxShadow: `0 2px 8px ${phase.color}44`,
                    transition: 'all 0.3s',
                    transform: activePhase === phase.id ? 'scaleY(1.2)' : 'scaleY(1)',
                  }}>
                    {phase.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Phase Details */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16 }}>
        {phases.map((phase, idx) => (
          <GlassCard key={phase.id} style={{ padding: 20 }} delay={0.1 + idx * 0.05}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: `linear-gradient(135deg, ${phase.color}, ${phase.color}88)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 900,
                color: '#fff',
                fontFamily: "'Kanit', sans-serif",
                boxShadow: `0 4px 12px ${phase.color}44`,
              }}>{phase.id}</div>
              <div>
                <div style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#fff',
                  fontFamily: "'Kanit', sans-serif",
                }}>{phase.name}</div>
                <div style={{
                  fontSize: 10,
                  color: phase.color,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 600,
                }}>{phase.duration}</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {phase.tasks.map((task, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 8,
                  padding: '8px 10px',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.04)',
                }}>
                  <div style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: phase.color,
                    marginTop: 5,
                    flexShrink: 0,
                    boxShadow: `0 0 6px ${phase.color}66`,
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
                      {task.name}
                    </div>
                    <div style={{ display: 'flex', gap: 8, marginTop: 3 }}>
                      <span style={{
                        fontSize: 9,
                        color: phase.color,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 600,
                      }}>W{task.weeks}</span>
                      <span style={{
                        fontSize: 9,
                        color: 'rgba(255,255,255,0.4)',
                      }}>{task.owner}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Milestones */}
      <GlassCard style={{ padding: 24, marginTop: 24 }} delay={0.3}>
        <SectionTitle>KEY MILESTONES</SectionTitle>
        <div style={{ display: 'flex', gap: 0, alignItems: 'flex-start', overflowX: 'auto', paddingBottom: 8 }}>
          {[
            { month: 'M3', label: 'ลงทะเบียน + สิทธิ Ready', color: '#667eea', emoji: '✅' },
            { month: 'M5', label: 'OPD + Lab ใช้งานได้', color: '#f39c12', emoji: '🩺' },
            { month: 'M7', label: 'Core Modules ครบ', color: '#f39c12', emoji: '⚡' },
            { month: 'M10', label: 'Integration ครบ', color: '#2ed573', emoji: '🔗' },
            { month: 'M12', label: 'Go-Live! 🚀', color: '#e17055', emoji: '🎉' },
          ].map((ms, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, minWidth: 100 }}>
              {/* Dot + line */}
              <div style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${ms.color}, ${ms.color}88)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                boxShadow: `0 4px 16px ${ms.color}44`,
                position: 'relative',
                zIndex: 2,
              }}>{ms.emoji}</div>
              {i < 4 && (
                <div style={{
                  height: 2,
                  background: `linear-gradient(90deg, ${ms.color}66, rgba(255,255,255,0.1))`,
                  position: 'absolute',
                  width: '20%',
                  marginTop: 19,
                  marginLeft: '20%',
                }} />
              )}
              <div style={{
                fontSize: 11,
                fontWeight: 700,
                color: ms.color,
                fontFamily: "'JetBrains Mono', monospace",
                marginTop: 8,
              }}>{ms.month}</div>
              <div style={{
                fontSize: 10,
                color: 'rgba(255,255,255,0.6)',
                textAlign: 'center',
                marginTop: 4,
                lineHeight: 1.4,
                maxWidth: 100,
              }}>{ms.label}</div>
            </div>
          ))}
        </div>
      </GlassCard>
    </PageWrapper>
  )
}
