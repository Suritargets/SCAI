import Link from "next/link";
import { STATS, NEWS } from "@/lib/constants";
import TrainingEventsBlock from "@/components/TrainingEventsBlock";

export const metadata = {
  title: "SCAI — Suriname Chartered Accountants Institute",
  description: "SCAI is the authority in Suriname that protects the accountancy profession and improves the quality of the profession in accordance with international standards.",
};

export default function HomePage() {
  return (
    <>
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden", paddingTop: 70,
        backgroundImage: "linear-gradient(rgba(27,47,120,0.72), rgba(0,50,100,0.80)), url('/home.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 420, height: 420, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)" }} />
        <div style={{ position: "absolute", top: "18%", right: "12%", width: 260, height: 260, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: "15%", left: "-60px", width: 300, height: 300, borderRadius: "50%", background: "rgba(0,174,239,0.06)" }} />

        <div className="container" style={{ position: "relative", zIndex: 2, padding: "80px 32px" }}>
          <div className="fade-up" style={{ marginBottom: 40 }}>
            <img src="/logo.png" alt="SCAI" style={{ height: 56, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
          </div>

          <div style={{ maxWidth: 660 }}>
            <div className="fade-up d1" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <div style={{ width: 28, height: 2, background: "#00AEEF" }} />
              <span style={{ color: "#00AEEF", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>
                Suriname Chartered Accountants Institute
              </span>
            </div>

            <h1 className="fade-up d2 hero-title" style={{
              fontSize: "3.8rem", fontWeight: 700, color: "white",
              lineHeight: 1.12, marginBottom: 24, letterSpacing: "-0.02em",
            }}>
              Our vision is to develop<br />
              <span style={{ color: "#00AEEF" }}>the accountancy</span><br />
              profession in Suriname
            </h1>

            <p className="fade-up d3 hero-sub" style={{
              color: "rgba(255,255,255,0.75)", fontSize: "1.05rem",
              lineHeight: 1.75, marginBottom: 44, maxWidth: 520, fontWeight: 300,
            }}>
              SCAI protects the accountancy profession and improves the quality of the
              profession in accordance with international standards.
            </p>

            <div className="fade-up d4" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/over-ons" className="btn-primary" style={{ textDecoration: "none" }}>Learn About SCAI</Link>
              <Link href="/lidmaatschap" className="btn-outline-white" style={{ textDecoration: "none" }}>Become a Member</Link>
            </div>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "rgba(0,0,0,0.25)", backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255,255,255,0.1)", padding: "24px 0",
        }}>
          <div className="container">
            <div className="grid-4">
              {STATS.map((s, i) => (
                <div key={i} className={i < 3 ? "stat-border" : ""} style={{ textAlign: "center", padding: "0 20px" }}>
                  <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#00AEEF", letterSpacing: "-0.02em" }}>{s.value}</div>
                  <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600, marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ── TWO-CARD BLOCK ── */}
      <section style={{ padding: 0, margin: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 420 }}>

          {/* Left card — About SCAI */}
          <div style={{
            position: "relative",
            backgroundImage: "linear-gradient(rgba(27,47,120,0.75), rgba(0,50,100,0.82)), url('/blok 2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              padding: "72px 52px",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              height: "100%", textAlign: "center",
            }}>
              <h2 style={{ color: "white", fontSize: "1.5rem", fontWeight: 700, marginBottom: 20, lineHeight: 1.3 }}>
                Suriname Chartered<br />Accountants Institute — SCAI
              </h2>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 36, maxWidth: 360 }}>
                We are a non-profit organization that aims to develop the accountancy
                profession in Suriname in accordance with international standards and regulations.
              </p>
              <Link href="/over-ons" style={{
                display: "inline-block", padding: "12px 36px",
                border: "2px solid #00AEEF", color: "#00AEEF",
                fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.12em",
                textTransform: "uppercase", textDecoration: "none",
                transition: "all 0.25s", borderRadius: 3,
              }}>
                Read More
              </Link>
            </div>
          </div>

          {/* Right card — Membership CTA */}
          <div style={{
            position: "relative", overflow: "hidden",
            background: "linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          }}>
            {/* Decorative ledger lines */}
            <div style={{
              position: "absolute", inset: 0, opacity: 0.06,
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 28px, #00AEEF 28px, #00AEEF 29px), repeating-linear-gradient(90deg, transparent, transparent 60px, #00AEEF 60px, #00AEEF 61px)",
            }} />
            <div style={{
              position: "relative", zIndex: 2,
              padding: "72px 52px",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              height: "100%", textAlign: "center",
            }}>
              <h2 style={{ color: "white", fontSize: "1.5rem", fontWeight: 700, marginBottom: 20, lineHeight: 1.3 }}>
                Want to become a member?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 36, maxWidth: 360 }}>
                Want to become an active member? Give us a call for more information
                on becoming a SCAI member or email us at{" "}
                <a href="mailto:info@scai.sr" style={{ color: "#00AEEF", fontWeight: 600 }}>info@scai.sr</a>
              </p>
              <a href="mailto:info@scai.sr" style={{
                display: "inline-block", padding: "12px 36px",
                border: "2px solid #00AEEF", color: "#00AEEF",
                fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.12em",
                textTransform: "uppercase", textDecoration: "none",
                transition: "all 0.25s", borderRadius: 3,
              }}>
                Mail To
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── NEWSROOM BLOCK ── */}
      <section style={{ background: "#f0f4f8", padding: "72px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.9rem", fontWeight: 700, color: "#111827", marginBottom: 36, letterSpacing: "-0.01em" }}>
            Newsroom
          </h2>
          <div className="grid-3">
            {NEWS.map((n, i) => (
              <div key={i} style={{
                background: "white", borderRadius: 6,
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                display: "flex", flexDirection: "column",
                overflow: "hidden",
              }}>
                <div style={{ height: 4, background: "linear-gradient(90deg, #2B3990, #00AEEF)" }} />
                <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{
                    fontSize: "0.95rem", fontWeight: 700, color: "#111827",
                    lineHeight: 1.4, marginBottom: 16,
                    letterSpacing: "0.01em",
                  }}>
                    {n.title}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <span style={{ fontSize: "0.78rem", color: "#6B7280" }}>📅 {n.date}</span>
                    <span style={{ color: "#D1D5DB" }}>·</span>
                    <span style={{ fontSize: "0.78rem", color: "#6B7280" }}>💬 No Comments</span>
                  </div>
                  <p style={{ fontSize: "0.88rem", color: "#4B5563", lineHeight: 1.7, flex: 1, marginBottom: 24 }}>
                    {n.excerpt}
                  </p>
                  <Link href={`/newsroom/${n.slug}`} style={{
                    display: "inline-block", padding: "10px 24px",
                    background: "#2B3990", color: "white",
                    fontWeight: 600, fontSize: "0.82rem",
                    textDecoration: "none", borderRadius: 4,
                    transition: "background 0.2s", alignSelf: "flex-start",
                  }}>
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── TRAINING & JOB BOARD ── */}
      <TrainingEventsBlock />

      {/* ── COMMUNITY & INSIGHTS BLOCK ── */}

      {/* Top row: Community photo + text */}
      <section style={{ background: "#eef4fb", padding: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 280 }}>
          {/* Photo */}
          <div style={{
            backgroundImage: "url('/community.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: 280,
          }} />
          {/* Text */}
          <div style={{
            padding: "52px 56px",
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}>
            <h2 style={{ fontSize: "1.45rem", fontWeight: 700, color: "#111827", marginBottom: 18, lineHeight: 1.3 }}>
              Our Accountancy Community &amp; Stakeholders
            </h2>
            <p style={{ color: "#4B5563", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: 28 }}>
              SCAI is the authority in Suriname that protects the accounting profession and improves
              the quality of the profession. SCAI is the linking pin between the profession and the
              business community and contributes to the financial climate in Suriname.
            </p>
            <Link href="/lidmaatschap" style={{
              display: "inline-block", alignSelf: "flex-start",
              padding: "11px 24px", border: "1.5px solid #9CA3AF",
              color: "#374151", fontWeight: 700, fontSize: "0.72rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none", borderRadius: 3, transition: "all 0.2s",
            }}>
              Go to the SCAI Community
            </Link>
          </div>
        </div>

        {/* Bottom row: Students card + Insights */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 320 }}>
          {/* Students card with dark overlay */}
          <div style={{
            position: "relative", overflow: "hidden",
            backgroundImage: "url('/searching_jobs.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: 320,
          }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "rgba(10, 20, 50, 0.70)",
            }} />
            <div style={{
              position: "relative", zIndex: 2,
              padding: "52px 48px",
              display: "flex", flexDirection: "column", justifyContent: "center",
              height: "100%",
            }}>
              <h3 style={{ color: "white", fontSize: "1.25rem", fontWeight: 700, textAlign: "center", lineHeight: 1.4, marginBottom: 16 }}>
                For Students: Looking for proper coaching by one of our members?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.88rem", textAlign: "center", lineHeight: 1.7, marginBottom: 28 }}>
                Are you a student looking for an internship in the accountancy profession?
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link href="/contact" style={{
                  display: "inline-block", padding: "12px 32px",
                  background: "#8B7D3A", color: "white",
                  fontWeight: 700, fontSize: "0.82rem",
                  textDecoration: "none", borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.3)",
                  letterSpacing: "0.04em",
                }}>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Insights */}
          <div style={{ padding: "52px 56px", background: "white", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{ fontSize: "1.45rem", fontWeight: 700, color: "#111827", marginBottom: 28 }}>
              Insights
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { text: "Why Adopting High-Quality Accountancy Standards Is Critical to Achieving the SDGs by 2030", href: "/newsroom" },
                { text: "IASB issues annual improvements to IFRS Standards", href: "/newsroom" },
                { text: "News on Auditing: Using audit data analytics in performing a risk assessment procedure", href: "/newsroom" },
              ].map((item, i) => (
                <Link key={i} href={item.href} style={{
                  display: "flex", gap: 14, alignItems: "flex-start",
                  textDecoration: "none", color: "#111827",
                }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: "50%",
                    border: "2px solid #2B3990", flexShrink: 0, marginTop: 1,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#2B3990", fontSize: "0.8rem", fontWeight: 700,
                  }}>→</div>
                  <span style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#374151" }}>{item.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
