import Link from "next/link";
import { C, MANDATES } from "@/lib/constants";
import AboutTabs from "@/components/AboutTabs";

export const metadata = {
  title: "About Us — SCAI",
  description: "Learn more about the Suriname Chartered Accountants Institute and our mandates.",
};

export default function OverOnsPage() {
  return (
    <>
      <section className="hero-gradient" style={{ paddingTop: 130, paddingBottom: 60 }}>
        <div className="container">
          <div className="fade-up" style={{ maxWidth: 600 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: "#00AEEF" }} />
              <span style={{ color: "#00AEEF", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>About SCAI</span>
            </div>
            <h1 style={{ fontSize: "2.8rem", fontWeight: 700, color: "white", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              An institute of <span style={{ color: "#00AEEF" }}>public interest</span>
            </h1>
          </div>
        </div>
      </section>

      <section style={{ background: C.bg, padding: "80px 0" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start", gap: 64 }}>
            <div>
              <span className="tag">Who We Are</span>
              <div className="accent-line" />
              <p style={{ color: C.textMuted, lineHeight: 1.8, marginBottom: 18, fontSize: "0.95rem" }}>
                The Suriname Chartered Accountants Institute (SCAI) is a public law organization
                whose purpose is to serve the public interest by advancing the accountancy profession
                in accordance with international standards and best practices.
              </p>
              <p style={{ color: C.textMuted, lineHeight: 1.8, marginBottom: 32, fontSize: "0.95rem" }}>
                Since its founding in 2007, SCAI has been committed through professional relationships
                with the NBA (Netherlands), as an associate member of ICAC, and is working toward
                full IFAC membership.
              </p>
              <div style={{ display: "flex", gap: 14 }}>
                <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>Get in Touch</Link>
                <Link href="/lidmaatschap" className="btn-outline" style={{ textDecoration: "none" }}>Membership</Link>
              </div>
            </div>

            <div style={{
              background: "linear-gradient(145deg, #2B3990, #0075BE)",
              borderRadius: 12, padding: "40px 36px", position: "relative", overflow: "hidden",
              boxShadow: "0 20px 60px rgba(43,57,144,0.25)",
            }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(0,174,239,0.1)" }} />
              <h3 style={{ color: "white", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28 }}>
                Our Mandates
              </h3>
              <div className="mandate-grid">
                {MANDATES.map((m, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.08)", borderRadius: 8,
                    padding: "16px", border: "1px solid rgba(255,255,255,0.1)",
                  }}>
                    <div style={{ fontSize: "1.3rem", marginBottom: 8 }}>{m.icon}</div>
                    <div style={{ color: "#00AEEF", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>{m.title}</div>
                    <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.78rem", lineHeight: 1.5 }}>{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutTabs />

      <section style={{ background: "linear-gradient(135deg, #2B3990, #00AEEF)", padding: "48px 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 28 }}>
            <div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6, fontWeight: 600 }}>Internationally Recognized</p>
              <h3 style={{ color: "white", fontSize: "1.45rem", fontWeight: 700, letterSpacing: "-0.01em" }}>Partner of global standards</h3>
            </div>
            <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
              {["IFAC Associate", "ICAC Full Member", "NBA Partner", "ISA Standards"].map((p, i) => (
                <div key={i} style={{ padding: "10px 20px", background: "rgba(255,255,255,0.12)", borderRadius: 6, color: "white", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.05em", border: "1px solid rgba(255,255,255,0.2)" }}>{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
