import { useState, useEffect } from "react";

const steps = [
  {
    num: 1, title: "ลงทะเบียน", badge: "START HERE",
    his: "ระบบลงทะเบียน", features: ["Scan บัตร ปชช. Smart Card", "เปิด HN อัตโนมัติ"],
    emoji: "🏥", color: "#fff", dept: "ห้องบัตร",
  },
  {
    num: 2, title: "ตรวจสอบสิทธิ\nการรักษา", badge: "บังคับ!",
    his: "ระบบเช็คสิทธิ", features: ["API สปสช. (UC)", "API กรมบัญชีกลาง", "API ประกันสังคม", "สิทธิไม่ตรง = จ่ายเอง"],
    emoji: "🔐", color: "#ffe066", critical: true, dept: "เชื่อมต่อ 3 กองทุน",
  },
  {
    num: 3, title: "รับบัตรคิว", badge: "",
    his: "ระบบคิวอัจฉริยะ", features: ["คิวอัตโนมัติตามแผนก", "จอ Display + เสียงเรียก", "เช็คคิวผ่าน LINE OA"],
    emoji: "🎫", color: "#fff", dept: "ระบบคิว + นัดหมาย",
  },
  {
    num: 4, title: "จุดซักประวัติ", badge: "",
    his: "ระบบบันทึกประวัติ", features: ["บันทึกอาการเบื้องต้น", "วัด Vital Signs", "บันทึกประวัติการแพ้ยา"],
    emoji: "📋", color: "#fff", dept: "จุดซักประวัติ / พยาบาล",
  },
  {
    num: 5, title: "พบแพทย์\nตรวจรักษา", badge: "",
    his: "ระบบห้องตรวจ OPD", features: ["EMR ซักประวัติ ตรวจร่างกาย", "วินิจฉัย ICD-10", "สั่งยา Drug Alert", "สั่ง Lab / X-Ray"],
    emoji: "🩺", color: "#fff", dept: "ห้องตรวจ OPD + EMR",
  },
  {
    num: 6, title: "เจาะเลือด\nLab / X-Ray", badge: "",
    his: "ระบบ Lab (LIS)", features: ["Barcode สติกเกอร์ติดหลอด", "เชื่อมเครื่อง HL7", "Critical Value Alert"],
    emoji: "🔬", color: "#fff", dept: "ห้องปฏิบัติการ",
  },
  {
    num: 7, title: "รับยา", badge: "",
    his: "ระบบเภสัชกรรม", features: ["จัดยา Barcode + ฉลากไทย", "Drug Interaction Check", "คิวรับยา + คำปรึกษา"],
    emoji: "💊", color: "#fff", dept: "ห้องยา / เภสัชกรรม",
  },
  {
    num: 8, title: "ชำระเงิน", badge: "",
    his: "ระบบการเงิน", features: ["คำนวณค่ารักษาอัตโนมัติ", "หักสิทธิ e-Claim", "ใบเสร็จ / QR Payment"],
    emoji: "💰", color: "#fff", dept: "การเงิน + เบิกจ่าย",
  },
  {
    num: 9, title: "กลับบ้าน\nปลอดภัย", badge: "GO HOME",
    his: "ระบบนัดหมาย + 43 แฟ้ม", features: ["นัดตรวจครั้งถัดไป", "แจ้งเตือน LINE OA", "สร้าง 43 แฟ้ม → HDC"],
    emoji: "🏠", color: "#90EE90", dept: "เวชระเบียน + สถิติ",
  },
];

