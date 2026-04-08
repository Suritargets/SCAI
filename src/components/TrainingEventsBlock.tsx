"use client";

import { useState } from "react";
import Link from "next/link";
import { TRAINING_EVENTS, JOB_POSTS } from "@/lib/constants";

export default function TrainingEventsBlock() {
  const [index, setIndex] = useState(0);
  const total = TRAINING_EVENTS.length;
  const current = TRAINING_EVENTS[index];

  return (
    <section style={{ background: "white", padding: "72px 0", borderTop: "1px solid #E5EBF5" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>

          {/* ── Training & Events ── */}
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2B3990", marginBottom: 28 }}>
              Training and Events
            </h2>

            {total === 0 ? (
              <p style={{ color: "#9CA3AF", fontSize: "0.95rem" }}>No posts found!</p>
            ) : (
              <>
                <div style={{
                  borderRadius: 8, overflow: "hidden",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.09)",
                  border: "1px solid #E5EBF5",
                }}>
                  {/* Image */}
                  <div style={{
                    height: 220, overflow: "hidden",
                    backgroundImage: `url('${current.image}')`,
                    backgroundSize: "210%",
                    backgroundPosition: "48% 32%",
                    position: "relative",
                  }}>
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(145deg, rgba(43,57,144,0.55), rgba(0,174,239,0.45))",
                    }} />
                    <div style={{
                      position: "absolute", top: 16, left: 16,
                      background: "#00AEEF", color: "white",
                      fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
                      textTransform: "uppercase", padding: "4px 10px", borderRadius: 2,
                    }}>
                      {current.category}
                    </div>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: "20px 24px 24px", background: "#f9fafb" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: 10, lineHeight: 1.4 }}>
                      {current.title}
                    </h3>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 14 }}>
                      <span style={{ fontSize: "0.78rem", color: "#6B7280" }}>📅 {current.date}</span>
                      <span style={{ color: "#D1D5DB" }}>·</span>
                      <span style={{ fontSize: "0.78rem", color: "#6B7280" }}>💬 No Comments</span>
                    </div>
                    <Link href={`/training/${current.slug}`} style={{
                      display: "inline-block", padding: "9px 22px",
                      background: "#2B3990", color: "white",
                      fontWeight: 600, fontSize: "0.82rem",
                      textDecoration: "none", borderRadius: 4,
                    }}>
                      Read More
                    </Link>
                  </div>
                </div>

                {/* Carousel arrows */}
                {total > 1 && (
                  <div style={{ display: "flex", gap: 12, marginTop: 16, alignItems: "center" }}>
                    <button
                      onClick={() => setIndex((index - 1 + total) % total)}
                      style={{
                        width: 36, height: 36, borderRadius: "50%", border: "1px solid #D1D5DB",
                        background: "white", cursor: "pointer", fontSize: "1rem", color: "#374151",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>‹</button>
                    <span style={{ fontSize: "0.8rem", color: "#9CA3AF" }}>{index + 1} / {total}</span>
                    <button
                      onClick={() => setIndex((index + 1) % total)}
                      style={{
                        width: 36, height: 36, borderRadius: "50%", border: "1px solid #D1D5DB",
                        background: "white", cursor: "pointer", fontSize: "1rem", color: "#374151",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>›</button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* ── Job Board ── */}
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2B3990", marginBottom: 28 }}>
              Job Board
            </h2>

            {JOB_POSTS.length === 0 ? (
              <p style={{ color: "#9CA3AF", fontSize: "0.95rem" }}>No post found!</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {JOB_POSTS.map((job, i) => (
                  <div key={i} style={{
                    background: "#f9fafb", border: "1px solid #E5EBF5",
                    borderLeft: "4px solid #2B3990", borderRadius: 6, padding: "20px 24px",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                      <div>
                        <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: 6 }}>{job.title}</h3>
                        <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
                          <span style={{ fontSize: "0.75rem", color: "#6B7280" }}>📅 {job.date}</span>
                          <span style={{ fontSize: "0.75rem", background: "#EBF5FD", color: "#0075BE", padding: "1px 8px", borderRadius: 2, fontWeight: 600 }}>{job.type}</span>
                          <span style={{ fontSize: "0.75rem", color: "#6B7280" }}>📍 {job.location}</span>
                        </div>
                        <p style={{ fontSize: "0.85rem", color: "#4B5563", lineHeight: 1.6, marginBottom: 12 }}>{job.excerpt}</p>
                      </div>
                    </div>
                    <Link href={`/jobs/${job.slug}`} style={{
                      display: "inline-block", padding: "8px 20px",
                      background: "#2B3990", color: "white",
                      fontWeight: 600, fontSize: "0.78rem",
                      textDecoration: "none", borderRadius: 4,
                    }}>
                      Read More
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
