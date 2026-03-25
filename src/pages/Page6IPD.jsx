import { PageWrapper, PageHeader, GlassCard, SectionTitle, FeatureList, StatBox } from '../components/PageWrapper'

const ipdModules = [
  {
    title: 'รับผู้ป่วยเข้า (Admission)',
    emoji: '🛏️',
    features: [
      'รับ Admit จาก OPD/ER + เลือก Ward/ห้อง/เตียง (Visual)',
      'Admitting Diagnosis + แพทย์เจ้าของไข้',
      'ระดับการดูแล: วิกฤต / กึ่งวิกฤต / สามัญ',
    ],
  },
  {
    title: 'บริหารเตียง (Bed Management)',
    emoji: '🗺️',
    features: [
      'แผนผังเตียง Visual (ว่าง/ไม่ว่าง/สำรอง/ทำความสะอาด)',
      'ย้ายเตียง/ย้าย Ward + สำรองเตียง',
      'Bed Occupancy Rate + แจ้งเตือนเตียงว่างสำหรับ ER',
    ],
  },
  {
    title: 'Doctor Order (IPD)',
    emoji: '📝',
    features: [
      'สั่งยา IPD (Continuous, PRN, Stat, One Dose)',
      'สั่ง IV Fluid + Lab/X-Ray + Diet (อาหารผู้ป่วย)',
      'สั่ง Activity + Monitoring (Vital Signs ทุก 4 ชม.)',
    ],
  },
  {
    title: 'บันทึกพยาบาล (Nursing)',
    emoji: '👩‍⚕️',
    features: [
      'Nursing Assessment (แรกรับ) + Progress Note (3 เวร)',
      'Vital Signs Chart + I/O Chart + Pain Assessment',
      'Fall Risk + Braden Scale + MAR (บันทึกการให้ยา)',
    ],
  },
  {
    title: 'Progress Note แพทย์',
    emoji: '📋',
    features: [
      'SOAP Note รายวัน + Round Note',
      'Consultation Note + Procedure Note',
      'Operative Note สำหรับห้องผ่าตัด',
    ],
  },
  {
    title: 'จำหน่ายผู้ป่วย (Discharge)',
    emoji: '🏠',
    features: [
      'Discharge Summary (วินิจฉัยสุดท้าย + ยากลับบ้าน)',
      'Discharge Planning + นัดตรวจหลัง Discharge',
      'Status: หาย/ทุเลา/ไม่ดีขึ้น/เสียชีวิต/หนีกลับ',
    ],
  },
]

const orModules = [
  {
    title: 'จองห้องผ่าตัด & Pre-Op',
    emoji: '🏥',
    features: [
      'จองห้อง/เวลา/ทีมผ่าตัด + Pre-operative Assessment',
      'Surgical Safety Checklist (WHO)',
      'ตรวจสอบ Consent + ผล Lab ก่อนผ่าตัด',
    ],
  },
  {
    title: 'Operative Note & Recovery',
    emoji: '⚕️',
    features: [
      'บันทึกรายละเอียดผ่าตัด (Procedure + Findings)',
      'บันทึกการดมยาสลบ (Anesthesia Record)',
      'Recovery Room + Post-Op Monitoring',
      'สถิติผ่าตัด + Surgical Site Infection Rate',
    ],
  },
]

export default function Page6IPD() {
  return (
    <PageWrapper>
      <PageHeader
        emoji="🛏️"
        title="ผู้ป่วยใน & ห้องผ่าตัด"
        subtitle="ระบบบริหารจัดการผู้ป่วยที่นอนพักรักษาตัว ห้องผ่าตัด และโภชนาการ"
        badge={{ title: '14 ฟังก์ชัน', sub: 'IPD 7 + OR 4 + Nutrition 3' }}
      />

      <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap', animation: 'fadeInUp 0.5s ease 0.1s both' }}>
        <StatBox value="BOR" label="Bed Occupancy Rate" sub="อัตราครองเตียง" />
        <StatBox value="ALOS" label="Avg Length of Stay" sub="ระยะเวลานอนเฉลี่ย" />
        <StatBox value="WHO" label="Surgical Checklist" sub="Safety Standard" />
        <StatBox value="3 เวร" label="Nursing Note" sub="เช้า / บ่าย / ดึก" />
      </div>

      {/* IPD Section */}
      <SectionTitle>IPD - INPATIENT DEPARTMENT</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20, marginBottom: 28 }}>
        {ipdModules.map((mod, i) => (
          <GlassCard key={i} delay={0.15 + i * 0.08}>
            <div style={{ height: 3, background: 'linear-gradient(90deg, #f39c12, #f39c1288)' }} />
            <div style={{ padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 28 }}>{mod.emoji}</span>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, color: '#fff' }}>
                  {mod.title}
                </div>
              </div>
              <FeatureList features={mod.features} accentColor="#f39c12" />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* OR Section */}
      <SectionTitle>OR - OPERATING ROOM</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20, marginBottom: 24 }}>
        {orModules.map((mod, i) => (
          <GlassCard key={i} delay={0.65 + i * 0.1}>
            <div style={{ height: 3, background: 'linear-gradient(90deg, #e74c3c, #e74c3c88)' }} />
            <div style={{ padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 28 }}>{mod.emoji}</span>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, color: '#fff' }}>
                  {mod.title}
                </div>
              </div>
              <FeatureList features={mod.features} accentColor="#e74c3c" />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Nutrition */}
      <GlassCard delay={0.85}>
        <div style={{ padding: '16px 20px' }}>
          <SectionTitle>NUTRITION & DIETARY</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {[
              { icon: '🍽️', label: 'สั่งอาหารผู้ป่วย', desc: 'อาหารธรรมดา + อาหารเฉพาะโรค' },
              { icon: '📊', label: 'ประเมินภาวะโภชนาการ', desc: 'NRS-2002 + Nutrition Plan' },
              { icon: '📋', label: 'รายงานโภชนาการ', desc: 'จำนวนมื้อ + ต้นทุนอาหาร' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.08)',
                borderRadius: 12,
                padding: '12px 14px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ fontSize: 24 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{item.label}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </PageWrapper>
  )
}
