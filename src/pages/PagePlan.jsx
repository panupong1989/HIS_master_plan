import { PageWrapper, PageHeader, GlassCard, SectionTitle } from '../components/PageWrapper'

// Phase 1: M1-2, Phase 2: M3-6, Phase 3: M7-10, Phase 4: M11
const TOTAL_MONTHS = 12

const phases = [
  {
    id: 1, name: 'Phase 1: Foundation', duration: 'เดือน 1–2',
    startMonth: 1, endMonth: 2, color: '#667eea',
    tasks: [
      { name: 'วิเคราะห์ Requirement & Workflow รพ.', owner: 'SA/BA', start: 1, end: 1.5 },
      { name: 'ออกแบบ Database Schema', owner: 'Senior Backend', start: 1.5, end: 2 },
      { name: 'ออกแบบ UI/UX ทั้งระบบ', owner: 'UX/UI Designer', start: 1, end: 2 },
      { name: 'Setup Infrastructure & CI/CD', owner: 'DevOps', start: 1, end: 1.5 },
      { name: 'พัฒนาระบบลงทะเบียน / HN', owner: 'Backend + Frontend', start: 1.5, end: 2 },
      { name: 'พัฒนาระบบตรวจสอบสิทธิ', owner: 'Backend Senior', start: 2, end: 2 },
    ],
  },
  {
    id: 2, name: 'Phase 2: Core Modules', duration: 'เดือน 3–11',
    startMonth: 3, endMonth: 11, color: '#f39c12',
    tasks: [
      { name: 'ระบบคิวอัจฉริยะ + Display', owner: 'Frontend', start: 3, end: 4 },
      { name: 'ระบบ EMR / OPD / ER', owner: 'Backend + Frontend Lead', start: 3, end: 6 },
      { name: 'ระบบ Lab (LIS) + เชื่อม HL7', owner: 'Backend Senior', start: 5, end: 7.5 },
      { name: 'ระบบเภสัชกรรม', owner: 'Backend Mid + Frontend', start: 6.5, end: 9 },
      { name: 'ระบบผู้ป่วยใน (IPD)', owner: 'Backend + Frontend', start: 8, end: 10 },
      { name: 'ระบบ OR (ห้องผ่าตัด)', owner: 'Backend Mid', start: 9, end: 11 },
    ],
  },
  {
    id: 3, name: 'Phase 3: Finance & Integration', duration: 'เดือน 3–11',
    startMonth: 3, endMonth: 11, color: '#00d2ff',
    tasks: [
      { name: 'ระบบการเงิน / e-Claim', owner: 'Backend Senior', start: 3, end: 6 },
      { name: 'ระบบ 43 แฟ้ม → HDC', owner: 'Backend Mid', start: 5.5, end: 8 },
      { name: 'Dashboard ผู้บริหาร', owner: 'Frontend Lead', start: 7, end: 10 },
      { name: 'เชื่อมต่อ LINE OA', owner: 'Backend Mid', start: 8.5, end: 10.5 },
      { name: 'รายงาน & สถิติ', owner: 'Frontend', start: 9, end: 11 },
    ],
  },
  {
    id: 4, name: 'Phase 4: Testing & Launch', duration: 'เดือน 12',
    startMonth: 12, endMonth: 12, color: '#e17055',
    tasks: [
      { name: 'UAT กับเจ้าหน้าที่ รพ.', owner: 'QA + SA/BA', start: 12, end: 12 },
      { name: 'Security Audit & PDPA', owner: 'ที่ปรึกษา Security', start: 12, end: 12 },
      { name: 'Performance Testing', owner: 'QA + DevOps', start: 12, end: 12 },
      { name: 'แก้ไข Bug & Feedback', owner: 'ทั้งทีม', start: 12, end: 12 },
      { name: 'Training เจ้าหน้าที่', owner: 'SA/BA + PM', start: 12, end: 12 },
      { name: 'Go-Live! 🚀', owner: 'ทั้งทีม', start: 12, end: 12 },
    ],
  },
]

const milestones = [
  { month: 'M2',  label: 'ลงทะเบียน + สิทธิ Ready', color: '#667eea', emoji: '✅' },
  { month: 'M6',  label: 'OPD + Lab ใช้งานได้',      color: '#f39c12', emoji: '🩺' },
  { month: 'M11', label: 'Core & Integration ครบ',    color: '#00d2ff', emoji: '🔗' },
  { month: 'M12', label: 'Go-Live! 🚀',               color: '#e17055', emoji: '🎉' },
]

const LABEL_W = 200  // px — left label column

function pct(month) {
  return ((month - 1) / TOTAL_MONTHS) * 100
}
function barLeft(start) { return `${pct(start)}%` }
function barWidth(start, end) {
  const w = ((Math.max(end, start + 0.3) - start) / TOTAL_MONTHS) * 100
  return `${Math.max(w, 0.5)}%`
}

