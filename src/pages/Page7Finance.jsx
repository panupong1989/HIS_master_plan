import { PageWrapper, PageHeader, GlassCard, SectionTitle, FeatureList, StatBox } from '../components/PageWrapper'

const financeModules = [
  {
    title: 'คำนวณค่ารักษา',
    emoji: '🧮',
    features: [
      'คำนวณอัตโนมัติจากรายการ (ค่ายา, Lab, X-Ray, หัตถการ, ห้อง/เตียง, อาหาร, ค่าแพทย์)',
      'ใช้ราคาตาม Fee Schedule + คำนวณส่วนลดตามสิทธิอัตโนมัติ',
      'แยกส่วนที่ผู้ป่วยจ่ายเอง vs ส่วนที่เบิกกองทุน',
    ],
  },
  {
    title: 'เก็บเงิน (Cashier)',
    emoji: '💳',
    features: [
      'รับชำระหลายช่องทาง (เงินสด, บัตรเครดิต/เดบิต, QR Payment, Transfer)',
      'ออกใบเสร็จ/ใบกำกับภาษี + ยกเลิก/แก้ไข (Credit Note)',
      'สรุปเงินสดปลายวัน (Daily Closing)',
    ],
  },
  {
    title: 'เบิกจ่าย สปสช. (UC)',
    emoji: '🏥',
    color: '#3498db',
    features: [
      'สร้าง e-Claim ตามมาตรฐาน สปสช. + ส่งอัตโนมัติ',
      'ตรวจสอบ Authen Code + จัดการ Claim ที่ถูก Reject',
      'Drug Catalog Mapping (รหัสยา 24 หลัก สปสช.)',
    ],
  },
  {
    title: 'เบิกจ่ายกรมบัญชีกลาง',
    emoji: '🏛️',
    color: '#2ecc71',
    features: [
      'ส่งข้อมูลเบิกตรง Real-time + ใช้ระบบ DRG สำหรับ IPD',
      'ตรวจสอบสิทธิก่อนเบิก + รายการยา/หัตถการที่เบิกได้',
    ],
  },
  {
    title: 'เบิกจ่ายประกันสังคม + พรบ.',
    emoji: '🛡️',
    color: '#f39c12',
    features: [
      'คำนวณตาม Capitation/Fee Schedule ประกันสังคม',
      'กรณีส่งต่อ / อุบัติเหตุ / ฉุกเฉิน',
      'บันทึก พ.ร.บ. อุบัติเหตุ + Fax Claim ประกันเอกชน',
    ],
  },
  {
    title: 'ส่งข้อมูล 43 แฟ้ม',
    emoji: '📤',
    color: '#e74c3c',
    features: [
      'สร้าง 43 แฟ้ม (PERSON, SERVICE, DIAGNOSIS, DRUG, CHARGE, ACCIDENT ฯลฯ)',
      'ตรวจสอบความถูกต้องก่อนส่ง + ส่งรายเดือน',
      'แก้ไขข้อมูลที่ Error + Dashboard สถานะ',
    ],
  },
  {
    title: 'รายงานการเงิน',
    emoji: '📊',
    features: [
      'รายรับรายวัน/เดือน/ปี แยกตามสิทธิ + แยกแผนก',
      'ลูกหนี้ค้างเบิก + Revenue แยกแผนก + กำไร-ขาดทุนแยกสิทธิ',
      'รายงานส่ง สตง. / กรมบัญชีกลาง',
    ],
  },
]

const supplyModules = [
  {
    title: 'คลังเวชภัณฑ์',
    emoji: '📦',
    features: [
      'รับเข้า (GR) + เบิก-จ่ายตามแผนก + โอนย้าย + ส่งคืน',
      'Lot Tracking + Expiry Management + Physical Count',
    ],
  },
  {
    title: 'จัดซื้อจัดจ้าง',
    emoji: '🛒',
    features: [
      'สร้างใบขอซื้อ (PR) → อนุมัติ → ใบสั่งซื้อ (PO)',
      'เปรียบเทียบราคา + ติดตามจัดส่ง + ตรวจรับพัสดุ',
    ],
  },
  {
    title: 'รายงานพัสดุ',
    emoji: '📈',
    features: [
      'มูลค่าคงคลัง + อัตราหมุนเวียน + วัสดุหมดอายุ',
      'สรุปการจัดซื้อ + ABC Analysis',
    ],
  },
]

const adminModules = [
  {
    title: 'จัดการผู้ใช้งาน & RBAC',
    emoji: '👤',
    features: [
      'กำหนด Role (แพทย์, พยาบาล, เภสัชกร, การเงิน, Admin)',
      'กำหนดสิทธิ์ตาม Role + ตามแผนก + Two-Factor Auth',
      'บันทึก Login/Logout Log',
    ],
  },
  {
    title: 'Audit Trail & PDPA',
    emoji: '🔒',
    features: [
      'บันทึกทุก Action (ดู/เพิ่ม/แก้ไข/ลบ) + IP Address + ค่าก่อน-หลัง',
      'เก็บ Log อย่างน้อย 5 ปี ตามข้อกำหนด',
      'Consent ผู้ป่วย (PDPA) + Encryption + Data Masking',
      'Right to Access / Right to Delete + Data Breach Log',
    ],
  },
  {
    title: 'Master Data & ตั้งค่า',
    emoji: '⚙️',
    features: [
      'ICD-10, TMT (Drug), Lab Catalog, Fee Schedule',
      'Ward/Room/Bed, Doctor List + เลขใบประกอบ',
      'ตั้งค่า HN Format, เลข Visit, เครื่องพิมพ์, LINE OA, จอ Display',
    ],
  },
  {
    title: 'Backup & Recovery',
    emoji: '💾',
    features: [
      'Automated Daily Backup + ทดสอบ Restore ทุกเดือน',
      'Disaster Recovery Plan + แจ้งเตือน Backup ล้มเหลว',
    ],
  },
]

