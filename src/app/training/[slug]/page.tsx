import { notFound } from "next/navigation";
import Link from "next/link";
import { TRAINING_EVENTS, C } from "@/lib/constants";

export function generateStaticParams() {
  return TRAINING_EVENTS.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = TRAINING_EVENTS.find((t) => t.slug === params.slug);
  if (!item) return {};
  return { title: `${item.title} — SCAI`, description: item.excerpt };
}

export default function TrainingPage({ params }: { params: { slug: string } }) {
  const item = TRAINING_EVENTS.find((t) => t.slug === params.slug);
  if (!item) notFound();

  return (
    <>
      <section className="hero-gradient" style={{ paddingTop: 130, paddingBottom: 60 }}>
        <div className="container">
          <div className="fade-up" style={{ maxWidth: 760 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: "#00AEEF" }} />
              <Link href="/#training" style={{ color: "#00AEEF", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>
                ← Training & Events
              </Link>
            </div>
            <span style={{ display: "inline-block", background: "rgba(0,174,239,0.15)", color: "#00AEEF", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 2, marginBottom: 16 }}>
              {item.category}
            </span>
            <h1 style={{ fontSize: "2.2rem", fontWeight: 700, color: "white", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
              {item.title}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", marginTop: 16 }}>📅 {item.date}</p>
          </div>
        </div>
      </section>

      <section style={{ background: C.bg, padding: "72px 0" }}>
        <div className="container">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ color: C.text, fontSize: "1.05rem", lineHeight: 1.85, fontWeight: 500, marginBottom: 32 }}>
              {item.excerpt}
            </p>
            <div style={{ borderTop: "2px solid #00AEEF", width: 44, marginBottom: 32 }} />
            {item.content.split("\n\n").map((para, i) => (
              <p key={i} style={{ color: C.textMuted, fontSize: "0.97rem", lineHeight: 1.85, marginBottom: 24, whiteSpace: "pre-line" }}>
                {para}
              </p>
            ))}

            <div style={{ background: "#EBF5FD", borderRadius: 8, padding: "24px 28px", marginTop: 32, marginBottom: 40, borderLeft: "4px solid #00AEEF" }}>
              <p style={{ fontSize: "0.9rem", color: "#0075BE", fontWeight: 600, marginBottom: 6 }}>Register or request more information:</p>
              <a href="mailto:info@scai.sr" style={{ color: "#2B3990", fontWeight: 700, fontSize: "0.95rem" }}>info@scai.sr</a>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <Link href="/" className="btn-outline" style={{ textDecoration: "none" }}>← Back to Home</Link>
              <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>Contact SCAI</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
