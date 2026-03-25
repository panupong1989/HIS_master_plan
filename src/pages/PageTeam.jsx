import { useState } from 'react'
import { PageWrapper, PageHeader, GlassCard, SectionTitle } from '../components/PageWrapper'

// idx: 0=PM, 1=BE Senior, 2=BE Mid, 3=FE Lead, 4=FE Junior, 5=SA, 6=BA, 7=QA, 8=DevOps, 9=Support Staff
const coreTeam = [
  {
    role: 'Project Manager',
    count: 1,
    tasks: ['บริหารโปรเจค', 'ประสานงาน', 'ควบคุมคุณภาพ'],
    color: '#667eea',
    icon: '👨‍💼',
  },
  {
    role: 'Backend Developer (Senior)',
    count: 1,
    tasks: ['ออกแบบ DB', 'API', 'เชื่อมต่อระบบภาครัฐ'],
    color: '#f39c12',
    icon: '⚙️',
  },
  {
    role: 'Backend Developer (Mid)',
    count: 1,
    tasks: ['พัฒนา API', 'Business Logic'],
    color: '#e17055',
    icon: '🔧',
  },
  {
    role: 'Frontend Developer (Mid-Senior)',
    count: 1,
    tasks: ['React — หน้าจอหลักทั้งหมด'],
    color: '#0984e3',
    icon: '🎨',
  },
  {
    role: 'Frontend Developer (Junior-Mid)',
    count: 1,
    tasks: ['React — หน้าจอคิว, Display, Dashboard'],
    color: '#00b894',
    icon: '💻',
  },
  {
    role: 'System Analyst',
    count: 1,
    tasks: ['วิเคราะห์ระบบ', 'ออกแบบ Workflow', 'เขียน Spec'],
    color: '#e84393',
    icon: '🔍',
  },
  {
    role: 'Business Analyst',
    count: 1,
    tasks: ['วิเคราะห์ Requirement', 'ประสานกับ รพ.', 'จัดทำเอกสาร'],
    color: '#6c5ce7',
    icon: '📋',
  },
  {
    role: 'QA/Tester',
    count: 1,
    tasks: ['ทดสอบระบบ', 'UAT'],
    color: '#fd79a8',
    icon: '🧪',
  },
  {
    role: 'DevOps/Infra',
    count: 1,
    tasks: ['Server', 'Deploy', 'Backup', 'Security'],
    color: '#00cec9',
    icon: '🛡️',
  },
  {
    role: 'Support Staff',
    count: 1,
    tasks: ['ประสานงานผู้ใช้', 'สนับสนุนทีม', 'ช่วยทดสอบระบบ'],
    color: '#a29bfe',
    icon: '🤝',
  },
]

const consultants = [
  {
    role: 'ที่ปรึกษาระบบ HIS / สาธารณสุข',
    cost: '50-100K ตลอดโปรเจค',
    reason: 'เข้าใจ workflow รพ., มาตรฐาน 43 แฟ้ม, e-Claim',
    icon: '🏥',
    color: '#e17055',
  },
  {
    role: 'ที่ปรึกษา Security / PDPA',
    cost: '30-50K',
    reason: 'ข้อมูลผู้ป่วยเป็น sensitive data สูงสุด',
    icon: '🔒',
    color: '#d63031',
  },
  {
    role: 'UX/UI Designer',
    cost: '80-150K ตลอดโปรเจค',
    reason: 'ออกแบบหน้าจอให้ใช้งานง่าย',
    icon: '🎨',
    color: '#6c5ce7',
  },
]

