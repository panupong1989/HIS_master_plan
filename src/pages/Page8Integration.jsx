import { PageWrapper, PageHeader, GlassCard, SectionTitle, FeatureList, StatBox } from '../components/PageWrapper'

const integrationModules = [
  {
    title: '43 แฟ้มมาตรฐาน → HDC',
    emoji: '📤',
    color: '#3498db',
    features: [
      'สร้าง 43 แฟ้มอัตโนมัติจากข้อมูลการรักษา',
      'ตรวจสอบความถูกต้องก่อนส่ง (Validation)',
      'ส่งข้อมูลไป HDC กระทรวงสาธารณสุข',
      'Dashboard สถานะการส่ง + แก้ไขข้อมูลที่ Error',
    ],
  },
  {
    title: 'e-Referral & Health Link',
    emoji: '🔗',
    color: '#2ecc71',
    features: [
      'ส่ง-รับ Refer ผู้ป่วยระหว่าง รพ. (e-Referral)',
      'เชื่อมต่อ Health Information Exchange (HIE)',
      'แชร์ข้อมูลผู้ป่วยข้ามสถานพยาบาล',
    ],
  },
  {
    title: 'LINE OA & Digital Services',
    emoji: '📱',
    color: '#06c755',
    features: [
      'เช็คคิว + แจ้งเตือนนัดหมายผ่าน LINE OA',
      'ดูผล Lab + ประวัติการรักษาผ่าน Patient Portal',
      'Digital Consent (PDPA) + Telehealth',
    ],
  },
  {
    title: 'API & Third-party Integration',
    emoji: '🌐',
    features: [
      'API สปสช. + กรมบัญชีกลาง + ประกันสังคม',
      'เชื่อมต่อเครื่องมือแพทย์ (HL7 / FHIR)',
      'MOPH Gateway + Digital Health ID',
    ],
  },
]

const specialtyModules = [
  {
    title: 'ทันตกรรม (Dental)',
    emoji: '🦷',
    features: [
      'Dental Chart + Treatment Plan + Dental X-Ray',
      'รหัสหัตถการทันตกรรม + ค่าใช้จ่ายเฉพาะทาง',
    ],
  },
  {
    title: 'แพทย์แผนไทย',
    emoji: '🌿',
    features: [
      'บันทึกการตรวจแพทย์แผนไทย (นวด, สมุนไพร, ฝังเข็ม)',
      'คลังสมุนไพร + สูตรยาแผนไทย',
    ],
  },
  {
    title: 'ส่งเสริมสุขภาพ & ป้องกันโรค',
    emoji: '💉',
    features: [
      'ตรวจสุขภาพประจำปี + ระบบฉีดวัคซีน (EPI)',
      'คัดกรองโรคเรื้อรัง (DM, HT, มะเร็ง)',
      'อนามัยแม่และเด็ก + ทะเบียนโรคเรื้อรัง (CDM)',
    ],
  },
]

const summaryData = [
  { dept: 'จุดคัดกรอง / ห้องบัตร', count: 7, priority: 'Must Have' },
  { dept: 'ระบบคิวและนัดหมาย', count: 8, priority: 'Must Have' },
  { dept: 'ห้องตรวจ OPD', count: 10, priority: 'Must Have' },
  { dept: 'ห้องตรวจฉุกเฉิน ER', count: 5, priority: 'Must Have' },
  { dept: 'ห้องปฏิบัติการ Lab', count: 7, priority: 'Must Have' },
  { dept: 'รังสีวิทยา X-Ray', count: 4, priority: 'Should Have' },
  { dept: 'เภสัชกรรม', count: 7, priority: 'Must Have' },
  { dept: 'ผู้ป่วยใน IPD', count: 7, priority: 'Should Have' },
  { dept: 'ห้องผ่าตัด OR', count: 4, priority: 'Could Have' },
  { dept: 'โภชนาการ', count: 3, priority: 'Could Have' },
  { dept: 'การเงิน', count: 8, priority: 'Must Have' },
  { dept: 'พัสดุ / คลังเวชภัณฑ์', count: 3, priority: 'Could Have' },
  { dept: 'ทันตกรรม', count: 4, priority: 'Could Have' },
  { dept: 'เวชระเบียนและสถิติ', count: 4, priority: 'Must Have' },
  { dept: 'แพทย์แผนไทย', count: 3, priority: 'Could Have' },
  { dept: 'ส่งเสริมสุขภาพ', count: 6, priority: 'Should Have' },
  { dept: 'ระบบบริหารจัดการ', count: 6, priority: 'Must Have' },
  { dept: 'เชื่อมต่อภายนอก', count: 7, priority: 'Must Have' },
]

