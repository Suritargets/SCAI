import { C } from "@/lib/constants";

export const metadata = {
  title: "Board & Committees — SCAI",
  description: "Learn more about the board and committees of SCAI.",
};

export default function CommitteesPage() {
  return (
    <>
      <section className="hero-gradient" style={{ paddingTop: 130, paddingBottom: 60 }}>
        <div className="container">
          <div className="fade-up" style={{ maxWidth: 600 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: "#00AEEF" }} />
              <span style={{ color: "#00AEEF", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>Governance</span>
            </div>
            <h1 style={{ fontSize: "2.8rem", fontWeight: 700, color: "white", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Board & <span style={{ color: "#00AEEF" }}>Committees</span>
            </h1>
          </div>
        </div>
      </section>

      <section style={{ background: C.bg, padding: "80px 0" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 24 }}>
            {[
              { icon: "\u{1F3DB}\uFE0F", title: "Executive Board", desc: "The board of SCAI is responsible for the strategic direction and policy of the institute.", tags: ["Chairman", "Secretary", "Treasurer", "Board Members"] },
              { icon: "\u2696\uFE0F", title: "Technical Committee", desc: "Advises on the adoption of international accounting and auditing standards and monitors their implementation.", tags: ["Standards", "IFRS Implementation", "ISA Adoption", "Quality Assurance"] },
              { icon: "\u{1F4D6}", title: "Education Committee", desc: "Responsible for developing and monitoring CPD requirements and the CA education program.", tags: ["CPD Program", "CA Education", "Assessment", "Accreditation"] },
              { icon: "\u{1F528}", title: "Disciplinary Committee", desc: "Handles complaints and investigates disciplinary matters in cooperation with the Ministry of Justice.", tags: ["Investigation", "Disciplinary Procedures", "Enforcement", "Appeals"] },
            ].map((c, i) => (
              <div key={i} className="card">
                <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, background: "linear-gradient(135deg, #EBF5FD, #D6EEFF)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#2B3990", marginBottom: 8 }}>{c.title}</h3>
                    <p style={{ color: C.textMuted, fontSize: "0.875rem", lineHeight: 1.65, marginBottom: 14 }}>{c.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {c.tags.map((t, j) => (
                        <span key={j} style={{ background: "#EBF5FD", color: "#0075BE", fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", padding: "3px 9px", borderRadius: 2 }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