export default function Page1PatientJourney() {
  const [activeStep, setActiveStep] = useState(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(145deg, #4a90b8 0%, #5ba3cc 20%, #6bb5d8 40%, #5a9ec5 60%, #4889ae 80%, #3d7a9e 100%)",
      fontFamily: "'Sarabun', sans-serif",
      position: "relative",
      overflow: "hidden",
      padding: "0 0 40px",
    }}>
      {/* Subtle grid pattern overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.04,
        backgroundImage: `repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 40px),
                          repeating-linear-gradient(90deg, #fff 0px, transparent 1px, transparent 40px)`,
      }} />

      {/* Decorative circles */}
      <div style={{ position: "absolute", top: -100, right: -100, width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.06), transparent 70%)", pointerEvents: "none" }} />

      {/* Header */}
      <header style={{ padding: "32px 20px 8px", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
          <div style={{
            opacity: loaded ? 1 : 0, transform: loaded ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.8s ease",
          }}>
            <h1 style={{
              fontSize: 38, fontWeight: 900, color: "#fff", margin: 0, fontFamily: "'Kanit', sans-serif",
              textShadow: "0 2px 20px rgba(0,0,0,0.15)",
              lineHeight: 1.1,
            }}>
              Patient Journey
            </h1>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", margin: "6px 0 0", maxWidth: 400, lineHeight: 1.6 }}>
              ขั้นตอนการเข้ารับบริการของผู้ป่วยนอก ตั้งแต่ก้าวแรกที่เข้า รพ. จนกลับบ้าน
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)",
            borderRadius: 16, padding: "16px 24px",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            opacity: loaded ? 1 : 0, transform: loaded ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.8s ease 0.2s",
          }}>
            <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 2 }}>
              Patient Journey
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>ขั้นตอนการเข้ารับบริการ</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>ผู้ป่วยนอก โรงพยาบาลรัฐ</div>
          </div>
        </div>
      </header>

      {/* Flow Container */}
      <div style={{ maxWidth: 1000, margin: "16px auto 0", padding: "0 20px", position: "relative" }}>

        {/* SVG Path */}
        <svg
          viewBox="0 0 960 640"
          style={{ position: "absolute", top: 0, left: 20, width: "calc(100% - 40px)", height: "100%", pointerEvents: "none", zIndex: 1 }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="pathGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Arrowhead for main path */}
            <marker id="arrowMain" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="rgba(255,255,255,0.4)" />
            </marker>
            {/* Arrowhead for bypass */}
            <marker id="arrowBypass" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#feca57" />
            </marker>
          </defs>

          {/* Main snake path — glow */}
          <path
            d="M 140 100 C 300 100, 620 100, 820 100
               C 900 100, 920 150, 920 210
               C 920 270, 900 310, 820 310
               C 620 310, 300 310, 140 310
               C 60 310, 40 360, 40 420
               C 40 470, 60 510, 140 510
               C 300 510, 620 510, 820 510"
            fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="8" strokeLinecap="round"
            strokeDasharray="16 8" filter="url(#pathGlow)"
            style={{ strokeDashoffset: loaded ? 0 : 3000, transition: "stroke-dashoffset 3s ease 0.5s" }}
          />
          <path
            d="M 140 100 C 300 100, 620 100, 820 100
               C 900 100, 920 150, 920 210
               C 920 270, 900 310, 820 310
               C 620 310, 300 310, 140 310
               C 60 310, 40 360, 40 420
               C 40 470, 60 510, 140 510
               C 300 510, 620 510, 820 510"
            fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="28" strokeLinecap="round"
          />

        </svg>

        {/* Row 1: steps 1, 2, 3 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 28, position: "relative", zIndex: 2 }}>
          {steps.slice(0, 3).map((step, i) => (
            <StepNode key={step.num} step={step} index={i} active={activeStep === step.num}
              onClick={() => setActiveStep(activeStep === step.num ? null : step.num)} loaded={loaded} />
          ))}
        </div>

        {/* Row 2 (reversed): step 6 (Lab), 5 (พบแพทย์), 4 (จุดซักประวัติ) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 28, position: "relative", zIndex: 2 }}>
          {[steps[5], steps[4], steps[3]].map((step, i) => (
            <StepNode key={step.num} step={step} index={i + 3} active={activeStep === step.num}
              onClick={() => setActiveStep(activeStep === step.num ? null : step.num)} loaded={loaded} />
          ))}
        </div>

        {/* Row 3: steps 7, 8, 9 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, position: "relative", zIndex: 2 }}>
          {steps.slice(6, 9).map((step, i) => (
            <StepNode key={step.num} step={step} index={i + 6} active={activeStep === step.num}
              onClick={() => setActiveStep(activeStep === step.num ? null : step.num)} loaded={loaded} />
          ))}
        </div>
      </div>

      {/* Bottom hint */}
      <div style={{ textAlign: "center", padding: "24px 20px 0", opacity: loaded ? 1 : 0, transition: "all 1s ease 1.5s" }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)",
          borderRadius: 24, padding: "8px 20px",
          border: "1px solid rgba(255,255,255,0.2)",
          fontSize: 12, color: "rgba(255,255,255,0.8)",
        }}>
          <span style={{ fontSize: 16 }}>👆</span>
          คลิกที่แต่ละขั้นตอนเพื่อดู HIS Module และฟังก์ชันที่เกี่ยวข้อง
        </span>
      </div>

    </div>
  );
}

