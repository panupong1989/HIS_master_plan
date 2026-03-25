import { PageWrapper, PageHeader, GlassCard, SectionTitle, FeatureList, StatBox } from '../components/PageWrapper'

const modules = [
  {
    title: 'รับใบสั่งยา (Prescription)',
    emoji: '📄',
    features: [
      'รับ order ยาจากแพทย์อัตโนมัติ + Worklist',
      'แยกคิวยา OPD / IPD / ER / ยาเสพติด / ยาควบคุม',
      'Double Check: Drug Interaction + Allergy + Duplication',
    ],
  },
  {
    title: 'จัดยา (Dispensing)',
    emoji: '💊',
    features: [
      'พิมพ์ฉลากยา (ชื่อไทย/อังกฤษ + วิธีใช้ + รูปยา + คำเตือน)',
      'Scan Barcode ยืนยันยาที่จัด',
      'Unit Dose สำหรับ IPD + บันทึก Lot/Expiry',
    ],
  },
  {
    title: 'จ่ายยา & คำปรึกษา',
    emoji: '🤝',
    features: [
      'เรียกคิวรับยา (จอ Display ห้องยา)',
      'Scan Barcode ยืนยันผู้ป่วย + จ่ายยาพร้อมคำแนะนำ',
      'พิมพ์เอกสารการใช้ยา + Digital Signature / PIN',
    ],
  },
  {
    title: 'คลังยา (Drug Inventory)',
    emoji: '📦',
    features: [
      'บริหาร Stock (รับเข้า, เบิก-จ่าย, โอนย้าย, ส่งคืน)',
      'Lot Tracking + FEFO (First Expiry First Out)',
      'แจ้งเตือนยาใกล้หมดอายุ + Reorder Point + Safety Stock',
      'Stock Count + รายงานมูลค่ายาคงคลัง',
    ],
  },
  {
    title: 'ยาเสพติด & ยาควบคุม',
    emoji: '🔒',
    color: '#ff6b6b',
    features: [
      'บันทึกแยกตาม พ.ร.บ. ยาเสพติด + ต้องแพทย์อนุมัติ',
      'สมุดควบคุม + ยอดคงเหลือตรงทุกวัน',
      'รายงานส่ง อย. / ปปส.',
    ],
  },
  {
    title: 'DUE & ADR Monitoring',
    emoji: '📊',
    features: [
      'ติดตามการใช้ยา Antibiotic + High Alert Drug',
      'ADR Monitoring (อาการไม่พึงประสงค์จากยา)',
      'รายงาน ADR ส่ง อย. + สถิติยาแยกแผนก/แพทย์',
    ],
  },
]

export default function Page5Pharmacy() {
  return (
    <PageWrapper>
      <PageHeader
        emoji="💊"
        title="เภสัชกรรม"
        subtitle="ระบบบริหารจัดการยาทั้งหมด ตั้งแต่รับใบสั่งยา จัดยา จ่ายยา จนถึงคลังยาและยาควบคุม"
        badge={{ title: '7 ฟังก์ชัน', sub: 'Must Have · Pharmacy' }}
      />

      <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap', animation: 'fadeInUp 0.5s ease 0.1s both' }}>
        <StatBox value="3x" label="Drug Safety Check" sub="Interaction · Allergy · Dup" />
        <StatBox value="FEFO" label="การจัดการ Stock" sub="First Expiry First Out" />
        <StatBox value="TMT" label="Drug Catalog" sub="Thai Medicine Terminology" />
        <StatBox value="ADR" label="เฝ้าระวังยา" sub="Adverse Drug Reaction" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20, marginBottom: 24 }}>
        {modules.map((mod, i) => (
          <GlassCard key={i} delay={0.15 + i * 0.08}>
            <div style={{
              height: mod.color ? 4 : 3,
              background: mod.color
                ? `linear-gradient(90deg, ${mod.color}, ${mod.color}88)`
                : 'linear-gradient(90deg, #2ecc71, #2ecc7188)',
            }} />
            <div style={{ padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 28 }}>{mod.emoji}</span>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, color: '#fff' }}>
                  {mod.title}
                </div>
              </div>
              <FeatureList features={mod.features} accentColor={mod.color || '#2ecc71'} />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Drug Safety Pipeline */}
      <GlassCard delay={0.7}>
        <div style={{ padding: '16px 20px' }}>
          <SectionTitle>DRUG SAFETY PIPELINE</SectionTitle>
          <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { step: 'แพทย์สั่งยา', icon: '🩺', desc: 'Drug Catalog TMT' },
              { step: 'Drug Alert', icon: '⚠️', desc: 'Interaction + Allergy' },
              { step: 'เภสัชตรวจสอบ', icon: '👨‍🔬', desc: 'Double Check' },
              { step: 'จัดยา Barcode', icon: '📦', desc: 'Lot + Expiry' },
              { step: 'จ่ายยา + คำปรึกษา', icon: '🤝', desc: 'ยืนยัน ID ผู้ป่วย' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 12,
                  padding: '12px 16px',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.1)',
                  minWidth: 120,
                }}>
                  <span style={{ fontSize: 24, display: 'block', marginBottom: 4 }}>{item.icon}</span>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{item.step}</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)' }}>{item.desc}</div>
                </div>
                {i < 4 && <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 20, margin: '0 6px' }}>→</span>}
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </PageWrapper>
  )
}
