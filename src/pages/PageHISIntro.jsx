import { PageWrapper } from '../components/PageWrapper'

export default function PageHISIntro() {
  return (
    <PageWrapper>
      {/* ── One-line definition ── */}
      <div style={{
        fontSize: 14, color: 'rgba(255,255,255,0.85)',
        fontFamily: "'Kanit', sans-serif",
        marginBottom: 14,
      }}>
        <span style={{ fontWeight: 800, color: '#fff' }}>HIS (Hospital Information Systems)</span>
        {' '}— ระบบสารสนเทศโรงพยาบาล ใช้ IT จัดการข้อมูลผู้ป่วยและเชื่อมทุกแผนกให้ทำงานร่วมกันได้แบบ Real-time
      </div>

      {/* ── Flow Image ── */}
      <img
        src="/flow.png"
        alt="Flow การรักษาผู้ป่วยผ่านระบบ HIS"
        style={{
          width: '100%',
          height: '82vh',
          objectFit: 'contain',
          objectPosition: 'center top',
          display: 'block',
        }}
      />
    </PageWrapper>
  )
}
