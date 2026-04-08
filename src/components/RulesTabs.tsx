"use client";

import { useState } from "react";

const TABS = [
  { id: "rules", label: "Rules and Regulations" },
  { id: "practice", label: "Practice Monitoring" },
  { id: "bylaws", label: "By-Laws and Decrees" },
  { id: "tools", label: "Tools And Examples" },
  { id: "education", label: "Professional Education Program" },
  { id: "legislations", label: "Legislations" },
];

export default function RulesTabs() {
  const [active, setActive] = useState("rules");

  return (
    <section style={{ background: "#f5f7fa", padding: "72px 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 24, alignItems: "start" }}>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                style={{
                  textAlign: "left",
                  padding: "16px 20px",
                  background: "white",
                  border: active === tab.id ? "2px solid #2B3990" : "1px solid #E5EBF5",
                  borderRadius: 4,
                  fontSize: "0.92rem",
                  fontWeight: active === tab.id ? 700 : 400,
                  color: active === tab.id ? "#111827" : "#6B7280",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: active === tab.id ? "0 2px 8px rgba(43,57,144,0.08)" : "none",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div style={{
            background: "white",
            border: "1px solid #E5EBF5",
            borderRadius: 6,
            padding: "40px 44px",
            minHeight: 360,
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          }}>
            {active === "rules" && (
              <div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827", marginBottom: 16 }}>Rules and Regulations</h2>
                <a href="#" style={{ color: "#0075BE", fontSize: "0.92rem", textDecoration: "none", display: "block", marginBottom: 28 }}>
                  Introduction about Rules and Regulations
                </a>
                <p style={{ fontWeight: 700, color: "#111827", fontSize: "0.9rem", marginBottom: 12 }}>Downloads</p>
                <a href="#" style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  border: "1px solid #D1D5DB",
                  borderRadius: 4,
                  color: "#374151",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  background: "white",
                }}>
                  PDF Huishoudelijk Regelement
                </a>
              </div>
            )}
            {active === "practice" && (
              <div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827", marginBottom: 20 }}>Practice Monitoring</h2>
                <p style={{ color: "#6B7280", fontSize: "0.92rem", lineHeight: 1.8 }}>Content coming soon.</p>
              </div>
            )}
            {active === "bylaws" && (
              <div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827", marginBottom: 16 }}>By-Laws and Decrees</h2>
                <a href="#" style={{ color: "#0075BE", fontSize: "0.92rem", textDecoration: "none", display: "block", marginBottom: 28 }}>
                  Download our By-laws document
                </a>
                <p style={{ fontWeight: 700, color: "#111827", fontSize: "0.9rem", marginBottom: 12 }}>Downloads</p>
                <a href="#" style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  border: "1px solid #D1D5DB",
                  borderRadius: 4,
                  color: "#374151",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  background: "white",
                }}>
                  PDF Statuten SUVA met Handtekening en Zegels
                </a>
              </div>
            )}
            {active === "tools" && (
              <div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827", marginBottom: 20 }}>Tools And Examples</h2>
                <p style={{ color: "#6B7280", fontSize: "0.92rem", lineHeight: 1.8 }}>Content coming soon.</p>
              </div>
            )}
            {active === "education" && (
              <div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827", marginBottom: 20 }}>Professional Education Program</h2>
                <p style={{ color: "#6B7280", fontSize: "0.92rem", lineHeight: 1.8 }}>Content coming soon.</p>
              </div>
            )}
            {active === "legislations" && (
              <div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827", marginBottom: 20 }}>Legislations</h2>
                <a href="#" style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  border: "1px solid #D1D5DB",
                  borderRadius: 4,
                  color: "#374151",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  background: "white",
                }}>
                  Law of <strong style={{ color: "#2B3990" }}>Suriname Chartered Accountants Institute</strong>
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
