import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ background: "#0d1640", padding: "56px 0 28px" }}>
      <div className="container">
        <div className="grid-4" style={{ marginBottom: 44, gap: 36 }}>
          <div>
            <img src="/logo.png" alt="SCAI" style={{ height: 36, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)", marginBottom: 16 }} />
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.7 }}>
              The authority in Suriname that protects the accountancy profession and improves its quality.
            </p>
          </div>
          <div>
            <h4 style={{ color: "#00AEEF", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Navigation</h4>
            {NAV_LINKS.map(l => (
              <div key={l.href} style={{ marginBottom: 9 }}>
                <Link href={l.href} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.2s" }}>
                  {l.label}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <h4 style={{ color: "#00AEEF", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Contact</h4>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.75 }}>
              Tapanahonystraat 2<br />
              Paramaribo, Suriname<br /><br />
              <a href="tel:+5978955707" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>+597 895 5707</a><br />
              <a href="mailto:info@scai.sr" style={{ color: "#00AEEF", textDecoration: "none" }}>info@scai.sr</a>
            </p>
          </div>
          <div>
            <h4 style={{ color: "#00AEEF", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Become a Member</h4>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: 20 }}>
              Would you like to become a member of SCAI? Contact us for more information.
            </p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "0.7rem", padding: "10px 20px", textDecoration: "none" }}>
              Join SCAI
            </Link>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem" }}>
            &copy; {new Date().getFullYear()} SCAI &mdash; Suriname Chartered Accountants Institute. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Disclaimer", "SCAI Act"].map(l => (
              <a key={l} href="#" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
