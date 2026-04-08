"use client";

import React, { useState } from "react";

const ITEMS: { title: string; content: React.ReactNode }[] = [
  {
    title: "Revenue and cash receipts: Common Frauds and Internal Controls",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <p style={{ fontWeight: 700, color: "#111827", marginBottom: 8, fontSize: "0.9rem" }}>Key Topics</p>
          <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>
            {["Traditional revenue system","Retail revenue cycle","Manufacturing revenue cycle","Service revenue cycle","Accounts receivable and billing","Cash receipts","Revenue frauds and fraudulent financial reporting"].map((t, i) => (
              <li key={i} style={{ color: "#4B5563", fontSize: "0.875rem" }}>{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontWeight: 700, color: "#111827", marginBottom: 8, fontSize: "0.9rem" }}>Who Will Benefit</p>
          <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>
            {["Auditors","Practitioners","All levels of CPA-professionals"].map((t, i) => (
              <li key={i} style={{ color: "#4B5563", fontSize: "0.875rem" }}>{t}</li>
            ))}
          </ul>
        </div>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {[["Duration", "4 hours"], ["Language", "English"], ["Level", "Basic"]].map(([label, val]) => (
            <div key={label}>
              <span style={{ fontWeight: 700, color: "#111827", fontSize: "0.875rem" }}>{label}: </span>
              <span style={{ color: "#4B5563", fontSize: "0.875rem" }}>{val}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Risk Management & Information Systems",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <p style={{ fontWeight: 700, color: "#111827", marginBottom: 8, fontSize: "0.9rem" }}>Key Topics</p>
          <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>
            {["Ethical and public interest aspects of risk","Information systems","Collection and use of information"].map((t, i) => (
              <li key={i} style={{ color: "#4B5563", fontSize: "0.875rem" }}>{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontWeight: 700, color: "#111827", marginBottom: 8, fontSize: "0.9rem" }}>Who Will Benefit</p>
          <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>
            {["Global accountants and finance professionals","Management accounting professionals","CPAs in public practice","Business leaders","Strategic advisers"].map((t, i) => (
              <li key={i} style={{ color: "#4B5563", fontSize: "0.875rem" }}>{t}</li>
            ))}
          </ul>
        </div>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {[["Duration", "1 hour"], ["Language", "English"], ["Level", "Basic"]].map(([label, val]) => (
            <div key={label}>
              <span style={{ fontWeight: 700, color: "#111827", fontSize: "0.875rem" }}>{label}: </span>
              <span style={{ color: "#4B5563", fontSize: "0.875rem" }}>{val}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Forensic Accounting Investigative practices",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <p style={{ fontWeight: 700, color: "#111827", marginBottom: 8, fontSize: "0.9rem" }}>Key Topics</p>
          <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              "Some of the specific approaches a forensic accountant should take in a fraud investigation.",
              "The seven investigative techniques, the fraud triangle, and investigative pitfalls are discussed.",
              "Analytical procedures are explained including the tracing of cash and assets, financial statement analysis, and insider training analysis.",
            ].map((t, i) => (
              <li key={i} style={{ color: "#4B5563", fontSize: "0.875rem" }}>{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontWeight: 700, color: "#111827", marginBottom: 8, fontSize: "0.9rem" }}>Who Will Benefit</p>
          <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>
            {["Individuals looking to expand their knowledge of forensic accounting"].map((t, i) => (
              <li key={i} style={{ color: "#4B5563", fontSize: "0.875rem" }}>{t}</li>
            ))}
          </ul>
        </div>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {[["Duration", "1 hour"], ["Language", "English"], ["Level", "Basic"]].map(([label, val]) => (
            <div key={label}>
              <span style={{ fontWeight: 700, color: "#111827", fontSize: "0.875rem" }}>{label}: </span>
              <span style={{ color: "#4B5563", fontSize: "0.875rem" }}>{val}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Quality Assurance/A Firm's System of Quality Control",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <p style={{ fontWeight: 700, color: "#111827", marginBottom: 8, fontSize: "0.9rem" }}>Key Topics</p>
          <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>
            {["Management techniques for efficiency and quality","Business process improvement"].map((t, i) => (
              <li key={i} style={{ color: "#4B5563", fontSize: "0.875rem" }}>{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontWeight: 700, color: "#111827", marginBottom: 8, fontSize: "0.9rem" }}>Who Will Benefit</p>
          <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>
            {["Global accounting and finance professionals","Management accounting professionals","Internal auditors","CPAs in public practice","Supply chain finance professionals","QA-managers"].map((t, i) => (
              <li key={i} style={{ color: "#4B5563", fontSize: "0.875rem" }}>{t}</li>
            ))}
          </ul>
        </div>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {[["Duration", "1 hour"], ["Language", "English"], ["Level", "Intermediate"]].map(([label, val]) => (
            <div key={label}>
              <span style={{ fontWeight: 700, color: "#111827", fontSize: "0.875rem" }}>{label}: </span>
              <span style={{ color: "#4B5563", fontSize: "0.875rem" }}>{val}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Developing Your Digital Mindset",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <p style={{ color: "#4B5563", fontSize: "0.875rem", lineHeight: 1.75, margin: 0 }}>
          This course covers concepts related to agility, constant learning, thriving in ambiguity, curiosity and innovation.
        </p>
        <div>
          <p style={{ fontWeight: 700, color: "#111827", marginBottom: 8, fontSize: "0.9rem" }}>Key Topics</p>
          <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>
            {["Constant learning","Agility","Failing fast","Creativity, innovation, and exploration","Change management","Digital technologies","Business partnering"].map((t, i) => (
              <li key={i} style={{ color: "#4B5563", fontSize: "0.875rem" }}>{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontWeight: 700, color: "#111827", marginBottom: 8, fontSize: "0.9rem" }}>Who Will Benefit</p>
          <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>
            {["Accounting and Finance professionals"].map((t, i) => (
              <li key={i} style={{ color: "#4B5563", fontSize: "0.875rem" }}>{t}</li>
            ))}
          </ul>
        </div>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {[["Duration", "4 hours"], ["Language", "English"], ["Level", "Basic"]].map(([label, val]) => (
            <div key={label}>
              <span style={{ fontWeight: 700, color: "#111827", fontSize: "0.875rem" }}>{label}: </span>
              <span style={{ color: "#4B5563", fontSize: "0.875rem" }}>{val}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function TrainingAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: "white", padding: "72px 0" }}>
      <div className="container">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {ITEMS.map((item, i) => (
              <div
                key={i}
                style={{
                  border: open === i ? "2px solid #111827" : "1px solid #E5EBF5",
                  borderRadius: 6,
                  marginBottom: 8,
                  overflow: "hidden",
                  background: "white",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 24px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: 16,
                  }}
                >
                  <span style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#111827",
                    lineHeight: 1.4,
                  }}>
                    {item.title}
                  </span>
                  <span style={{
                    fontSize: "1.4rem",
                    fontWeight: 300,
                    color: "#374151",
                    flexShrink: 0,
                    lineHeight: 1,
                    transform: open === i ? "rotate(45deg)" : "none",
                    transition: "transform 0.2s",
                    display: "inline-block",
                  }}>
                    +
                  </span>
                </button>
                {open === i && item.content && (
                  <div style={{ padding: "0 24px 24px" }}>
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
