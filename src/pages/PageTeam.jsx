import { useState, useRef } from 'react'
import { PageWrapper, PageHeader, GlassCard, SectionTitle } from '../components/PageWrapper'

// ── All 21 individual positions ───────────────────────────────────────────────

const PEOPLE = [
  // Project Owner
  {
    id: 'po', role: 'Project Owner', level: 'lead',
    icon: '👑', color: '#fdcb6e', salary: 130000,
    jd: ['กำหนด Vision และ Business Goal ของระบบ HIS', 'อนุมัติ Requirement และ Scope', 'ตัดสินใจลำดับความสำคัญของ Feature', 'รับผิดชอบผลลัพธ์ทางธุรกิจ'],
    requirements: ['ผู้บริหาร รพ. / ผู้อำนวยการ / CIO', 'เข้าใจ Workflow โรงพยาบาล', 'มีอำนาจอนุมัติงบประมาณ', 'ประสานงาน Stakeholders ระดับสูง'],
  },

  // PM
  {
    id: 'pm', role: 'Project Manager', level: 'lead',
    icon: '👨‍💼', color: '#667eea', salary: 100000,
    jd: ['บริหารโปรเจค Timeline & Milestones', 'ประสานงาน Stakeholders ทุกฝ่าย', 'ควบคุม Risk, Budget, Quality', 'รายงานความคืบหน้าต่อผู้บริหาร'],
    requirements: ['ประสบการณ์ PM ≥ 5 ปี', 'PMP / PRINCE2 (preferred)', 'เคยบริหารโปรเจค Healthcare / ERP', 'ทักษะสื่อสาร & Negotiation'],
  },

  // System Analyst team (4)
  {
    id: 'sa-senior', role: 'System Analyst (Senior)', level: 'lead',
    icon: '🏗️', color: '#f39c12', salary: 60000,
    jd: ['ออกแบบ System Architecture HIS', 'กำหนด Tech Stack & Integration Pattern', 'Review Technical Design ทั้งหมด', 'ดูแล SA Team & Technical Direction'],
    requirements: ['SA / Architect ≥ 7 ปี', 'HL7/FHIR, 43 แฟ้ม', 'Microservices, Cloud', 'เคยออกแบบ Healthcare System'],
  },
  {
    id: 'sa', role: 'System Analyst', level: 'mid',
    icon: '🏗️', color: '#f39c12', salary: 30000,
    jd: ['วิเคราะห์ระบบ เขียน System Spec', 'สร้าง Data Flow & Sequence Diagram', 'ประสานงาน Dev Team & BA', 'จัดทำ Technical Documentation'],
    requirements: ['SA ≥ 3 ปี', 'UML, ERD, DFD', 'เข้าใจ Healthcare Workflow', 'วิเคราะห์ระบบ Legacy'],
  },
  {
    id: 'integration', role: 'Integration Engineer', level: 'mid',
    icon: '🔌', color: '#e17055', salary: 35000,
    jd: ['เชื่อมต่อระบบ สปสช. / กสธ.', 'พัฒนา HL7/FHIR Interface', 'ส่ง 43 แฟ้ม & e-Claim', 'Monitor & Maintain Integration'],
    requirements: ['Integration ≥ 4 ปี', 'HL7/FHIR, 43 แฟ้ม, e-Claim', 'REST API, Message Queue, ESB', 'มาตรฐานสาธารณสุขไทย'],
  },
  {
    id: 'devops', role: 'DevOps / Infra', level: 'mid',
    icon: '🛡️', color: '#00cec9', salary: 50000,
    jd: ['จัดการ Server & Cloud Infrastructure', 'ตั้งค่า CI/CD Pipeline', 'Monitoring, Alerting, Logging', 'Security, Backup & DR'],
    requirements: ['DevOps ≥ 3 ปี', 'Docker, Kubernetes, Linux', 'AWS / Azure / On-premise', 'PDPA / Healthcare Security'],
  },

  // Business Analyst team (2)
  {
    id: 'ba-lead', role: 'BA Lead', level: 'lead',
    icon: '📋', color: '#6c5ce7', salary: 60000,
    jd: ['นำทีม BA & กำหนด Requirement Process', 'รวบรวม High-level Requirement', 'ประสานงาน PM, SA, และ รพ.', 'Review User Story & Acceptance Criteria'],
    requirements: ['BA ≥ 5 ปี', 'เข้าใจ Workflow โรงพยาบาล', 'Jira, Confluence, Visio', 'Facilitation & Workshop'],
  },
  {
    id: 'ba', role: 'Business Analyst', level: 'mid',
    icon: '📋', color: '#6c5ce7', salary: 30000,
    jd: ['เขียน User Story & Use Case', 'จัดทำ Process Flow Diagram', 'ประสานงาน User ↔ Dev Team', 'สนับสนุน UAT & Go-live'],
    requirements: ['BA ≥ 3 ปี', 'เข้าใจ Workflow รพ.', 'Excel, Confluence', 'สื่อสารดี ใจเย็น'],
  },

  // UX/UI team (3)
  {
    id: 'ux-lead', role: 'UX Lead', level: 'lead',
    icon: '🎨', color: '#fd79a8', salary: 50000,
    jd: ['กำหนด UX Strategy & Research Plan', 'User Research & Usability Testing', 'สร้าง Design System', 'ดูแล UI Designer & Quality'],
    requirements: ['UX ≥ 4 ปี', 'Figma, User Testing Tools', 'Medical UX Experience', 'Design Thinking'],
  },
  {
    id: 'ui', role: 'UI Designer', level: 'mid',
    icon: '✏️', color: '#fd79a8', salary: 35000,
    jd: ['ออกแบบหน้าจอ HIS ทุกโมดูล', 'สร้าง Wireframe & Mockup', 'สร้าง Component Library', 'ประสานงานกับ Frontend Dev'],
    requirements: ['UI/UX ≥ 2 ปี', 'Figma, Adobe XD', 'Responsive Design', 'เข้าใจ Healthcare UI Patterns'],
  },
  {
    id: 'ui-2', role: 'UX/UI Designer', level: 'mid',
    icon: '🖌️', color: '#fd79a8', salary: 35000,
    jd: ['ออกแบบ User Flow & Interaction Design', 'สร้าง Prototype สำหรับ Usability Test', 'ดูแล Accessibility & Inclusive Design', 'ประสานงานกับ BA & Frontend Dev'],
    requirements: ['UI/UX ≥ 2 ปี', 'Figma, Prototyping Tools', 'User Research พื้นฐาน', 'เข้าใจ Healthcare UX'],
  },

  // Backend team (4)
  {
    id: 'be-lead', role: 'Backend Lead', level: 'lead',
    icon: '⚙️', color: '#e17055', salary: 60000,
    jd: ['ออกแบบ Backend Architecture', 'Code Review & Coding Standards', 'Mentor Mid & Junior Dev', 'Database Design & Performance'],
    requirements: ['Backend ≥ 5 ปี', 'Node.js / Java / Python', 'PostgreSQL, Redis, Docker', 'Clean Architecture / DDD'],
  },
  {
    id: 'be-mid-1', role: 'Backend Developer (Mid)', level: 'mid',
    icon: '⚙️', color: '#e17055', salary: 50000,
    jd: ['พัฒนา REST API ทุกโมดูล', 'Business Logic & Service Layer', 'Integration กับ Service อื่น', 'Unit & Integration Test'],
    requirements: ['Backend ≥ 3 ปี', 'Node.js / Java', 'SQL & NoSQL', 'RESTful API Design'],
  },
  {
    id: 'be-mid-2', role: 'Backend Developer (Mid)', level: 'mid',
    icon: '⚙️', color: '#e17055', salary: 50000,
    jd: ['พัฒนา REST API ทุกโมดูล', 'Business Logic & Service Layer', 'Integration กับ Service อื่น', 'Unit & Integration Test'],
    requirements: ['Backend ≥ 3 ปี', 'Node.js / Java', 'SQL & NoSQL', 'RESTful API Design'],
  },
  {
    id: 'be-jr', role: 'Backend Developer (Jr)', level: 'jr',
    icon: '⚙️', color: '#e17055', salary: 30000,
    jd: ['พัฒนา Feature ตาม Spec', 'เขียน Unit Test', 'Fix Bug', 'เรียนรู้ Codebase & Best Practices'],
    requirements: ['Backend ≥ 1 ปี', 'Node.js / Java เบื้องต้น', 'SQL พื้นฐาน', 'Git, Agile Workflow'],
  },

  // Frontend team (4)
  {
    id: 'fe-lead', role: 'Frontend Lead', level: 'lead',
    icon: '💻', color: '#0984e3', salary: 60000,
    jd: ['กำหนด Frontend Architecture', 'Component Library & Design Tokens', 'Performance Optimization', 'Mentor Mid & Junior Dev'],
    requirements: ['Frontend ≥ 5 ปี', 'React, TypeScript', 'State Management, Web Perf', 'Accessibility (WCAG)'],
  },
  {
    id: 'fe-mid-1', role: 'Frontend Developer (Mid)', level: 'mid',
    icon: '💻', color: '#0984e3', salary: 50000,
    jd: ['พัฒนาหน้าจอ React', 'สร้าง Reusable Component', 'เชื่อมต่อ Backend API', 'Responsive & Cross-browser'],
    requirements: ['Frontend ≥ 3 ปี', 'React, TypeScript', 'CSS, Tailwind', 'REST API Integration'],
  },
  {
    id: 'fe-mid-2', role: 'Frontend Developer (Mid)', level: 'mid',
    icon: '💻', color: '#0984e3', salary: 50000,
    jd: ['พัฒนาหน้าจอ React', 'สร้าง Reusable Component', 'เชื่อมต่อ Backend API', 'Responsive & Cross-browser'],
    requirements: ['Frontend ≥ 3 ปี', 'React, TypeScript', 'CSS, Tailwind', 'REST API Integration'],
  },
  {
    id: 'fe-jr', role: 'Frontend Developer (Jr)', level: 'jr',
    icon: '💻', color: '#0984e3', salary: 30000,
    jd: ['พัฒนา UI ตาม Mockup', 'Fix Bug หน้าจอ', 'เขียน Component ง่ายๆ', 'ทดสอบ Cross-browser'],
    requirements: ['Frontend ≥ 1 ปี', 'React เบื้องต้น', 'HTML, CSS, JavaScript', 'Git, Agile'],
  },

  // QA team (2)
  {
    id: 'qa-lead', role: 'QA Lead', level: 'lead',
    icon: '🧪', color: '#00b894', salary: 50000,
    jd: ['กำหนด Test Strategy & Plan', 'สร้าง Automation Framework', 'รายงาน Quality Status', 'ดูแล QA Tester'],
    requirements: ['QA ≥ 4 ปี', 'Cypress / Selenium / Playwright', 'TestRail, Jira', 'ISTQB (preferred)'],
  },
  {
    id: 'qa-tester', role: 'QA Tester', level: 'mid',
    icon: '🧪', color: '#00b894', salary: 25000,
    jd: ['เขียน & Execute Test Case', 'Functional & Regression Test', 'รายงาน Bug ใน Jira', 'สนับสนุน UAT'],
    requirements: ['QA ≥ 2 ปี', 'Manual Testing', 'Bug Tracking Tools', 'เข้าใจ Healthcare Workflow'],
  },

  // Support/Trainer team (2)
  {
    id: 'trainer', role: 'Implementation Trainer', level: 'mid',
    icon: '🎓', color: '#a29bfe', salary: 25000,
    jd: ['ติดตั้ง & Configure ระบบที่ รพ.', 'ฝึกอบรมเจ้าหน้าที่ผู้ใช้งาน', 'สนับสนุน Go-live & Cut-over', 'จัดทำ User Manual'],
    requirements: ['Implementation ≥ 2 ปี', 'เคยติดตั้ง HIS / ERP', 'ทักษะการสอน & สื่อสาร', 'Travel ต่างจังหวัดได้'],
  },
  {
    id: 'support', role: 'Support / Helpdesk', level: 'jr',
    icon: '🤝', color: '#a29bfe', salary: 25000,
    jd: ['รับ Ticket & แก้ปัญหาเบื้องต้น', 'ประสานงาน User ↔ Dev Team', 'จัดทำ FAQ & Knowledge Base', 'ติดตาม SLA'],
    requirements: ['Support ≥ 1 ปี', 'สื่อสารดี ใจเย็น', 'IT พื้นฐาน', 'Healthcare (preferred)'],
  },
]

