import { PageWrapper, PageHeader, GlassCard, SectionTitle, FeatureList, StatBox } from '../components/PageWrapper'

const opdModules = [
  {
    title: 'รับผู้ป่วยจากคิว',
    emoji: '📡',
    features: [
      'แสดงรายชื่อผู้ป่วยในคิวห้องตรวจ + กดเรียกคิวถัดไป',
      'แสดง HN, ชื่อ, อายุ, สิทธิ, Vital Signs, Triage Level',
      'Alert สีแดงถ้ามีประวัติแพ้ยา',
    ],
  },
  {
    title: 'ซักประวัติ (History Taking)',
    emoji: '📖',
    features: [
      'Present Illness · Past Illness · Family History',
      'Social History (สูบบุหรี่ / ดื่มสุรา / สารเสพติด)',
      'รองรับ Free Text + Template/Structured Form ตามแผนก',
    ],
  },
  {
    title: 'ตรวจร่างกาย (Physical Exam)',
    emoji: '👨‍⚕️',
    features: [
      'บันทึกผลตาม System (General, HEENT, Heart, Lung, Abdomen)',
      'Template PE ตามแผนก/โรค + Body Diagram',
      'ผลตรวจเฉพาะทาง (Eye exam, Dental chart)',
    ],
  },
  {
    title: 'วินิจฉัย ICD-10',
    emoji: '🏷️',
    features: [
      'ค้นหา ICD-10 ทั้งภาษาไทยและอังกฤษ',
      'Principal Diagnosis + Co-morbidity + Complication',
      'รายการ ICD-10 ที่ใช้บ่อย (Favorite)',
    ],
  },
  {
    title: 'สั่งยา (Medication Order)',
    emoji: '💊',
    color: '#ff6b6b',
    features: [
      'ค้นหายาจาก Drug Catalog (ชื่อสามัญ / TMT)',
      'Drug Interaction + Drug Allergy + Duplication Check',
      'สั่งยาตาม Protocol/Regimen สำเร็จรูป',
      'ยา Stat, ยาต่อเนื่อง, ยากลับบ้าน',
    ],
  },
  {
    title: 'สั่ง Lab & ตรวจพิเศษ',
    emoji: '🧪',
    features: [
      'สั่ง Lab Profile / Lab Set (CBC+BUN+Cr+UA)',
      'สั่ง X-Ray, Ultrasound, CT, MRI, EKG, Echo',
      'ดูผล Lab ย้อนหลัง + กราฟแนวโน้ม',
    ],
  },
]

const erModules = [
  {
    title: 'Triage ฉุกเฉิน',
    emoji: '🚨',
    color: '#ff4757',
    features: [
      'คัดกรอง ESI 5 ระดับ + Unknown Patient',
      'Alert ทีมฉุกเฉินอัตโนมัติ ESI 1-2',
      'บันทึก Arrival → Triage → Doctor seen',
    ],
  },
  {
    title: 'บันทึกการรักษา ER & Disposition',
    emoji: '🏥',
    color: '#ff4757',
    features: [
      'ER Note + Trauma Assessment + CPR/Intubation',
      'สั่งยา STAT + Lab STAT + X-Ray Portable',
      'Disposition: Discharge / Admit / Refer / DOA',
      'Door-to-Doctor Time + ER Length of Stay',
    ],
  },
]

export default function Page3OPD() {
  return (
    <PageWrapper>
      <PageHeader
        emoji="🩺"
        title="ห้องตรวจ OPD & ER"
        subtitle="ระบบสำหรับแพทย์ตรวจรักษาผู้ป่วยนอก + ระบบฉุกเฉิน ครอบคลุม EMR, การวินิจฉัย, สั่งยา, สั่ง Lab"
        badge={{ title: '15 ฟังก์ชัน', sub: 'OPD 10 + ER 5' }}
      />

      <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap', animation: 'fadeInUp 0.5s ease 0.1s both' }}>
        <StatBox value="10" label="ฟังก์ชัน OPD" sub="Outpatient" />
        <StatBox value="5" label="ฟังก์ชัน ER" sub="Emergency" />
        <StatBox value="ICD-10" label="มาตรฐานวินิจฉัย" sub="International" />
        <StatBox value="EMR" label="เวชระเบียนอิเล็กทรอนิกส์" sub="Electronic Medical Record" />
      </div>

      {/* OPD Section */}
      <SectionTitle>OPD - OUTPATIENT DEPARTMENT</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20, marginBottom: 28 }}>
        {opdModules.map((mod, i) => (
          <GlassCard key={i} delay={0.15 + i * 0.08}>
            <div style={{
              height: 3,
              background: mod.color
                ? `linear-gradient(90deg, ${mod.color}, ${mod.color}88)`
                : 'linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0.6), rgba(255,255,255,0.3))',
            }} />
            <div style={{ padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 28 }}>{mod.emoji}</span>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, color: '#fff' }}>
                  {mod.title}
                </div>
              </div>
              <FeatureList features={mod.features} accentColor={mod.color || '#5bc0de'} />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* ER Section */}
      <SectionTitle>ER - EMERGENCY ROOM</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20, marginBottom: 24 }}>
        {erModules.map((mod, i) => (
          <GlassCard key={i} delay={0.6 + i * 0.1}>
            <div style={{ height: 4, background: `linear-gradient(90deg, ${mod.color}, ${mod.color}88)` }} />
            <div style={{ padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 28 }}>{mod.emoji}</span>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, color: '#fff' }}>
                  {mod.title}
                </div>
              </div>
              <FeatureList features={mod.features} accentColor={mod.color} />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Additional OPD features */}
      <GlassCard delay={0.8}>
        <div style={{ padding: '16px 20px' }}>
          <SectionTitle>ADDITIONAL OPD FEATURES</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {[
              { icon: '📤', label: 'ส่งต่อ / Refer', desc: 'Consult + ใบ Refer สปสช.' },
              { icon: '📋', label: 'Visit Summary', desc: 'สรุปการตรวจ + ใบนัด' },
              { icon: '📁', label: 'Medical Record', desc: 'Timeline + Problem List' },
              { icon: '📊', label: 'รายงาน ER', desc: 'Injury Surveillance' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.08)',
                borderRadius: 12,
                padding: '12px 14px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
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
