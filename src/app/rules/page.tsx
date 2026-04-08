import Link from "next/link";
import { C } from "@/lib/constants";
import RulesTabs from "@/components/RulesTabs";

export const metadata = {
  title: "Rules and Regulations — SCAI",
  description: "SCAI rules, regulations and standards for the accountancy profession in Suriname.",
};

export default function RulesPage() {
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
              Rules &amp; <span style={{ color: "#00AEEF" }}>Regulations</span>
            </h1>
          </div>
        </div>
      </section>

      <RulesTabs />

      <section style={{ background: C.bg, padding: "80px 0" }}>
        <div className="container">
          <div style={{ maxWidth: 760 }}>
            <span className="tag">Legal Framework</span>
            <div className="accent-line" />
            <p style={{ color: C.textMuted, lineHeight: 1.8, marginBottom: 32, fontSize: "0.95rem" }}>
              SCAI operates under the Act on the Suriname Chartered Accountants Institute
              (SB 2018 no. 92), adopted by Parliament on October 2, 2018. The institute
              sets and enforces standards for the accountancy profession in Suriname.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "SCAI Act (SB 2018 no. 92)", desc: "The foundational law establishing SCAI, its mandate, and the legal framework for the accountancy profession.", tag: "Legislation" },
                { title: "Code of Ethics for Professional Accountants", desc: "Based on the IESBA Code of Ethics, applicable to all SCAI members in their professional practice.", tag: "Ethics" },
                { title: "International Standards on Auditing (ISA)", desc: "SCAI has adopted the ISAs as the applicable auditing standards for all registered auditors in Suriname.", tag: "Auditing" },
                { title: "International Financial Reporting Standards (IFRS)", desc: "SCAI promotes the adoption of IFRS for financial reporting by entities in Suriname.", tag: "Reporting" },
                { title: "CPD Policy", desc: "All SCAI members are required to comply with continuing professional development requirements as set by the institute.", tag: "Education" },
              ].map((item, i) => (
                <div key={i} className="card" style={{ padding: "24px 28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: "#EBF5FD", color: "#0075BE", padding: "3px 10px", borderRadius: 2, marginBottom: 10, display: "inline-block" }}>{item.tag}</span>
                      <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#2B3990", marginBottom: 8 }}>{item.title}</h3>
                      <p style={{ color: C.textMuted, fontSize: "0.875rem", lineHeight: 1.65 }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40 }}>
              <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>Request Documents</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
