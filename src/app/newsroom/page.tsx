import { C, NEWS } from "@/lib/constants";

export const metadata = {
  title: "Newsroom — SCAI",
  description: "The latest news from SCAI.",
};

export default function NewsroomPage() {
  return (
    <>
      <section className="hero-gradient" style={{ paddingTop: 130, paddingBottom: 60 }}>
        <div className="container">
          <div className="fade-up" style={{ maxWidth: 600 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: "#00AEEF" }} />
              <span style={{ color: "#00AEEF", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>News</span>
            </div>
            <h1 style={{ fontSize: "2.8rem", fontWeight: 700, color: "white", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Latest <span style={{ color: "#00AEEF" }}>Updates</span>
            </h1>
          </div>
        </div>
      </section>

      <section style={{ background: C.bgAlt, padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {NEWS.map((n, i) => (
              <div key={i} className="news-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                      <span className="tag">{n.category}</span>
                      <span style={{ color: "#9CA3AF", fontSize: "0.78rem", fontWeight: 500 }}>{n.date}</span>
                    </div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 8, color: C.text }}>{n.title}</h3>
                    <p style={{ color: C.textMuted, lineHeight: 1.65, fontSize: "0.875rem" }}>{n.excerpt}</p>
                  </div>
                  <div style={{ width: 38, height: 38, border: "2px solid #00AEEF", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", color: "#00AEEF", fontWeight: 700, fontSize: "1.1rem", flexShrink: 0 }}>{"\u2192"}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletters */}
      <section style={{ background: "white", padding: "72px 0" }}>
        <div className="container">
          <div style={{ maxWidth: 520 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827", marginBottom: 24 }}>Newsletters</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { name: "SCAI Newsletter 2021 JUNE", href: "/Final-SCAI-NEWS-june-2021.pdf" },
                { name: "SCAI Newsletter 2021 November", href: "#" },
              ].map((item, i) => (
                <a key={i} href={item.href} download={item.href !== "#" ? true : undefined} style={{
                  display: "block",
                  padding: "14px 20px",
                  border: "1px solid #D1D5DB",
                  borderRadius: 4,
                  color: "#374151",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  background: "white",
                  transition: "border-color 0.2s",
                }}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