export default function PageTeam() {
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <PageWrapper>
      <PageHeader
        title="Team Structure"
        subtitle="โครงสร้างทีมพัฒนาระบบ HIS — รวม 9-10 คน + ที่ปรึกษาเฉพาะทาง"
        emoji="👥"
        badge={{ title: '9-10 คน', sub: 'Core Team + 3 Consultants' }}
      />

      {/* Org Chart */}
      <GlassCard style={{ padding: 24, marginBottom: 24 }}>
        <SectionTitle>ORGANIZATION CHART</SectionTitle>
        <div style={{ position: 'relative', paddingTop: 10 }}>
          {/* PM at top */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <OrgNode
              member={coreTeam[0]}
              isSelected={selectedMember === 0}
              onClick={() => setSelectedMember(selectedMember === 0 ? null : 0)}
              isPM
            />
          </div>

          {/* Connector line from PM */}
          <div style={{
            width: 2,
            height: 24,
            background: 'rgba(255,255,255,0.15)',
            margin: '-12px auto 0',
            position: 'relative',
            zIndex: 0,
          }} />

          {/* Horizontal connector */}
          <div style={{
            height: 2,
            background: 'rgba(255,255,255,0.15)',
            margin: '0 40px 0',
            position: 'relative',
          }} />

          {/* Row 2: SA + BA + Senior Backend + Frontend Lead + DevOps */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 10,
            marginBottom: 16,
          }}>
            {[5, 6, 1, 3, 8].map((idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 2, height: 16, background: 'rgba(255,255,255,0.15)' }} />
                <OrgNode
                  member={coreTeam[idx]}
                  isSelected={selectedMember === idx}
                  onClick={() => setSelectedMember(selectedMember === idx ? null : idx)}
                />
              </div>
            ))}
          </div>

          {/* Row 3: under each lead */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 10,
          }}>
            {/* Under SA: QA/Tester */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 2, height: 12, background: 'rgba(255,255,255,0.1)' }} />
              <OrgNode
                member={coreTeam[7]}
                isSelected={selectedMember === 7}
                onClick={() => setSelectedMember(selectedMember === 7 ? null : 7)}
                small
              />
            </div>
            {/* Under BA: Support Staff */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 2, height: 12, background: 'rgba(255,255,255,0.1)' }} />
              <OrgNode
                member={coreTeam[9]}
                isSelected={selectedMember === 9}
                onClick={() => setSelectedMember(selectedMember === 9 ? null : 9)}
                small
              />
            </div>
            {/* Under Senior BE: Mid BE */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 2, height: 12, background: 'rgba(255,255,255,0.1)' }} />
              <OrgNode
                member={coreTeam[2]}
                isSelected={selectedMember === 2}
                onClick={() => setSelectedMember(selectedMember === 2 ? null : 2)}
                small
              />
            </div>
            {/* Under Frontend Lead: Junior FE */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 2, height: 12, background: 'rgba(255,255,255,0.1)' }} />
              <OrgNode
                member={coreTeam[4]}
                isSelected={selectedMember === 4}
                onClick={() => setSelectedMember(selectedMember === 4 ? null : 4)}
                small
              />
            </div>
            {/* Under DevOps: empty */}
            <div />
          </div>
        </div>
      </GlassCard>

      {/* Core Team Grid */}
      <GlassCard style={{ padding: 24, marginBottom: 24 }} delay={0.1}>
        <SectionTitle>CORE TEAM</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
          {coreTeam.map((m, i) => (
            <div
              key={i}
              onClick={() => setSelectedMember(selectedMember === i ? null : i)}
              style={{
                background: selectedMember === i
                  ? `linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))`
                  : 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04))',
                backdropFilter: 'blur(12px)',
                border: selectedMember === i
                  ? `1px solid ${m.color}55`
                  : '1px solid rgba(255,255,255,0.12)',
                borderRadius: 14,
                padding: '14px 16px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: selectedMember === i
                  ? `0 4px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.2)`
                  : '0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 24 }}>{m.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#fff',
                    fontFamily: "'Kanit', sans-serif",
                  }}>{m.role}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>
                    {m.count} คน
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {m.tasks.map((t, j) => (
                  <span key={j} style={{
                    fontSize: 10,
                    padding: '3px 8px',
                    borderRadius: 6,
                    background: 'rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.7)',
                    fontWeight: 600,
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Consultants */}
      <GlassCard style={{ padding: 24 }} delay={0.2}>
        <SectionTitle>CONSULTANTS / PART-TIME</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
          {consultants.map((c, i) => (
            <div key={i} style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04))',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 14,
              padding: '16px',
              borderLeft: `3px solid ${c.color}`,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 22 }}>{c.icon}</span>
                <div style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#fff',
                  fontFamily: "'Kanit', sans-serif",
                }}>{c.role}</div>
              </div>
              <div style={{
                fontSize: 12,
                color: c.color,
                fontWeight: 700,
                fontFamily: "'JetBrains Mono', monospace",
                marginBottom: 6,
              }}>{c.cost}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                {c.reason}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </PageWrapper>
  )
}

function OrgNode({ member, isSelected, onClick, isPM, small }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: isSelected
          ? 'linear-gradient(145deg, rgba(255,255,255,0.22), rgba(255,255,255,0.1))'
          : 'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))',
        backdropFilter: 'blur(12px)',
        border: isSelected
          ? `2px solid ${member.color}66`
          : '1px solid rgba(255,255,255,0.18)',
        borderRadius: isPM ? 16 : 12,
        padding: isPM ? '14px 28px' : small ? '8px 14px' : '10px 20px',
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        minWidth: isPM ? 200 : small ? 140 : 160,
        position: 'relative',
        zIndex: 2,
        boxShadow: '0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.15)',
      }}
    >
      <span style={{ fontSize: isPM ? 28 : small ? 18 : 22 }}>{member.icon}</span>
      <div style={{
        fontSize: isPM ? 13 : small ? 10 : 11,
        fontWeight: 700,
        color: '#fff',
        fontFamily: "'Kanit', sans-serif",
        marginTop: 4,
      }}>{member.role}</div>
    </div>
  )
}
