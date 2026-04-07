import { PageWrapper, PageHeader, GlassCard } from '../components/PageWrapper'

const ROLES = [
  {
    icon: '🗣️', color: '#6c5ce7', id: 'BA',
    title: 'Business Analyst',
    short: 'คุยกับโรงพยาบาล รับโจทย์ว่าต้องการอะไร แล้วแปลเป็นเอกสารให้ทีม IT เข้าใจ',
    sends: 'Requirement',
  },
  {
    icon: '🏗️', color: '#f39c12', id: 'SA',
    title: 'System Analyst',
    short: 'รับโจทย์จาก BA แล้ววางแผนว่าระบบจะทำงานยังไง ข้อมูลไหลไปทางไหน',
    sends: 'System Design',
  },
  {
    icon: '🎨', color: '#fd79a8', id: 'UX/UI',
    title: 'UX/UI Designer',
    short: 'ออกแบบหน้าจอให้ใช้ง่าย วาดว่าปุ่มอยู่ตรงไหน หน้าตาเป็นยังไง',
    sends: 'Design Mockup',
  },
  {
    icon: '⚙️', color: '#e17055', id: 'Backend',
    title: 'Backend Dev',
    short: 'สร้างระบบหลังบ้าน เก็บข้อมูล คำนวณ ตรวจสอบ — ส่วนที่ผู้ใช้มองไม่เห็น',
    sends: 'API',
  },
  {
    icon: '💻', color: '#0984e3', id: 'Frontend',
    title: 'Frontend Dev',
    short: 'สร้างหน้าจอตาม Design และเชื่อมกับ Backend ให้ข้อมูลแสดงผลได้จริง',
    sends: 'หน้าจอสำเร็จ',
  },
]

const FLOW = [
  { from: 'BA', to: 'SA', label: 'Requirement', color: '#6c5ce7' },
  { from: 'BA', to: 'UX/UI', label: 'Requirement', color: '#6c5ce7' },
  { from: 'SA', to: 'Backend', label: 'System Design', color: '#f39c12' },
  { from: 'SA', to: 'Frontend', label: 'System Design', color: '#f39c12' },
  { from: 'UX/UI', to: 'Frontend', label: 'Design', color: '#fd79a8' },
  { from: 'Backend', to: 'Frontend', label: 'API', color: '#e17055' },
]

// Color map for tag lookup
const COLOR = { BA: '#6c5ce7', SA: '#f39c12', 'UX/UI': '#fd79a8', Backend: '#e17055', Frontend: '#0984e3' }

export default function PageWorkflow() {
  return (
    <PageWrapper>
      <PageHeader
        title="Team Workflow"
        subtitle="แต่ละทีมทำอะไร และส่งต่องานให้ใครอย่างไร"
        emoji="🔄"
        badge={{ title: '5 ทีม', sub: '1 ระบบ HIS' }}
      />

      {/* Role cards — top row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 16 }}>
        {ROLES.map(r => (
          <GlassCard key={r.id} style={{ padding: '16px 14px' }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{r.icon}</div>
            <div style={{
              fontSize: 9, fontWeight: 900, color: r.color,
              fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1, marginBottom: 4,
            }}>
              {r.id}
            </div>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#fff', fontFamily: "'Kanit', sans-serif", marginBottom: 8 }}>
              {r.title}
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.72)', lineHeight: 1.55, fontFamily: "'Kanit', sans-serif", marginBottom: 10 }}>
              {r.short}
            </div>
            <div style={{
              display: 'inline-block', fontSize: 10, color: r.color,
              background: `${r.color}18`, border: `1px solid ${r.color}40`,
              padding: '3px 10px', borderRadius: 20,
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              📦 {r.sends}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Flow + analogy row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>

        {/* Handoff flow */}
        <GlassCard style={{ padding: '18px 20px' }}>
          <div style={{
            fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.4)',
            fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1.5, marginBottom: 12,
          }}>
            การส่งต่องาน
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {FLOW.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  fontSize: 10, fontWeight: 800, color: COLOR[f.from],
                  background: `${COLOR[f.from]}20`, border: `1px solid ${COLOR[f.from]}44`,
                  padding: '2px 10px', borderRadius: 8, minWidth: 64, textAlign: 'center',
                  fontFamily: "'JetBrains Mono', monospace",
                }}>{f.from}</span>
                <span style={{ color: f.color, fontSize: 14 }}>→</span>
                <span style={{
                  fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,0.8)',
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                  padding: '2px 10px', borderRadius: 8, minWidth: 64, textAlign: 'center',
                  fontFamily: "'JetBrains Mono', monospace",
                }}>{f.to}</span>
                <span style={{
                  fontSize: 10, color: f.color,
                  background: `${f.color}15`, padding: '2px 8px', borderRadius: 6,
                  fontFamily: "'JetBrains Mono', monospace",
                }}>{f.label}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Analogy */}
        <GlassCard style={{ padding: '18px 20px' }}>
          <div style={{
            fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.4)',
            fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1.5, marginBottom: 12,
          }}>
            เปรียบเหมือนสร้างบ้าน 🏠
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {[
              { id: 'BA', analogy: 'ลูกค้าบอกว่าต้องการห้องกี่ห้อง สไตล์ไหน' },
              { id: 'SA', analogy: 'วิศวกรวางโครงสร้างและแบบแปลน' },
              { id: 'UX/UI', analogy: 'นักออกแบบเลือกสีผนัง จัดวางเฟอร์นิเจอร์' },
              { id: 'Backend', analogy: 'ระบบไฟฟ้า ประปา ในผนัง — มองไม่เห็นแต่ขาดไม่ได้' },
              { id: 'Frontend', analogy: 'ช่างตกแต่งที่ทำให้บ้านสวยตามแบบ' },
            ].map(item => (
              <div key={item.id} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{
                  fontSize: 9, fontWeight: 800, color: COLOR[item.id],
                  background: `${COLOR[item.id]}20`, border: `1px solid ${COLOR[item.id]}44`,
                  padding: '2px 8px', borderRadius: 6, flexShrink: 0, minWidth: 56, textAlign: 'center',
                  fontFamily: "'JetBrains Mono', monospace",
                }}>{item.id}</span>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', fontFamily: "'Kanit', sans-serif", lineHeight: 1.5 }}>
                  {item.analogy}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </PageWrapper>
  )
}
