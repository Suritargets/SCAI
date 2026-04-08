import Link from "next/link";
import { C, TRAINING_EVENTS } from "@/lib/constants";
import TrainingAccordion from "@/components/TrainingAccordion";

export const metadata = {
  title: "Training and Events — SCAI",
  description: "SCAI training programs and events for accountancy professionals in Suriname.",
};

export default function TrainingPage() {
  return (
    <>
      <section className="hero-gradient" style={{ paddingTop: 130, paddingBottom: 60 }}>
        <div className="container">
          <div className="fade-up" style={{ maxWidth: 600 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: "#00AEEF" }} />
              <span style={{ color: "#00AEEF", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>Education</span>
            </div>
            <h1 style={{ fontSize: "2.8rem", fontWeight: 700, color: "white", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Training &amp; <span style={{ color: "#00AEEF" }}>Events</span>
            </h1>
          </div>
        </div>
      </section>

      <section style={{ background: C.bgAlt, padding: "80px 0" }}>
        <div className="container">
          {TRAINING_EVENTS.length === 0 ? (
            <p style={{ color: "#9CA3AF", fontSize: "0.95rem" }}>No events found.</p>
          ) : (
            <div className="grid-3">
              {TRAINING_EVENTS.map((t, i) => (
                <div key={i} style={{
                  background: "white", borderRadius: 6,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                  overflow: "hidden", display: "flex", flexDirection: "column",
                }}>
                  <div style={{ height: 4, background: "linear-gradient(90deg, #2B3990, #00AEEF)" }} />
                  <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: "#EBF5FD", color: "#0075BE", padding: "3px 10px", borderRadius: 2, alignSelf: "flex-start", marginBottom: 14 }}>{t.category}</span>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", lineHeight: 1.4, marginBottom: 10 }}>{t.title}</h3>
                    <p style={{ fontSize: "0.78rem", color: "#6B7280", marginBottom: 12 }}>📅 {t.date}</p>
                    <p style={{ fontSize: "0.87rem", color: "#4B5563", lineHeight: 1.65, flex: 1, marginBottom: 20 }}>{t.excerpt}</p>
                    <Link href={`/training/${t.slug}`} style={{
                      display: "inline-block", padding: "10px 22px",
                      background: "#2B3990", color: "white",
                      fontWeight: 600, fontSize: "0.8rem",
                      textDecoration: "none", borderRadius: 4, alignSelf: "flex-start",
                    }}>
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <TrainingAccordion />

      {/* Module cards */}
      <section style={{ background: "#f5f7fa", padding: "72px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            {[
              {
                title: "Module Fiscaal recht",
                items: [
                  "In 9 weken kennismaken met het fiscaal recht in Suriname",
                  "Voor financial professionals: accounting en audit",
                  "Meld je dan nu aan voor onze module Fiscaal recht",
                  "Start in Oktober 2022",
                  "Prijs: USD 700",
                  "Plaats voor 10 deelnemers",
                ],
                contact: null,
              },
              {
                title: "Module Recht: Beginselen Surinaams recht Ondernemingsrecht Varia",
                items: [
                  "In 15 weken kennismaken met het Surinaams recht in Suriname",
                  "Voor financial professionals: accounting en audit",
                  "Meld je dan nu aan voor onze module Recht",
                  "Start in Januari 2023",
                  "Prijs: USD 900",
                  "Plaats voor 10 deelnemers",
                ],
                contact: { email: "info@scai.sr", phone: "421466 / 7285775" },
              },
            ].map((mod, i) => (
              <div key={i} style={{
                background: "white",
                borderRadius: 8,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}>
                {/* Diagonal header */}
                <div style={{
                  background: "linear-gradient(135deg, #2B3990 60%, #00AEEF 100%)",
                  padding: "28px 28px 36px",
                  position: "relative",
                  clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)",
                }}>
                  <h3 style={{ color: "white", fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.4, margin: 0 }}>
                    {mod.title}
                  </h3>
                </div>
                <div style={{ padding: "16px 28px 28px" }}>
                  <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                    {mod.items.map((item, j) => (
                      <li key={j} style={{ color: "#374151", fontSize: "0.875rem", lineHeight: 1.6 }}>{item}</li>
                    ))}
                  </ul>
                  {mod.contact && (
                    <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #E5EBF5" }}>
                      <p style={{ fontSize: "0.82rem", color: "#374151", marginBottom: 4 }}>
                        Registratie via: <a href={`mailto:${mod.contact.email}`} style={{ color: "#2B3990", fontWeight: 700 }}>{mod.contact.email}</a>
                      </p>
                      <p style={{ fontSize: "0.82rem", color: "#374151" }}>
                        Voor vragen kunt u bellen op <strong>{mod.contact.phone}</strong>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
