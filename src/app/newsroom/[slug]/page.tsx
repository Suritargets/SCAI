import { notFound } from "next/navigation";
import Link from "next/link";
import { NEWS, C } from "@/lib/constants";

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = NEWS.find((n) => n.slug === params.slug);
  if (!article) return {};
  return { title: `${article.title} — SCAI`, description: article.excerpt };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = NEWS.find((n) => n.slug === params.slug);
  if (!article) notFound();

  return (
    <>
      {/* Page header */}
      <section className="hero-gradient" style={{ paddingTop: 130, paddingBottom: 60 }}>
        <div className="container">
          <div className="fade-up" style={{ maxWidth: 760 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: "#00AEEF" }} />
              <Link href="/newsroom" style={{ color: "#00AEEF", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>
                ← Newsroom
              </Link>
            </div>
            <span style={{ display: "inline-block", background: "rgba(0,174,239,0.15)", color: "#00AEEF", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 2, marginBottom: 16 }}>
              {article.category}
            </span>
            <h1 style={{ fontSize: "2.2rem", fontWeight: 700, color: "white", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
              {article.title}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", marginTop: 16 }}>{article.date}</p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section style={{ background: C.bg, padding: "72px 0" }}>
        <div className="container">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ color: C.textMuted, fontSize: "1.05rem", lineHeight: 1.85, fontWeight: 500, marginBottom: 32, color: C.text }}>
              {article.excerpt}
            </p>
            <div style={{ borderTop: "2px solid #00AEEF", width: 44, marginBottom: 32 }} />
            {article.content.split("\n\n").map((para, i) => (
              <p key={i} style={{ color: C.textMuted, fontSize: "0.97rem", lineHeight: 1.85, marginBottom: 24 }}>
                {para}
              </p>
            ))}

            <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid #E5EBF5", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <Link href="/newsroom" className="btn-outline" style={{ textDecoration: "none" }}>
                ← Back to Newsroom
              </Link>
              <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
                Contact SCAI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More articles */}
      <section style={{ background: C.bgAlt, padding: "60px 0" }}>
        <div className="container">
          <h3 style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 24 }}>More Articles</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {NEWS.filter((n) => n.slug !== article.slug).map((n, i) => (
              <Link key={i} href={`/newsroom/${n.slug}`} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                background: "white", borderRadius: 8, padding: "20px 24px",
                border: "1px solid #E5EBF5", borderLeft: "4px solid #00AEEF",
                textDecoration: "none", transition: "box-shadow 0.2s",
              }}>
                <div>
                  <span style={{ fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0075BE", background: "#EBF5FD", padding: "2px 8px", borderRadius: 2, marginRight: 10 }}>{n.category}</span>
                  <span style={{ fontSize: "0.78rem", color: "#9CA3AF" }}>{n.date}</span>
                  <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111827", marginTop: 6 }}>{n.title}</p>
                </div>
                <span style={{ color: "#00AEEF", fontSize: "1.2rem", flexShrink: 0, marginLeft: 16 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