const priorityColors = {
  'Must Have': '#2ecc71',
  'Should Have': '#f39c12',
  'Could Have': '#95a5a6',
}

export default function Page8Integration() {
  return (
    <PageWrapper>
      <PageHeader
        emoji="🔗"
        title="เชื่อมต่อภายนอก & สรุปภาพรวม"
        subtitle="ระบบเชื่อมต่อกับหน่วยงานภายนอก ระบบเฉพาะทาง และสรุปภาพรวม 18 แผนก 103 ฟังก์ชัน"
        badge={{ title: 'Executive Summary', sub: 'งบ 7.8M · 10 เดือน' }}
      />

      <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap', animation: 'fadeInUp 0.5s ease 0.1s both' }}>
        <StatBox value="18" label="แผนก / ระบบ" sub="ครบวงจร" />
        <StatBox value="103" label="ฟังก์ชันทั้งหมด" sub="Functions" />
        <StatBox value="7.8M" label="งบประมาณ (บาท)" sub="Budget" />
        <StatBox value="10" label="เดือน" sub="ระยะเวลาพัฒนา" />
      </div>

      {/* Integration */}
      <SectionTitle>EXTERNAL INTEGRATION</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20, marginBottom: 28 }}>
        {integrationModules.map((mod, i) => (
          <GlassCard key={i} delay={0.15 + i * 0.08}>
            <div style={{ height: 4, background: `linear-gradient(90deg, ${mod.color || '#5bc0de'}, ${(mod.color || '#5bc0de')}88)` }} />
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

      {/* Specialty */}
      <SectionTitle>SPECIALTY MODULES</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 28 }}>
        {specialtyModules.map((mod, i) => (
          <GlassCard key={i} delay={0.5 + i * 0.08}>
            <div style={{ height: 3, background: 'linear-gradient(90deg, #e67e22, #e67e2288)' }} />
            <div style={{ padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 28 }}>{mod.emoji}</span>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 15, color: '#fff' }}>
                  {mod.title}
                </div>
              </div>
              <FeatureList features={mod.features} accentColor="#e67e22" />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Summary Table */}
      <GlassCard delay={0.75}>
        <div style={{ padding: '20px' }}>
          <SectionTitle>SYSTEM SUMMARY - 18 DEPARTMENTS · 103 FUNCTIONS</SectionTitle>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 8,
          }}>
            {summaryData.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 12px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
                  <div style={{
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    background: `${priorityColors[item.priority]}33`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 11,
                    fontWeight: 800,
                    color: priorityColors[item.priority],
                    fontFamily: "'JetBrains Mono', monospace",
                    flexShrink: 0,
                  }}>
                    {item.count}
                  </div>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
                    {item.dept}
                  </span>
                </div>
                <span style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: priorityColors[item.priority],
                  background: `${priorityColors[item.priority]}15`,
                  padding: '2px 8px',
                  borderRadius: 10,
                  fontFamily: "'JetBrains Mono', monospace",
                  whiteSpace: 'nowrap',
                }}>
                  {item.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Footer */}
      <div style={{
        marginTop: 24,
        animation: 'fadeInUp 0.5s ease 1s both',
      }}>
        <GlassCard>
          <div style={{
            padding: '20px 24px',
            textAlign: 'center',
          }}>
            <div style={{
              fontFamily: "'Kanit', sans-serif",
              fontWeight: 800,
              fontSize: 22,
              color: '#fff',
              marginBottom: 4,
            }}>
              Hospital Information System
            </div>
            <div style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.65)',
              marginBottom: 12,
            }}>
              ระบบสารสนเทศโรงพยาบาลรัฐ · ครบวงจร 18 แผนก · 103 ฟังก์ชัน
            </div>
            <div style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              {[
                { label: 'งบประมาณ', value: '7,800,000 บาท' },
                { label: 'ระยะเวลา', value: '10 เดือน' },
                { label: 'เอกสาร', value: 'v1.0 · มี.ค. 2569' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  padding: '8px 16px',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', fontFamily: "'JetBrains Mono', monospace" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </PageWrapper>
  )
}
