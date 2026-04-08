import { C } from "@/lib/constants";

export const metadata = {
  title: "Contact — SCAI",
  description: "Get in touch with the Suriname Chartered Accountants Institute.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient" style={{ paddingTop: 130, paddingBottom: 60 }}>
        <div className="container">
          <div className="fade-up" style={{ maxWidth: 600 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: "#00AEEF" }} />
              <span style={{ color: "#00AEEF", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>Contact</span>
            </div>
            <h1 style={{ fontSize: "2.8rem", fontWeight: 700, color: "white", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Get in <span style={{ color: "#00AEEF" }}>touch</span>
            </h1>
          </div>
        </div>
      </section>

      <section style={{ background: C.bg, padding: "80px 0" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 56, alignItems: "start" }}>
            <div>
              <span className="tag">Information</span>
              <div className="accent-line" />
              <p style={{ color: C.textMuted, lineHeight: 1.75, fontSize: "0.95rem", marginBottom: 36 }}>
                Would you like more information about SCAI membership or do you have other questions?
                Feel free to get in touch with us.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                {[
                  { icon: "\u{1F4CD}", label: "Address", value: "Mr. Jagernath Lachmonstraat 158\nParamaribo, Suriname" },
                  { icon: "\u{1F4DE}", label: "Phone", value: "+597 895 5935 / +597 895 5707\n+597 421 466" },
                  { icon: "\u2709\uFE0F", label: "Email", value: "info@scai.sr" },
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 44, height: 44, background: "linear-gradient(135deg, #EBF5FD, #D6EEFF)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9CA3AF", fontWeight: 700, marginBottom: 3 }}>{c.label}</div>
                      <div style={{ fontSize: "0.9rem", color: C.text, lineHeight: 1.6, whiteSpace: "pre-line" }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 36 }}>
              <h3 style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2B3990", marginBottom: 24 }}>Send a Message</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div className="grid-2" style={{ gap: 14 }}>
                  <div><label>First Name</label><input type="text" placeholder="John" /></div>
                  <div><label>Last Name</label><input type="text" placeholder="Doe" /></div>
                </div>
                <div><label>Email Address</label><input type="email" placeholder="john@company.sr" /></div>
                <div><label>Subject</label><input type="text" placeholder="Membership information" /></div>
                <div><label>Message</label><textarea rows={4} placeholder="Your message..." style={{ resize: "vertical" }} /></div>
                <button className="btn-primary" style={{ padding: "14px" }}>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
