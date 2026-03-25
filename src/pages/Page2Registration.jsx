import { PageWrapper, PageHeader, GlassCard, SectionTitle, FeatureList, StatBox } from '../components/PageWrapper'

const modules = [
  {
    title: 'ลงทะเบียนผู้ป่วยใหม่',
    emoji: '📝',
    features: [
      'บันทึกข้อมูลส่วนบุคคล (ชื่อ, เลข 13 หลัก, ที่อยู่, LINE ID)',
      'ออกเลข HN อัตโนมัติ + ถ่ายรูปผู้ป่วย',
      'Scan บัตร ปชช. อ่านข้อมูลอัตโนมัติ (Smart Card Reader)',
    ],
  },
  {
    title: 'ค้นหาผู้ป่วยเก่า',
    emoji: '🔍',
    features: [
      'ค้นหาด้วย HN, เลขบัตร ปชช., ชื่อ-สกุล (Fuzzy Search)',
      'ค้นหาด้วยเบอร์โทร หรือ วันเกิด',
      'แสดงประวัติย้อนหลังทั้งหมด + Timeline',
    ],
  },
  {
    title: 'ตรวจสอบสิทธิการรักษา',
    emoji: '🔐',
    color: '#ff6b6b',
    features: [
      'เชื่อมต่อ API สปสช. (สิทธิ UC / บัตรทอง)',
      'เชื่อมต่อ API ประกันสังคม (สิทธิ ปกส.)',
      'เชื่อมต่อ API กรมบัญชีกลาง (สิทธิข้าราชการ)',
      'แสดงผลสิทธิทั้งหมด + วันที่มีผล + หน่วยบริการหลัก',
    ],
  },
  {
    title: 'คัดกรองอาการเบื้องต้น',
    emoji: '🌡️',
    features: [
      'บันทึก Vital Signs (BP, Pulse, Temp, RR, O2Sat, BMI)',
      'ประเมิน Triage ESI 5 ระดับ + บันทึก Chief Complaint',
      'ประวัติแพ้ยา + โรคประจำตัว (Alert แดงถ้ามี)',
    ],
  },
  {
    title: 'ระบบคิวอัจฉริยะ',
    emoji: '🎫',
    features: [
      'คิวอัตโนมัติตามแผนก (Walk-in + นัดหมาย)',
      'จอ Display + เสียงเรียกภาษาไทย (TTS)',
      'ผู้ป่วยเช็คคิวผ่าน LINE OA / QR Code',
      'Dashboard คิว real-time สำหรับ Admin',
    ],
  },
  {
    title: 'นัดหมาย & จัดการตารางแพทย์',
    emoji: '📅',
    features: [
      'นัดตรวจแพทย์เฉพาะทาง + กำหนด Slot เวลา',
      'แจ้งเตือนผ่าน LINE OA ก่อนวันนัด 1-3 วัน',
      'ตรวจสอบ Slot ว่าง + ป้องกันนัดซ้ำซ้อน',
      'ปฏิทินรวมแพทย์ + ย้ายนัดอัตโนมัติเมื่อแพทย์งดตรวจ',
    ],
  },
]

export default function Page2Registration() {
  return (
    <PageWrapper>
      <PageHeader
        emoji="📋"
        title="ลงทะเบียน / คัดกรอง / คิว"
        subtitle="จุดแรกที่ผู้ป่วยเข้ามาติดต่อ รพ. ครอบคลุมระบบลงทะเบียน ตรวจสอบสิทธิ คัดกรอง และระบบคิวอัจฉริยะ"
        badge={{ title: '15 ฟังก์ชัน', sub: 'Must Have · 2 ระบบ' }}
      />

      {/* Stats */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap', animation: 'fadeInUp 0.5s ease 0.1s both' }}>
        <StatBox value="7" label="ฟังก์ชันลงทะเบียน" sub="Registration" />
        <StatBox value="8" label="ฟังก์ชันคิว/นัดหมาย" sub="Queue & Appointment" />
        <StatBox value="3" label="กองทุนที่เชื่อมต่อ" sub="UC · ปกส. · ข้าราชการ" />
        <StatBox value="5" label="ระดับ Triage" sub="ESI Level" />
      </div>

      {/* Module cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
        {modules.map((mod, i) => (
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
                <div style={{
                  fontFamily: "'Kanit', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: '#fff',
                }}>
                  {mod.title}
                </div>
              </div>
              <FeatureList features={mod.features} accentColor={mod.color || '#5bc0de'} />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Workflow hint */}
      <div style={{
        marginTop: 24,
        animation: 'fadeInUp 0.5s ease 0.8s both',
      }}>
        <GlassCard>
          <div style={{ padding: '16px 20px' }}>
            <SectionTitle>WORKFLOW OVERVIEW</SectionTitle>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
              {['Scan บัตร ปชช.', 'เปิด HN', 'เช็คสิทธิ 3 กองทุน', 'Vital Signs', 'Triage ESI', 'ออกบัตรคิว', 'Display + LINE'].map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: 10,
                    padding: '8px 14px',
                    fontSize: 12,
                    color: '#fff',
                    fontWeight: 600,
                    border: '1px solid rgba(255,255,255,0.15)',
                    whiteSpace: 'nowrap',
                  }}>
                    {step}
                  </div>
                  {i < 6 && <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 16 }}>→</span>}
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </PageWrapper>
  )
}