export default function Page7Finance() {
  return (
    <PageWrapper>
      <PageHeader
        emoji="💰"
        title="การเงิน & บริหารจัดการ"
        subtitle="ระบบการเงิน เบิกจ่ายสิทธิ พัสดุ คลังเวชภัณฑ์ และระบบ Admin/Security ของ รพ."
        badge={{ title: '17 ฟังก์ชัน', sub: 'Finance 8 + Supply 3 + Admin 6' }}
      />

      <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap', animation: 'fadeInUp 0.5s ease 0.1s both' }}>
        <StatBox value="8" label="ฟังก์ชันการเงิน" sub="Finance & Billing" />
        <StatBox value="3" label="ฟังก์ชันพัสดุ" sub="Supply & Inventory" />
        <StatBox value="6" label="ฟังก์ชัน Admin" sub="System Management" />
        <StatBox value="PDPA" label="คุ้มครองข้อมูล" sub="พ.ร.บ. 2562" />
      </div>

      {/* Finance */}
      <SectionTitle>FINANCE & BILLING — 8 FUNCTIONS</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18, marginBottom: 28 }}>
        {financeModules.map((mod, i) => (
          <GlassCard key={i} delay={0.15 + i * 0.06}>
            <div style={{
              height: mod.color ? 4 : 3,
              background: mod.color
                ? `linear-gradient(90deg, ${mod.color}, ${mod.color}88)`
                : 'linear-gradient(90deg, #f1c40f, #f1c40f88)',
            }} />
            <div style={{ padding: '14px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 26 }}>{mod.emoji}</span>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 15, color: '#fff' }}>
                  {mod.title}
                </div>
              </div>
              <FeatureList features={mod.features} accentColor={mod.color || '#f1c40f'} />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Supply */}
      <SectionTitle>SUPPLY & INVENTORY — 3 FUNCTIONS</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18, marginBottom: 28 }}>
        {supplyModules.map((mod, i) => (
          <GlassCard key={i} delay={0.6 + i * 0.08}>
            <div style={{ height: 3, background: 'linear-gradient(90deg, #1abc9c, #1abc9c88)' }} />
            <div style={{ padding: '14px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 26 }}>{mod.emoji}</span>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 15, color: '#fff' }}>
                  {mod.title}
                </div>
              </div>
              <FeatureList features={mod.features} accentColor="#1abc9c" />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Admin */}
      <SectionTitle>ADMINISTRATION & SYSTEM — 6 FUNCTIONS</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18, marginBottom: 24 }}>
        {adminModules.map((mod, i) => (
          <GlassCard key={i} delay={0.8 + i * 0.08}>
            <div style={{ height: 3, background: 'linear-gradient(90deg, #9b59b6, #9b59b688)' }} />
            <div style={{ padding: '14px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 26 }}>{mod.emoji}</span>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 15, color: '#fff' }}>
                  {mod.title}
                </div>
              </div>
              <FeatureList features={mod.features} accentColor="#9b59b6" />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* e-Claim Flow */}
      <GlassCard delay={1.1}>
        <div style={{ padding: '16px 20px' }}>
          <SectionTitle>E-CLAIM WORKFLOW</SectionTitle>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { step: 'รวมค่ารักษา', icon: '🧮' },
              { step: 'หักสิทธิ', icon: '🔐' },
              { step: 'ผู้ป่วยจ่าย', icon: '💳' },
              { step: 'ส่ง e-Claim', icon: '📤' },
              { step: 'ติดตาม Claim', icon: '📊' },
              { step: 'รับเงินจากกองทุน', icon: '🏦' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 12,
                  padding: '10px 14px',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.1)',
                  minWidth: 100,
                }}>
                  <span style={{ fontSize: 22, display: 'block', marginBottom: 4 }}>{item.icon}</span>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#fff' }}>{item.step}</div>
                </div>
                {i < 5 && <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 18, margin: '0 4px' }}>→</span>}
              </div>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* User Estimate */}
      <div style={{ marginTop: 20 }}>
        <GlassCard delay={1.2}>
          <div style={{ padding: '16px 20px' }}>
            <SectionTitle>USER ESTIMATE (60-180 USERS)</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 10 }}>
              {[
                { role: 'แพทย์', count: '10-30', icon: '🩺' },
                { role: 'พยาบาล', count: '30-100', icon: '👩‍⚕️' },
                { role: 'เภสัชกร', count: '5-15', icon: '💊' },
                { role: 'นักเทคนิค Lab', count: '5-10', icon: '🔬' },
                { role: 'การเงิน', count: '3-10', icon: '💰' },
                { role: 'เวชระเบียน', count: '3-10', icon: '📋' },
                { role: 'Admin', count: '2-5', icon: '⚙️' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: 10,
                  padding: '10px 12px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'center',
                }}>
                  <span style={{ fontSize: 20 }}>{item.icon}</span>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', marginTop: 2 }}>{item.role}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', fontFamily: "'JetBrains Mono', monospace" }}>{item.count} คน</div>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </PageWrapper>
  )
}