export default function PagePlan() {
  return (
    <PageWrapper>
      <PageHeader
        title="Project Plan"
        subtitle="แผนการพัฒนาระบบ HIS 12 เดือน แบ่งเป็น 4 เฟส"
        emoji="📅"
        badge={{ title: '12 เดือน', sub: '4 Phases' }}
      />

      {/* ── Gantt Chart ── */}
      <GlassCard style={{ padding: '20px 24px', marginBottom: 24 }}>
        <SectionTitle>GANTT CHART</SectionTitle>

        <div style={{ overflowX: 'auto' }}>
          <div style={{ minWidth: 720 }}>

            {/* Month header */}
            <div style={{ display: 'flex', marginBottom: 10, paddingLeft: LABEL_W }}>
              {Array.from({ length: TOTAL_MONTHS }, (_, i) => (
                <div key={i} style={{
                  flex: 1, textAlign: 'center',
                  fontSize: 10, fontWeight: 700,
                  color: 'rgba(255,255,255,0.5)',
                  fontFamily: "'JetBrains Mono', monospace",
                  borderLeft: '1px solid rgba(255,255,255,0.06)',
                  paddingBottom: 4,
                }}>
                  M{i + 1}
                </div>
              ))}
            </div>

            {phases.map((phase) => (
              <div key={phase.id} style={{ marginBottom: 6 }}>

                {/* Phase header row */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
                  <div style={{
                    width: LABEL_W, flexShrink: 0, paddingRight: 12,
                    fontSize: 13, fontWeight: 800, color: phase.color,
                    fontFamily: "'Kanit', sans-serif",
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>
                    {phase.name}
                  </div>
                  <div style={{ flex: 1, position: 'relative', height: 24 }}>
                    {/* Grid lines */}
                    {Array.from({ length: TOTAL_MONTHS }, (_, i) => (
                      <div key={i} style={{
                        position: 'absolute',
                        left: `${(i / TOTAL_MONTHS) * 100}%`,
                        top: 0, bottom: 0,
                        width: 1,
                        background: 'rgba(255,255,255,0.05)',
                      }} />
                    ))}
                    {/* Phase bar */}
                    <div style={{
                      position: 'absolute',
                      left: barLeft(phase.startMonth),
                      width: barWidth(phase.startMonth, phase.endMonth + 1),
                      top: 3, bottom: 3,
                      background: `linear-gradient(135deg, ${phase.color}, ${phase.color}99)`,
                      borderRadius: 6,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 700, color: '#fff',
                      fontFamily: "'JetBrains Mono', monospace",
                      boxShadow: `0 2px 10px ${phase.color}44`,
                    }}>
                      {phase.duration}
                    </div>
                  </div>
                </div>

                {/* Task rows */}
                {phase.tasks.map((task, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                    <div style={{
                      width: LABEL_W, flexShrink: 0, paddingRight: 12, paddingLeft: 12,
                      display: 'flex', flexDirection: 'column', gap: 1,
                    }}>
                      <span style={{
                        fontSize: 12, color: 'rgba(255,255,255,0.9)',
                        fontFamily: "'Kanit', sans-serif", lineHeight: 1.3,
                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      }}>
                        {task.name}
                      </span>
                      <span style={{
                        fontSize: 11, color: 'rgba(255,255,255,0.5)',
                        fontFamily: "'Kanit', sans-serif",
                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      }}>
                        {task.owner}
                      </span>
                    </div>
                    <div style={{ flex: 1, position: 'relative', height: 22 }}>
                      {Array.from({ length: TOTAL_MONTHS }, (_, j) => (
                        <div key={j} style={{
                          position: 'absolute',
                          left: `${(j / TOTAL_MONTHS) * 100}%`,
                          top: 0, bottom: 0, width: 1,
                          background: 'rgba(255,255,255,0.04)',
                        }} />
                      ))}
                      <div style={{
                        position: 'absolute',
                        left: barLeft(task.start),
                        width: barWidth(task.start, task.end + 0.9),
                        top: 4, bottom: 4,
                        background: `${phase.color}55`,
                        border: `1px solid ${phase.color}88`,
                        borderRadius: 4,
                      }} />
                    </div>
                  </div>
                ))}

                {/* Divider between phases */}
                <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '6px 0 8px' }} />
              </div>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* ── Milestones ── */}
      <GlassCard style={{ padding: '20px 24px' }}>
        <SectionTitle>KEY MILESTONES</SectionTitle>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}>
          {milestones.map((ms, i) => (
            <div key={i} style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative',
            }}>
              {/* Connector line */}
              {i < milestones.length - 1 && (
                <div style={{
                  position: 'absolute', top: 20, left: '50%', right: '-50%',
                  height: 2, background: `linear-gradient(90deg, ${ms.color}66, rgba(255,255,255,0.08))`,
                  zIndex: 0,
                }} />
              )}
              <div style={{
                width: 40, height: 40, borderRadius: '50%', zIndex: 1,
                background: `linear-gradient(135deg, ${ms.color}, ${ms.color}88)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, boxShadow: `0 4px 16px ${ms.color}44`,
              }}>
                {ms.emoji}
              </div>
              <div style={{
                fontSize: 11, fontWeight: 700, color: ms.color,
                fontFamily: "'JetBrains Mono', monospace", marginTop: 8,
              }}>
                {ms.month}
              </div>
              <div style={{
                fontSize: 10, color: 'rgba(255,255,255,0.65)',
                textAlign: 'center', marginTop: 4, lineHeight: 1.4, maxWidth: 90,
              }}>
                {ms.label}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </PageWrapper>
  )
}
