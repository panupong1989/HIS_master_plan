import { PageWrapper, PageHeader, GlassCard, SectionTitle, FeatureList, StatBox } from '../components/PageWrapper'

const labModules = [
  {
    title: 'รับ Lab Order & เก็บตัวอย่าง',
    emoji: '🩸',
    features: [
      'รับรายการ Lab จากแพทย์ (OPD/IPD/ER) + Worklist',
      'พิมพ์สติกเกอร์ Barcode ติดหลอด (HN, ชื่อ, ประเภทหลอด)',
      'Scan Barcode ยืนยันตัวผู้ป่วย + บันทึก Specimen Reject',
    ],
  },
  {
    title: 'วิเคราะห์ & บันทึกผล',
    emoji: '🔬',
    features: [
      'เชื่อมต่อเครื่องวิเคราะห์อัตโนมัติ (HL7/ASTM Protocol)',
      'Critical Value Alert แจ้งเตือนอัตโนมัติ',
      'เปรียบเทียบค่าปกติตามอายุ/เพศ + Delta Check',
    ],
  },
  {
    title: 'ตรวจสอบ & รายงานผล',
    emoji: '✅',
    features: [
      'Authorize/Verify ผลโดยนักเทคนิค/แพทย์',
      'ส่งผลกลับแพทย์ผู้สั่ง (แสดงใน EMR ทันที)',
      'ส่ง Critical Value ทันที (โทร + บันทึกการแจ้ง)',
    ],
  },
  {
    title: 'ควบคุมคุณภาพ (QC)',
    emoji: '📊',
    features: [
      'Internal QC (Levey-Jennings Chart) + External QA',
      'Westgard Rules แจ้งเตือนเมื่อ QC ผิดปกติ',
      'Calibration Log + บันทึกบำรุงรักษาเครื่อง',
    ],
  },
]

const radModules = [
  {
    title: 'รับ Order & บันทึกการตรวจ',
    emoji: '📡',
    features: [
      'รับ order (X-Ray, US, CT, MRI, Fluoroscopy)',
      'จัดลำดับคิว STAT > Urgent > Routine',
      'บันทึกเทคนิค (kV, mA) + ปริมาณรังสี (Dose)',
      'เชื่อมต่อ PACS ผ่าน DICOM Protocol',
    ],
  },
  {
    title: 'อ่านผล & รายงาน',
    emoji: '🖥️',
    features: [
      'Template รายงานตามประเภทการตรวจ',
      'Pending → Preliminary → Final Report',
      'แนบ Key Image + ส่งผลกลับแพทย์ผู้สั่ง',
      'TAT การอ่านผล + รายงานรังสีสะสม',
    ],
  },
]

export default function Page4LabRadiology() {
  return (
    <PageWrapper>
      <PageHeader
        emoji="🔬"
        title="Lab & รังสีวิทยา"
        subtitle="Lab Information System (LIS) + Radiology Information System (RIS) ครบวงจรตั้งแต่รับ Order จนถึงรายงานผล"
        badge={{ title: '11 ฟังก์ชัน', sub: 'Lab 7 + Radiology 4' }}
      />

      <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap', animation: 'fadeInUp 0.5s ease 0.1s both' }}>
        <StatBox value="HL7" label="Protocol เชื่อมเครื่อง" sub="Lab Analyzer" />
        <StatBox value="DICOM" label="Protocol ภาพรังสี" sub="PACS Connection" />
        <StatBox value="QC" label="ควบคุมคุณภาพ" sub="Levey-Jennings" />
        <StatBox value="TAT" label="Turn Around Time" sub="Monitoring" />
      </div>

      {/* Lab Section */}
      <SectionTitle>LIS - LAB INFORMATION SYSTEM</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20, marginBottom: 28 }}>
        {labModules.map((mod, i) => (
          <GlassCard key={i} delay={0.15 + i * 0.08}>
            <div style={{ height: 3, background: 'linear-gradient(90deg, #5bc0de, #5bc0de88)' }} />
            <div style={{ padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 28 }}>{mod.emoji}</span>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, color: '#fff' }}>
                  {mod.title}
                </div>
              </div>
              <FeatureList features={mod.features} />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Radiology Section */}
      <SectionTitle>RIS - RADIOLOGY INFORMATION SYSTEM</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20, marginBottom: 24 }}>
        {radModules.map((mod, i) => (
          <GlassCard key={i} delay={0.55 + i * 0.1}>
            <div style={{ height: 3, background: 'linear-gradient(90deg, #a29bfe, #a29bfe88)' }} />
            <div style={{ padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 28 }}>{mod.emoji}</span>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, color: '#fff' }}>
                  {mod.title}
                </div>
              </div>
              <FeatureList features={mod.features} accentColor="#a29bfe" />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Lab Reports & Inventory */}
      <GlassCard delay={0.75}>
        <div style={{ padding: '16px 20px' }}>
          <SectionTitle>REPORTS & INVENTORY</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {[
              { icon: '📦', label: 'คลัง Lab', desc: 'Reagent Stock + Lot + Expiry' },
              { icon: '📈', label: 'สถิติ Lab', desc: 'TAT + Specimen Reject Rate' },
              { icon: '🦠', label: 'Antibiogram', desc: 'ผลเพาะเชื้อ + ความไวยา' },
              { icon: '📋', label: 'Workload', desc: 'แพทย์รังสี + รังสีสะสม' },
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