function StepNode({ step, index, active, onClick, loaded }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", cursor: "pointer",
        opacity: loaded ? 1 : 0,
        transform: loaded
          ? hovered ? "translateY(-6px) scale(1.03)" : "translateY(0) scale(1)"
          : "translateY(40px) scale(0.9)",
        transition: `all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${0.3 + index * 0.12}s`,
        zIndex: active ? 20 : 1,
      }}
    >
      <div style={{
        background: active
          ? "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(240,248,255,0.95))"
          : hovered
            ? "linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.15))"
            : "linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
        backdropFilter: "blur(16px)", borderRadius: 18,
        border: active ? "2px solid rgba(74,144,184,0.4)" : `1px solid rgba(255,255,255,${hovered ? 0.4 : 0.2})`,
        boxShadow: active
          ? "0 20px 60px rgba(0,0,0,0.2), 0 8px 20px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)"
          : hovered
            ? "0 12px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3)"
            : "0 4px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.2)",
        overflow: "hidden", transition: "all 0.4s ease",
      }}>
        <div style={{
          height: step.critical ? 5 : 3,
          background: step.critical
            ? "linear-gradient(90deg, #ff6b6b, #feca57, #ff6b6b)"
            : "linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0.6), rgba(255,255,255,0.3))",
        }} />
        <div style={{ padding: "14px 16px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 14,
              background: step.critical
                ? "linear-gradient(135deg, #ff6b6b, #ee5a24)"
                : "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.15))",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              boxShadow: step.critical ? "0 4px 15px rgba(238,90,36,0.4)" : "0 4px 12px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}>
              <span style={{
                fontSize: 22, fontWeight: 900, fontFamily: "'Kanit', sans-serif",
                color: active ? "#4a90b8" : "#fff",
                textShadow: active ? "none" : "0 1px 3px rgba(0,0,0,0.2)",
              }}>
                {step.num}
              </span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: 1.25,
                color: active ? "#2c3e7a" : "#fff",
                textShadow: active ? "none" : "0 1px 4px rgba(0,0,0,0.15)", whiteSpace: "pre-line",
              }}>
                {step.title}
              </div>
              {step.badge && (
                <span style={{
                  display: "inline-block", marginTop: 4,
                  background: step.critical ? "linear-gradient(135deg, #ff6b6b, #ee5a24)"
                    : step.badge === "GO HOME" ? "linear-gradient(135deg, #2ecc71, #27ae60)"
                      : "linear-gradient(135deg, #667eea, #764ba2)",
                  color: "#fff", fontSize: 9, fontWeight: 800, padding: "2px 10px", borderRadius: 20,
                  fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}>
                  {step.badge}
                </span>
              )}
            </div>
            <span style={{ fontSize: 32, flexShrink: 0, filter: active ? "none" : "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}>
              {step.emoji}
            </span>
          </div>
          <div style={{
            marginTop: 10,
            background: active ? "linear-gradient(135deg, #e8f4f8, #dceefb)" : "rgba(255,255,255,0.08)",
            borderRadius: 10, padding: "8px 12px",
            border: active ? "1px solid rgba(74,144,184,0.2)" : "1px solid rgba(255,255,255,0.1)",
            transition: "all 0.3s",
          }}>
            <div style={{
              fontSize: 10, fontWeight: 600,
              color: active ? "#4a90b8" : "rgba(255,255,255,0.5)",
              fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1, marginBottom: 2,
            }}>
              HIS MODULE
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: active ? "#2c3e7a" : "rgba(255,255,255,0.9)" }}>
              {step.his}
            </div>
            <div style={{ fontSize: 10, marginTop: 2, color: active ? "#5a8aaa" : "rgba(255,255,255,0.5)" }}>
              แผนก: {step.dept}
            </div>
          </div>
          {active && (
            <div style={{ marginTop: 10, animation: "slideDown 0.35s ease" }}>
              <div style={{
                fontSize: 10, fontWeight: 700, color: "#4a90b8",
                fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1, marginBottom: 6,
              }}>
                FEATURES
              </div>
              {step.features.map((f, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 8, padding: "5px 0",
                  borderBottom: i < step.features.length - 1 ? "1px solid rgba(74,144,184,0.1)" : "none",
                }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: 6,
                    background: "linear-gradient(135deg, #4a90b8, #5ba3cc)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 9, color: "#fff", fontWeight: 800, flexShrink: 0,
                    fontFamily: "'JetBrains Mono', monospace",
                    boxShadow: "0 2px 6px rgba(74,144,184,0.3)",
                  }}>
                    {i + 1}
                  </div>
                  <span style={{ fontSize: 12, color: "#3a5a7a", lineHeight: 1.3 }}>{f}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; max-height: 0; transform: translateY(-10px); }
          to { opacity: 1; max-height: 300px; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
