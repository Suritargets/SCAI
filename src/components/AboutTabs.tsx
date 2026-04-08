"use client";

import { useState } from "react";

const TABS = [
  { id: "about", label: "About us" },
  { id: "committees", label: "Committees" },
  { id: "executive-board", label: "Executive Board" },
];

const EXECUTIVE_BOARD = [
  { lastName: "Tjong A Hung", firstName: "Marguerite", role: "Chairman/president" },
  { lastName: "Lutchman", firstName: "Michael", role: "Vice president" },
  { lastName: "Trott", firstName: "Susan", role: "Secretary" },
  { lastName: "Girjasing", firstName: "Hans", role: "Treasurer" },
  { lastName: "Kortram", firstName: "Jasna", role: "Member" },
  { lastName: "Ferrier", firstName: "Robin", role: "Member" },
  { lastName: "Draaijer", firstName: "Rachel", role: "Member" },
];

export default function AboutTabs() {
  const [active, setActive] = useState("executive-board");

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
                  background: active === tab.id ? "white" : "white",
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

            {/* About us */}
            {active === "about" && (
              <div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827", marginBottom: 24 }}>About SCAI</h2>
                {[
                  "The Suriname Institute of Chartered Accountants (SCAI) is a non profit organization in Suriname that aims to serve the public interest by advancing the accountancy profession in accordance with international standards and best practices.",
                  "Since its establishment in 2007, SCAI has been committed to advancing the institute through developing professional relationships with the Netherlands Institute of Chartered Accountants (NBA), becoming an associate member of the Institute of Chartered Accountants of the Caribbean (ICAC) and taking steps into becoming a member of the International Federation of Accountants (IFAC).",
                  "In addition, international developments such as the development towards International Financial Reporting Standards and more stringent and transparent accountancy guidelines and developments within Suriname such as the new law \"Wet Toezicht Bank- en Kredietwezen\", will propel the accountancy profession into further advancement.",
                  "Amidst these developments, SCAI functions as a central actor and driving force within the accountancy field in Suriname. In order to fulfill its leading role in stimulating further professionalization within the accountancy field, SCAI aims to enhance its institutional strength and capacity.",
                  "As part of enhancing the institution's long-term sustainability, SCAI has developed a strategic plan. The strategic plan is part of the broader objective of SCAI to improve the skills standards in accounting and financial management within small and medium enterprises in Suriname.",
                  "Key aspects of this strategic plan, are to offer SCAI technical assistance to strengthen and develop SCAI into a Center of Excellence that offers training, advice and guidance to the finance and accounting community within the private, government and education sectors of Suriname.",
                  "The development of this strategic plan occurred in close collaboration with the board of SCAI, SCAI staff and SCAI Committee members. Over several meetings and workshops, key elements of SUVA's strategy have been developed such as: situational analysis, vision, mission, strategic objectives, business goals and key actions.",
                ].map((para, i) => (
                  <p key={i} style={{ color: "#4B5563", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: 16 }}>
                    {para}
                  </p>
                ))}
              </div>
            )}

            {/* Committees */}
            {active === "committees" && (
              <div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827", marginBottom: 24 }}>Committees</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Professional Practice Department (PPD) Committee",
                    "Public Relations (PR) Committee",
                    "Education Project",
                    "Uitzendbureau (PUM) Committee",
                    "International Federation of Accountants (IFAC) Committee",
                    "Membership Committee",
                    "Kantorenoverleg",
                  ].map((name, i) => (
                    <div key={i} style={{
                      padding: "12px 16px",
                      borderBottom: "1px solid #E5EBF5",
                      color: "#0075BE",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    }}>
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Executive Board */}
            {active === "executive-board" && (
              <div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#111827", marginBottom: 24 }}>Executive Board</h2>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                  <tbody>
                    {EXECUTIVE_BOARD.map((member, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid #E5EBF5" }}>
                        <td style={{ padding: "12px 16px", color: "#0075BE", fontWeight: 500, width: "33%" }}>
                          {member.lastName}
                        </td>
                        <td style={{ padding: "12px 16px", color: "#374151", width: "33%" }}>
                          {member.firstName}
                        </td>
                        <td style={{ padding: "12px 16px", color: member.role === "Member" ? "#E07B00" : "#374151", width: "34%", fontWeight: member.role === "Member" ? 500 : 400 }}>
                          {member.role}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
