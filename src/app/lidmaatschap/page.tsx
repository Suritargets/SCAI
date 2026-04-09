"use client";

import { useState } from "react";
import Link from "next/link";
import { C, MEMBERS } from "@/lib/constants";

export default function LidmaatschapPage() {
  const [memberSearch, setMemberSearch] = useState("");

  return (
    <>
      <section className="hero-gradient" style={{ paddingTop: 130, paddingBottom: 60 }}>
        <div className="container">
          <div className="fade-up" style={{ maxWidth: 600 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: "#00AEEF" }} />
              <span style={{ color: "#00AEEF", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>Membership</span>
            </div>
            <h1 style={{ fontSize: "2.8rem", fontWeight: 700, color: "white", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Become an active member of <span style={{ color: "#00AEEF" }}>SCAI</span>
            </h1>
          </div>
        </div>
      </section>

      <section style={{ background: C.bgAlt, padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 20px" }}>
            <p style={{ color: C.textMuted, lineHeight: 1.75, fontSize: "0.95rem" }}>
              Membership is mandatory for all professional accountants who wish to practice
              publicly in Suriname.
            </p>
          </div>

          <div style={{ height: 40 }} />

          <div className="grid-3">
            {[
              {
                icon: "\u{1F393}", title: "Admission Requirements",
                items: ["Accounting degree from recognized university", "Passed CA program examinations", "Three years of practical experience", "Completed local education program"],
              },
              {
                icon: "\u{1F3C6}", title: "Membership Benefits", featured: true,
                items: ["Legal recognition as CA", "Access to CPD programs", "Network with professionals", "Access to international standards"],
              },
              {
                icon: "\u{1F4DC}", title: "CPD Requirements",
                items: ["Annual output monitoring", "Maintaining supporting documentation", "Submitting periodic declarations", "Learning plans with reflections"],
              },
            ].map((c, i) => (
              <div key={i} style={{
                background: c.featured ? "linear-gradient(145deg, #2B3990, #00AEEF)" : "white",
                borderRadius: 10,
                border: c.featured ? "none" : "1px solid #E5EBF5",
                padding: "36px 28px",
                boxShadow: c.featured ? "0 16px 48px rgba(43,57,144,0.25)" : "0 2px 12px rgba(43,57,144,0.06)",
                position: "relative",
                transform: c.featured ? "scale(1.04)" : "none",
                transition: "all 0.3s",
              }}>
                {c.featured && (
                  <div style={{
                    position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                    background: "#00AEEF", color: "white", fontSize: "0.62rem",
                    fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                    padding: "4px 18px", borderRadius: 20,
                    boxShadow: "0 2px 10px rgba(0,174,239,0.4)",
                  }}>
                    Most Popular
                  </div>
                )}
                <div style={{ fontSize: "1.8rem", marginBottom: 14 }}>{c.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 20, color: c.featured ? "white" : "#2B3990" }}>{c.title}</h3>
                <ul style={{ listStyle: "none" }}>
                  {c.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 11, fontSize: "0.875rem", color: c.featured ? "rgba(255,255,255,0.85)" : C.textMuted, lineHeight: 1.5 }}>
                      <span style={{ color: "#00AEEF", fontWeight: 800, flexShrink: 0, marginTop: 1 }}>{"\u2713"}</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  style={{
                    display: "block", marginTop: 24, width: "100%", padding: "12px",
                    background: c.featured ? "rgba(255,255,255,0.2)" : "transparent",
                    color: c.featured ? "white" : "#00AEEF",
                    border: c.featured ? "1px solid rgba(255,255,255,0.4)" : "2px solid #00AEEF",
                    borderRadius: 4, fontWeight: 700, fontSize: "0.75rem",
                    letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer",
                    transition: "all 0.25s", textDecoration: "none", textAlign: "center",
                  }}>
                  More Information
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member List */}
      <section style={{ background: "white", padding: "72px 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827", marginBottom: 4 }}>Registered Members</h2>
              <p style={{ color: "#9CA3AF", fontSize: "0.8rem" }}>{MEMBERS.length} members registered with SCAI</p>
            </div>
            <a
              href="/SCAI memberslist -  CA Register updated per 9 maart 2026 - website.pdf"
              download
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "10px 20px", background: "#2B3990", color: "white",
                fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em",
                textTransform: "uppercase", textDecoration: "none", borderRadius: 4,
                transition: "background 0.2s",
              }}
            >
              <span style={{ fontSize: "1rem" }}>⬇</span> Download PDF
            </a>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#9CA3AF", fontSize: "0.95rem" }}>🔍</span>
              <input
                className="search-input"
                type="text"
                placeholder="Search by name or organization..."
                value={memberSearch}
                onChange={e => setMemberSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Table — scrollable on small screens */}
          <div style={{ overflowX: "auto" }}>
            {/* Table header */}
            <div style={{ display: "grid", gridTemplateColumns: "40px 1fr 1fr 130px 180px 110px 130px", padding: "10px 16px", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9CA3AF", borderBottom: "2px solid #E5EBF5", minWidth: 860 }}>
              <span>#</span>
              <span>Name</span>
              <span>Organization</span>
              <span>Phone</span>
              <span>Email</span>
              <span>SCAI No.</span>
              <span>Reg. Date</span>
            </div>

            {/* Rows */}
            {MEMBERS
              .filter(m => {
                if (!memberSearch) return true;
                const q = memberSearch.toLowerCase();
                return `${m.firstName} ${m.name}`.toLowerCase().includes(q) || m.organization.toLowerCase().includes(q);
              })
              .map((m, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "40px 1fr 1fr 130px 180px 110px 130px", padding: "14px 16px", borderBottom: "1px solid #F3F4F6", alignItems: "center", minWidth: 860 }}>
                  <div style={{ fontSize: "0.78rem", color: "#9CA3AF" }}>{m.no}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.88rem", color: "#111827" }}>
                      {m.firstName} {m.name}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "#9CA3AF", marginTop: 2 }}>
                      {m.title}{m.title2 ? ` · ${m.title2}` : ""} · {m.gender === "F" ? "Female" : "Male"}
                    </div>
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#4B5563", paddingRight: 8 }}>
                    {m.organization || "—"}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#4B5563" }}>
                    {m.phone || "—"}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#4B5563", wordBreak: "break-all" }}>
                    {m.email ? <a href={`mailto:${m.email}`} style={{ color: "#0075BE", textDecoration: "none" }}>{m.email}</a> : "—"}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#0075BE", fontWeight: 600 }}>
                    {m.scaiNo}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>
                    {m.regDate}
                  </div>
                </div>
              ))}

            {MEMBERS.filter(m => {
              if (!memberSearch) return true;
              const q = memberSearch.toLowerCase();
              return `${m.firstName} ${m.name}`.toLowerCase().includes(q) || m.organization.toLowerCase().includes(q);
            }).length === 0 && (
              <div style={{ padding: "40px", textAlign: "center", color: "#9CA3AF" }}>
                No members found for &ldquo;{memberSearch}&rdquo;
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