// Columns for the org chart (exclude PM — PM sits above all)
const COLUMNS = [
  {
    label: 'System Analyst', color: '#f39c12', ids: ['sa-senior', 'sa', 'devops'],
    sub: { label: 'QA / Test', color: '#00b894', ids: ['qa-lead', 'qa-tester'] },
  },
  {
    label: 'Business Analyst', color: '#6c5ce7', ids: ['ba-lead', 'ba'],
    sub: { label: 'Support & Trainer', color: '#a29bfe', ids: ['trainer', 'support'] },
  },
  { label: 'UX / UI', color: '#fd79a8', ids: ['ux-lead', 'ui', 'ui-2'] },
  {
    label: 'Backend Dev', color: '#e17055', ids: ['be-lead', 'be-mid-1', 'be-mid-2', 'be-jr'],
    sub: { label: 'Integration', color: '#00cec9', ids: ['integration'] },
  },
  { label: 'Frontend Dev', color: '#0984e3', ids: ['fe-lead', 'fe-mid-1', 'fe-mid-2', 'fe-jr'] },
]

const getPerson = (id) => PEOPLE.find(p => p.id === id)

// ── Hover Tooltip ─────────────────────────────────────────────────────────────

function JDTooltip({ person, anchorRect }) {
  if (!person || !anchorRect) return null

  const tooltipWidth = 300
  const margin = 10
  // วางขวาก่อน ถ้าไม่พอเปลี่ยนซ้าย
  const placeRight = anchorRect.right + tooltipWidth + margin < window.innerWidth
  const left = placeRight ? anchorRect.right + margin : anchorRect.left - tooltipWidth - margin
  const top = Math.min(anchorRect.top, window.innerHeight - 360)

  return (
    <div style={{
      position: 'fixed',
      top, left,
      width: tooltipWidth,
      background: 'rgba(8,8,24,0.97)',
      border: `1px solid ${person.color}55`,
      borderRadius: 16,
      padding: '18px 20px',
      zIndex: 9999,
      boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px ${person.color}18`,
      pointerEvents: 'none',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10, flexShrink: 0,
          background: `${person.color}22`, border: `1px solid ${person.color}44`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
        }}>
          {person.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', fontFamily: "'Kanit', sans-serif", lineHeight: 1.3 }}>
            {person.role}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3, flexWrap: 'wrap' }}>
            <span style={{
              fontSize: 9, fontWeight: 800,
              background: `${person.color}30`, color: person.color,
              padding: '1px 8px', borderRadius: 20,
              border: `1px solid ${person.color}55`,
              letterSpacing: 0.5,
            }}>
              {person.level === 'lead' ? 'Lead / Senior' : person.level === 'mid' ? 'Mid Level' : 'Junior'}
            </span>
            {person.salary && (
              <span style={{
                fontSize: 9, fontWeight: 800,
                background: 'rgba(46,213,115,0.15)', color: '#2ed573',
                padding: '1px 8px', borderRadius: 20,
                border: '1px solid rgba(46,213,115,0.35)',
                letterSpacing: 0.3, fontFamily: "'JetBrains Mono', monospace",
              }}>
                {person.salary.toLocaleString()} บาท/เดือน
              </span>
            )}
          </div>
        </div>
      </div>

      {/* JD */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 1.5, color: person.color, fontFamily: "'JetBrains Mono', monospace", marginBottom: 7 }}>
          JOB DESCRIPTION
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {person.jd.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 7, alignItems: 'flex-start' }}>
              <span style={{ color: person.color, fontSize: 10, marginTop: 3, flexShrink: 0 }}>▸</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.88)', fontFamily: "'Kanit', sans-serif", lineHeight: 1.5 }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 12 }} />

      {/* Requirements */}
      <div>
        <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 1.5, color: 'rgba(255,255,255,0.35)', fontFamily: "'JetBrains Mono', monospace", marginBottom: 7 }}>
          REQUIREMENTS
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {person.requirements.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 7, alignItems: 'flex-start' }}>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10, marginTop: 2, flexShrink: 0 }}>◦</span>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', fontFamily: "'Kanit', sans-serif", lineHeight: 1.5 }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Person Node (compact card in org chart) ───────────────────────────────────

function PersonNode({ id, onHover, onLeave }) {
  const person = getPerson(id)
  const ref = useRef(null)
  if (!person) return null

  const isLead = person.level === 'lead'
  const isJr = person.level === 'jr'

  return (
    <div
      ref={ref}
      onMouseEnter={() => onHover(person, ref.current.getBoundingClientRect())}
      onMouseLeave={onLeave}
      style={{
        background: isLead ? `${person.color}22` : isJr ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.12)',
        border: isLead ? `1px solid ${person.color}66` : '1px solid rgba(255,255,255,0.2)',
        borderLeft: `3px solid ${isLead ? person.color : 'rgba(100,120,160,0.5)'}`,
        borderRadius: 9,
        padding: '7px 9px',
        cursor: 'default',
        transition: 'all 0.18s ease',
        display: 'flex', alignItems: 'center', gap: 7,
      }}
    >
      <span style={{ fontSize: 14, flexShrink: 0, lineHeight: 1 }}>{person.icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 12, fontWeight: 400,
          color: '#fff',
          fontFamily: "'Kanit', sans-serif", lineHeight: 1.3,
        }}>
          {person.role}
        </div>
      </div>
      {isLead && (
        <span style={{
          fontSize: 7, fontWeight: 900, color: person.color,
          background: `${person.color}25`, border: `1px solid ${person.color}55`,
          padding: '1px 5px', borderRadius: 4, flexShrink: 0, letterSpacing: 0.3,
        }}>
          LEAD
        </span>
      )}
    </div>
  )
}

// ── PO Node ───────────────────────────────────────────────────────────────────

function PONode({ onHover, onLeave }) {
  const po = getPerson('po')
  const ref = useRef(null)
  return (
    <div
      ref={ref}
      onMouseEnter={() => onHover(po, ref.current.getBoundingClientRect())}
      onMouseLeave={onLeave}
      style={{
        background: `${po.color}20`,
        border: `2px solid ${po.color}66`,
        borderRadius: 14,
        padding: '12px 28px',
        cursor: 'default',
        textAlign: 'center',
        display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4,
      }}
    >
      <span style={{ fontSize: 28 }}>{po.icon}</span>
      <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', fontFamily: "'Kanit', sans-serif" }}>
        {po.role}
      </div>
      <span style={{
        fontSize: 9, fontWeight: 900, color: po.color,
        background: `${po.color}25`, border: `1px solid ${po.color}55`,
        padding: '2px 8px', borderRadius: 6, letterSpacing: 0.5,
      }}>
        1 คน
      </span>
    </div>
  )
}

// ── PM Node (special, large, centered) ───────────────────────────────────────

function PMNode({ onHover, onLeave }) {
  const pm = getPerson('pm')
  const ref = useRef(null)
  return (
    <div
      ref={ref}
      onMouseEnter={() => onHover(pm, ref.current.getBoundingClientRect())}
      onMouseLeave={onLeave}
      style={{
        background: `${pm.color}20`,
        border: `2px solid ${pm.color}66`,
        borderRadius: 14,
        padding: '12px 28px',
        cursor: 'default',
        textAlign: 'center',
        transition: 'all 0.2s ease',
        display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4,
      }}
    >
      <span style={{ fontSize: 28 }}>{pm.icon}</span>
      <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', fontFamily: "'Kanit', sans-serif" }}>
        {pm.role}
      </div>
      <span style={{
        fontSize: 9, fontWeight: 900, color: pm.color,
        background: `${pm.color}25`, border: `1px solid ${pm.color}55`,
        padding: '2px 8px', borderRadius: 6, letterSpacing: 0.5,
      }}>
        1 คน
      </span>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PageTeam() {
  const [tooltip, setTooltip] = useState(null) // { person, rect }

  const handleHover = (person, rect) => setTooltip({ person, rect })
  const handleLeave = () => setTooltip(null)

  return (
    <PageWrapper>
      <PageHeader
        title="Team Structure"
        subtitle="โครงสร้างทีมพัฒนาระบบ HIS ทั้งหมด 22 ตำแหน่ง — ชี้เมาส์ที่ตำแหน่งเพื่อดู JD & Requirements"
        emoji="👥"
        badge={{ title: '22 คน', sub: '10 Functions' }}
      />

      <JDTooltip person={tooltip?.person} anchorRect={tooltip?.rect} />

      <GlassCard style={{ padding: '24px 20px' }}>
        <SectionTitle>ORGANIZATION CHART — 22 Positions</SectionTitle>

        {/* ── Org chart — single scrollable container ── */}
        <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: 820, width: '100%' }}>

          {/* Project Owner */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
            <PONode onHover={handleHover} onLeave={handleLeave} />
          </div>

          {/* PO → PM connector */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 2, height: 14, background: 'rgba(255,255,255,0.2)' }} />
          </div>

          {/* PM */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
            <PMNode onHover={handleHover} onLeave={handleLeave} />
          </div>

          {/* PM → horizontal bar */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 2, height: 18, background: 'rgba(255,255,255,0.15)' }} />
          </div>
          <div style={{ height: 2, background: 'rgba(255,255,255,0.12)', borderRadius: 1, margin: '0 3%' }} />

          {/* ── 5 Team Columns ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 10,
            alignItems: 'start',
            paddingBottom: 4,
          }}>
          {COLUMNS.map(col => {
            const members = col.ids.map(id => getPerson(id)).filter(Boolean)
            return (
              <div key={col.label}>
                {/* Vertical drop from horizontal bar */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ width: 2, height: 14, background: 'rgba(255,255,255,0.12)' }} />
                </div>

                {/* Column header */}
                <div style={{
                  fontSize: 9, fontWeight: 800, letterSpacing: 0.8,
                  color: '#fff',
                  fontFamily: "'JetBrains Mono', monospace",
                  textAlign: 'center',
                  padding: '5px 4px',
                  background: `${col.color}14`,
                  border: `1px solid ${col.color}33`,
                  borderRadius: 7,
                  marginBottom: 6,
                }}>
                  {col.label}
                  <span style={{
                    display: 'inline-block', marginLeft: 4,
                    background: `${col.color}30`, color: col.color,
                    padding: '0 5px', borderRadius: 4, fontSize: 8,
                  }}>
                    {members.length}
                  </span>
                </div>

                {/* Member nodes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {members.map((person) => (
                    <PersonNode key={person.id} id={person.id} onHover={handleHover} onLeave={handleLeave} />
                  ))}
                </div>

                {/* Sub-team (QA under SA / Support under BA) */}
                {col.sub && (() => {
                  const subMembers = col.sub.ids.map(id => getPerson(id)).filter(Boolean)
                  return (
                    <div style={{ marginTop: 10 }}>
                      {/* Connector line */}
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: 2, height: 10, background: `${col.sub.color}66` }} />
                      </div>
                      {/* Sub header */}
                      <div style={{
                        fontSize: 9, fontWeight: 800, letterSpacing: 0.8,
                        color: '#fff',
                        fontFamily: "'JetBrains Mono', monospace",
                        textAlign: 'center',
                        padding: '4px 4px',
                        background: `${col.sub.color}14`,
                        border: `1px solid ${col.sub.color}33`,
                        borderRadius: 7,
                        marginBottom: 5,
                      }}>
                        {col.sub.label}
                        <span style={{
                          display: 'inline-block', marginLeft: 4,
                          background: `${col.sub.color}30`, color: col.sub.color,
                          padding: '0 5px', borderRadius: 4, fontSize: 8,
                        }}>
                          {subMembers.length}
                        </span>
                      </div>
                      {/* Sub member nodes */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                        {subMembers.map((person) => (
                          <PersonNode key={person.id} id={person.id} onHover={handleHover} onLeave={handleLeave} />
                        ))}
                      </div>
                    </div>
                  )
                })()}
              </div>
            )
          })}
          </div>
        </div>
        </div>

        {/* Legend */}
        <div style={{
          marginTop: 18, paddingTop: 14,
          borderTop: '1px solid rgba(255,255,255,0.07)',
          display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
        }}>
          {[
            { label: 'Lead / Senior', borderColor: 'rgba(255,255,255,0.7)', bg: 'rgba(255,255,255,0.15)', left: '#fff' },
            { label: 'Mid Level', borderColor: 'rgba(255,255,255,0.2)', bg: 'rgba(255,255,255,0.07)', left: 'rgba(255,255,255,0.3)' },
            { label: 'Junior', borderColor: 'rgba(255,255,255,0.1)', bg: 'rgba(255,255,255,0.04)', left: 'rgba(255,255,255,0.18)' },
          ].map(l => (
            <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{
                width: 20, height: 12,
                background: l.bg,
                border: `1px solid ${l.borderColor}`,
                borderLeft: `3px solid ${l.left}`,
                borderRadius: 3,
              }} />
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', fontFamily: "'JetBrains Mono', monospace" }}>
                {l.label}
              </span>
            </div>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: 10, color: 'rgba(255,255,255,0.25)', fontFamily: "'JetBrains Mono', monospace" }}>
            🖱 ชี้เมาส์ดู JD & Requirements
          </span>
        </div>
      </GlassCard>
    </PageWrapper>
  )
}
